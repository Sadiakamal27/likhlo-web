"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function Home() {
  const { setTheme, theme } = useTheme();
  return (
    <main className="">
      <div>
        Likhlo
        <Button>Checkout</Button>
        <Button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          variant="outline"
          size="icon"
        >
          <FaRegSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </main>
  );
}
