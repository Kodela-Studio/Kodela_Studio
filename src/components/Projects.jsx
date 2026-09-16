import bookImage from "../assets/book.png";

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden border-y border-white/10 bg-[#0d0d0d] text-kodela-cream">
      <div className="grid lg:min-h-[650px] lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <img src={bookImage} alt="Kodela Studio visuell identitet" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
          <p className="absolute bottom-8 left-8 text-[.62rem] uppercase tracking-[.22em] text-kodela-gold sm:bottom-10 sm:left-10">Strategi · design · utvikling</p>
        </div>

        <div className="flex items-center border-t border-white/10 px-6 py-20 sm:px-12 sm:py-24 lg:border-l lg:border-t-0 lg:px-16 xl:px-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[.32em] text-kodela-gold">Mer enn bare en nettside</p>
            <h2 className="text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-5xl lg:text-6xl">Design som får bedriften din til å vokse.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-kodela-muted">Vi tror på løsninger som kombinerer estetikk og funksjon, og som bygger tillit fra første klikk.</p>
            <div className="mt-11 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div><h3 className="text-base font-normal">Strategi</h3><p className="mt-3 text-xs leading-6 text-kodela-muted">Vi setter oss inn i bedriften, kundene og målene.</p></div>
              <div className="sm:border-l sm:border-white/10 sm:pl-6"><h3 className="text-base font-normal">Design</h3><p className="mt-3 text-xs leading-6 text-kodela-muted">Vi skaper et visuelt uttrykk som bygger merkevaren.</p></div>
              <div className="sm:border-l sm:border-white/10 sm:pl-6"><h3 className="text-base font-normal">Resultat</h3><p className="mt-3 text-xs leading-6 text-kodela-muted">Vi leverer en løsning som er laget for å bli brukt.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
