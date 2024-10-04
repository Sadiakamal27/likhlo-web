import { Card } from "@/components/ui/card";
import BookInfo from "./book-info";

export default function Write() {
  return (
    <>
      <Card className="container bg-muted/30 backdrop-blur-2xl my-8  h-auto grid grid-cols-3 gap-8  max-sm:grid-cols-1 py-6 ">
        <BookInfo />
      </Card>
    </>
  );
}
