export function netlifyImage(src, width, quality = 78) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export function netlifySrcSet(src, widths = [480, 768, 1200, 1600], quality = 78) {
  return widths.map((width) => `${netlifyImage(src, width, quality)} ${width}w`).join(", ");
}
