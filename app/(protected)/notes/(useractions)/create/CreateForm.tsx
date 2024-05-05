"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { NoteSchema } from "@/app/validators/note";
import { createNote } from "@/app/actions/notes";
import { toast } from "sonner";

interface CreateFormProps {
  userId: string;
}

const CreateForm = ({ userId }: CreateFormProps) => {
  const form = useForm<z.infer<typeof NoteSchema>>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  // https://brockherion.dev/blog/posts/using-react-hook-form-with-nextjs-13-server-actions/
  const onSubmit = async (data: z.infer<typeof NoteSchema>) => {
    await createNote(data, userId);
    form.reset();
    toast.success("Note created successfully!");
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
          <Button type="submit" size={"lg"} className="bg-green-600 text-white">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default CreateForm;
