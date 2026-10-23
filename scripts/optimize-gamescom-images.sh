#!/usr/bin/env bash
# Konvertiert die Screenshots der Geschichtenwelt aus public/images/gamescom/og/
# nach public/images/gamescom/ als WebP — Schwester von
# ./scripts/optimize-prototype-images.sh, gleiche Qualitätsstufen.
#
#   1. Originale (PNG/JPG) nach public/images/gamescom/og/ legen.
#   2. public/images/gamescom/og/mapping.txt pflegen — pro Zeile:
#        <dateiname>  <slug>
#   3. ./scripts/optimize-gamescom-images.sh
#
# Die Slugs müssen zu GAMESCOM_SCREENS in src/lib/gamescom.ts passen; die
# ausgegebenen Maße der großen Datei gehören als height in dieselbe Liste.
#
# Unterschied zum Prototyp-Skript: Dort wird auf 1080 px hochskaliert, hier
# begrenzt "806x>" nur nach oben. Die Exporte sind bereits 806 px breit, und
# Hochskalieren würde die Schrift in den Screenshots weich machen, ohne ein
# einziges Detail hinzuzugewinnen.
set -euo pipefail

cd "$(dirname "$0")/.."

SRC="public/images/gamescom/og"
OUT="public/images/gamescom"
MAP="$SRC/mapping.txt"
QUALITY=82
BREITE=806
THUMB=480

command -v magick >/dev/null || { echo "Fehler: ImageMagick (magick) fehlt." >&2; exit 1; }
[ -f "$MAP" ] || { echo "Fehler: $MAP fehlt — ohne Zuordnung wird nichts konvertiert." >&2; exit 1; }
mkdir -p "$OUT"

# -strip wirft Farbprofil und EXIF aus den Screenshots; das sind je nach
# Exportweg einige Kilobyte, die im Browser niemand liest.
convert_one() {
  local src="$1" slug="$2"
  magick "$src" -resize "${BREITE}x>" -strip \
    -quality "$QUALITY" -define webp:method=6 "$OUT/$slug.webp"
  magick "$src" -resize "${THUMB}x>" -strip \
    -quality "$QUALITY" -define webp:method=6 "$OUT/$slug-thumb.webp"

  printf '%-22s %-11s %5s KB   %4s KB (thumb)   ← %s\n' \
    "$slug" "$(magick identify -format '%wx%h' "$OUT/$slug.webp")" \
    "$(( $(stat -c%s "$OUT/$slug.webp") / 1024 ))" \
    "$(( $(stat -c%s "$OUT/$slug-thumb.webp") / 1024 ))" \
    "$(basename "$src")"
}

printf '%-22s %-11s %8s   %13s\n' "SLUG" "MASSE" "GROSS" "VORSCHAU"
count=0
while read -r file slug || [ -n "${file:-}" ]; do
  [ -z "${file:-}" ] && continue
  case "$file" in \#*) continue ;; esac
  [ -n "${slug:-}" ] || { echo "Fehler: kein Slug für $file in $MAP." >&2; exit 1; }
  [ -f "$SRC/$file" ] || { echo "Fehler: $SRC/$file fehlt." >&2; exit 1; }
  convert_one "$SRC/$file" "$slug"
  count=$((count + 1))
done < "$MAP"

echo
echo "$count Screens in $OUT"
