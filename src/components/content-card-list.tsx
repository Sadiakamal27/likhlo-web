import { Card } from "@/components/ui/card";
import { ContentItem } from "@/components/content-item";
import { FiArrowUpRight } from "react-icons/fi";
import { Book } from "@/app/data";

export default function ContentCardList({ book }: { book: Book }) {
  return (
    <>
      {book.chapters?.map((chapter, index) => (
        <Card
          key={index}
          className="flex bg-transparent mt-4 flex-col gap-2 w-full rounded-2xl p-2"
        >
          <ContentItem size="chapter">
            <p>{chapter.chapterTitle}</p>
            <FiArrowUpRight className="w-4 h-4" />
          </ContentItem>
          {chapter.topics?.map((topic, index) => (
            <>
              <ContentItem key={index} variant="secondary" size="topic">
                <p>{topic.topicTitle}</p>
                <FiArrowUpRight className="w-4 h-4" />
              </ContentItem>
              {topic.subtopics?.map((subtopic, index) => (
                <ContentItem key={index} variant="ghost" size="subtopic">
                  <p>{subtopic.subtopicTitle}</p>
                  <FiArrowUpRight className="w-4 h-4" />
                </ContentItem>
              ))}
            </>
          ))}
        </Card>
      ))}
    </>
  );
}
