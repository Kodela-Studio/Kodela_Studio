import ProjectShowcase from "./ProjectShowcase";

export default function Hero() {
  return (
    <main className="relative overflow-hidden bg-kodela-black pt-24 text-kodela-cream sm:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-kodela-gold/[0.08] blur-3xl sm:h-[620px] sm:w-[620px]" />

      <section className="relative px-6 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:flex lg:min-h-[calc(100vh-7rem)] lg:items-center lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          <div className="min-w-0">
            <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-kodela-gold sm:mb-6 sm:text-sm sm:tracking-[0.3rem]">Nettsider for små bedrifter</p>

            <h1 className="max-w-5xl text-[clamp(2.8rem,12vw,4.5rem)] font-light leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[clamp(4.2rem,6vw,6rem)]">
              Et bedre førsteinntrykk.
              <span className="mt-2 block text-kodela-gold">En enklere vei til kontakt.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-kodela-muted sm:mt-8 sm:text-lg sm:leading-8">
              Kodela Studio utvikler profesjonelle nettsider med tydelig struktur, gjennomtenkt design og en brukeropplevelse som gjør det enkelt å forstå hvem dere er og hva dere tilbyr.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="/packages" className="border border-kodela-gold bg-kodela-gold px-7 py-4 text-center text-xs uppercase tracking-[0.16em] text-kodela-black transition-colors duration-300 hover:bg-transparent hover:text-kodela-gold sm:px-8">Se tjenester</a>
              <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="border border-white/15 px-7 py-4 text-center text-xs uppercase tracking-[0.16em] text-kodela-cream transition-colors duration-300 hover:border-kodela-gold hover:text-kodela-gold sm:px-8">Fortell om prosjektet</a>
            </div>

            <div className="mt-12 grid gap-0 border-y border-white/10 sm:mt-16 sm:grid-cols-3 sm:border-b-0">
              {["Tydelig struktur", "Responsivt design", "Personlig oppfølging"].map((item, index) => (
                <div key={item} className={`flex items-center gap-4 py-5 sm:block sm:py-6 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0 sm:pl-6" : ""}`}>
                  <p className="text-xs tracking-[0.16em] text-kodela-gold">0{index + 1}</p>
                  <p className="mt-0 text-sm leading-6 text-kodela-muted sm:mt-3">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <ProjectShowcase />
            <div className="absolute -bottom-5 left-5 right-5 hidden border border-kodela-gold/60 bg-kodela-black/95 px-6 py-5 text-sm leading-6 text-kodela-muted backdrop-blur md:block lg:right-auto lg:max-w-sm">
              <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.22em] text-kodela-gold">Kodela Studio</span>
              Design og utvikling samlet i én gjennomført digital løsning.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
