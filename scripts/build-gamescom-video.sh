#!/usr/bin/env bash
# Erzeugt die ausgelieferten Videodateien aus dem Rohmitschnitt.
#
#   ./scripts/build-gamescom-video.sh
#
# Die Quelle liegt unter public/images/gamescom/og/ und ist weder in git noch
# im Docker-Image (siehe .gitignore/.dockerignore). Dieses Skript hält fest,
# wie aus ihr public/video/* entstanden ist — sonst wäre der Schritt nach dem
# nächsten Rechnerwechsel nicht mehr nachvollziehbar.
#
# Erzeugt:
#   public/video/geschichtenwelt.mp4        Walkthrough, H.264
#   public/video/geschichtenwelt.webm       derselbe, VP9 (kleiner)
#   public/video/geschichtenwelt-loop.mp4   Hero-Schleife, stumm
#   public/video/geschichtenwelt-loop.webm  dieselbe, VP9
#   public/images/gamescom/geschichtenwelt-poster.webp  Standbild
set -euo pipefail

cd "$(dirname "$0")/.."

SRC="public/images/gamescom/og/geschichtenwelt-original.mov"
OUT="public/video"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

command -v ffmpeg >/dev/null || { echo "Fehler: ffmpeg fehlt (sudo apt install ffmpeg)." >&2; exit 1; }
command -v magick >/dev/null || { echo "Fehler: ImageMagick (magick) fehlt." >&2; exit 1; }
[ -f "$SRC" ] || { echo "Fehler: $SRC fehlt — der Rohmitschnitt liegt nur lokal." >&2; exit 1; }
mkdir -p "$OUT"

# ---------------------------------------------------------------------------
# Der Schnitt.
#
# Zwischen Sekunde 42 und 50 stand die Aufnahme in der falschen Position: Statt
# nur des Telefons war die Entwickler-Übersicht samt Rahmenbeschriftung im Bild
# (deutlich zu sehen von 43,25 bis 47,25 s), danach wurde korrigiert.
#
# Kein `-c copy`: Bei 42 und 50 s liegt kein Keyframe, die nächsten sitzen bei
# 41,3/43,7 und 49,0/51,8 s. Stattdessen trim+concat auf dekodierten Bildern.
#
# Beide Schnittkanten fallen in Standbilder der Quelle (41,87–42,78 und
# 49,68–50,22 s), der Schnitt ist dadurch bildgenau und ohne Ruckler.
#
# Die Quelle hat eine stark variable Bildrate — 356 stts-Einträge, 46 % der
# Laufzeit sind gehaltene Bilder. `fps=30` NACH dem concat dehnt diese Pausen
# korrekt auf ein festes Raster. Vor dem concat oder als
# `setpts=N/FRAME_RATE/TB` würde es sie zusammenfalten und das Video liefe
# doppelt so schnell.
#
# Die Edit List der Quelle hat media_time 0 — Präsentations- und Medienzeit
# sind identisch, 42/50 s sind also wörtlich zu nehmen.
# ---------------------------------------------------------------------------
SCHNITT_VON=42
SCHNITT_BIS=50

GRAPH="[0:v]split=2[s0][s1];\
[s0]trim=start=0:end=${SCHNITT_VON},setpts=PTS-STARTPTS[a];\
[s1]trim=start=${SCHNITT_BIS},setpts=PTS-STARTPTS[b];\
[a][b]concat=n=2:v=1:a=0,fps=30,format=yuv420p[v]"

# Hero-Schleife: Ökosysteme → Zeitlinie → Geflecht, ohne tote Standzeit am Anfang.
LOOP="[0:v]trim=start=3.5:end=13.5,setpts=PTS-STARTPTS,fps=30,format=yuv420p[v]"

# Gemeinsame Argumente.
#
# -map_metadata -1  wirft das meta-Atom weg. Die Quelle trägt dort
#                   com.apple.quicktime.author=ReplayKitRecording und einen
#                   Aufnahme-Zeitstempel; beides gehört nicht in eine
#                   öffentliche Datei.
# -an               die Quelle hat gar keine Tonspur.
# Farb-Flags        Die Aufnahme ist BT.709 mit begrenztem Wertebereich
#                   (video_full_range_flag=0). Ohne diese Angaben rät ein
#                   Abspieler, und das Weiß der Oberfläche kippt entweder ins
#                   Grelle oder ins Graue.
# Keine Skalierung  798 px ist die native Aufnahmebreite. Herunterrechnen
#                   verwäscht die Schrift in den Screenshots.
GEMEINSAM=(-an -map_metadata -1 -map_chapters -1 -pix_fmt yuv420p
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 -color_range tv
  -fps_mode cfr -r 30)

