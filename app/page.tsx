import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import notesSVG from "./undraw_taking_notes_re_bnaf.svg";

export default function Home() {
  return (
    <main className="flex text-center flex-col items-center gap-8 p-4">
      <h1 className="text-4xl font-bold text-neutral-800">Supercharge your Todos</h1>
      <p className="text-neutral-500 max-w-[75ch]">
        With this authenticated todos, login with your preferred method and continue to work productively. We handle the
        hardwork for you.
      </p>

      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <Image className="mt-16" src={notesSVG} alt="Notes Illustration" />
    </main>
  );
}
