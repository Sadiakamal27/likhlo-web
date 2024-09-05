import { Card } from "@/components/ui/card";
import { ContentItem } from "@/components/content-item";
import { FiArrowUpRight } from "react-icons/fi";
import { books } from "../data";

export default function ContentCard() {
  return (
    {
      books[0].content.map(
        book:any => (
      <div>
chapter 1
            </div>
        )
      )
    }

  );
}
