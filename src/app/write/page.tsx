"use client";

import { Button } from "@/components/ui/button";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function () {
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
      <div>
        <div className="left-block flex ">
          <div className="h-75 w-90 cover bg-muted/40 rounded-lg overflow-hidden">
            <img src={bookCover} alt="Book Cover Here" />
          </div>
          {!isCoverSet && (
            <form onSubmit={addCoverHandler}>
              <Button type="submit" variant="secondary">
                <FiPlus className="h-4 w-4" />
                Add Cover
              </Button>
            </form>
          )}
        </div>
        <div>Right Book block</div>
      </div>
    </>
  );
}
