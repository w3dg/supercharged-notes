import { z } from "zod";

export const NoteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export type NoteSchema = z.infer<typeof NoteSchema>;
