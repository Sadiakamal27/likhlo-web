import BookCard from "@/components/book-card";
import Navbar from "@/components/navbar";

export default function Store() {
  return (
    <main>
      <div className="flex ">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </main>
  );
}
