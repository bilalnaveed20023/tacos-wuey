import { links, reviews, site, stars } from "@/lib/content";
import Reveal from "./Reveal";

export default function Reviews() {
  const max = Math.max(...stars);
  const [lead, ...rest] = reviews;
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <Reveal className="rev-top">
          <div>
            <p className="mono label">06 — Said at the table</p>
            <h2 className="h2">
              {site.rating} stars, <i>{site.reviewCount} reviews.</i>
            </h2>
          </div>
          <ul className="hist" aria-label="Rating breakdown">
            {stars.map((n, i) => (
              <li key={i}>
                <span className="mono">{5 - i}</span>
                <i style={{ width: `${(n / max) * 100}%` }} />
                <em className="mono">{n}</em>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lead">
          <blockquote>
            <p>“{lead.text}”</p>
            <footer className="mono">
              {lead.who} · {lead.when}
            </footer>
          </blockquote>
        </Reveal>

        <ul className="quotes">
          {rest.map((r, i) => (
            <li key={r.who}>
              <Reveal delay={(i % 3) * 60}>
                <blockquote>
                  <p>“{r.text}”</p>
                  <footer className="mono">
                    {r.who} · {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="rev-foot mono">
          Public Google reviews, first names only. <a href={links.place} target="_blank" rel="noopener noreferrer">Read them all ↗</a>
        </p>
      </div>
    </section>
  );
}
