import { NextRequest, NextResponse } from "next/server";

const allowedRoute = ["/"]; // Add your protected routes here

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAllowedRoute = allowedRoute.includes(pathname);

  if (!isAllowedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};