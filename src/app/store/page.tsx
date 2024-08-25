import BookCard from "@/components/book-card";
import { FiFilter, FiGrid, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Dock from "../write/dock";
import CustomTooltip from "@/components/ui/custom-tooltip";

export default function Store() {
  return (
    <main className="bg-red-500 flex  flex-row max-sm:flex-col max-sm:items-center items-start  relative ">
      <div className="px-4  basis-1/5 flex flex-col max-sm:flex-row    gap-4 bg-green-500 sticky top-24">
        <CustomTooltip label="Search">
          <Button size="icon" variant="secondary">
            <FiSearch className="h-4 w-4" />
          </Button>
        </CustomTooltip>
        <CustomTooltip label="Filters">
          <Button size="icon" variant="secondary">
            <FiFilter className="h-4 w-4" />
          </Button>
        </CustomTooltip>{" "}
        <CustomTooltip label="Categories">
          <Button size="icon" variant="secondary">
            <FiGrid className="h-4 w-4" />
          </Button>
        </CustomTooltip>{" "}
      </div>
      <section className="basis-5 w-auto">
        {" "}
        <div className="flex flex-col max-w-min bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg overflow-hidden">
          Top Sellers
          <div className="flex  gap-4 justify-between">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
        <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg overflow-hidden">
          Top Sellers
          <div className="flex  gap-4 justify-between">
            <BookCard />
            <BookCard />
          </div>
        </div>
        <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg overflow-hidden">
          Top Sellers
          <div className="flex  gap-4 justify-between">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </section>
      <Dock />
    </main>
  );
}
