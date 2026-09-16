import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 – Siden finnes ikke | Kodela Studio";

    let robots = document.head.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let description = document.head.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", "Siden du leter etter finnes ikke. Gå tilbake til Kodela Studio eller se våre tjenester.");
  }, []);

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-kodela-black px-6 pb-20 pt-32 text-kodela-cream">
      <div className="mx-auto w-full max-w-7xl border-y border-white/15 py-16 sm:py-20 lg:grid lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-20 lg:py-24">
        <div>
          <p className="text-[10px] uppercase tracking-[.34em] text-kodela-gold">Feil 404</p>
          <p className="mt-5 text-7xl font-light leading-none tracking-[-.07em] text-white/20 sm:text-8xl lg:text-9xl">404</p>
        </div>
        <div className="mt-10 lg:mt-0">
          <h1 className="max-w-3xl text-[clamp(3rem,6vw,6rem)] font-light leading-[.92] tracking-[-.06em]">Denne siden finnes <span className="text-kodela-gold">ikke.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-kodela-muted">Lenken kan være gammel, eller adressen kan være skrevet feil. Du kan gå tilbake til forsiden eller se tjenestene våre.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/" className="bg-kodela-gold px-7 py-4 text-center text-[10px] uppercase tracking-[.18em] text-kodela-black">Til forsiden</a>
            <a href="/tjenester" className="border border-white/25 px-7 py-4 text-center text-[10px] uppercase tracking-[.18em] text-kodela-cream">Se tjenester</a>
          </div>
        </div>
      </div>
    </main>
  );
}
