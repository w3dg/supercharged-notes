import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (!userId) {
    // Query DB for user specific information or display assets only to signed in users
    console.log("User is not signed in");
    redirect("/");
  }

  return <>{children}</>;
};
export default ProtectedLayout;
