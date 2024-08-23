"use client";

import logo from "@/assets/likhlo-logo.svg";
import { Button } from "./ui/button";
import {
  FiEdit3,
  FiSun,
  FiMoon,
  FiMoreVertical,
  FiShoppingBag,
  FiBook,
} from "react-icons/fi";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar(): any {
  const { setTheme, theme } = useTheme();
  return (
    <div className="w-full border-b border-input p-2 sticky top-0 bg-background/40 backdrop-blur-lg z-40 ">
      <div className="grid grid-cols-3">
        <div className="flex items-center gap-3">
          <Link href="/store">
            {" "}
            <Button size="icon" variant="outline">
              <FiShoppingBag className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="icon" variant="outline">
            <FiBook className="h-4 w-4" />
          </Button>
        </div>
        <div className="justify-self-center ">
          <Image src={logo} alt="logo" className="w-20 invert dark:invert-0" />
        </div>
        <div className="flex items-center gap-3  justify-self-end">
          <Link href="/write">
            <Button size="icon" variant="default">
              <FiEdit3 className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            variant="outline"
            size="icon"
          >
            <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button size="icon" variant="outline">
            <FiMoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
