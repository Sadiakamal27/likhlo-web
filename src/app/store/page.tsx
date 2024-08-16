import BookCard from "@/components/book-card";
import { FiFilter, FiGrid, FiSearch, FiShoppingBag } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function Store() {
  return (
    <main>
      <div className="px-4 flex flex-col  gap-4 fixed">
        <Button size="icon" variant="secondary">
          <FiSearch className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary">
          <FiFilter className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary">
          <FiGrid className="h-4 w-4" />
        </Button>
      </div>

      <section className="pl-20">
        <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg">
          Top Sellers
          <div className="flex  gap-4 justify-between">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
        <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg">
          Top Sellers
          <div className="flex  gap-4 justify-between">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
        <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg">
          Top Sellers
          <div className="flex  gap-4 justify-between">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </section>
    </main>
  );
}
