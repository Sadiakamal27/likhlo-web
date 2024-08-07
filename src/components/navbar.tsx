"use client";

import logo from "@/assets/likhlo-logo.svg";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  FiShoppingCart,
  FiEdit3,
  FiSun,
  FiMoon,
  FiMoreVertical,
} from "react-icons/fi";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function () {
  const { setTheme, theme } = useTheme();
  return (
    <div className="border-b border-muted p-2">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="outline">
            <FiShoppingCart className="h-4 w-4" />
          </Button>
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
        </div>
        <Image src={logo} alt="logo" className="w-16" />

        <div className="flex items-center gap-3">
          <Button size="icon" variant="outline">
            <FiEdit3 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <FiMoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
