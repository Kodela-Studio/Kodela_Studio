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

          <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
            {serviceCatalog.map((item, index) => {
              const layout = index === 0 ? "lg:col-span-7 lg:row-span-2 lg:min-h-[700px]" : "lg:col-span-5 lg:min-h-[340px]";
              const imagePosition = index === 0 ? "object-center" : index === 1 ? "object-[center_45%]" : "object-center";
              return (
                <a key={item.id} href={servicePageHref(item.id, pathname)} aria-label={`Se tjenesten ${item.name}`} className={`group relative min-h-[470px] overflow-hidden border border-white/10 bg-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf8a] ${layout}`}>
                  <img src={serviceImages[index]} alt="" aria-hidden="true" className={`absolute inset-0 h-full w-full object-cover ${imagePosition} transition duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition duration-500 group-hover:via-black/50" />
                  <div className="relative flex h-full min-h-[470px] flex-col p-7 sm:p-8 lg:min-h-0">
                    <p className="w-fit border border-[#f0cf8a]/50 bg-black/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#f0cf8a] shadow-[0_4px_18px_rgba(0,0,0,.3)] backdrop-blur-md">{item.category}</p>
                    <div className="mt-auto pt-10">
                      <h3 className={`${index === 0 ? "text-4xl sm:text-5xl" : "text-3xl sm:text-[2.2rem]"} font-light leading-none tracking-[-.04em]`}>{item.name}</h3>
                      <p className={`mt-4 mb-0 text-sm leading-7 text-zinc-100 ${index === 0 ? "max-w-xl" : "max-w-[440px]"}`}>{item.intro}</p>
                      <div className="mt-6 border-t border-white/25 pt-5">
                        <div className="flex items-end justify-between gap-6">
                          <div><p className="mb-1 text-lg font-semibold text-[#f0cf8a] drop-shadow-[0_2px_10px_rgba(0,0,0,.95)]">{item.price}</p><p className="mb-0 text-[10px] leading-5 text-zinc-300">{item.priceNote}</p></div>
                          <span className="flex shrink-0 items-center gap-3 text-[10px] font-semibold uppercase tracking-[.14em] text-white"><span className="hidden opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 xl:inline">Se tjenesten</span><span className="text-xl text-[#f0cf8a] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1">→</span></span>
                        </div>
                        <p className="mt-4 mb-0 max-w-xl text-[11px] leading-5 text-zinc-200 sm:text-xs">{item.shortIncludes.join(" · ")}</p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <p className="mt-6 max-w-3xl text-[11px] leading-6 text-zinc-600">Alle priser er eks. mva. Domene, hosting og eventuelle abonnementer kommer i tillegg. Endelig pris avtales før prosjektet starter.</p>

          <div className="mt-14 grid gap-7 border-y border-white/15 py-9 sm:mt-16 sm:py-10 lg:grid-cols-[.8fr_1fr] lg:items-center lg:gap-20">
            <div><p className="mb-4 text-[10px] uppercase tracking-[.28em] text-kodela-gold">Usikker på hvor du skal starte?</p><h3 className="mb-0 text-3xl font-light leading-tight tracking-[-.035em] sm:text-4xl">Start med behovet, ikke teknologien.</h3></div>
            <div className="max-w-xl lg:justify-self-end"><p className="mb-5 text-sm leading-7 text-kodela-muted">For de fleste bedrifter er nettsiden utgangspunktet. Booking kan legges til når kundene skal kunne bestille tid, og Oppfølging passer når du ønsker hjelp etter lansering.</p><a href={serviceEmailHref("prosjekt")} className="inline-block border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.16em]">Fortell oss om bedriften din <span className="ml-4 text-kodela-gold">→</span></a></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#101010] px-6 pb-20 pt-12 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-20">
          <div className="max-w-xl lg:pt-12">
            <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Fra idé til ferdig løsning</p>
            <h2 className="text-4xl font-light leading-[1.05] tracking-[-.045em] sm:text-5xl">Ryddig å starte. Enkelt å bygge videre.</h2>
            <p className="mt-6 text-base leading-8 text-kodela-muted">Vi avklarer hva du trenger først, bygger løsningen rundt bedriften og gjør det tydelig hva som er inkludert. Når behovene endrer seg, kan løsningen utvikles videre.</p>
            <div className="mt-9 border-t border-white/15">
              <div className="grid grid-cols-[92px_1fr] gap-5 border-b border-white/15 py-5 sm:grid-cols-[110px_1fr]"><span className="text-[10px] uppercase tracking-[.18em] text-kodela-gold">Før</span><p className="mb-0 text-sm text-zinc-300">Behov, omfang og pris avklares.</p></div>
              <div className="grid grid-cols-[92px_1fr] gap-5 border-b border-white/15 py-5 sm:grid-cols-[110px_1fr]"><span className="text-[10px] uppercase tracking-[.18em] text-kodela-gold">Underveis</span><p className="mb-0 text-sm text-zinc-300">Du ser løsningen og gir samlet tilbakemelding.</p></div>
              <div className="grid grid-cols-[92px_1fr] gap-5 border-b border-white/15 py-5 sm:grid-cols-[110px_1fr]"><span className="text-[10px] uppercase tracking-[.18em] text-kodela-gold">Etterpå</span><p className="mb-0 text-sm text-zinc-300">Vi kan fortsatt hjelpe når noe skal endres.</p></div>
            </div>
          </div>
          <figure className="relative aspect-[4/5] max-h-[650px] overflow-hidden bg-[#151515] lg:justify-self-end"><img src={serviceThree} alt="Digital designprosess" className="h-full w-full object-cover object-center" /><div className="absolute inset-0 ring-1 ring-inset ring-white/10" /></figure>
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
