import BookMeta from "./book-meta";
import ContentEditor from "./content-editor";

export default function Write() {
  return (
    <>
      <div className="container grid grid-cols-3 gap-8  max-sm:grid-cols-1 ">
        <BookMeta className="" />{" "}
        <ContentEditor className="col-span-2 max-sm:col-span-1" />
      </div>
    </>
  );
}
