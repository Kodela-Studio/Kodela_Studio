import Logo from "./Logo";

export default function Header() {
  const navLinks = [
    { label: "Hjem", href: "/" },
    { label: "Tjenester", href: "/packages" },
    { label: "Prosjekter", href: "/#projects" },
    { label: "Om oss", href: "/#about" },
    { label: "Kontakt", href: "/#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-kodela-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" aria-label="Kodela Studio hjem">
          <Logo variant="small" />
        </a>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-kodela-cream/85 transition hover:text-kodela-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:post@kodela.studio"
          className="hidden border border-kodela-gold px-6 py-3 text-xs uppercase tracking-widest text-kodela-cream transition hover:bg-kodela-gold hover:text-kodela-black md:block"
        >
          La oss snakke →
        </a>
      </div>
    </header>
  );
}
