import ContentCard from "./content-card";

export default function ContentEditor({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div>Description: hello</div>
      <div>Contents</div>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  );
}
