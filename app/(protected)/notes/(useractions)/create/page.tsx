import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import CreateForm from "./CreateForm";

const CreateNewNotePage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="flex flex-col gap-4 items-center p-4">
      <h1 className="text-2xl lg:text-4xl font-bold">
        <span className="text-green-600">Create</span> a new Note
      </h1>

      <CreateForm userId={user.id}></CreateForm>

      <Button asChild variant={"link"} size={"lg"} className="text-muted-foreground">
        <Link href={"/notes"}>Go back to all notes</Link>
      </Button>
    </main>
  );
};
export default CreateNewNotePage;
