import { FiEdit2, FiPlus, FiTrash } from "react-icons/fi";
import { books } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentCardList from "@/components/content-card-list";

export default function BookContent({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="text-foreground  flex flex-col gap-4 ">
        <h2 className="p-0 text-xl font-bold ">Description</h2>
        <p className="bg-transparent max-h-32 h-auto placeholder:text-foreground/30 w-full h-auto outline-none "></p>
        Vivamus a bibendum nisl. Sed et consequat ex, sit amet scelerisque nisi.
        Donec ut congue sapien.Vivamus a bibendum nisl. Sed et consequat ex, sit
        amet scelerisque nisi. Donec ut congue sapien.Vivamus a bibendum nisl.
        Sed et consequat ex, sit amet scelerisque nisi. Donec ut congue sapien.
      </div>
      <Separator className="my-6" />
      <div className="text-foreground">
        <div className="flex justify-between items-center ">
          <h2 className="p-0 m-0 h-full text-3xl font-bold ">Contents</h2>
          <div>
            <Button size="icon" variant="ghost">
              <FiPlus className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <FiEdit2 className="w-4 h-4" />
            </Button>
            <Button className="text-destructive" size="icon" variant="ghost">
              <FiTrash className="w-4 h-4" />
            </Button>
          </div>
        </div>{" "}
        <ContentCardList book={books[1]} />
      </div>
    </div>
  );
}
