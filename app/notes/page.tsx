import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NotesHomePage = async () => {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (!userId) {
    // Query DB for user specific information or display assets only to signed in users
    console.log("User is not signed in");
    redirect("/");
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  return (
    <main className="px-6 py-4">
      <h1 className="text-2xl lg:text-4xl font-bold">
        <span className="text-neutral-500">Hi</span> {user?.firstName}
      </h1>
      <h2 className="text-muted-foreground text-lg lg:text-2xl">Welcome to Supercharged Notes user {user?.id}</h2>
    </main>
  );
};
export default NotesHomePage;
