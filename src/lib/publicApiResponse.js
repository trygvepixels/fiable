import { NextResponse } from "next/server";

export const PUBLIC_API_CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
};

export class PublicDataTimeoutError extends Error {
  constructor(label, timeoutMs) {
    super(`${label} timed out after ${timeoutMs}ms`);
    this.name = "PublicDataTimeoutError";
  }
}

export function withPublicDataTimeout(promise, label, timeoutMs = 2200) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new PublicDataTimeoutError(label, timeoutMs)), timeoutMs);
    }),
  ]);
}

export function publicJson(data, init = {}, req = null) {
  const hasAuthCookie = Boolean(req?.cookies?.get?.("token")?.value);

  return NextResponse.json(data, {
    ...init,
    headers: {
      ...(hasAuthCookie
        ? { "Cache-Control": "private, no-store" }
        : PUBLIC_API_CACHE_HEADERS),
      ...(init.headers || {}),
    },
  });
}
