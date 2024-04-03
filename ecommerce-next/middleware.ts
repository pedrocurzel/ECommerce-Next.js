import { NextRequest, NextResponse } from "next/server";

const baseUrl = "http://localhost:3000";

export function middleware(request: NextRequest) {
    let url = request.nextUrl.clone();

    return NextResponse.redirect(baseUrl + "/about");
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
      '/((?!api|_next/static|_next/image|favicon.ico|about).*)',
    ],
  }