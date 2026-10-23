#!/usr/bin/env bash
# Konvertiert die Prototyp-Screenshots aus public/images/prototype/og/
# nach public/images/prototype/ als WebP.
#
#   1. Originale (PNG/JPG) nach public/images/prototype/og/ legen.
#   2. public/images/prototype/og/mapping.txt pflegen — pro Zeile:
#        <dateiname>  <slug>  [<oben-abschneiden-px>]  [<unten-abschneiden-px>]
#   3. ./scripts/optimize-prototype-images.sh
#
# Erzeugt je Screen <slug>.webp (1080px, Lightbox) und <slug>-thumb.webp
# (480px, Schublade). Die Slugs müssen zu PROTOTYPE_SCREENS in
# src/lib/prototype.ts passen; die ausgegebenen Maße der großen Datei gehören
# als width/height in dieselbe Liste.
#
# Die Zuordnung steht bewusst ausschließlich in mapping.txt: Die Dateinamen der
# Exporte beschreiben Routen, die Slugs erzählen den Bogen der Schublade — in
# alphabetischer Reihenfolge fallen beide auseinander.
set -euo pipefail

cd "$(dirname "$0")/.."

SRC="public/images/prototype/og"
OUT="public/images/prototype"
MAP="$SRC/mapping.txt"
QUALITY=82

command -v magick >/dev/null || { echo "Fehler: ImageMagick (magick) fehlt." >&2; exit 1; }
[ -f "$MAP" ] || { echo "Fehler: $MAP fehlt — ohne Zuordnung wird nichts konvertiert." >&2; exit 1; }
mkdir -p "$OUT"

# Zuschnitt vor dem Skalieren, sonst verschiebt das Skalieren die Pixelzahlen.
# Oben schneidet die Figma-Rahmenbeschriftung weg, unten Bildteile, die nicht
# ausgeliefert werden sollen. +repage setzt den Versatz zurück, den -chop sonst
# in der Datei hinterlässt.
zuschnitt() {
  local oben="$1" unten="$2"
  printf -- '-chop 0x%s+0+0 +repage -gravity South -chop 0x%s+0+0 +repage -gravity North' \
    "$oben" "$unten"
}

# -strip wirft Farbprofil und EXIF aus den Screenshots; das sind je nach
# Exportweg einige Kilobyte, die im Browser niemand liest.
convert_one() {
  local src="$1" slug="$2" oben="${3:-0}" unten="${4:-0}"
  # Wortaufspaltung ist hier gewollt: zuschnitt() liefert mehrere Argumente.
  # shellcheck disable=SC2046
  magick "$src" $(zuschnitt "$oben" "$unten") -resize 1080x -strip \
    -quality "$QUALITY" -define webp:method=6 "$OUT/$slug.webp"
  # shellcheck disable=SC2046
  magick "$src" $(zuschnitt "$oben" "$unten") -resize 480x -strip \
    -quality "$QUALITY" -define webp:method=6 "$OUT/$slug-thumb.webp"

  printf '%-26s %-11s %5s KB   %4s KB (thumb)   ← %s\n' \
    "$slug" "$(magick identify -format '%wx%h' "$OUT/$slug.webp")" \
    "$(( $(stat -c%s "$OUT/$slug.webp") / 1024 ))" \
    "$(( $(stat -c%s "$OUT/$slug-thumb.webp") / 1024 ))" \
    "$(basename "$src")"
}

printf '%-26s %-11s %8s   %13s\n' "SLUG" "MASSE" "GROSS" "VORSCHAU"
count=0
while read -r file slug oben unten || [ -n "${file:-}" ]; do
  [ -z "${file:-}" ] && continue
  case "$file" in \#*) continue ;; esac
  [ -n "${slug:-}" ] || { echo "Fehler: kein Slug für $file in $MAP." >&2; exit 1; }
  [ -f "$SRC/$file" ] || { echo "Fehler: $SRC/$file fehlt." >&2; exit 1; }
  convert_one "$SRC/$file" "$slug" "${oben:-0}" "${unten:-0}"
  count=$((count + 1))
done < "$MAP"

echo
echo "$count Screens · ausgeliefert: $(du -sh --exclude=og "$OUT" | cut -f1) in $OUT"
