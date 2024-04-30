"use server";

import { NoteSchema } from "@/app/validators/note";
import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNote(data: NoteSchema, userId: string) {
  const newNote = { title: data.title, content: data.content, userId: userId };
  await prisma.note.create({
    data: newNote,
  });
  revalidatePath("/notes");
  redirect("/notes");
}

export async function editNote(data: NoteSchema, noteId: string) {
  // Edit the data for the note with the given noteId
  // and update the modified date
  await prisma.note.update({
    where: {
      id: noteId,
    },
    data: {
      title: data.title,
      content: data.content,
      updatedAt: new Date(),
    },
  });

  revalidatePath("/notes");
  redirect("/notes");
}

export async function deleteNote(noteId: string) {
  await prisma.note.delete({
    where: {
      id: noteId,
    },
  });

  revalidatePath("/notes");
  redirect("/notes");
}
