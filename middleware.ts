import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "public, max-age=86400, immutable");
  return res;
}

export const config = {
  matcher: "/_next/static/:path*",
};
