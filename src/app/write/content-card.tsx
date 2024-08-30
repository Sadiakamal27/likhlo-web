import { Card } from "@/components/ui/card";
import { ContentItem } from "@/components/content-item";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContentCard() {
  return (
    <Card className="flex bg-transparent mt-4 flex-col gap-2 w-full rounded-2xl p-2">
      {/* Chapter block*/}
      <ContentItem size="chapter">
        <p>Chapter 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
      {/* topic block*/}
      <ContentItem variant="ghost" size="topic">
        <p>Topic 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
      <ContentItem variant="ghost" size="topic">
        <p>Topic 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
      <ContentItem variant="ghost" size="topic">
        <p>Topic 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
      {/*subtopic block*/}
      <ContentItem variant="ghost" size="subtopic">
        <p>Topic 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
      <ContentItem variant="ghost" size="subtopic">
        <p>Topic 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
      <ContentItem variant="ghost" size="subtopic">
        <p>Topic 1</p>
        <FiArrowUpRight className="w-4 h-4" />
      </ContentItem>
    </Card>
  );
}
