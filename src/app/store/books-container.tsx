import BookCard from "@/components/book-card";
import { books } from "@/app/data";
export default function BookContainer() {
  return (
    <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg overflow-hidden max-w-16">
      Top Sellers
      <div className="flex  gap-4 justify-between">
        {books.map((book, index: number): any => (
          <BookCard key={index} data={book} />
        ))}
      </div>
    </div>
  );
}
