const teamMembers = [
  { name: "Anna", role: "Utvikling & grafisk design", text: "Visuelt uttrykk og utvikling." },
  { name: "Helena", role: "Utvikling & UX-design", text: "Struktur, brukeropplevelse og utvikling." },
  { name: "Janina", role: "Utvikling & sikkerhet", text: "Teknisk kvalitet, sikkerhet og utvikling." },
];

export default function About({ page = false }) {
  if (!page) {
    return (
      <section id="about" className="border-t border-white/10 bg-kodela-black px-6 py-20 text-kodela-cream sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end lg:gap-24">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Kodela Studio</p><h2 className="max-w-3xl text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-6xl">Tre perspektiver.<br/>Én tydelig retning.</h2></div>
            <div className="max-w-xl lg:justify-self-end"><p className="mb-0 text-base leading-8 text-kodela-muted">Et lite digitalt byrå der du jobber direkte med menneskene som bygger løsningen din.</p><a href="/om-oss" className="mt-6 inline-block border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.17em]">Bli kjent med oss <span className="ml-4 text-kodela-gold">→</span></a></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-kodela-black pt-24 text-kodela-cream">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-3vw] top-1/2 hidden -translate-y-1/2 select-none text-[19rem] font-light leading-none tracking-[-.09em] text-white/[.018] lg:block">K</div>
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-[10px] uppercase tracking-[.34em] text-kodela-gold">Om Kodela Studio</p>
          <h1 className="max-w-5xl text-[clamp(3.3rem,7vw,6.8rem)] font-light leading-[.92] tracking-[-.06em]">Lite team.<br/><span className="text-kodela-gold">Tett samarbeid.</span></h1>
          <div className="mt-10 grid gap-6 border-t border-white/15 pt-7 lg:grid-cols-[1fr_.72fr] lg:gap-20">
            <p className="mb-0 max-w-2xl text-lg font-light leading-8 text-zinc-200 sm:text-xl">Kodela er et digitalt byrå drevet av tre utviklere med ulike faglige styrker. Vi lager nettsider og digitale løsninger med fokus på design, brukeropplevelse og solid utvikling.</p>
            <p className="mb-0 max-w-md text-sm leading-7 text-kodela-muted lg:justify-self-end">Hos oss slipper du lange kommunikasjonslinjer. Du snakker direkte med teamet som planlegger, designer og bygger løsningen.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.62fr_1fr] lg:gap-20">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Slik er det å jobbe med oss</p><h2 className="max-w-md text-3xl font-light leading-[1.08] tracking-[-.04em] sm:text-4xl">En enkel prosess. Mennesker du kjenner.</h2></div>
            <div className="grid gap-7 sm:grid-cols-3">
              <div className="border-t border-white/15 pt-5"><h3 className="mb-3 text-base font-normal">Direkte kontakt</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Du snakker med oss som faktisk gjør jobben.</p></div>
              <div className="border-t border-white/15 pt-5"><h3 className="mb-3 text-base font-normal">Tydelige rammer</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Du vet hva vi skal lage og hva det vil koste før vi starter.</p></div>
              <div className="border-t border-white/15 pt-5"><h3 className="mb-3 text-base font-normal">Bygget for behovet</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Vi anbefaler det som gir mening, ikke mer enn du trenger.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Menneskene bak Kodela</p><h2 className="mb-0 text-3xl font-light tracking-[-.04em] sm:text-4xl">Tre styrker. Ett team.</h2></div><p className="mb-0 max-w-md text-sm leading-7 text-kodela-muted">Vi jobber sammen gjennom prosjektet, slik at design, opplevelse og teknologi henger sammen.</p></div>
          <div className="grid border-t border-white/15 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <article key={member.name} className={`py-7 md:px-7 md:py-8 ${index > 0 ? "border-t border-white/15 md:border-l md:border-t-0" : ""}`}>
                <span className="text-[9px] tracking-[.2em] text-kodela-gold">0{index + 1}</span>
                <h3 className="mb-2 mt-7 text-3xl font-light tracking-[-.04em]">{member.name}</h3>
                <p className="mb-5 text-[9px] uppercase tracking-[.15em] text-[#e2bd79]">{member.role}</p>
                <p className="mb-0 text-sm leading-7 text-kodela-muted">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl"><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Ta kontakt</p><h2 className="text-3xl font-light leading-[1.06] tracking-[-.04em] sm:text-5xl">Har du et prosjekt i tankene?</h2><p className="mt-5 mb-0 max-w-xl text-sm leading-7 text-kodela-muted">Fortell oss kort hva bedriften trenger. Vi svarer med hva vi tror er en god vei videre.</p></div>
          <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="w-fit bg-kodela-gold px-8 py-5 text-[10px] uppercase tracking-[.18em] text-kodela-black transition duration-300 hover:bg-[#dab77c]">Start en samtale <span className="ml-6">→</span></a>
        </div>
      </section>
    </main>
  );
}
