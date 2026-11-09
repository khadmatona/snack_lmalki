"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Phone, WhatsApp } from "./icons";

// Appears once the main WhatsApp button has scrolled out of view.
export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("cta");
    if (!target) return;
    const io = new IntersectionObserver(([e]) =>
      setShow(!e.isIntersecting && e.boundingClientRect.top < 0),
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`bar${show ? " show" : ""}`} aria-hidden={!show}>
      <a className="bar-call" href={site.tel} tabIndex={show ? 0 : -1}>
        <Phone /> Appeler
      </a>
      <a className="bar-wa" href={site.whatsapp} target="_blank" rel="noopener" tabIndex={show ? 0 : -1}>
        <WhatsApp /> Commander
      </a>
    </div>
  );
}
