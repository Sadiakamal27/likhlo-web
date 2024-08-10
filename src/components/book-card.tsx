import Image from "next/image";

const books = [
  {
    title: "Blink",
    author: "Malcolm Gladwell",
    price: "$23.99",
    coverImage: "https://picsum.photos/200/300",
  },
];

export default function BookCard() {
  return (
    <div className="flex w-full p-3">
      <div className="h-64 w-48 bg-muted/40 rounded-lg overflow-hidden">
        <img src={books[0].coverImage} alt={books[0].title} />
      </div>
    </div>
  );
}
