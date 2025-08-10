#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   scripts/make_gif.sh INPUT_IMAGE [OUTPUT_GIF] [--step DEG=10] [--delay cs=6] [--size px=0] [--loops N=0]
# - step: rotation step in degrees per frame (smaller = smoother, bigger = fewer frames)
# - delay: centiseconds per frame (e.g., 6 => ~60 fps, 8 => ~50 fps, 10 => ~40 fps)
# - size: optional final square size (0 keeps natural size); image is padded to square before rotation
# - loops: 0 = infinite

if ! command -v magick >/dev/null 2>&1 && ! command -v convert >/dev/null 2>&1; then
  echo "Error: ImageMagick is required (magick/convert not found)." >&2
  exit 1
fi

# pick entrypoint
IM_CMD="magick"
if ! command -v magick >/dev/null 2>&1; then
  IM_CMD="convert"
fi

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 INPUT_IMAGE [OUTPUT_GIF] [--step DEG] [--delay cs] [--size px] [--loops N]" >&2
  exit 1
fi

INPUT_IMAGE="$1"; shift || true
OUTPUT_GIF=""
if [[ $# -gt 0 && "$1" != --* ]]; then
  OUTPUT_GIF="$1"; shift || true
fi

STEP_DEG=10
DELAY_CS=6
TARGET_SIZE=0
LOOPS=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --step)
      STEP_DEG="${2:-10}"; shift 2 ;;
    --delay)
      DELAY_CS="${2:-6}"; shift 2 ;;
    --size)
      TARGET_SIZE="${2:-0}"; shift 2 ;;
    --loops)
      LOOPS="${2:-0}"; shift 2 ;;
    *)
      echo "Unknown option: $1" >&2; exit 1 ;;
  esac
done

if [[ -z "$OUTPUT_GIF" ]]; then
  base_no_ext="$(basename -- "$INPUT_IMAGE")"
  base_no_ext="${base_no_ext%.*}"
  OUTPUT_GIF="${base_no_ext}_spin.gif"
fi

if [[ ! -f "$INPUT_IMAGE" ]]; then
  echo "Error: input image not found: $INPUT_IMAGE" >&2
  exit 1
fi

# Determine natural size
read -r W H < <(identify -format '%w %h' "$INPUT_IMAGE")
if [[ -z "${W:-}" || -z "${H:-}" ]]; then
  echo "Error: failed to identify input dimensions" >&2
  exit 1
fi

# Choose working square canvas; pad by 1.5x to avoid corner cropping during rotation
MAX_DIM=$(( W > H ? W : H ))
SQ=$(( (MAX_DIM * 3) / 2 ))

# Optionally normalize final output size
FINAL_SIZE="$TARGET_SIZE"
if [[ "$FINAL_SIZE" -le 0 ]]; then
  FINAL_SIZE="$MAX_DIM"
fi

# Make a temporary workspace for frames
WORK_DIR="$(mktemp -d)"
cleanup() { rm -rf "$WORK_DIR"; }
trap cleanup EXIT

# Prepare a padded base so rotations keep consistent canvas
PADDED="$WORK_DIR/padded.png"
$IM_CMD "$INPUT_IMAGE" -background none -gravity center -extent ${SQ}x${SQ} "$PADDED"

# Generate frames
angle=0
frame_idx=0
while (( angle < 360 )); do
  printf -v frame "%s/frame_%03d.png" "$WORK_DIR" "$frame_idx"
  $IM_CMD "$PADDED" -background none -gravity center -rotate "$angle" -extent ${SQ}x${SQ} -resize ${FINAL_SIZE}x${FINAL_SIZE} "$frame"
  angle=$(( angle + STEP_DEG ))
  frame_idx=$(( frame_idx + 1 ))
done

# Assemble GIF
$IM_CMD -delay "$DELAY_CS" -loop "$LOOPS" "$WORK_DIR"/frame_*.png -layers Optimize "$OUTPUT_GIF"

echo "Created: $OUTPUT_GIF"