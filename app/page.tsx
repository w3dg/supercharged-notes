import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import notesSVG from "./undraw_taking_notes_re_bnaf.svg";

export default function Home() {
  return (
    <main className="flex text-center flex-col items-center gap-8 p-4">
      <h1 className="text-4xl font-bold">Own your notes.</h1>
      <p className="text-muted-foreground max-w-[75ch]">
        Feel free to take notes, create todos, and manage your tasks while we make sure its secure and safe and
        accessible only to you.
      </p>
      <SignedOut>
        <SignInButton>
          <Button size={"lg"}>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/notes" className="border py-2 px-4 border-neutral-400 rounded-lg bg-neutral-800 text-white">
          Go to Notes
        </Link>
      </SignedIn>
      <Image className="mt-16" src={notesSVG} alt="Notes Illustration" />
    </main>
  );
}
