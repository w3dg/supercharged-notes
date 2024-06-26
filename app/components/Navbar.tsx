import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-4 items-center shadow-md">
      <span>
        <Link href={"/"}>
          <h2 className="text-lg font-bold text-slate-800">SuperchargedNotes</h2>
        </Link>
      </span>
      <SignedOut>
        <nav className="flex gap-2 items-center">
          <SignInButton>
            <Button size={"sm"} variant={"ghost"}>
              Sign in
            </Button>
          </SignInButton>
        </nav>
      </SignedOut>
      <SignedIn>
        <nav className="flex gap-2 items-center">
          <Button variant={"link"} asChild>
            <Link href={"/notes"}>Your notes</Link>
          </Button>
          <UserButton />
        </nav>
      </SignedIn>
    </div>
  );
};

export default Navbar;
