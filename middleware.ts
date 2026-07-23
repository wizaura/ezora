import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  const isAuthPage = pathname.startsWith("/login");
  const isAdminPage = pathname.startsWith("/admin");

//   if (!token && isAdminPage) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

  if (token) {
    try {
      jwt.verify(token, JWT_SECRET);

      if (isAuthPage) {
        return NextResponse.redirect(
          new URL("/admin/dashboard", req.url)
        );
      }
    } catch {
    //   if (isAdminPage) {
    //     return NextResponse.redirect(
    //       new URL("/login", req.url)
    //     );
    //   }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};