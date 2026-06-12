import ProjectShowcase from "./ProjectShowcase";

export default function Hero() {
  return (
    <main className="min-h-screen bg-kodela-black pt-28">
      <section className="flex min-h-[calc(100vh-7rem)] items-center px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3rem] text-kodela-gold">
              Digitale løsninger som gir resultater
            </p>

            <h1 className="text-5xl font-light leading-none md:text-7xl lg:text-8xl">
              Design.
              <br />
              Utvikling.
              <br />
              <span className="text-kodela-gold">Resultater.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-kodela-muted">
              Kodela Studio hjelper bedrifter med webdesign, digitale løsninger
              og visuell identitet som skaper verdi, tillit og vekst.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-kodela-gold px-8 py-4 text-sm uppercase tracking-widest text-kodela-black transition hover:opacity-90"
              >
                Se våre tjenester
              </a>

              <a
                href="mailto:post@kodela.studio"
                className="border border-kodela-gold px-8 py-4 text-sm uppercase tracking-widest transition hover:bg-kodela-gold hover:text-kodela-black"
              >
                La oss snakke
              </a>
            </div>
          </div>

          <ProjectShowcase />
        </div>
      </section>
    </main>
  );
}