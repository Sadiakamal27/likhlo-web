import { Book } from "@/app/data";
export default function BookCard({ data }: { data: Book }) {
  return (
    <div className="flex py-3 ">
      <div className="h-75 w-48 cover bg-muted/40 rounded-lg overflow-hidden">
        <img src={data.cover} alt={data.title} />
      </div>
    </div>
  );
}
