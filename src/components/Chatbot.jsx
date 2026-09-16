import { useState } from "react";
import { serviceCatalog, servicePageHref } from "../data/serviceCatalog";

const options = ["Nettside", "Booking", "Oppfølging", "Kontakt"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Hva kan vi hjelpe deg med?");
  const [link, setLink] = useState(null);

  function choose(option) {
    if (option === "Kontakt") {
      setMessage("Fortell oss gjerne kort om bedriften din og hva du ønsker hjelp med.");
      setLink({ label: "Send en forespørsel", href: "mailto:post@kodela.studio?subject=Forespørsel til Kodela Studio" });
      return;
    }
    const service = serviceCatalog.find((item) => item.name === option);
    if (!service) return;
    setMessage(`${service.intro} ${service.price} eks. mva.`);
    setLink({ label: `Les om ${service.name.toLowerCase()}`, href: servicePageHref(service.id) });
  }

  return (
    <div className="fixed bottom-5 right-5 z-[999] md:bottom-8 md:right-8">
      {open && (
        <div className="mb-4 w-[calc(100vw-2.5rem)] max-w-[380px] border border-white/10 bg-kodela-black shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <div className="flex items-start justify-between border-b border-white/10 p-5"><div><p className="text-[0.65rem] uppercase tracking-[0.25em] text-kodela-gold">Kodela Studio</p><h2 className="mt-2 text-lg font-medium text-kodela-cream">Hva trenger du hjelp med?</h2></div><button type="button" onClick={() => setOpen(false)} aria-label="Lukk" className="text-xl text-kodela-muted transition hover:text-kodela-cream">×</button></div>
          <div className="p-5"><p className="text-sm leading-7 text-kodela-muted">{message}</p>{link && <a href={link.href} className="mt-5 inline-block border-b border-kodela-gold pb-1 text-sm text-kodela-cream">{link.label}</a>}<div className="mt-6 grid grid-cols-2 gap-2">{options.map((option) => <button key={option} type="button" onClick={() => choose(option)} className="border border-white/10 px-4 py-3 text-left text-xs text-kodela-cream transition hover:border-kodela-gold/60 hover:bg-white/[0.03]">{option}</button>)}</div></div>
        </div>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Lukk Kodela-hjelp" : "Åpne Kodela-hjelp"} className="flex h-14 items-center border border-kodela-gold bg-kodela-black px-5 text-xs uppercase tracking-[0.16em] text-kodela-cream shadow-xl transition hover:bg-kodela-gold hover:text-kodela-black">{open ? "Lukk" : "Kan vi hjelpe?"}</button>
    </div>
  );
}
