import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login"
  }
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/owner/:path*",
    "/waiter/:path*"
  ]
}

