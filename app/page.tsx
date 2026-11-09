import Link from "next/link";
import { site } from "@/lib/site";
import StickyBar from "./components/StickyBar";
import { Book, Burger, Chevron, Google, Instagram, Phone, Scooter, Star, WhatsApp } from "./components/icons";

const marquee = ["Burgers", "Tacos", "برڭر", "طاكوس", "Livraison", "Fait minute", "Marrakech", "بالصحة"];

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
      </div>

      <main className="page">
        <header className="hero">
          <div className="badge reveal" style={delay(0)}>
            <span className="live" />
            <Scooter />
            Livraison partout à Marrakech
          </div>

          <div className="logo reveal" style={delay(1)}>
            <span className="logo-ring" />
            <span className="logo-core">
              <Burger />
            </span>
          </div>

          <h1 className="reveal" style={delay(2)}>
            Snack <em>Elmalki</em>
          </h1>
          <p className="tagline reveal" style={delay(3)}>{site.tagline}</p>
          <p className="hook ar reveal" lang="ar" style={delay(4)}>{site.hookAr}</p>
        </header>

        <div className="marquee reveal" style={delay(5)} aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {marquee.map((w) => (
                  <span key={w} className="marquee-item">
                    {w}
                    <i>✦</i>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <section className="order reveal" style={delay(6)}>
          <a id="cta" className="cta" href={site.whatsapp} target="_blank" rel="noopener">
            <span className="cta-ico"><WhatsApp /></span>
            <span className="cta-txt">
              <strong>Commander sur WhatsApp</strong>
              <small>Un clic, et votre commande démarre</small>
            </span>
            <Chevron className="cta-chev" />
          </a>
          <p className="slogan ar" lang="ar">{site.sloganAr}</p>
        </section>

        <nav className="links" aria-label="Liens">
          <Link className="link reveal" style={delay(7)} href="/menu">
            <span className="link-ico ico-menu"><Book /></span>
            <span className="link-txt">
              <strong>Découvrir le menu</strong>
              <small><span className="ar" lang="ar">المنيو</span> · Tacos, burgers, pizza, ftour…</small>
            </span>
            <Chevron className="link-chev" />
          </Link>

          <a className="link reveal" style={delay(8)} href={site.instagram} target="_blank" rel="noopener">
            <span className="link-ico ico-insta"><Instagram /></span>
            <span className="link-txt">
              <strong>Instagram</strong>
              <small>{site.instagramHandle} · Suivez-nous</small>
            </span>
            <Chevron className="link-chev" />
          </a>

          <a className="link reveal" style={delay(9)} href={site.tel}>
            <span className="link-ico ico-call"><Phone /></span>
            <span className="link-txt">
              <strong>Appelez-nous</strong>
              <small>{site.phoneDisplay}</small>
            </span>
            <Chevron className="link-chev" />
          </a>

          {site.googleReviews ? (
            <a className="link reveal" style={delay(10)} href={site.googleReviews} target="_blank" rel="noopener">
              <span className="link-ico ico-google"><Google /></span>
              <span className="link-txt">
                <strong>Avis Google</strong>
                <span className="stars">{[...Array(5)].map((_, i) => <Star key={i} />)}</span>
              </span>
              <Chevron className="link-chev" />
            </a>
          ) : (
            <div className="link link-soon reveal" style={delay(10)}>
              <span className="link-ico ico-google"><Google /></span>
              <span className="link-txt">
                <strong>Avis Google</strong>
                <span className="stars">{[...Array(5)].map((_, i) => <Star key={i} />)}</span>
              </span>
              <span className="soon">Bientôt</span>
            </div>
          )}
        </nav>

        <section className="map reveal" style={delay(11)}>
          <div className="map-frame">
            <iframe
              src={site.mapEmbed}
              title="Snack Elmalki sur la carte"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={-1}
            />
            {/* the embed can't link to our place, so the whole map opens it */}
            <a
              className="map-link"
              href={site.maps}
              target="_blank"
              rel="noopener"
              aria-label="Ouvrir snack lmalki sur Google Maps"
            />
          </div>
          <div className="map-info">
            <div>
              <span className="map-label">Nous trouver</span>
              <strong>{site.address}</strong>
            </div>
            <a className="map-btn" href={site.maps} target="_blank" rel="noopener">
              Itinéraire
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="stripe" />
          <p className="ar" lang="ar">بالصحة والعافية</p>
          <small>© {new Date().getFullYear()} {site.name} · Marrakech</small>
        </footer>
      </main>

      <StickyBar />
    </>
  );
}
