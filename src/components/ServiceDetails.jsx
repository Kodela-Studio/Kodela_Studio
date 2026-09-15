import {
  serviceCatalog,
  servicePageHref,
  serviceEmailHref,
} from "../data/serviceCatalog";

export default function ServiceDetails({ service, pathname }) {
  return (
    <div className="ks-pages">
      <section className="ks-hero ks-detail-hero">
        <div className="ks-container">
          <nav className="ks-breadcrumb" aria-label="Brødsmulesti">
            <a href={servicePageHref(null, pathname)}>← Alle tjenester</a>
            <span aria-current="page">{service.name}</span>
          </nav>
          <div className="ks-detail-grid">
            <div>
              <p className="ks-label">{service.category}</p>
              <h1>{service.name}</h1>
              <p className="ks-lead">{service.intro}</p>
            </div>
            <aside
              className="ks-price-box"
              aria-label={`Pris for ${service.name.toLowerCase()}`}
            >
              <p className="ks-label">{service.name}</p>
              <p className="ks-price">{service.price}</p>
              <p className="ks-price-note">{service.priceNote}</p>
              <a
                className="ks-button ks-button-gold"
                href={serviceEmailHref(service.name)}
              >
                Spør om {service.name.toLowerCase()} ↗
              </a>
              <p className="ks-small">
                Vi avklarer innhold og pris før oppstart.
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="ks-light">
        <div className="ks-container ks-detail-content">
          <div className="ks-section-heading">
            <p className="ks-label">Dette får du</p>
            <h2>{service.heading}</h2>
            <p>{service.audience}</p>
          </div>
          <div className="ks-includes">
            {service.includes.map(([title, text], i) => (
              <article className="ks-include" key={title}>
                <span className="ks-number">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ks-practical">
            <article>
              <h3>Dette trenger vi fra deg</h3>
              <p>{service.preparation}</p>
            </article>
            <article>
              <h3>Pris og avgrensning</h3>
              <p>{service.costs}</p>
            </article>
          </div>
          <p className="ks-notice">{service.extra}</p>
        </div>
      </section>
      <section className="ks-process">
        <div className="ks-container">
          <p className="ks-label">Fra første prat til ferdig løsning</p>
          <h2>Slik jobber vi sammen.</h2>
          <div className="ks-steps">
            {service.steps.map(([title, text], i) => (
              <article key={title}>
                <span className="ks-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ks-light">
        <div className="ks-container ks-faq">
          <p className="ks-label">Greit å vite</p>
          <h2>Spørsmål om {service.name.toLowerCase()}.</h2>
          {service.questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="ks-bottom">
        <div className="ks-container">
          <div className="ks-bottom-inner">
            <div>
              <p className="ks-label">Neste steg</p>
              <h2>Skal vi se på behovet ditt?</h2>
              <p>
                Send oss noen linjer om bedriften og hva du ønsker hjelp med.
              </p>
            </div>
            <a
              className="ks-button ks-button-gold"
              href={serviceEmailHref(service.name)}
            >
              Ta kontakt ↗
            </a>
          </div>
          <nav className="ks-related" aria-label="Andre tjenester">
            {serviceCatalog
              .filter((item) => item.id !== service.id)
              .map((item) => (
                <a key={item.id} href={servicePageHref(item.id, pathname)}>
                  {item.name} →
                </a>
              ))}
            <a href={servicePageHref(null, pathname)}>Alle tjenester →</a>
          </nav>
        </div>
      </section>
    </div>
  );
}
