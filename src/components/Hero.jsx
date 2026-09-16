import heroStudio from "../assets/kodela-hero-studio.png";

export default function Hero() {
  return (
    <main className="relative overflow-hidden bg-kodela-black pt-24 text-kodela-cream sm:pt-28">
      <section className="relative min-h-[calc(100svh-6rem)] border-b border-white/10">
        <img src={heroStudio} alt="Kodela Studio arbeidsmiljø" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.98)_0%,rgba(10,10,10,.91)_38%,rgba(10,10,10,.48)_67%,rgba(10,10,10,.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,10,10,.74)_0%,transparent_42%)] lg:hidden" />

        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl items-center px-6 py-16 sm:py-20">
          <div className="w-full lg:max-w-[58%]">
            <p className="mb-6 text-[0.68rem] uppercase tracking-[0.34em] text-kodela-gold sm:text-xs">Nettsider som skaper muligheter</p>
            <h1 className="max-w-4xl text-[clamp(3rem,13vw,5.2rem)] font-light leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[clamp(4.8rem,6.2vw,6.8rem)]">Digitale løsninger for <span className="text-kodela-gold">ambisiøse</span> bedrifter.</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-kodela-muted sm:text-lg">Vi designer og utvikler nettsider som ser bra ut, fungerer sømløst og gjør det enkelt for kundene dine å ta neste steg.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/packages" className="bg-kodela-gold px-8 py-4 text-center text-xs uppercase tracking-[.17em] text-kodela-black transition hover:bg-[#d8b77f]">Se tjenester <span className="ml-4">→</span></a>
              <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="px-1 py-4 text-center text-xs uppercase tracking-[.17em] text-kodela-cream sm:border-b sm:border-kodela-gold/60">Ta kontakt <span className="ml-4 text-kodela-gold">→</span></a>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/55 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl px-6 sm:grid-cols-3">
            {[["01","Strategisk","Vi starter med bedriften og målene deres."],["02","Gjennomtenkt","Design der estetikk og funksjon jobber sammen."],["03","Responsivt","En god opplevelse på alle skjermstørrelser."]].map(([number,title,text],index)=>(
              <div key={number} className={`py-6 sm:px-7 sm:py-7 ${index>0?"border-t border-white/10 sm:border-l sm:border-t-0":""}`}><div className="flex gap-5"><span className="text-xs text-kodela-gold">{number}</span><div><h2 className="text-base font-normal">{title}.</h2><p className="mt-1 text-xs leading-6 text-kodela-muted">{text}</p></div></div></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
