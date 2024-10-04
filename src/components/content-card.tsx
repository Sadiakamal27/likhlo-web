import { Card } from "@/components/ui/card";
import { ContentItem } from "@/components/content-item";
import { FiArrowUpRight } from "react-icons/fi";
import { books } from "@/app/data";

export default function ContentCard() {
  return (
    <Card className="flex bg-transparent mt-4 flex-col gap-2 w-full rounded-2xl p-2">
      {books[0].content.map((chapter) => (
        <>
          <ContentItem size="chapter">
            <p>{chapter.chapterTitle}</p>
            <FiArrowUpRight className="w-4 h-4" />
          </ContentItem>
          {chapter.topics.map((topic) => (
            <>
              <ContentItem variant="secondary" size="topic">
                <p>{topic.topicTitle}</p>
                <FiArrowUpRight className="w-4 h-4" />
              </ContentItem>
              {topic.subtopic.map((topic) => (
                <ContentItem variant="ghost" size="subtopic">
                  <p>{topic.subtopicTitle}</p>
                  <FiArrowUpRight className="w-4 h-4" />
                </ContentItem>
              ))}
            </>
          ))}
        </>
      ))}
    </Card>
  );
}
