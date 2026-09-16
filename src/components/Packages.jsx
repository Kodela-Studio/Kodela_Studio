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
      <section className="relative min-h-[680px] overflow-hidden border-b border-white/10 lg:min-h-[760px]">
        <img src={serviceOne} alt="Digital løsning fra Kodela Studio" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-6 pb-16 pt-24 lg:min-h-[760px] lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-[10px] uppercase tracking-[.34em] text-kodela-gold">Tjenester · Kodela Studio</p>
            <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.8rem)] font-light leading-[.92] tracking-[-.06em]">Det digitale grunnlaget for bedrifter som vil <span className="text-kodela-gold">videre.</span></h1>
            <div className="mt-9 grid max-w-3xl gap-7 border-t border-white/20 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="mb-0 max-w-xl text-base leading-8 text-zinc-300">Nettsider, booking og videre oppfølging. Tydelige løsninger bygget rundt det bedriften faktisk trenger.</p>
              <a href="#tjenester" className="w-fit border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.18em]">Utforsk tjenestene <span className="ml-4 text-kodela-gold">↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="tjenester" className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-20 sm:mb-20">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Hva vi gjør</p><h2 className="max-w-3xl text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Tre tjenester. Ett digitalt uttrykk som henger sammen.</h2></div>
            <p className="mb-0 max-w-md text-sm leading-7 text-kodela-muted lg:justify-self-end">Start med nettsiden, legg til det bedriften trenger og behold muligheten til å få hjelp videre.</p>
          </div>

          {selectedId && <p role="status" className="mb-10 border-l border-kodela-gold bg-white/5 p-5 text-sm text-zinc-300">Vi fant ikke denne tjenesten. Se tjenestene våre under.</p>}

          <div className="grid gap-5 lg:grid-cols-12 lg:auto-rows-[290px]">
            {serviceCatalog.map((item, index) => {
              const layout = index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5 lg:row-span-1";
              return (
                <a key={item.id} href={servicePageHref(item.id, pathname)} className={`group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#151515] ${layout}`}>
                  <img src={serviceImages[index]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />
                  <div className="relative flex h-full min-h-[430px] flex-col justify-end p-7 sm:p-9 lg:min-h-0">
                    <p className="mb-auto text-[10px] uppercase tracking-[.24em] text-kodela-gold">{item.category}</p>
                    <div className={index === 0 ? "max-w-xl" : "max-w-md"}>
                      <h3 className={`${index === 0 ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"} font-light tracking-[-.04em]`}>{item.name}</h3>
                      <p className="mt-4 mb-0 text-sm leading-7 text-zinc-300">{item.intro}</p>
                      <div className="mt-6 flex items-end justify-between gap-5 border-t border-white/20 pt-5">
                        <div><p className="mb-1 text-base text-kodela-gold">{item.price}</p><p className="mb-0 text-[9px] text-zinc-400">{item.shortIncludes.join(" · ")}</p></div>
                        <span className="shrink-0 text-xl text-kodela-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-6 max-w-3xl text-[11px] leading-6 text-zinc-600">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Endelig pris avtales før prosjektet starter.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24">
          <div className="max-w-xl">
            <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Fra idé til ferdig løsning</p>
            <h2 className="text-4xl font-light leading-[1.05] tracking-[-.045em] sm:text-5xl">Ryddig å starte. Enkelt å bygge videre.</h2>
            <p className="mt-6 text-base leading-8 text-kodela-muted">Vi avklarer hva du trenger først, bygger løsningen rundt bedriften og gjør det tydelig hva som er inkludert. Når behovene endrer seg, kan løsningen utvikles videre.</p>
            <div className="mt-9 border-t border-white/15">
              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-white/15 py-5"><span className="text-[10px] uppercase tracking-[.18em] text-kodela-gold">Før</span><p className="mb-0 text-sm text-zinc-300">Behov, omfang og pris avklares.</p></div>
              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-white/15 py-5"><span className="text-[10px] uppercase tracking-[.18em] text-kodela-gold">Underveis</span><p className="mb-0 text-sm text-zinc-300">Du ser løsningen og gir samlet tilbakemelding.</p></div>
              <div className="grid grid-cols-[110px_1fr] gap-5 border-b border-white/15 py-5"><span className="text-[10px] uppercase tracking-[.18em] text-kodela-gold">Etterpå</span><p className="mb-0 text-sm text-zinc-300">Vi kan fortsatt hjelpe når noe skal endres.</p></div>
            </div>
          </div>
          <figure className="relative aspect-[4/5] max-h-[700px] overflow-hidden bg-[#151515] lg:justify-self-end"><img src={serviceThree} alt="Digital designprosess" className="h-full w-full object-cover object-center" /><div className="absolute inset-0 ring-1 ring-inset ring-white/10" /></figure>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl border-t border-white/15 pt-14 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Neste steg</p><h2 className="text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Har du en idé? Fortell oss hva du vil få til.</h2><p className="mt-6 mb-0 max-w-xl text-sm leading-7 text-kodela-muted">Du trenger ikke ha løsningen klar. Vi hjelper deg å finne et fornuftig utgangspunkt.</p></div>
            <a href={serviceEmailHref("prosjekt")} className="w-fit border border-kodela-gold px-8 py-5 text-[10px] uppercase tracking-[.18em] text-kodela-cream transition hover:bg-kodela-gold hover:text-kodela-black">Start en samtale <span className="ml-6">→</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
