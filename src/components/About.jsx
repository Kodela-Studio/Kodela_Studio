import AnnaProfile from "../assets/Anna-profile.jpg";
import HelenaProfile from "../assets/Helena-profile.jpg";
import JaninaProfile from "../assets/Janina-profile.jpg";

const teamMembers = [
  {
    name: "Anna",
    role: "Utvikling & grafisk design",
    image: AnnaProfile,
    text: "Anna kombinerer teknisk utvikling med et sterkt visuelt blikk og jobber med å forme digitale løsninger som både fungerer og har et tydelig uttrykk.",
  },
  {
    name: "Helena",
    role: "Utvikling & UX-design",
    image: HelenaProfile,
    text: "Helena jobber i skjæringspunktet mellom utvikling, struktur og brukeropplevelse, med fokus på å gjøre digitale løsninger intuitive, tydelige og enkle å bruke.",
  },
  {
    name: "Janina",
    role: "Utvikling & sikkerhet",
    image: JaninaProfile,
    text: "Janina kombinerer utvikling med fokus på sikkerhet og teknisk kvalitet, og bidrar til at løsningene bygges på et solid fundament.",
  },
];

export default function About({ page = false }) {
  if (!page) {
    return (
      <section id="about" className="bg-kodela-black px-6 py-20 text-kodela-cream sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><p className="mb-5 text-xs uppercase tracking-[.32em] text-kodela-gold">Kodela Studio</p><h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-6xl">Tre perspektiver. Én tydelig retning.</h2></div>
            <div className="max-w-xl lg:justify-self-end"><p className="text-base leading-8 text-kodela-muted">Vi kombinerer utvikling, brukeropplevelse, grafisk design og sikkerhet. Det gjør at vi kan tenke helhetlig uten å gjøre prosessen unødvendig komplisert.</p><a href="/om-oss" className="mt-5 inline-block border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.17em]">Bli kjent med Kodela <span className="ml-4 text-kodela-gold">→</span></a></div>
          </div>
          <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
            {teamMembers.map((member) => <article key={member.name} className="group relative aspect-[4/5] overflow-hidden bg-kodela-dark"><img src={member.image} alt={`${member.name} i Kodela Studio`} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/><div className="absolute bottom-0 left-0 right-0 p-7"><h3 className="text-2xl font-light">{member.name}</h3><p className="mt-2 text-xs uppercase tracking-[.12em] text-kodela-muted">{member.role}</p></div></article>)}
          </div>
          <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-xs uppercase tracking-[.28em] text-kodela-gold">Klar for neste steg?</p><h2 className="text-3xl font-light tracking-[-.03em] sm:text-5xl">La oss skape noe bra sammen.</h2></div><a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="shrink-0 bg-kodela-gold px-8 py-4 text-center text-xs uppercase tracking-[.16em] text-kodela-black">Ta kontakt <span className="ml-4">→</span></a></div>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-kodela-black pt-24 text-kodela-cream">
      <section className="border-b border-white/10 px-6 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-[10px] uppercase tracking-[.34em] text-kodela-gold">Om Kodela Studio</p>
          <h1 className="max-w-5xl text-[clamp(3.5rem,7.5vw,7rem)] font-light leading-[.92] tracking-[-.06em]">Tre mennesker.<br/><span className="text-kodela-gold">Ulike styrker.</span><br/>Én retning.</h1>
          <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1fr_.72fr] lg:items-start">
            <p className="mb-0 max-w-2xl text-xl font-light leading-9 text-zinc-200 sm:text-2xl sm:leading-10">Kodela Studio er et digitalt byrå bygget rundt en enkel idé: gode digitale løsninger skal være gjennomtenkte, forståelige og laget for bedriften som faktisk skal bruke dem.</p>
            <p className="mb-0 max-w-lg text-sm leading-7 text-kodela-muted lg:justify-self-end">Vi kombinerer utvikling, design, brukeropplevelse og sikkerhet i ett lite team. Det gir færre mellomledd, tettere samarbeid og en løsning hvor helheten får styre.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1fr] lg:gap-24">
          <div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Hvorfor Kodela</p><h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-.045em] sm:text-5xl">Vi ville bygge annerledes.</h2></div>
          <div className="max-w-2xl text-base leading-8 text-kodela-muted lg:pt-9"><p>Kodela Studio ble startet av tre utviklere med ulike faglige styrker, men med samme syn på hva en god digital løsning bør være.</p><p className="mt-6">Vi ønsket å samle utvikling, design, brukeropplevelse og sikkerhet i ett team, uten unødvendige mellomledd mellom kunden og menneskene som faktisk gjør jobben.</p><p className="mt-6 text-zinc-200">Derfor jobber du direkte med oss, fra de første idéene til løsningen er publisert.</p></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-20 sm:mb-20"><div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Menneskene bak</p><h2 className="max-w-3xl text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Tre fagområder som møtes i samme løsning.</h2></div><p className="mb-0 max-w-md text-sm leading-7 text-kodela-muted lg:justify-self-end">Vi jobber tett sammen gjennom hele prosjektet, slik at design, opplevelse og teknologi ikke blir tre separate deler.</p></div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-5">
            {teamMembers.map((member, index) => (
              <article key={member.name} className={`${index === 1 ? "md:mt-14" : ""}`}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-kodela-dark"><img src={member.image} alt={`${member.name} i Kodela Studio`} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"/><div className="absolute inset-0 ring-1 ring-inset ring-white/10"/></div>
                <div className="border-b border-white/15 py-6"><div className="flex items-baseline justify-between gap-4"><h3 className="mb-0 text-3xl font-light tracking-[-.035em]">{member.name}</h3><span className="text-[9px] uppercase tracking-[.16em] text-kodela-gold">{member.role}</span></div><p className="mt-5 mb-0 text-sm leading-7 text-kodela-muted">{member.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1fr] lg:gap-24"><div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Måten vi jobber på</p><h2 className="text-4xl font-light leading-[1.05] tracking-[-.045em] sm:text-5xl">Lite team. Tett samarbeid.</h2></div><div className="border-t border-white/15"><div className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[150px_1fr]"><h3 className="mb-0 text-base font-normal text-zinc-100">Direkte kontakt</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Du snakker med menneskene som faktisk designer og utvikler løsningen.</p></div><div className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[150px_1fr]"><h3 className="mb-0 text-base font-normal text-zinc-100">Riktig omfang</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Vi starter med behovet og finner ut hva som faktisk trengs, i stedet for å fylle prosjektet med funksjoner uten en tydelig hensikt.</p></div><div className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[150px_1fr]"><h3 className="mb-0 text-base font-normal text-zinc-100">Én helhet</h3><p className="mb-0 text-sm leading-7 text-kodela-muted">Utseende, brukeropplevelse og utvikling må fungere sammen. Derfor ser vi på hele løsningen, ikke bare hver vår del.</p></div></div></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-6 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl"><p className="mb-7 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Vår tilnærming</p><p className="max-w-6xl text-[clamp(2.8rem,6.5vw,6.2rem)] font-light leading-[.98] tracking-[-.055em]">Vi bygger ikke mer enn nødvendig.<br/><span className="text-kodela-gold">Vi bygger det som betyr noe.</span></p></div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/15 pt-14 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-16"><div className="max-w-4xl"><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Har du noe du vil bygge?</p><h2 className="text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Fortell oss hvor du vil. Vi finner veien dit sammen.</h2><p className="mt-6 mb-0 max-w-xl text-sm leading-7 text-kodela-muted">Du trenger ikke ha løsningen klar. Fortell oss om bedriften, ideen eller problemet du prøver å løse.</p></div><a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="w-fit border border-kodela-gold px-8 py-5 text-[10px] uppercase tracking-[.18em] transition hover:bg-kodela-gold hover:text-kodela-black">Start en samtale <span className="ml-6">→</span></a></div>
      </section>
    </main>
  );
}
