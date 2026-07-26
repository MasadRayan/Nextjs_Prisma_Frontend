import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

// This function can be marked `async` if using `await` inside

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/news"]
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken ? jwt.decode(accessToken) as JwtPayload : null;

  let userRole = null;

  if (decodedToken) {
    userRole = decodedToken.role;
  }

  if (decodedToken && AUTH_ROUTES.includes(pathName)) {
    if (userRole === "USER") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    else if (userRole === "ADMIN") {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
    else if (userRole === "AUTHOR") {
        return NextResponse.redirect(new URL("/author-dashboard", request.url));
    } 
    else {
        return NextResponse.redirect(new URL("/", request.url));
    }
    
  }

  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathName === route || pathName.startsWith(route + "/")); 

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/dashboard/:path*",
    // "/admin-dashboard/:path*",
    // "/author-dashboard/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|\\.well-known|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|map)$).*)"
  ],
};
