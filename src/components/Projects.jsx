export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden bg-[#0d0d0d] text-kodela-cream">
      <div className="grid lg:min-h-[650px] lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden border-y border-white/10 lg:min-h-full lg:border-r lg:border-t-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_38%,rgba(201,166,107,.18),transparent_22%),linear-gradient(145deg,#27231c,#111_52%,#080808)]" />
          <div className="absolute bottom-[13%] left-[12%] h-[45%] w-[72%] border border-white/10 bg-[#171614] shadow-[0_35px_90px_rgba(0,0,0,.5)]" />
          <div className="absolute bottom-[20%] left-[20%] h-[28%] w-[42%] border-l border-kodela-gold/35 bg-black/15" />
          <div className="absolute left-[15%] top-[14%] h-40 w-40 rounded-full bg-kodela-gold/10 blur-3xl" />
          <p className="absolute bottom-8 left-8 max-w-xs text-xs uppercase tracking-[.22em] text-kodela-gold sm:bottom-10 sm:left-10">Strategi · design · utvikling</p>
        </div>

        <div className="flex items-center px-6 py-20 sm:px-12 sm:py-24 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[.32em] text-kodela-gold">Mer enn bare en nettside</p>
            <h2 className="text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-6xl">Design som gjør bedriften lettere å velge.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-kodela-muted">Det visuelle uttrykket skal vekke interesse. Strukturen skal gjøre resten. Vi kombinerer begge deler for å skape en nettside som føles riktig for merkevaren og enkel for kunden.</p>
            <div className="mt-10 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[['Strategi','Vi finner det viktigste budskapet.'],['Design','Vi gir det et tydelig visuelt uttrykk.'],['Utvikling','Vi gjør løsningen rask og responsiv.']].map(([title,text])=><div key={title}><h3 className="text-base font-normal">{title}</h3><p className="mt-2 text-xs leading-6 text-kodela-muted">{text}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
