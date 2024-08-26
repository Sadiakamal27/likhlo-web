const books = [
  {
    title: "Blink",
    author: "Malcolm Gladwell",
    price: "$23.99",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348218658i/873537.jpg",
  },
];

export default function BookCard() {
  return (
    <div className="flex py-3 ">
      <div className="h-75 w-48 cover bg-muted/40 rounded-lg overflow-hidden">
        <img src={books[0].coverImage} alt={books[0].title} />
      </div>
    </div>
  );
}
