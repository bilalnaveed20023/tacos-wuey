import { links } from "@/lib/content";
import { Mustache } from "./art";

export default function Header() {
  return (
    <header className="top">
      <a href="#top" className="brand" aria-label="Tacos Wuey, home">
        <Mustache className="brand-stache" />
        <span className="brand-name">Tacos <i>Wuey</i></span>
      </a>
      <nav className="top-nav" aria-label="Sections">
        <a href="#chef">Chef</a>
        <a href="#menu">Menu</a>
        <a href="#market">Market</a>
        <a href="#visit">Visit</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a className="btn btn-red btn-sm" href={links.tel}>Reserve</a>
    </header>
  );
}
