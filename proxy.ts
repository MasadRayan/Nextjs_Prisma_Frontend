import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtUtils } from "./lib/jwtUtils";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/news", "/about", "/contact", "/privacy-policy", "/terms-of-service", "/login", "/register"]; 
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const cookirStore = await cookies()

  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) : null;

  let userRole = null;

  if (!decodedToken) {
    cookirStore.delete("accessToken");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (decodedToken?.success && decodedToken.data) {
    userRole = (decodedToken?.data as JwtPayload).role
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

  // Authentication check
  if (!accessToken && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //Authorizartion check
  if (pathName.startsWith("/dashboard") && userRole !== "USER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  else if (pathName.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  else if (pathName.startsWith("/author-dashboard") && userRole !== "AUTHOR") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|\\.well-known|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|map)$).*)"
  ],
};
