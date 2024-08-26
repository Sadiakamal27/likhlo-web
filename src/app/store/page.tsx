import { FiFilter, FiGrid, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Dock from "../write/dock";
import CustomTooltip from "@/components/ui/custom-tooltip";
import BookContainer from "./books-container";

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
        <BookContainer />
        <BookContainer />
        <BookContainer />
        <BookContainer />
      </section>

      <Dock />
    </main>
  );
}
