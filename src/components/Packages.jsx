import { useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import { serviceCatalog, servicePageHref, serviceEmailHref } from "../data/serviceCatalog";
import serviceOne from "../assets/tjenester1.png";
import serviceTwo from "../assets/tjenester2.png";
import serviceThree from "../assets/tjenester3.png";
import "../styles/servicePages.css";

const serviceImages = [serviceOne, serviceTwo, serviceThree];

export default function Packages() {
  const pathname = window.location.pathname;
  const selectedId = new URLSearchParams(window.location.search).get("tjeneste");
  const service = serviceCatalog.find((item) => item.id === selectedId);

  useEffect(() => {
    const previous = document.title;
    document.title = `${service ? service.name : "Tjenester"} | Kodela Studio`;
    return () => { document.title = previous; };
  }, [service]);

  if (service) return <ServiceDetails service={service} pathname={pathname} />;

  return (
    <main className="ks-pages ks-services-page">
      <section className="ks-services-hero">
        <div className="ks-container ks-services-hero-inner">
          <p className="ks-label">Tjenester</p>
          <h1>Digitale løsninger som gjør jobben sin.</h1>
          <div className="ks-services-hero-bottom">
            <p>Vi lager nettsider for små bedrifter, kobler på booking når kundene skal bestille tid, og kan følge opp løsningen etter lansering.</p>
            <a href="#tjenester" className="ks-text-link">Utforsk tjenestene <span>↓</span></a>
          </div>
        </div>
      </section>

      <section id="tjenester" className="ks-services-showcase">
        <div className="ks-container">
          {selectedId && <p role="status" className="ks-notice">Vi fant ikke denne tjenesten. Se tjenestene våre under.</p>}

          {serviceCatalog.map((item, index) => (
            <article className={`ks-service-story ${index % 2 ? "ks-service-story-reverse" : ""}`} key={item.id}>
              <figure className="ks-service-story-image">
                <img src={serviceImages[index]} alt="" aria-hidden="true" />
              </figure>

              <div className="ks-service-story-copy">
                <p className="ks-label">{item.category}</p>
                <h2>{item.name}</h2>
                <p className="ks-service-heading">{item.heading}</p>
                <p className="ks-service-description">{item.audience}</p>

                <ul className="ks-service-includes">
                  {item.shortIncludes.map((included) => <li key={included}>{included}</li>)}
                </ul>

                <div className="ks-service-story-footer">
                  <div><span className="ks-service-price">{item.price}</span><span className="ks-service-price-note">{item.priceNote}</span></div>
                  <a className="ks-service-link" href={servicePageHref(item.id, pathname)}>Se hva som er inkludert <span>→</span></a>
                </div>
              </div>
            </article>
          ))}

          <p className="ks-footnote">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Endelig pris avtales før prosjektet starter.</p>
        </div>
      </section>

      <section className="ks-services-note">
        <div className="ks-container ks-services-note-inner">
          <p className="ks-label">Ikke sikker på hva du trenger?</p>
          <h2>Start med behovet. Vi finner resten sammen.</h2>
          <p>Du trenger ikke velge en ferdig pakke før du tar kontakt. Fortell oss kort om bedriften og hva du ønsker å få til, så foreslår vi en løsning med tydelig omfang og pris.</p>
          <a className="ks-button ks-button-gold" href={serviceEmailHref("prosjekt")}>Fortell om prosjektet <span>→</span></a>
        </div>
      </section>
    </main>
  );
}
