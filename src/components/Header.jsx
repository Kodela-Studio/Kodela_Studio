import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-kodela-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" aria-label="Kodela Studio hjem">
          <Logo variant="small" />
        </a>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          <a href="#">Hjem</a>
          <a href="#services">Tjenester</a>
          <a href="#projects">Prosjekter</a>
          <a href="#about">Om oss</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a
          href="mailto:post@kodela.studio"
          className="hidden border border-kodela-gold px-6 py-3 text-xs uppercase tracking-widest transition hover:bg-kodela-gold hover:text-kodela-black md:block"
        >
          La oss snakke →
        </a>
      </div>
    </header>
  );
}