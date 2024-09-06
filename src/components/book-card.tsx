import { Book } from "@/app/data";
import Image from "next/image";
export default function BookCard({ data }: { data: Book }) {
  return (
    <div className="flex py-3 ">
      <div className="h-75 w-48 cover bg-muted/40 rounded-lg overflow-hidden">
        <Image src={data.cover} alt={data.title} />
      </div>
    </div>
  );
}
