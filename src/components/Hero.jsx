export default function Hero() {
  return (
    <main className="relative overflow-hidden bg-kodela-black pt-24 text-kodela-cream sm:pt-28">
      <section className="relative px-6 py-14 sm:py-20 lg:flex lg:min-h-[calc(100vh-7rem)] lg:items-center lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24">
          <div className="min-w-0">
            <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-kodela-gold sm:text-sm sm:tracking-[0.3rem]">Nettsider for små bedrifter</p>
            <h1 className="max-w-5xl text-[clamp(2.8rem,12vw,4.5rem)] font-light leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[clamp(4.2rem,6vw,6rem)]">
              Et bedre førsteinntrykk.
              <span className="mt-2 block text-kodela-gold">En enklere vei til kontakt.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-kodela-muted sm:mt-8 sm:text-lg sm:leading-8">Kodela Studio utvikler profesjonelle nettsider med tydelig struktur, gjennomtenkt design og en brukeropplevelse som gjør det enkelt å forstå hvem dere er og hva dere tilbyr.</p>
            <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="/packages" className="border border-kodela-gold bg-kodela-gold px-7 py-4 text-center text-xs uppercase tracking-[0.16em] text-kodela-black transition-colors duration-300 hover:bg-transparent hover:text-kodela-gold sm:px-8">Se tjenester</a>
              <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="border border-white/15 px-7 py-4 text-center text-xs uppercase tracking-[0.16em] text-kodela-cream transition-colors duration-300 hover:border-kodela-gold hover:text-kodela-gold sm:px-8">Fortell om prosjektet</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="border border-white/10 bg-kodela-dark p-6 sm:p-8 lg:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-kodela-gold">Hva dere får</p>
              <h2 className="mt-5 max-w-lg text-3xl font-light leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[2.7rem]">En nettside som gjør jobben sin.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-kodela-muted sm:text-base">Ikke pynt for pyntens skyld. Vi bygger rundt det kunden faktisk trenger for å forstå bedriften, finne riktig informasjon og ta neste steg.</p>

              <div className="mt-9 border-t border-white/10">
                {[
                  ["01", "Tydelig budskap", "Besøkende skal raskt forstå hva dere tilbyr og hvorfor det er relevant."],
                  ["02", "God brukerflyt", "Innhold og kontaktpunkter plasseres der kundene forventer å finne dem."],
                  ["03", "Bygget for alle skjermer", "Designet tilpasses mobil, nettbrett og desktop som en del av løsningen."],
                ].map(([number, title, text]) => (
                  <div key={number} className="grid grid-cols-[34px_1fr] gap-4 border-b border-white/10 py-6 sm:grid-cols-[44px_1fr]">
                    <span className="pt-1 text-xs tracking-[0.16em] text-kodela-gold">{number}</span>
                    <div><h3 className="text-base font-medium text-kodela-cream sm:text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-kodela-muted">{text}</p></div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-2 text-xs uppercase tracking-[0.14em] text-kodela-muted sm:flex-row sm:items-center sm:justify-between">
                <span>Design · UX · Utvikling</span><span className="text-kodela-gold">Kodela Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
