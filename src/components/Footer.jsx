import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10 bg-kodela-black px-6 pb-8 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo variant="small" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-kodela-muted">Nettsider og digitale løsninger utviklet med tydelighet, godt design og gjennomtenkt funksjon.</p>
          </div>

          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.18em] text-kodela-gold">Tjenester</h3>
            <ul className="space-y-3 text-sm text-kodela-muted">
              <li><a className="transition hover:text-kodela-cream" href="/packages?tjeneste=nettside">Nettside</a></li>
              <li><a className="transition hover:text-kodela-cream" href="/packages?tjeneste=booking">Booking</a></li>
              <li><a className="transition hover:text-kodela-cream" href="/packages?tjeneste=oppfolging">Oppfølging</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.18em] text-kodela-gold">Kodela</h3>
            <ul className="space-y-3 text-sm text-kodela-muted">
              <li><a className="transition hover:text-kodela-cream" href="/#about">Om oss</a></li>
              <li><a className="transition hover:text-kodela-cream" href="/#projects">Prosjekter</a></li>
              <li><a className="transition hover:text-kodela-cream" href="/#contact">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.18em] text-kodela-gold">Kontakt</h3>
            <a href="mailto:post@kodela.studio" className="text-sm text-kodela-cream transition hover:text-kodela-gold">post@kodela.studio</a>
            <p className="mt-3 text-sm text-kodela-muted">Oslo, Norge</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-kodela-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kodela Studio</p>
          <p>Design og utvikling av Kodela Studio</p>
        </div>
      </div>
    </footer>
  );
}
