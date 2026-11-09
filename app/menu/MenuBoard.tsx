"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { menu, type Item } from "@/lib/menu";
import { site } from "@/lib/site";
import { WhatsApp } from "../components/icons";

type Cart = Record<string, number>;

const prices = new Map(menu.flatMap((c) => c.items.map((i) => [i.name, i.price] as const)));

function Stepper({ qty, onAdd, onRemove, label }: { qty: number; onAdd: () => void; onRemove: () => void; label: string }) {
  if (!qty)
    return (
      <button type="button" className="m-add" onClick={onAdd} aria-label={`Ajouter ${label}`}>
        +
      </button>
    );
  return (
    <span className="m-step">
      <button type="button" onClick={onRemove} aria-label={`Retirer ${label}`}>−</button>
      <b>{qty}</b>
      <button type="button" onClick={onAdd} aria-label={`Ajouter ${label}`}>+</button>
    </span>
  );
}

export default function MenuBoard() {
  const [cart, setCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(menu[0].id);
  const chips = useRef<HTMLDivElement>(null);

  const add = (name: string) => setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }));
  const remove = (name: string) =>
    setCart((c) => {
      const next = { ...c, [name]: (c[name] ?? 0) - 1 };
      if (next[name] <= 0) delete next[name];
      return next;
    });

  const lines = Object.entries(cart);
  const count = lines.reduce((n, [, q]) => n + q, 0);
  const total = lines.reduce((t, [name, q]) => t + q * (prices.get(name) ?? 0), 0);

  useEffect(() => {
    if (!count) setOpen(false);
  }, [count]);

  const orderLink = useMemo(() => {
    const body = lines.map(([name, q]) => `• ${q}× ${name} — ${q * (prices.get(name) ?? 0)} DH`).join("\n");
    const msg = `Salam ${site.name}, bghit ncommandi :\n\n${body}\n\nTotal : ${total} DH\nAdresse : `;
    return `${site.whatsapp.split("?")[0]}?text=${encodeURIComponent(msg)}`;
  }, [lines, total]);

  // highlight the chip of the section currently on screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    menu.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    chips.current
      ?.querySelector<HTMLElement>(`[data-id="${active}"]`)
      ?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  const row = (item: Item) => (
    <Stepper qty={cart[item.name] ?? 0} onAdd={() => add(item.name)} onRemove={() => remove(item.name)} label={item.name} />
  );

  return (
    <>
      <nav className="m-chips" ref={chips} aria-label="Catégories">
        {menu.map((c) => (
          <a key={c.id} href={`#${c.id}`} data-id={c.id} className={active === c.id ? "on" : undefined}>
            {c.title}
          </a>
        ))}
      </nav>

      {menu.map((cat, n) => (
        <section key={cat.id} id={cat.id} className={`m-sec m-${cat.layout}`}>
          <header className="m-sec-head">
            <span className="m-num">{String(n + 1).padStart(2, "0")}</span>
            <h2>{cat.title}</h2>
            <span className="m-sec-ar ar" lang="ar">{cat.ar}</span>
          </header>
          {cat.note && <p className="m-note">{cat.note}</p>}

          {cat.layout === "list" && (
            <ul className="m-list">
              {cat.items.map((item) => (
                <li key={item.name} className={cart[item.name] ? "in" : undefined}>
                  <span className="m-name">
                    {item.name}
                    {item.ar && <small className="ar" lang="ar">{item.ar}</small>}
                  </span>
                  <span className="m-dots" />
                  <span className="m-price">{item.price}<i>DH</i></span>
                  {row(item)}
                </li>
              ))}
            </ul>
          )}

          {cat.layout !== "list" && (
            <div className="m-grid">
              {cat.items.map((item) => (
                <article key={item.name} className={`m-card${cart[item.name] ? " in" : ""}`}>
                  {cat.layout === "packs" && <span className="m-tag">Promo</span>}
                  <div className="m-card-top">
                    <div>
                      <h3>{item.name}</h3>
                      {item.ar && <span className="ar" lang="ar">{item.ar}</span>}
                    </div>
                    <span className="m-big">{item.price}<i>DH</i></span>
                  </div>
                  {item.desc && (
                    <p className={/[؀-ۿ]/.test(item.desc) ? "ar" : undefined}>{item.desc}</p>
                  )}
                  <div className="m-card-foot">{row(item)}</div>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}

      <div className={`m-cart${count ? " show" : ""}${open ? " open" : ""}`} aria-hidden={!count}>
        {open && (
          <ul className="m-cart-list">
            {lines.map(([name, q]) => (
              <li key={name}>
                <span>{name}</span>
                <span className="m-cart-sub">{q * (prices.get(name) ?? 0)} DH</span>
                <Stepper qty={q} onAdd={() => add(name)} onRemove={() => remove(name)} label={name} />
              </li>
            ))}
          </ul>
        )}
        <div className="m-cart-bar">
          <button type="button" className="m-cart-sum" onClick={() => setOpen((o) => !o)} tabIndex={count ? 0 : -1}>
            <b>{count}</b>
            <span>
              {total} DH
              <small>{open ? "Masquer" : "Voir la commande"}</small>
            </span>
          </button>
          <a className="m-cart-send" href={orderLink} target="_blank" rel="noopener" tabIndex={count ? 0 : -1}>
            <WhatsApp /> Commander
          </a>
        </div>
      </div>
    </>
  );
}
