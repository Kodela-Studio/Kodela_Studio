const focusAreas = [
  { number: "01", title: "Nettsider", text: "Struktur, design og utvikling samlet i én løsning, tilpasset bedriften og kundene som skal bruke den." },
  { number: "02", title: "Brukeropplevelse", text: "Tydelige kontaktveier, gjennomtenkt innhold og en opplevelse som fungerer like godt på mobil som på desktop." },
  { number: "03", title: "Visuelt uttrykk", text: "Et helhetlig digitalt uttrykk med typografi, farger og detaljer som bygger gjenkjennelse og tillit." },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-kodela-dark px-6 py-28 text-kodela-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3rem] text-kodela-gold">Arbeidet vårt</p>
            <h2 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">Gjennomtenkt fra første skisse til ferdig løsning.</h2>
          </div>
          <p className="max-w-xl leading-8 text-kodela-muted lg:justify-self-end">Porteføljen vår bygges nå. Frem til vi publiserer de første kundecaseene, viser vi heller hva vi legger vekt på i hvert prosjekt enn å fylle siden med eksempelbedrifter.</p>
        </div>

        <div className="mt-16 grid border-y border-white/10 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <article key={item.number} className={`min-h-[300px] py-10 md:p-10 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}>
              <span className="text-xs tracking-[0.2em] text-kodela-gold">{item.number}</span>
              <h3 className="mt-16 text-2xl font-light">{item.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-kodela-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="border border-kodela-gold px-8 py-4 text-xs uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-kodela-gold hover:text-kodela-black">Start et prosjekt</a>
        </div>
      </div>
    </section>
  );
}
