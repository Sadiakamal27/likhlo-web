"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiBook,
  FiEdit3,
  FiMoon,
  FiMoreVertical,
  FiShoppingBag,
  FiSun,
} from "react-icons/fi";

export default function Dock(): any {
  const { setTheme, theme } = useTheme();
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className=" flex gap-8 border border-input p-4 rounded-xl fixed bottom-2 left-2/4 translate-x-[-50%] bg-background/30 backdrop-blur-md z-40 "
    >
      <Link href="/store">
        {" "}
        <Button size="icon" variant="muted">
          <FiShoppingBag className="h-4 w-4" />
        </Button>
      </Link>
      <Button size="icon" variant="muted">
        <FiBook className="h-4 w-4" />
      </Button>
      <Link href="/write">
        <Button size="icon" variant="default">
          <FiEdit3 className="h-4 w-4" />
        </Button>
      </Link>
      <Button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        variant="muted"
        size="icon"
      >
        <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
      <Button size="icon" variant="outline">
        <FiMoreVertical className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}
