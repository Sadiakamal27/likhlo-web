"use client";

import { SubscribeButton } from "@/components/subscribe-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { GhostInput } from "@/components/ui/ghost-input";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function BookMeta({ className }: { className?: string }) {
  const [isCoverSet, setIsCoverSet] = useState<boolean>(false);

  const [bookCover, setBookCover] = useState("");
  const addCoverHandler = (e: FormEvent) => {
    e.preventDefault();

    if (isCoverSet == false) {
      setBookCover(
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348218658i/873537.jpg",
      );
      setIsCoverSet(true);
    }
  };

  return (
    <div className={`left-block  flex flex-col  max-w-72 gap-4 ${className}`}>
      <div className="h-[27rem] relative w-72 cover bg-muted/40 rounded-lg overflow-hidden">
        <Image
          className=" w-full"
          src={bookCover ? bookCover : "/ "}
          alt="Book Cover Here"
          width={500}
          height={700}
        />
        {!isCoverSet && (
          <form
            onSubmit={addCoverHandler}
            className="absolute  top-2/4 group left-2/4 translate-x-[-50%] translate-y-[-50%]"
          >
            <Button type="submit" variant="secondary">
              <FiPlus className="h-4 w-4" />
              Add Cover{" "}
            </Button>
          </form>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4 mt-4">
          <GhostInput
            className=" text-3xl font-bold "
            placeholder="Book Title Here..."
          />
          <div className="flex gap-2 flex-wrap">
            {" "}
            {/*Author Button */}
            <Button className="gap-2" variant="outline">
              <Avatar className="h-full w-auto">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              Qureshi
            </Button>
            <CustomTooltip label="Add Author">
              <Button size="icon" variant="muted">
                <FiPlus className="w-4 h-4" />
              </Button>
            </CustomTooltip>
          </div>
          <SubscribeButton>Hello</SubscribeButton>
        </div>
      </div>
    </div>
  );
}
