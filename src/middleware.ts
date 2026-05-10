import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("supabase_user_logged_in")?.value;
  console.log("Middleware checking cookies on:", request.url);
  console.log("All cookies:", request.cookies.getAll());
  console.log("Found token:", token ? "YES" : "NO");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/deep-scan/:path*", "/archive/:path*", "/lab/:path*"],
};
