// middleware.ts

import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtectedRoute && !refreshToken) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", req.nextUrl.pathname); // optional: redirect back after login
    return NextResponse.redirect(loginUrl, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
