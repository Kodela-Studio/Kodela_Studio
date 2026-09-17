const isLocalDevelopment =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export function netlifyImage(src, width, quality = 78) {
  if (isLocalDevelopment) return src;

  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export function netlifySrcSet(src, widths = [480, 768, 1200, 1600], quality = 78) {
  if (isLocalDevelopment) return undefined;

  return widths.map((width) => `${netlifyImage(src, width, quality)} ${width}w`).join(", ");
}
