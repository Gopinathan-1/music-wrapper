import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const username = request.cookies.get("lastfm_username")?.value;

  if (!username) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/deep-scan/:path*", "/archive/:path*", "/lab/:path*"],
};
