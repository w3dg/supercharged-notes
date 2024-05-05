import { Skeleton } from "@/components/ui/skeleton";

const NotesHomePage = async () => {
  return (
    <main className="flex flex-col gap-4 items-center p-4">
      <h1 className="text-2xl lg:text-4xl font-bold">
        <Skeleton className="w-48 h-10 rounded-md" />
      </h1>

      <div className="grid gap-4">
        <Skeleton className="w-96 h-8 rounded-md" />
        <Skeleton className="w-96 h-10 rounded-md" />
        <Skeleton className="w-96 h-8 rounded-md" />
        <Skeleton className="w-96 h-32 rounded-md" />
      </div>

      <Skeleton className="w-20 h-10 rounded-md" />
      <Skeleton className="w-16 h-4 rounded-md mt-2" />
    </main>
  );
};

export default NotesHomePage;
