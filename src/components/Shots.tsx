import { asset, shots } from "@/lib/content";
import Reveal from "./Reveal";

export default function Shots() {
  return (
    <section className="shots" aria-label="Signature dishes">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="mono label">03 — On the pass</p>
          <h2 className="h2">
            Six plates <i>worth the drive.</i>
          </h2>
        </Reveal>
      </div>
      <ul className="strip">
        {shots.map((s, i) => (
          <li key={s.name} className={`shot ${s.ratio}`}>
            <Reveal delay={(i % 3) * 70}>
              <figure>
                <div className="shot-img">
                  <img src={asset(s.src)} alt={s.alt} width={1200} height={1600} loading="lazy" />
                </div>
                <figcaption>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <b>{s.name}</b>
                  <em>{s.line}</em>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
