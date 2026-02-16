import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

export const config = {
  matcher: ["/", "/account/:path*", "/api/:path*", "/users"],
};
// Added /users so this route is protected by AuthKit middleware.
