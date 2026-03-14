```typescript
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoute = nextUrl.pathname.startsWith("/login") || 
                      nextUrl.pathname.startsWith("/register");
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");
  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");

  // Permettre les routes API auth
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  // Rediriger vers dashboard si déjà connecté sur login/register
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Protéger le dashboard
  if (isDashboardRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
```