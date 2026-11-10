import { hours, links, site } from "@/lib/content";
import { Stamp } from "./art";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <Stamp className="foot-stamp" id="fs" />
          <div className="foot-cols">
            <div>
              <p className="mono label">Find us</p>
              <p>
                {site.street}
                <br />
                {site.city} {site.zip}
              </p>
            </div>
            <div>
              <p className="mono label">Hours</p>
              <p>
                {hours.map((h) => (
                  <span key={h.days} className="hl">
                    {h.days} · {h.time}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="mono label">Reach us</p>
              <p>
                <a href={links.tel}>{site.phone}</a>
                <br />
                <a href={links.mail}>{site.email}</a>
                <br />
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>
        <p className="wordmark" aria-hidden="true">Tacos <i>Wuey</i></p>
        <p className="foot-fine mono">© {new Date().getFullYear()} Tacos Wuey · Taquería moderna by Chef {site.chef}</p>
      </div>
    </footer>
  );
}
