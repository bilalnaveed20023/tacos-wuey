import Reveal from "./Reveal";
import MenuTabs from "./MenuTabs";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="mono label">02 — The menu</p>
          <h2 className="h2">
            Tacos, <i>platos,</i> brunch, dulce.
          </h2>
          <p className="lede">Prices as printed on the current menus. Sunday brunch has its own list.</p>
        </Reveal>
        <MenuTabs />
      </div>
    </section>
  );
}
