import { FiEdit, FiEdit2, FiPlus, FiTrash } from "react-icons/fi";
import ContentCard from "./content-card";
import { Button } from "@/components/ui/button";

export default function ContentEditor({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="text-foreground">
        <h2 className="p-0 text-xl font-bold ">Description</h2>

        <textarea
          className="bg-background w-full h-auto outline-none "
          placeholder="Enter book description here..."
        />
      </div>
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
        <div>
          <ContentCard />
        </div>
      </div>
    </div>
  );
}
