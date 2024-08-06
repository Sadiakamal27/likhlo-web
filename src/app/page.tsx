import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaRegMoon } from "react-icons/fa";

export default function Home() {
  return (
    <main className="">
      <div>
        Likhlo
        <Button>Checkout</Button>
        <Button size="icon" variant="outline">
          <FaRegMoon className="h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}
