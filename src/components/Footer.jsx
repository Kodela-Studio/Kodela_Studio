import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-kodela-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <Logo variant="small" />

          <p className="mt-6 max-w-xs text-sm text-kodela-muted">
            Digitale løsninger bygget med strategi, design og kode.
          </p>

          <div className="mt-6 flex gap-4 text-kodela-muted">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Facebook">fb</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-kodela-gold">
            Tjenester
          </h3>
          <ul className="space-y-2 text-sm text-kodela-muted">
            <li>Webdesign</li>
            <li>Digitale løsninger</li>
            <li>Nettsider</li>
            <li>Logo & Identitet</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-kodela-gold">
            Byrå
          </h3>
          <ul className="space-y-2 text-sm text-kodela-muted">
            <li>Om oss</li>
            <li>Prosjekter</li>
            <li>Karriere</li>
            <li>Kontakt</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-kodela-gold">
            Kontakt
          </h3>
          <ul className="space-y-2 text-sm text-kodela-muted">
            <li>post@kodela.studio</li>
            <li>+47 123 45 678</li>
            <li>Oslo, Norge</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}