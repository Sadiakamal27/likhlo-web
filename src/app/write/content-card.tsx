import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { ContentItem } from "./content-item";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";

export default function ContentCard() {
  return (
    <Card className="flex mt-4 flex-col gap-2 w-full rounded-2xl p-2">
      <div className="flex gap-2 justify-end">
        <ContentItem>
          <p>Chapter 1</p>
          <FiArrowUpRight className="w-4 h-4" />
        </ContentItem>
        <Button variant="outline" size="icon">
          <FiPlus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-2 justify-end">
        <ContentItem variant="ghost" size="topic">
          <p>Topic 1</p>
          <FiArrowUpRight className="w-4 h-4" />
        </ContentItem>
        <Button variant="ghost" size="icon">
          <FiPlus className="h-4 w-4" />
        </Button>
      </div>{" "}
      <div className="flex gap-2 justify-end">
        <ContentItem variant="ghost" size="subtopic">
          <p>Topic 1</p>
          <FiArrowUpRight className="w-4 h-4" />
        </ContentItem>
        <Button variant="ghost" size="icon">
          <FiPlus className="h-4 w-4" />
        </Button>
      </div>{" "}
    </Card>
  );
}
