import { useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import { serviceCatalog, servicePageHref, serviceEmailHref } from "../data/serviceCatalog";
import serviceHero from "../assets/tjenester1.png";
import serviceMobile from "../assets/tjenester2.png";
import serviceLaptop from "../assets/tjenester3.png";
import "../styles/servicePages.css";

const serviceImages = [serviceLaptop, serviceMobile, serviceHero];

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
      <section className="ks-services-intro">
        <div className="ks-container ks-services-intro-grid">
          <div className="ks-services-intro-copy">
            <p className="ks-label">Tjenester</p>
            <h1>Det digitale grunnlaget bedriften din <span>trenger.</span></h1>
            <p className="ks-lead">Fra første nettside til booking og videre oppfølging. Vi bygger det viktigste først, og lar løsningen vokse når bedriften trenger mer.</p>
            <a className="ks-button ks-button-gold" href="#tjenester">Se tjenestene <span>↓</span></a>
          </div>
          <div className="ks-services-intro-visual">
            <img src={serviceHero} alt="Digitalt arbeid med nettside" />
            <div className="ks-services-intro-frame" aria-hidden="true" />
            <p>Strategi · design · utvikling</p>
          </div>
        </div>
      </section>

      <section id="tjenester" className="ks-services-section">
        <div className="ks-container">
          <div className="ks-services-heading">
            <div><p className="ks-label">Det vi tilbyr</p><h2>Enkelt å forstå. Enkelt å velge.</h2></div>
            <p>Tre tydelige tjenester uten en jungel av pakker. Vi finner omfanget sammen og gir deg en konkret pris før vi starter.</p>
          </div>
          {selectedId && <p role="status" className="ks-notice">Vi fant ikke denne tjenesten. Velg en av tjenestene under.</p>}
          <div className="ks-visual-cards">
            {serviceCatalog.map((item,index) => (
              <a className="ks-visual-card" href={servicePageHref(item.id, pathname)} key={item.id}>
                <img src={serviceImages[index]} alt="" aria-hidden="true" />
                <div className="ks-visual-card-shade" />
                <span className="ks-number">{item.number}</span>
                <div className="ks-visual-card-copy">
                  <p>{item.category}</p><h3>{item.name}</h3><p className="ks-visual-intro">{item.intro}</p>
                  <div><span>{item.price}</span><span className="ks-arrow">→</span></div>
                </div>
              </a>
            ))}
          </div>
          <p className="ks-footnote">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Du får et konkret tilbud før vi starter.</p>
        </div>
      </section>

      <section className="ks-service-feature">
        <div className="ks-container ks-service-feature-grid">
          <div className="ks-service-feature-image"><img src={serviceMobile} alt="Mobilvisning av en moderne nettside" /></div>
          <div className="ks-service-feature-copy">
            <p className="ks-label">Laget for virkeligheten</p>
            <h2>Like gjennomført på mobilen som på stor skjerm.</h2>
            <p>De fleste møter bedriften din på en skjerm. Derfor designer vi med tydelig innhold, raske kontaktveier og responsiv oppførsel som en selvfølgelig del av løsningen.</p>
            <div className="ks-mini-points"><span>Responsivt design</span><span>Tydelig struktur</span><span>Enkel kontaktvei</span></div>
          </div>
        </div>
      </section>

      <section className="ks-services-principle">
        <div className="ks-container ks-principle-grid">
          <div><p className="ks-label">Slik tenker vi</p><h2>Færre ting. Gjort skikkelig.</h2></div>
          <div><p>En god nettside trenger ikke være full av funksjoner. Den trenger et tydelig budskap, et uttrykk som passer bedriften og en vei videre som kunden forstår.</p><a href={serviceEmailHref("nettside")} className="ks-text-link">Fortell oss om prosjektet <span>→</span></a></div>
        </div>
      </section>

      <section className="ks-bottom"><div className="ks-container ks-bottom-inner"><div><p className="ks-label">Klar for neste steg?</p><h2>La oss skape noe bra sammen.</h2><p>Fortell oss kort hva bedriften trenger, så tar vi det derfra.</p></div><a className="ks-button ks-button-gold" href={serviceEmailHref("nettside")}>Ta kontakt <span>→</span></a></div></section>
    </div>
  );
}
