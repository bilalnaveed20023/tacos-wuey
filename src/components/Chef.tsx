import { asset, site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Chef() {
  return (
    <section className="chef" id="chef">
      <div className="wrap chef-grid">
        <Reveal className="chef-photo">
          <img src={asset("/img/birria-quesa.webp")} alt="Birria quesadillas on a wooden board with a cup of consomé" width={1200} height={1600} loading="lazy" />
          <p className="mono caption">Birria quesadillas, Vargas family recipe</p>
        </Reveal>
        <Reveal className="chef-copy" delay={80}>
          <p className="mono label">01 — The kitchen</p>
          <h2 className="h2">
            “Ta-kos <i>way.</i>”
          </h2>
          <p className="drop">
            That’s how it’s said, and the name is on the menu with a pronunciation guide. Tacos Wuey is a modern taquería in the old brick storefront on Vernor Highway,
            with a small dining room and a menu that moves from tacos to spaghetti verde to a ribeye molcajete.
          </p>
          <p>
            Chef {site.chef} was born in the Tequila region of Jalisco and moved to the U.S. at four. He grew up in Los Angeles. His father, Jose, brought the family to Detroit in the late ’90s,
            and the birria on this menu is the family’s recipe, which Jose still helps with. Eddie has more than twenty-five years in kitchens and learned them his own way.
          </p>
          <blockquote className="pull">
            <p>Cook with love and never be hungry.</p>
            <footer className="mono">— {site.chef}, from the menu</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
