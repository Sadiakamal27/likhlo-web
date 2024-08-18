import BookMeta from "./book-meta";
import ContentEditor from "./content-editor";

export default function () {
  return (
    <>
      <div className="flex gap-4 ">
        <BookMeta />
        <ContentEditor />
      </div>
    </>
  );
}
