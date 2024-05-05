import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  action: () => Promise<void>;
}

function DeleteButton({ action }: DeleteButtonProps) {
  return (
    <form action={action}>
      <Button variant={"destructive"} className="flex items-center">
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </Button>
    </form>
  );
}
export default DeleteButton;
