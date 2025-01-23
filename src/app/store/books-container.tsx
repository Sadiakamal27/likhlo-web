import BookCard from "@/components/book-card";
import { books } from "@/app/data";
export default function BookContainer() {
  return (
    <div className="flex flex-col  max-w-24 bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg overflow-hidden ">
      Top Sellers
      <div className="flex  gap-4 justify-between overflow-hidden max-w-full">
        {books.map((book, index: number): any => (
          <div className="w-full flex no-wrap">
            {" "}
            <BookCard key={index} data={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
