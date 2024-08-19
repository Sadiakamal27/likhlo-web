import BookMeta from "./book-meta";
import ContentEditor from "./content-editor";

export default function () {
  return (
    <>
      <div className="container grid grid-cols-3 gap-8  ">
        <BookMeta className="bg-slate-400" />
        <ContentEditor className="bg-green-500 col-span-2" />
      </div>
    </>
  );
}
