import { Card } from "@/components/ui/card";
import { ContentBlock } from "./content-block";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function ContentEditor({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div>Description: hello</div>
      <Card className="flex mt-4 flex-col gap-2 w-full rounded-2xl p-2">
        <div className="flex gap-2 justify-end">
          <ContentBlock className="w-full flex justify-between">
            <p>Chapter 1</p>
            <FiArrowUpRight className="w-4 h-4" />
          </ContentBlock>
          <Button variant="outline" size="icon">
            <FiPlus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 justify-end">
          <ContentBlock
            className="w-11/12  flex  justify-between"
            variant="ghost"
            size="topic"
          >
            <p>Topic 1</p>
            <FiArrowUpRight className="w-4 h-4" />
          </ContentBlock>
          <Button variant="ghost" size="icon">
            <FiPlus className="h-4 w-4" />
          </Button>
        </div>{" "}
      </Card>
      <div>Contents</div>
    </div>
  );
}
