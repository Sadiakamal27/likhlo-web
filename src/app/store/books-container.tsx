import BookCard from "@/components/book-card";
import React from "react";

export default function BookContainer() {
  return (
    <div className="flex flex-col bg-muted/30 p-4 m-6 border border-muted/70 rounded-lg overflow-hidden">
      Top Sellers
      <div className="flex  gap-4 justify-between">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