# -tune stillimage senkt das Deblocking; genau die harten Kanten, die bei einer
# Bildschirmaufnahme die Schrift ausmachen, bleiben dadurch stehen.
echo "→ geschichtenwelt.mp4"
ffmpeg -hide_banner -loglevel error -y -i "$SRC" -filter_complex "$GRAPH" -map "[v]" \
  "${GEMEINSAM[@]}" \
  -c:v libx264 -preset slow -tune stillimage -crf 20 -profile:v high \
  -g 150 -keyint_min 30 -video_track_timescale 30000 -movflags +faststart \
  "$OUT/geschichtenwelt.mp4"

# VP9 in zwei Durchgängen; -tune-content screen schaltet die Werkzeuge für
# Bildschirminhalte ein und ist bei dieser Quelle rund ein Fünftel wert.
VP9=(-c:v libvpx-vp9 -crf 30 -b:v 0 -tune-content screen -row-mt 1
  -tile-columns 1 -auto-alt-ref 1 -lag-in-frames 25 -g 240
  -deadline good -cpu-used 3 -threads 2)
echo "→ geschichtenwelt.webm (zwei Durchgänge, dauert)"
ffmpeg -hide_banner -loglevel error -y -i "$SRC" -filter_complex "$GRAPH" -map "[v]" \
  "${GEMEINSAM[@]}" "${VP9[@]}" -pass 1 -passlogfile "$TMP/vp9" -f webm /dev/null
ffmpeg -hide_banner -loglevel error -y -i "$SRC" -filter_complex "$GRAPH" -map "[v]" \
  "${GEMEINSAM[@]}" "${VP9[@]}" -pass 2 -passlogfile "$TMP/vp9" \
  "$OUT/geschichtenwelt.webm"

echo "→ geschichtenwelt-loop.mp4"
ffmpeg -hide_banner -loglevel error -y -i "$SRC" -filter_complex "$LOOP" -map "[v]" \
  "${GEMEINSAM[@]}" \
  -c:v libx264 -preset slow -tune stillimage -crf 26 -profile:v high -g 90 \
  -movflags +faststart "$OUT/geschichtenwelt-loop.mp4"

echo "→ geschichtenwelt-loop.webm"
ffmpeg -hide_banner -loglevel error -y -i "$SRC" -filter_complex "$LOOP" -map "[v]" \
  "${GEMEINSAM[@]}" \
  -c:v libvpx-vp9 -crf 36 -b:v 0 -tune-content screen -row-mt 1 -tile-columns 1 \
  -auto-alt-ref 1 -lag-in-frames 25 -g 300 -deadline good -cpu-used 4 -threads 2 \
  "$OUT/geschichtenwelt-loop.webm"

# Standbild bei 11 s: das Beziehungsgeflecht, das auffälligste Bild des
# Mitschnitts. select statt -ss, weil die Quelle Bilder um bis zu 2 s umsortiert
# und ein Eingangssprung dadurch beim falschen Bild landen kann.
echo "→ geschichtenwelt-poster.webp"
ffmpeg -hide_banner -loglevel error -y -i "$SRC" -vf "select='gte(t,11)'" \
  -frames:v 1 -fps_mode passthrough -pix_fmt rgb24 "$TMP/poster.png"
magick "$TMP/poster.png" -strip -quality 82 -define webp:method=6 \
  "public/images/gamescom/geschichtenwelt-poster.webp"

echo
printf '%-34s %8s  %s\n' DATEI GROESSE DAUER
for f in "$OUT"/geschichtenwelt*.mp4 "$OUT"/geschichtenwelt*.webm; do
  d=$(ffprobe -v error -select_streams v:0 -show_entries format=duration \
        -of default=nw=1:nk=1 "$f" 2>/dev/null || echo "?")
  printf '%-34s %7sK  %ss\n' "$(basename "$f")" "$(( $(stat -c%s "$f") / 1024 ))" "${d%.*}"
done
printf '%-34s %7sK\n' geschichtenwelt-poster.webp \
  "$(( $(stat -c%s public/images/gamescom/geschichtenwelt-poster.webp) / 1024 ))"
