export function getSafeImageUrl(url?: string | null, fallback = "/placeholder.svg") {
  if (!url) return fallback;
  try {
    const parsed = new URL(url); // throws if no protocol/invalid
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return url;
    }
    return fallback;
  } catch {
    return fallback;
  }
}