import { NextRequest, NextResponse } from "next/server";

const baseUrl = "http://localhost:3000";

let isLogged = false;

export function middleware(request: NextRequest) {
  //let url = request.nextUrl.clone();
  if (!isLogged) {
    return NextResponse.redirect(baseUrl + "/login");
  }
  return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!_next/static|_next/image|favicon.ico|login).*)',
    ],
  }