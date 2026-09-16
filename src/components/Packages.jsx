import { useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import { serviceCatalog, servicePageHref, serviceEmailHref } from "../data/serviceCatalog";
import serviceOne from "../assets/tjenester1.png";
import serviceThree from "../assets/tjenester3.png";
import "../styles/servicePages.css";

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
    <main className="bg-[#0d0d0d] pt-24 text-kodela-cream">
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Tjenester</p>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.65fr] lg:items-end lg:gap-20">
            <h1 className="max-w-4xl text-[clamp(3.1rem,6.8vw,6.25rem)] font-light leading-[.96] tracking-[-.055em]">Digitale løsninger, uten unødvendig kompleksitet.</h1>
            <p className="max-w-md pb-1 text-base leading-8 text-kodela-muted">Vi lager profesjonelle nettsider for små bedrifter, kobler på booking når det trengs og tilbyr oppfølging etter lansering.</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <figure className="relative aspect-[16/7] min-h-[300px] overflow-hidden bg-[#151515]">
            <img src={serviceOne} alt="Digitalt arbeid for Kodela Studio" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </figure>
        </div>
      </section>

      <section id="tjenester" className="border-y border-white/10 bg-[#101010] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20 sm:mb-16">
            <div><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Våre tjenester</p><h2 className="max-w-2xl text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-5xl">Det viktigste, samlet på ett sted.</h2></div>
            <p className="max-w-md text-sm leading-7 text-kodela-muted lg:justify-self-end">Velg det du trenger nå. Løsningen kan utvides senere dersom bedriften eller behovene endrer seg.</p>
          </div>

          {selectedId && <p role="status" className="mb-8 border-l border-kodela-gold bg-white/5 p-5 text-sm text-zinc-300">Vi fant ikke denne tjenesten. Se tjenestene våre under.</p>}

          <div className="border-t border-white/15">
            {serviceCatalog.map((item) => (
              <article key={item.id} className="grid gap-6 border-b border-white/15 py-10 sm:py-12 lg:grid-cols-[.8fr_1.15fr_.55fr] lg:items-start lg:gap-16">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[.24em] text-kodela-gold">{item.category}</p>
                  <h3 className="text-3xl font-light tracking-[-.035em] sm:text-4xl">{item.name}</h3>
                </div>

                <div className="max-w-xl">
                  <p className="mb-5 text-base leading-7 text-zinc-200">{item.intro}</p>
                  <p className="mb-0 text-xs leading-6 text-zinc-500">{item.shortIncludes.join(" · ")}</p>
                </div>

                <div className="flex items-end justify-between gap-8 lg:flex-col lg:items-end lg:text-right">
                  <div><p className="mb-1 text-lg text-kodela-gold">{item.price}</p><p className="mb-0 text-[10px] text-zinc-500">{item.priceNote}</p></div>
                  <a href={servicePageHref(item.id, pathname)} className="whitespace-nowrap border-b border-white/20 pb-2 text-[10px] uppercase tracking-[.15em] transition hover:border-kodela-gold">Se tjenesten <span className="ml-4 text-kodela-gold">→</span></a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-[11px] leading-6 text-zinc-600">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Endelig pris avtales før prosjektet starter.</p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl sm:mb-16"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Fra idé til ferdig løsning</p><h2 className="text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-5xl">En ryddig prosess hele veien.</h2></div>
          <div className="grid border-y border-white/15 md:grid-cols-3">
            <div className="py-8 md:pr-10"><h3 className="mb-3 text-lg font-normal">Tydelig fra start</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Vi avklarer behov, omfang og pris før arbeidet starter.</p></div>
            <div className="border-t border-white/15 py-8 md:border-l md:border-t-0 md:px-10"><h3 className="mb-3 text-lg font-normal">Bygget rundt bedriften</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Design og innhold tilpasses virksomheten og det kundene faktisk trenger.</p></div>
            <div className="border-t border-white/15 py-8 md:border-l md:border-t-0 md:pl-10"><h3 className="mb-3 text-lg font-normal">Noen å kontakte etterpå</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Når løsningen er publisert kan vi fortsatt hjelpe når noe skal endres.</p></div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#101010] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1fr] lg:items-center lg:gap-24">
          <figure className="aspect-[4/3] overflow-hidden bg-[#151515]"><img src={serviceThree} alt="Digital designprosess" className="h-full w-full object-cover object-center" /></figure>
          <div className="max-w-xl"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Kodela Studio</p><h2 className="text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-5xl">Digitalt arbeid skal føles oversiktlig.</h2><p className="mt-6 text-base leading-8 text-kodela-muted">Du trenger ikke vite hvilken teknologi eller løsning som passer før du tar kontakt. Fortell oss hva bedriften trenger å få til, så gjør vi veien videre konkret.</p></div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Har du et prosjekt i tankene?</p><h2 className="text-4xl font-light leading-tight tracking-[-.04em] sm:text-5xl">Fortell oss hva du trenger.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-kodela-muted">Vi tar en prat om behovet og gir deg et tydelig forslag til løsning og pris.</p></div>
          <a href={serviceEmailHref("prosjekt")} className="w-fit bg-kodela-gold px-7 py-4 text-[10px] uppercase tracking-[.16em] text-kodela-black transition hover:bg-[#d8b77f]">Ta kontakt <span className="ml-5">→</span></a>
        </div>
      </section>
    </main>
  );
}
