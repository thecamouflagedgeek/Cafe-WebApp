import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {

      const { pathname } = req.nextUrl

      // Allow auth routes
      if (pathname.startsWith("/api/auth")) return true

      // Allow public routes
      if (pathname === "/login") return true
      if (pathname === "/") return true

      // Everything else requires login
      return !!token
    }
  }
})

export const config = {
  matcher: [
    "/owner/:path*",
    "/waiter/:path*",
    "/customer/:path*",
    "/api/:path*"
  ]
}
