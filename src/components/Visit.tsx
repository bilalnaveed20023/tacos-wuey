import { byDay, hours, links, site } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <Reveal className="visit-copy">
          <p className="mono label">05 — Visit</p>
          <h2 className="h2">
            Vernor Highway, <i>Mexicantown.</i>
          </h2>
          <address>
            {site.street}
            <br />
            {site.city} {site.zip}
          </address>
          <table className="hrs">
            <caption className="sr">Hours</caption>
            <tbody>
              {hours.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>
                    {h.time}
                    {h.note ? <em>{h.note}</em> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <OpenStatus byDay={byDay} className="visit-status" />
          <ul className="know">
            <li>
              <b>Reservations</b> by phone, {site.phone}.
            </li>
            <li>
              <b>BYOB.</b> There’s no liquor license, so bring your own wine or beer.
            </li>
            <li>
              <b>Catering</b> and group meals: <a href={links.mail}>email the kitchen</a>.
            </li>
          </ul>
          <div className="visit-cta">
            <a className="btn btn-red" href={links.tel}>Reserve · {site.phone}</a>
            <a className="btn btn-ghost" href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
        </Reveal>
        <Reveal className="map" delay={80}>
          <iframe title="Map: Tacos Wuey, 3970 Vernor Hwy, Detroit" src={links.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </Reveal>
      </div>
    </section>
  );
}
