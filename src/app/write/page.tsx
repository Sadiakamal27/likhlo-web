import BookMeta from "./book-meta";
import ContentEditor from "./content-editor";
import Dock from "./dock";

export default function Write() {
  return (
    <>
      <div className="container bg-muted my-8  h-auto grid grid-cols-3 gap-8  max-sm:grid-cols-1 py-6 ">
        <BookMeta className="" />{" "}
        <ContentEditor className="col-span-2 max-sm:col-span-1" />
      </div>
    </>
  );
}
