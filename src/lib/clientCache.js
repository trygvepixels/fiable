const PREFIX = "fiable-cache:";
const DEFAULT_MAX_AGE = 24 * 60 * 60 * 1000;
const DEFAULT_TIMEOUT = 2500;

export function readCachedJson(key, maxAgeMs = DEFAULT_MAX_AGE) {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (!raw) return null;

    const cached = JSON.parse(raw);
    if (!cached?.savedAt || Date.now() - cached.savedAt > maxAgeMs) return null;

    return cached.data ?? null;
  } catch {
    return null;
  }
}

export function writeCachedJson(key, data) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      PREFIX + key,
      JSON.stringify({ savedAt: Date.now(), data })
    );
  } catch {
    // Storage can fail in private mode or when quota is full. The live data still works.
  }
}

export async function fetchCachedJson(
  url,
  { key, fallback = null, timeoutMs = DEFAULT_TIMEOUT, maxAgeMs = DEFAULT_MAX_AGE } = {}
) {
  const cached = key ? readCachedJson(key, maxAgeMs) : null;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      cache: "force-cache",
      signal: controller.signal,
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Failed to fetch data");
    if (key) writeCachedJson(key, json);
    return json;
  } catch (error) {
    if (cached) return cached;
    if (fallback) return fallback;
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
