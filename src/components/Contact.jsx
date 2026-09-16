import { useState } from "react";
import AnnaProfile from "../assets/Anna-profile.jpg";
import HelenaProfile from "../assets/Helena-profile.jpg";
import JaninaProfile from "../assets/Janina-profile.jpg";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Forespørsel fra ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent(`Navn: ${data.get("name")}\nBedrift: ${data.get("company")}\nE-post: ${data.get("email")}\nGjelder: ${data.get("need")}\n\n${data.get("message")}`);
    setSent(true);
    window.location.href = `mailto:post@kodela.studio?subject=${subject}&body=${body}`;
  }

  const fieldClass = "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-base text-kodela-cream outline-none transition placeholder:text-white/25 focus:border-kodela-gold";

  return (
    <main className="min-h-[calc(100vh-80px)] bg-kodela-black pt-24 text-kodela-cream">
      <section className="px-6 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-[10px] uppercase tracking-[.34em] text-kodela-gold">Kontakt Kodela</p>
            <h1 className="max-w-xl text-[clamp(3.2rem,6vw,6rem)] font-light leading-[.92] tracking-[-.06em]">Fortell oss hva du <span className="text-kodela-gold">vil få til.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-kodela-muted">Du trenger ikke vite hvilken løsning du trenger. Fortell oss litt om bedriften og hva du ønsker å løse, så tar vi det derfra.</p>
            <div className="mt-9 border-t border-white/15 pt-6">
              <p className="mb-2 text-[9px] uppercase tracking-[.2em] text-white/40">E-post</p>
              <a href="mailto:post@kodela.studio" className="text-base text-zinc-200 transition hover:text-kodela-gold">post@kodela.studio</a>
            </div>
            <div className="mt-8 flex items-center">
              {[AnnaProfile, HelenaProfile, JaninaProfile].map((image, index) => <div key={image} className={`h-11 w-11 overflow-hidden rounded-full border-2 border-kodela-black ${index ? "-ml-2" : ""}`}><img src={image} alt="" className="h-full w-full object-cover" /></div>)}
              <p className="ml-4 mb-0 text-xs leading-5 text-white/45">Anna · Helena · Janina<br/><span className="text-white/70">Kodela Studio</span></p>
            </div>
          </div>

          <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <p className="mb-8 text-sm leading-7 text-zinc-300">Send oss noen linjer, så har vi et godt utgangspunkt for første samtale.</p>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block"><span className="text-[9px] uppercase tracking-[.18em] text-kodela-gold">Navn *</span><input required name="name" autoComplete="name" placeholder="Ditt navn" className={fieldClass}/></label>
                <label className="block"><span className="text-[9px] uppercase tracking-[.18em] text-kodela-gold">Bedrift</span><input name="company" autoComplete="organization" placeholder="Bedriftsnavn" className={fieldClass}/></label>
              </div>
              <label className="block"><span className="text-[9px] uppercase tracking-[.18em] text-kodela-gold">E-post *</span><input required type="email" name="email" autoComplete="email" placeholder="navn@bedrift.no" className={fieldClass}/></label>
              <label className="block"><span className="text-[9px] uppercase tracking-[.18em] text-kodela-gold">Hva kan vi hjelpe med?</span><select name="need" defaultValue="" className={`${fieldClass} cursor-pointer [&>option]:bg-[#111]`}><option value="" disabled>Velg hvis du vet</option><option>Ny nettside</option><option>Bookingløsning</option><option>Oppfølging av nettside</option><option>Annet / usikker</option></select></label>
              <label className="block"><span className="text-[9px] uppercase tracking-[.18em] text-kodela-gold">Fortell litt om prosjektet *</span><textarea required name="message" rows="4" placeholder="Hva ønsker du å få til?" className={`${fieldClass} resize-none`}/></label>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="mb-0 max-w-xs text-[11px] leading-5 text-white/35">Ingen lang brief nødvendig. Et par setninger holder.</p>
                <button type="submit" className="w-full bg-kodela-gold px-8 py-4 text-[10px] uppercase tracking-[.18em] text-kodela-black transition hover:bg-[#dab77c] sm:w-auto">Send forespørsel <span className="ml-5">→</span></button>
              </div>
              {sent && <p className="mb-0 text-xs text-kodela-gold">E-postprogrammet ditt åpnes for å sende forespørselen.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
