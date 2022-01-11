import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token should exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  //Allow th request if the following is true ...
  //if token exist

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //return to login if not loggin

  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
