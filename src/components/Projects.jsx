import studioImage from "../assets/kodela-studio-workspace.png";

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden bg-[#0d0d0d] text-kodela-cream">
      <div className="grid lg:min-h-[680px] lg:grid-cols-2">
        <div className="relative min-h-[440px] overflow-hidden border-y border-white/10 lg:min-h-full lg:border-r lg:border-t-0">
          <img src={studioImage} alt="Kodela Studio kreativt arbeidsmiljø" className="absolute inset-0 h-full w-full object-cover object-center transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />
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
