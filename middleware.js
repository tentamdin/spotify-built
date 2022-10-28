import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // token will exist if a user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  console.log("Pathname", pathname, token);

  // allow the request if the following is true...
  // 1. its a request for next-auth session & provider fetching
  // 2. the token exists

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // redirect them to login if they dont have token and are requesting a protected route
  if (!token && pathname !== "/login") {
    console.log("Base url ", req.url);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/",
};
