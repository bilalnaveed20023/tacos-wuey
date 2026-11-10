import { links } from "@/lib/content";

export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn btn-red" href={links.tel}>Reserve · call</a>
      <a className="btn btn-ghost" href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a>
    </div>
  );
}
