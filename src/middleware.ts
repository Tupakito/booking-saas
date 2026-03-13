import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (req.nextUrl.pathname.startsWith("/app")) {
          return token !== null;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/app/:path*"],
};