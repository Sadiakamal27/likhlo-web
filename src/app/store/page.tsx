import { FiFilter, FiGrid, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Dock from "@/components/dock";
import CustomTooltip from "@/components/ui/custom-tooltip";
import BookContainer from "./books-container";

export default function Store() {
  return (
    <main className="grid bg-red-500 ">
      <div className="col-span-1 bg-green-500  flex flex-col">
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
      <section className="col-span-11">
        <BookContainer />
      </section>
    </main>
  );
}
