import { useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import { serviceCatalog, servicePageHref, serviceEmailHref } from "../data/serviceCatalog";
import heroImage from "../assets/heroKodela.png";
import mobileImage from "../assets/mobile.png";
import bookImage from "../assets/book.png";
import "../styles/servicePages.css";

const serviceImages = [heroImage, mobileImage, bookImage];

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
    <div className="ks-pages">
      <section className="ks-services-hero">
        <img src={heroImage} alt="" aria-hidden="true" className="ks-services-hero-image" />
        <div className="ks-services-hero-shade" />
        <div className="ks-container ks-services-hero-content">
          <p className="ks-label">Tjenester</p>
          <h1>En sterk digital tilstedeværelse starter med <span>det viktigste.</span></h1>
          <p className="ks-lead">Vi holder det enkelt: en profesjonell nettside som grunnmur, booking når kundene skal bestille, og oppfølging når du vil ha hjelp videre.</p>
          <a className="ks-button ks-button-gold" href="#tjenester">Se tjenestene <span>↓</span></a>
        </div>
      </section>

      <section id="tjenester" className="ks-services-section">
        <div className="ks-container">
          <div className="ks-services-heading"><div><p className="ks-label">Det vi tilbyr</p><h2>Tre tjenester. Ingen unødvendige pakker.</h2></div><p>Velg det bedriften trenger nå. Vi avklarer alltid omfang og pris før vi starter.</p></div>
          {selectedId && <p role="status" className="ks-notice">Vi fant ikke denne tjenesten. Velg en av tjenestene under.</p>}
          <div className="ks-visual-cards">
            {serviceCatalog.map((item,index) => (
              <a className="ks-visual-card" href={servicePageHref(item.id, pathname)} key={item.id}>
                <img src={serviceImages[index]} alt="" aria-hidden="true" />
                <div className="ks-visual-card-shade" />
                <span className="ks-number">{item.number}</span>
                <div className="ks-visual-card-copy"><p>{item.category}</p><h3>{item.name}</h3><p className="ks-visual-intro">{item.intro}</p><div><span>{item.price}</span><span className="ks-arrow">→</span></div></div>
              </a>
            ))}
          </div>
          <p className="ks-footnote">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Du får et konkret tilbud før vi starter.</p>
        </div>
      </section>

      <section className="ks-services-principle">
        <div className="ks-container ks-principle-grid"><div><p className="ks-label">Slik tenker vi</p><h2>Godt design skal gjøre jobben enklere.</h2></div><div><p>Nettsiden skal ikke bare se gjennomført ut. Den skal gjøre det tydelig hvem dere er, hva dere tilbyr og hva kunden skal gjøre videre.</p><a href={serviceEmailHref("nettside")} className="ks-text-link">Fortell oss om prosjektet <span>→</span></a></div></div>
      </section>

      <section className="ks-bottom"><div className="ks-container ks-bottom-inner"><div><p className="ks-label">Klar for neste steg?</p><h2>La oss skape noe bra sammen.</h2><p>Fortell oss kort hva bedriften trenger, så tar vi det derfra.</p></div><a className="ks-button ks-button-gold" href={serviceEmailHref("nettside")}>Ta kontakt <span>→</span></a></div></section>
    </div>
  );
}
