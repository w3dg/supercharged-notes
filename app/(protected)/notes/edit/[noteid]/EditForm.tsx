"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { NoteSchema } from "@/app/validators/note";
import { editNote } from "@/app/actions/notes";
import { toast } from "sonner";
import { Save } from "lucide-react";

interface EditFormProps {
  noteId: string;
  title: string;
  content: string | null;
}

const EditForm = ({ noteId, title, content }: EditFormProps) => {
  const form = useForm<z.infer<typeof NoteSchema>>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      title: title,
      content: content || "",
    },
  });

  // https://brockherion.dev/blog/posts/using-react-hook-form-with-nextjs-13-server-actions/
  const onSubmit = async (data: z.infer<typeof NoteSchema>) => {
    await editNote(data, noteId);
    toast.success("Note edited successfully!");
  };

  return (
    <main className="flex-col flex gap-2 items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => onSubmit(data))} className="grid gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Once upon a time..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." rows={5} cols={30} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size={"lg"} className="bg-green-600 text-white inline-flex">
            <Save className="w-4 h-4 mr-2"></Save>
            Save Edits
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default EditForm;
