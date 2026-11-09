import type { Metadata } from "next";
import Link from "next/link";
import { hours } from "@/lib/menu";
import { site } from "@/lib/site";
import { Chevron, Scooter, WhatsApp } from "../components/icons";
import MenuBoard from "./MenuBoard";
import "./menu.css";

export const metadata: Metadata = {
  title: "Menu — Snack Elmalki · Marrakech",
  description: "Tacos, burgers, pizza, m9ilat, petit déjeuner et jus. Commandez sur WhatsApp, livraison à Marrakech.",
};

export default function MenuPage() {
  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
      </div>

      <main className="page m-page">
        <Link href="/" className="m-back">
          <Chevron /> Accueil
        </Link>

        <header className="m-hero">
          <p className="m-kicker reveal">{site.name}</p>
          <h1 className="reveal" style={{ "--i": 1 } as React.CSSProperties}>
            Le <em>Menu</em>
          </h1>
          <p className="m-hero-ar ar reveal" lang="ar" style={{ "--i": 2 } as React.CSSProperties}>
            قائمة الطعام
          </p>
          <div className="m-facts reveal" style={{ "--i": 3 } as React.CSSProperties}>
            <span><Scooter /> Livraison</span>
            <span>Tous les jours · {hours}</span>
          </div>
          <p className="m-hint reveal" style={{ "--i": 4 } as React.CSSProperties}>
            Touchez <b>+</b> pour composer votre commande, puis envoyez-la sur WhatsApp.
          </p>
        </header>

        <MenuBoard />

        <a className="cta m-cta" href={site.whatsapp} target="_blank" rel="noopener">
          <span className="cta-ico"><WhatsApp /></span>
          <span className="cta-txt">
            <strong>Une question ?</strong>
            <small>Écrivez-nous sur WhatsApp · {site.phoneDisplay}</small>
          </span>
          <Chevron className="cta-chev" />
        </a>

        <footer className="footer">
          <div className="stripe" />
          <p className="ar" lang="ar">بالصحة والعافية</p>
          <small>{site.address}</small>
        </footer>
      </main>
    </>
  );
}
