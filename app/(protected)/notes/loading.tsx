import { Skeleton } from "@/components/ui/skeleton";

const NotesHomePage = async () => {
  return (
    <main className="px-6 py-4 flex flex-col gap-y-4">
      <div className="flex flex-col md:flex-row gap-2 lg:gap-0 justify-between">
        <div>
          <Skeleton className="w-48 h-8 rounded-md" />
          <Skeleton className="w-56 h-8 rounded-md mt-1" />
        </div>
        <Skeleton className="w-40 h-10 rounded-md" />
      </div>
      <section>
        <div className="grid grid-cols-1 w-full lg:w-10/12 mx-auto gap-y-8 mt-4">
          {Array.from({ length: 4 }, (_, i) => i).map((index) => {
            return <Skeleton key={index} className="w-full h-56 rounded-md" />;
          })}
        </div>
      </section>
    </main>
  );
};
export default NotesHomePage;
