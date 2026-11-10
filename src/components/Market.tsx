import { asset, links, mosaic, retail, site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Market() {
  return (
    <section className="market" id="market">
      <div className="wrap market-grid">
        <Reveal className="market-copy">
          <p className="mono label">04 — Retail market</p>
          <h2 className="h2">
            Take the <i>salsa macha</i> home.
          </h2>
          <p className="lede">
            The kitchen bottles its chile oils and salsas and sells them at the counter, along with chips, chicharrones and 32 oz aguas frescas.
          </p>
          <ul className="shelf">
            {retail.map((r) => (
              <li key={r.n}>
                <span>
                  <b>{r.n}</b>
                  {r.d ? <i>{r.d}</i> : null}
                </span>
                <span className="dots" aria-hidden="true" />
                <span className="mono">${r.p}</span>
              </li>
            ))}
          </ul>
          <p className="note">
            Catering inquiries: <a href={links.mail}>{site.email}</a>
          </p>
        </Reveal>
        <ul className="mosaic" aria-label="More photos">
          {mosaic.map((m, i) => (
            <li key={m.src}>
              <Reveal delay={(i % 3) * 60}>
                <img src={asset(m.src)} alt={m.alt} loading="lazy" width={1200} height={1200} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
