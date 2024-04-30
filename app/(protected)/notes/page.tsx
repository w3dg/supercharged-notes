import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import dayjs from "dayjs";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/db";

import emptyNotesSVG from "./undraw_noted_re_c5wv.svg";
import Link from "next/link";

const NotesHomePage = async () => {
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const notes = await prisma.note.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  // Use `user` to render user details or create UI elements
  return (
    <main className="px-6 py-4 flex flex-col gap-y-4">
      <div className="flex flex-col md:flex-row gap-2 lg:gap-0 justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">
            <span className="text-neutral-500">Hi</span> {user.firstName}
          </h1>
          <h2 className="text-muted-foreground text-lg lg:text-xl">Welcome to Supercharged Notes</h2>
        </div>

        <Button asChild>
          <Link href={"/notes/create"}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Note
          </Link>
        </Button>
      </div>
      <section>
        {notes.length === 0 && (
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-3 items-center">
              <p className="text-lg">No new notes yet</p>
            </div>
            <Image src={emptyNotesSVG} alt="Empty Notes illustration" className="h-52"></Image>
          </div>
        )}

        {notes.length !== 0 && (
          <div className="grid grid-cols-1 w-full lg:w-10/12 mx-auto gap-y-8 mt-4">
            {notes.map((note) => {
              return (
                <Card key={note.id} className="shadow-lg">
                  <CardHeader>
                    <CardTitle>{note.title}</CardTitle>
                    {/* <CardDescription>Last modified: {note.updatedAt.toISOString()}</CardDescription> */}
                    <CardDescription>
                      Last modified: {note.updatedAt.toLocaleDateString() + " " + note.updatedAt.toLocaleTimeString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{note.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 items-center">
                    <Button
                      asChild
                      variant={"outline"}
                      className="flex items-center bg-sky-600 text-white hover:bg-sky-500 hover:text-white"
                    >
                      <Link href={`/notes/edit/${note.id}`}>
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit
                      </Link>
                    </Button>
                    <Button asChild variant={"destructive"} className="flex items-center">
                      <Link href={`/notes/delete/${note.id}`}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};
export default NotesHomePage;
