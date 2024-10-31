"use client";

import logo from "@/assets/likhlo-black.svg";
import { Button } from "./ui/button";
import {
  FiEdit3,
  FiSun,
  FiMoon,
  FiMoreVertical,
  FiShoppingBag,
  FiBook,
  FiRepeat,
} from "react-icons/fi";
import { useTheme } from "next-themes";
import Link from "next/link";
import CustomTooltip from "./ui/custom-tooltip";
import Image from "next/image";

export default function Navbar(): any {
  const { setTheme, theme } = useTheme();
  return (
    <div className="border-b border-input p-2 sticky top-0 bg-background/40 backdrop-blur-lg z-40 ">
      <div className="grid grid-cols-3">
        <div className="flex items-center gap-3">
          <Link href="/store">
            <CustomTooltip label="Store">
              <Button size="icon" variant="muted">
                <FiShoppingBag className="h-4 w-4" />
              </Button>
            </CustomTooltip>
          </Link>
          <CustomTooltip label="Library">
            <Button size="icon" variant="muted">
              <FiBook className="h-4 w-4" />
            </Button>
          </CustomTooltip>
        </div>
        <div className="justify-self-center ">
          <Image
            src={logo}
            alt="logo"
            className="w-20 invert dark:invert-0"
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center gap-3  justify-self-end">
          <Link href="/write">
            <CustomTooltip label="Write">
              <Button size="icon" variant="default">
                <FiEdit3 className="h-4 w-4" />
              </Button>
            </CustomTooltip>{" "}
          </Link>
          <Button size="smIcon" variant="secondary">
            <FiRepeat className="" />
          </Button>{" "}
          <Button size="sm" variant="secondary">
            <FiRepeat className="mr-2" />
            REFRESH
          </Button>
          <CustomTooltip label={theme}>
            <Button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              variant="muted"
              size="icon"
            >
              <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </CustomTooltip>{" "}
          <Button size="icon" variant="outline">
            <FiMoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
