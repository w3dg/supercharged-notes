import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  // matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],

  // The following matcher is from https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher with the last two
  // from before, instead of Clerk's matcher, seems to break randomly
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/", "/(api|trpc)(.*)"],
};
