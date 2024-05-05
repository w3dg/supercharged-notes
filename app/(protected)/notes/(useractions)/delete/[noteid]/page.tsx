// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Route param [noteid] is forwarded to layout, page and others

import { deleteNote } from "@/app/actions/notes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/db";
import { currentUser } from "@clerk/nextjs/server";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";

// If the userId of the note is not the same as the currently logged in user,
// that is unauthorized access and user should be redirected.

const DeleteNotePage = async ({ params }: { params: { noteid: string } }) => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const noteToBeDeleted = await prisma.note.findFirst({
    where: {
      id: params.noteid,
    },
  });

  if (!noteToBeDeleted) {
    redirect("/notes");
  }

  if (noteToBeDeleted.userId !== user.id) {
    // Unauthorized, redirect them to notes homepage
    redirect("/notes");
  }

  const deleteNoteWithId = deleteNote.bind(null, params.noteid);

  return (
    <main className="flex flex-col gap-4 items-center p-4">
      <h2 className="text-2xl font-bold">
        <span className="text-red-500">Delete</span> Note? Are you sure?
      </h2>
      <Card className="shadow-lg w-10/12">
        <CardHeader>
          <CardTitle>{noteToBeDeleted.title}</CardTitle>
          <CardDescription>Last modified: {noteToBeDeleted.updatedAt.toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{noteToBeDeleted.content}</p>
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button variant={"outline"} asChild>
          <Link href={"/notes"}>Go back</Link>
        </Button>
        {/* <form action={deleteNoteWithId}>
          <Button variant={"destructive"} className="flex items-center">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </form> */}
        <DeleteButton action={deleteNoteWithId} />
      </div>
    </main>
  );
};
export default DeleteNotePage;
