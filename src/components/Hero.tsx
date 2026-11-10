import { asset, byDay, links, press, site } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import { Stamp } from "./art";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src={asset("/img/churros-torch.webp")} alt="" width={1284} height={1275} fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <p className="mono hero-eyebrow">
            <span>Taquería moderna</span>
            <span>Mexicantown · Detroit</span>
          </p>
          <h1 className="hero-h1">
            <span className="l1">Cook with love</span>
            <span className="l2">and never <i>be hungry.</i></span>
          </h1>
          <p className="hero-sub">
            Birria from the Vargas family recipe, spaghetti verde with milanesa, fried ice cream with a torch. Chef {site.chef}’s taquería on Vernor Highway.
          </p>
          <div className="hero-cta">
            <a className="btn btn-red" href={links.tel}>Reserve · {site.phone}</a>
            <a className="btn btn-ghost" href="#menu">See the menu</a>
          </div>
          <OpenStatus byDay={byDay} className="hero-status" />
        </div>
        <Stamp className="hero-stamp" id="hs" />
      </section>
      <a className="press" href={press.url} target="_blank" rel="noopener noreferrer">
        <span className="mono">As seen in</span>
        <b>{press.outlet}</b>
        <span className="press-line">{press.line}</span>
        <span className="mono press-go">Read ↗</span>
      </a>
    </>
  );
}
