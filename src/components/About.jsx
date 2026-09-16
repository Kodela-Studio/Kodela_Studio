const teamMembers = [
  { name: "Anna", role: "Utvikling & grafisk design", text: "Kombinerer utvikling med et visuelt blikk og jobber med å gi løsningene et tydelig, gjennomført uttrykk." },
  { name: "Helena", role: "Utvikling & UX-design", text: "Jobber med struktur, utvikling og brukeropplevelse, slik at løsningene blir intuitive, tydelige og enkle å bruke." },
  { name: "Janina", role: "Utvikling & sikkerhet", text: "Har fokus på utvikling, teknisk kvalitet og sikkerhet, slik at løsningene får et solid fundament." },
];

const principles = [
  ["Direkte kontakt", "Du snakker med menneskene som faktisk designer og utvikler løsningen."],
  ["Riktig omfang", "Vi starter med behovet og bygger det som gir mening for bedriften, uten unødvendige funksjoner."],
  ["Én helhet", "Design, brukeropplevelse og teknologi utvikles sammen, ikke som separate deler."],
];

export default function About({ page = false }) {
  if (!page) {
    return (
      <section id="about" className="border-t border-white/10 bg-kodela-black px-6 py-20 text-kodela-cream sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end lg:gap-24">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Kodela Studio</p><h2 className="max-w-3xl text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-6xl">Tre perspektiver.<br/>Én tydelig retning.</h2></div>
            <div className="max-w-xl lg:justify-self-end"><p className="mb-0 text-base leading-8 text-kodela-muted">Vi kombinerer utvikling, brukeropplevelse, grafisk design og sikkerhet i ett lite team.</p><a href="/om-oss" className="mt-6 inline-block border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.17em]">Bli kjent med Kodela <span className="ml-4 text-kodela-gold">→</span></a></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-kodela-black pt-24 text-kodela-cream">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-4vw] top-1/2 hidden -translate-y-1/2 select-none text-[clamp(9rem,22vw,22rem)] font-light leading-none tracking-[-.09em] text-white/[.018] lg:block">K</div>
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-8 text-[10px] uppercase tracking-[.36em] text-kodela-gold">Om Kodela Studio</p>
          <h1 className="max-w-6xl text-[clamp(3.7rem,8vw,7.8rem)] font-light leading-[.9] tracking-[-.065em]">Tre mennesker.<br/><span className="text-kodela-gold">Ulike styrker.</span><br/>Én retning.</h1>
          <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.2fr_.62fr] lg:gap-24">
            <p className="mb-0 max-w-2xl text-xl font-light leading-9 text-zinc-200 sm:text-2xl sm:leading-10">Vi bygger digitale løsninger som skal være like tydelige å bruke som de er gjennomtenkte å se på.</p>
            <p className="mb-0 max-w-md text-sm leading-7 text-kodela-muted lg:justify-self-end">Kodela samler utvikling, design, brukeropplevelse og sikkerhet i ett lite team. Det betyr færre mellomledd og tettere samarbeid fra idé til ferdig løsning.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1fr] lg:gap-24">
          <div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Hvorfor Kodela</p><h2 className="max-w-lg text-4xl font-light leading-[1.05] tracking-[-.045em] sm:text-5xl">Et lite byrå med plass til å tenke helhetlig.</h2></div>
          <div className="max-w-2xl text-base leading-8 text-kodela-muted lg:pt-8"><p>Kodela Studio ble startet av tre utviklere med forskjellige faglige styrker og et felles syn på godt digitalt arbeid.</p><p className="mt-6">Vi ønsket en arbeidsmåte der de som forstår løsningen også er de som møter kunden. Der design og teknologi utvikles sammen, og der prosjektet ikke blir større eller mer komplisert enn det trenger å være.</p><p className="mt-6 text-zinc-200">Hos oss jobber du direkte med teamet som bygger løsningen din.</p></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end lg:gap-20 sm:mb-16"><div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Menneskene bak</p><h2 className="max-w-4xl text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Tre faglige perspektiver.<br/>Samme bord.</h2></div><p className="mb-0 max-w-sm text-sm leading-7 text-kodela-muted lg:justify-self-end">Alle tre er involvert i hvordan Kodela tenker, bygger og leverer.</p></div>
          <div className="border-t border-white/15">
            {teamMembers.map((member, index) => (
              <article key={member.name} className="group grid gap-5 border-b border-white/15 py-8 transition-colors duration-300 hover:bg-white/[.018] sm:grid-cols-[50px_.62fr_1fr] sm:items-start sm:gap-8 sm:px-2 lg:py-11">
                <span className="pt-2 text-[9px] tracking-[.22em] text-kodela-gold">0{index + 1}</span>
                <div><h3 className="mb-3 text-3xl font-light tracking-[-.045em] sm:text-4xl">{member.name}</h3><p className="mb-0 text-[9px] uppercase tracking-[.17em] text-[#e2bd79]">{member.role}</p></div>
                <p className="mb-0 max-w-xl text-sm leading-7 text-kodela-muted sm:pt-2">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.68fr_1fr] lg:gap-24">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Slik jobber vi</p><h2 className="max-w-lg text-4xl font-light leading-[1.05] tracking-[-.045em] sm:text-5xl">Tett nok til å forstå. Strukturert nok til å levere.</h2></div>
            <div className="border-t border-white/15">
              {principles.map(([title, text], index) => <div key={title} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[42px_155px_1fr] sm:gap-5"><span className="text-[9px] tracking-[.18em] text-kodela-gold">0{index + 1}</span><h3 className="mb-0 text-base font-normal text-zinc-100">{title}</h3><p className="mb-0 max-w-lg text-sm leading-7 text-kodela-muted">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0a0a] px-6 py-20 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#c9a66b]/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl"><p className="mb-7 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Vår tilnærming</p><p className="max-w-6xl text-[clamp(2.8rem,6.2vw,6rem)] font-light leading-[.98] tracking-[-.055em]">Vi bygger ikke mer<br className="hidden sm:block"/> enn nødvendig. <span className="text-kodela-gold">Vi bygger det som betyr noe.</span></p></div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-t border-white/15 pt-14 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-16">
            <div className="max-w-4xl"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Neste steg</p><h2 className="text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Har du noe du vil bygge?</h2><p className="mt-6 mb-0 max-w-xl text-sm leading-7 text-kodela-muted">Fortell oss om bedriften, ideen eller problemet du prøver å løse. Du trenger ikke ha resten klart.</p></div>
            <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="w-fit border border-kodela-gold px-8 py-5 text-[10px] uppercase tracking-[.18em] transition duration-300 hover:bg-kodela-gold hover:text-kodela-black">Start en samtale <span className="ml-6">→</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
