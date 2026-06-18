import ProjectShowcase from "./ProjectShowcase";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-kodela-black pt-28">
      <div className="absolute left-1/2 top-28 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-kodela-gold/10 blur-3xl" />
      <div className="absolute -right-32 top-52 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <section className="relative flex min-h-[calc(100vh-7rem)] items-center px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Webdesign, UX og digitale løsninger
            </p>

            <h1 className="max-w-5xl text-5xl font-light leading-[0.98] md:text-7xl lg:text-8xl">
              Nettsiden din skal ikke bare se bra ut.
              <span className="block text-kodela-gold">
                Den skal bli valgt.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-kodela-muted">
              Vi hjelper små og mellomstore bedrifter med nettsider, visuell
              identitet og brukeropplevelser som bygger tillit, forklarer
              verdien deres tydelig og gjør det enklere for kunder å ta kontakt.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/packages"
                className="border border-kodela-gold bg-kodela-gold px-8 py-4 text-xs uppercase tracking-widest text-kodela-black transition hover:bg-transparent hover:text-kodela-gold"
              >
                Se tjenester
              </a>

              <a
                href="mailto:post@kodela.studio"
                className="border border-white/15 px-8 py-4 text-xs uppercase tracking-widest text-kodela-cream transition hover:border-kodela-gold hover:text-kodela-gold"
              >
                Få en vurdering
              </a>
            </div>

            <div className="mt-16 grid max-w-3xl gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-light text-kodela-gold">01</p>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Tydeligere førsteinntrykk
                </p>
              </div>

              <div>
                <p className="text-3xl font-light text-kodela-gold">02</p>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Bedre flyt fra besøk til kontakt
                </p>
              </div>

              <div>
                <p className="text-3xl font-light text-kodela-gold">03</p>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Design som støtter vekst
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ProjectShowcase />

            <div className="absolute -bottom-6 left-6 hidden border border-kodela-gold bg-kodela-black px-6 py-5 text-sm text-kodela-muted shadow-2xl md:block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25rem] text-kodela-gold">
                Kodela Studio
              </span>
              Strategi, design og utvikling samlet i én digital løsning.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
