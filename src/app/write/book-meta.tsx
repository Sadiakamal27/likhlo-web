"use client";

import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function BookMeta({ className }: { className?: string }) {
  const [isCoverSet, setIsCoverSet] = useState<boolean>(false);

  const [bookCover, setBookCover] = useState<string | undefined>("");
  const addCoverHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log("cover added");
    if (isCoverSet == false) {
      setBookCover(
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348218658i/873537.jpg",
      );
      setIsCoverSet(true);
    }
  };

  return (
    <>
      <div className={`left-block flex  ${className}`}>
        <div className="relative">
          <div className="h-[27rem] w-72 cover bg-muted/40 rounded-lg overflow-hidden">
            <img
              className="cover w-full"
              src={bookCover}
              alt="Book Cover Here"
            />
          </div>
          {!isCoverSet && (
            <form onSubmit={addCoverHandler}>
              <Button
                type="submit"
                variant="secondary"
                className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]"
              >
                <FiPlus className="h-4 w-4" />
                Add Cover
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
