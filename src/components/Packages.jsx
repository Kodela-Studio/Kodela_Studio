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
    <main className="bg-[#0d0d0d] pt-24 text-kodela-cream">
      <section className="border-b border-white/10 px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Tjenester</p>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.65fr] lg:items-end lg:gap-20">
            <h1 className="max-w-4xl text-[clamp(3.2rem,7vw,6.5rem)] font-light leading-[.95] tracking-[-.055em]">Det vi kan hjelpe bedriften din med.</h1>
            <div className="pb-2">
              <p className="max-w-md text-base leading-8 text-kodela-muted">Tydelige digitale løsninger for små bedrifter. Vi starter med behovet, holder omfanget forståelig og bygger noe som faktisk skal brukes.</p>
              <a href="#tjenester" className="mt-7 inline-block border-b border-kodela-gold/60 pb-2 text-[10px] uppercase tracking-[.18em]">Se tjenestene <span className="ml-4 text-kodela-gold">↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="tjenester" className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {selectedId && <p role="status" className="mb-10 border-l border-kodela-gold bg-white/5 p-5 text-sm text-zinc-300">Vi fant ikke denne tjenesten. Se tjenestene våre under.</p>}

          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {serviceCatalog.map((item, index) => (
              <article key={item.id} className="grid items-center gap-9 lg:grid-cols-2 lg:gap-20">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden bg-[#161616]">
                    <img src={serviceImages[index]} alt="" aria-hidden="true" className="h-full w-full object-cover object-center" />
                  </div>
                </div>

                <div className={`max-w-xl ${index % 2 ? "lg:order-1 lg:justify-self-end" : ""}`}>
                  <p className="mb-4 text-[10px] uppercase tracking-[.26em] text-kodela-gold">{item.category}</p>
                  <h2 className="text-4xl font-light tracking-[-.045em] sm:text-5xl">{item.name}</h2>
                  <p className="mt-5 text-lg leading-8 text-zinc-200">{item.heading}</p>
                  <p className="mt-4 text-sm leading-7 text-kodela-muted">{item.audience}</p>

                  <div className="mt-8 border-y border-white/10 py-5">
                    {item.shortIncludes.map((included) => <p key={included} className="mb-0 py-1.5 text-sm text-zinc-300">{included}</p>)}
                  </div>

                  <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div><p className="mb-1 text-xl text-kodela-gold">{item.price}</p><p className="mb-0 text-[10px] text-zinc-500">{item.priceNote}</p></div>
                    <a href={servicePageHref(item.id, pathname)} className="w-fit border-b border-white/20 pb-2 text-[10px] uppercase tracking-[.15em] transition hover:border-kodela-gold">Les mer <span className="ml-4 text-kodela-gold">→</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-16 max-w-3xl border-t border-white/10 pt-6 text-xs leading-6 text-zinc-500">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Endelig pris avtales før prosjektet starter.</p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#101010] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Har du et prosjekt i tankene?</p><h2 className="text-4xl font-light leading-tight tracking-[-.04em] sm:text-5xl">Fortell oss hva du trenger. Vi finner en god vei videre.</h2></div>
          <a href={serviceEmailHref("prosjekt")} className="w-fit bg-kodela-gold px-7 py-4 text-[10px] uppercase tracking-[.16em] text-kodela-black transition hover:bg-[#d8b77f]">Ta kontakt <span className="ml-5">→</span></a>
        </div>
      </section>
    </main>
  );
}
