// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Route param [noteid] is forwarded to layout, page and others

import { Button } from "@/components/ui/button";
import prisma from "@/prisma/db";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import EditForm from "./EditForm";

// If the userId of the note is not the same as the currently logged in user,
// that is unauthorized access and user should be redirected.

const EditNotePage = async ({ params }: { params: { noteid: string } }) => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const noteToBeEdited = await prisma.note.findFirst({
    where: {
      id: params.noteid,
    },
  });

  if (!noteToBeEdited) {
    redirect("/notes");
  }

  if (noteToBeEdited.userId !== user.id) {
    // Unauthorized, redirect them to notes homepage
    redirect("/notes");
  }

  // const deleteNoteWithId = deleteNote.bind(null, params.noteid);

  return (
    <main className="flex flex-col gap-4 items-center p-4">
      <h2 className="text-2xl font-bold">
        <span className="text-sky-500">Edit</span> Note
      </h2>
      <EditForm noteId={noteToBeEdited.id} title={noteToBeEdited.title} content={noteToBeEdited.content} />
      <Button variant={"link"} asChild>
        <Link href={"/notes"}>Go back to all notes</Link>
      </Button>
    </main>
  );
};
export default EditNotePage;
