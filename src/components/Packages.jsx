import { useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import {
  serviceCatalog,
  servicePageHref,
  serviceEmailHref,
} from "../data/serviceCatalog";
import "../styles/servicePages.css";

export default function Packages() {
  const pathname = window.location.pathname;
  const selectedId = new URLSearchParams(window.location.search).get(
    "tjeneste",
  );
  const service = serviceCatalog.find((item) => item.id === selectedId);
  useEffect(() => {
    const previous = document.title;
    document.title = `${service ? service.name : "Tjenester og priser"} | Kodela Studio`;
    return () => {
      document.title = previous;
    };
  }, [service]);

  if (service) return <ServiceDetails service={service} pathname={pathname} />;

  return (
    <div className="ks-pages">
      <section className="ks-hero">
        <div className="ks-container">
          <p className="ks-label">Tjenester og priser</p>
          <h1>
            En god nettside.
            <br />
            <span>Det du trenger rundt.</span>
          </h1>
          <p className="ks-lead">
            Vi lager nettsider for små bedrifter. Legg til booking når kundene
            skal bestille tid, og få hjelp med oppdateringer hvis du ønsker det.
          </p>
          <a className="ks-button ks-button-gold" href="#tjenester">
            Se tjenestene <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section id="tjenester" className="ks-light">
        <div className="ks-container">
          <div className="ks-section-heading">
            <p className="ks-label">Et oversiktlig tilbud</p>
            <h2>Velg det som passer bedriften.</h2>
            <p>Se hva som er inkludert, og les mer om hver tjeneste.</p>
          </div>
          {selectedId && (
            <p role="status" className="ks-notice">
              Vi fant ikke denne tjenesten. Velg en av tjenestene under.
            </p>
          )}
          <div className="ks-cards">
            {serviceCatalog.map((item) => (
              <article id={item.id} className="ks-card" key={item.id}>
                <span className="ks-number">{item.number}</span>
                <p className="ks-card-category">{item.category}</p>
                <h3>{item.name}</h3>
                <p className="ks-price">{item.price}</p>
                <p className="ks-price-note">{item.priceNote}</p>
                <p className="ks-card-intro">{item.intro}</p>
                <ul className="ks-checklist">
                  {item.shortIncludes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <a
                  className="ks-button ks-button-dark"
                  href={servicePageHref(item.id, pathname)}
                >
                  Les om {item.name.toLowerCase()}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="ks-footnote">
            Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer
            kommer i tillegg. Du får et konkret tilbud før vi starter.
          </p>
        </div>
      </section>
      <section className="ks-bottom">
        <div className="ks-container ks-bottom-inner">
          <div>
            <p className="ks-label">En uforpliktende prat</p>
            <h2>Usikker på hva du trenger?</h2>
            <p>
              Fortell oss litt om bedriften. Vi hjelper deg å finne et passende
              omfang.
            </p>
          </div>
          <a
            className="ks-button ks-button-gold"
            href={serviceEmailHref("nettside")}
          >
            Ta kontakt <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
