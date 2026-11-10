"use client";

import { useRef, useState } from "react";
import { asset, menu } from "@/lib/content";

export default function MenuTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent) => {
    const n = menu.length;
    let next = active;
    if (e.key === "ArrowRight") next = (active + 1) % n;
    else if (e.key === "ArrowLeft") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  const tab = menu[active];

  return (
    <div className="mt">
      <div className="mt-tabs" role="tablist" aria-label="Menu sections" onKeyDown={onKey}>
        {menu.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className={i === active ? "on" : ""}
            onClick={() => setActive(i)}
          >
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-panel" role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} key={tab.id}>
        <aside className="mt-side">
          <img src={asset(tab.photo.src)} alt={tab.photo.alt} width={1200} height={1400} loading="lazy" />
          <p className="mt-blurb">{tab.blurb}</p>
        </aside>
        <div className="mt-lists">
          {tab.groups.map((g, gi) => (
            <section key={gi} className="mt-group">
              {g.title ? (
                <h3 className="mt-title">
                  <span>{g.title}</span>
                  {g.note ? <em className="mono">{g.note}</em> : null}
                </h3>
              ) : null}
              <ul>
                {g.items.map((it) => (
                  <li key={it.n} className="dish">
                    <div className="dish-row">
                      <span className="dish-name">
                        {it.n}
                        {it.tag ? <em className="tag mono">{it.tag}</em> : null}
                      </span>
                      <span className="dish-dots" aria-hidden="true" />
                      <span className="dish-price mono">{it.p.replace(/(\d+(?:\.\d+)?)/g, "$$$1")}</span>
                    </div>
                    {it.d ? <p className="dish-desc">{it.d}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
