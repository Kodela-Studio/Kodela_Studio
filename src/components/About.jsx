import AnnaProfile from "../assets/Anna-profile.jpg";
import HelenaProfile from "../assets/Helena-profile.jpg";
import JaninaProfile from "../assets/Janina-profile.jpg";

const teamMembers = [
  { name: "Anna", role: "Utvikling & grafisk design", image: AnnaProfile, focus: "Visuelt uttrykk og utvikling" },
  { name: "Helena", role: "Utvikling & UX-design", image: HelenaProfile, focus: "Struktur, brukeropplevelse og utvikling" },
  { name: "Janina", role: "Utvikling & sikkerhet", image: JaninaProfile, focus: "Teknisk kvalitet, sikkerhet og utvikling" },
];

export default function About({ page = false }) {
  if (!page) {
    return (
      <section id="about" className="border-t border-white/10 bg-kodela-black px-6 py-20 text-kodela-cream sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1fr] lg:items-center lg:gap-20">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.32em] text-kodela-gold">Kodela Studio</p><h2 className="max-w-2xl text-4xl font-light leading-[1.04] tracking-[-.045em] sm:text-6xl">Tre mennesker.<br/>Én retning.</h2><p className="mt-6 max-w-lg text-base leading-8 text-kodela-muted">Et lite digitalt byrå der du jobber direkte med menneskene som bygger løsningen din.</p><a href="/om-oss" className="mt-6 inline-block border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.17em]">Møt Kodela <span className="ml-4 text-kodela-gold">→</span></a></div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">{teamMembers.map((member,index)=><div key={member.name} className={`relative aspect-[3/4] overflow-hidden ${index===1?"sm:-translate-y-5":""}`}><img src={member.image} alt={`${member.name} i Kodela Studio`} className="h-full w-full object-cover object-center grayscale-[20%] transition duration-500 hover:grayscale-0"/><div className="absolute inset-0 ring-1 ring-inset ring-white/10"/></div>)}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-kodela-black pt-24 text-kodela-cream">
      <section className="overflow-hidden border-b border-white/10 px-6 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1fr] lg:items-center lg:gap-20">
          <div className="relative z-10">
            <p className="mb-6 text-[10px] uppercase tracking-[.34em] text-kodela-gold">Menneskene bak Kodela</p>
            <h1 className="max-w-3xl text-[clamp(3.4rem,6.6vw,6.4rem)] font-light leading-[.91] tracking-[-.06em]">Det skal føles trygt å velge hvem som bygger <span className="text-kodela-gold">bedriften din på nett.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-300">Derfor får du vite hvem du jobber med. Kodela er Anna, Helena og Janina, tre utviklere med ulike styrker som følger prosjektet fra første samtale til ferdig løsning.</p>
            <a href="#teamet" className="mt-7 inline-block border-b border-kodela-gold/70 pb-2 text-[10px] uppercase tracking-[.17em]">Bli kjent med oss <span className="ml-4 text-kodela-gold">↓</span></a>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:pl-4">
            {teamMembers.map((member,index)=><figure key={member.name} className={`group relative aspect-[3/4] overflow-hidden bg-[#151515] ${index===1?"sm:-translate-y-7":""}`}><img src={member.image} alt={`${member.name}, ${member.role} i Kodela Studio`} className="h-full w-full object-cover object-center grayscale-[18%] transition duration-500 group-hover:scale-[1.015] group-hover:grayscale-0"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/><figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-5"><span className="block text-base font-light sm:text-xl">{member.name}</span><span className="mt-1 hidden text-[8px] uppercase tracking-[.13em] text-[#e8c781] sm:block">{member.role}</span></figcaption><div className="absolute inset-0 ring-1 ring-inset ring-white/10"/></figure>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1fr] lg:items-start lg:gap-24">
            <div><p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Hvorfor oss?</p><h2 className="max-w-lg text-3xl font-light leading-[1.08] tracking-[-.04em] sm:text-5xl">Lite nok til å bry oss.<br/>Faglige nok til å utfordre.</h2></div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="border-t border-white/15 pt-5"><span className="mb-5 block text-[9px] uppercase tracking-[.2em] text-kodela-gold">01 · Nært</span><p className="mb-0 text-sm leading-7 text-zinc-300">Du snakker direkte med oss som designer og utvikler. Ingen prosjekt går gjennom en lang kjede av mellomledd.</p></div>
              <div className="border-t border-white/15 pt-5"><span className="mb-5 block text-[9px] uppercase tracking-[.2em] text-kodela-gold">02 · Tydelig</span><p className="mb-0 text-sm leading-7 text-zinc-300">Vi avklarer behov, omfang og pris før vi starter, så du vet hva du får og hva veien videre er.</p></div>
              <div className="border-t border-white/15 pt-5"><span className="mb-5 block text-[9px] uppercase tracking-[.2em] text-kodela-gold">03 · Helhetlig</span><p className="mb-0 text-sm leading-7 text-zinc-300">Design, brukeropplevelse, utvikling og sikkerhet vurderes sammen, ikke som fire separate leveranser.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="teamet" className="border-y border-white/10 bg-[#101010] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Teamet</p><h2 className="mb-0 text-3xl font-light tracking-[-.04em] sm:text-5xl">Tre blikk på samme løsning.</h2></div><p className="mb-0 max-w-md text-sm leading-7 text-kodela-muted">Ulike faglige styrker gjør at vi kan se prosjektet fra flere sider før noe bygges.</p></div>
          <div className="grid gap-4 md:grid-cols-3">
            {teamMembers.map((member)=><article key={member.name} className="group overflow-hidden border border-white/10 bg-[#0d0d0d]"><div className="relative aspect-[5/4] overflow-hidden"><img src={member.image} alt={`${member.name} i Kodela Studio`} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"/><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"/></div><div className="p-6"><h3 className="mb-2 text-2xl font-light tracking-[-.035em]">{member.name}</h3><p className="mb-5 text-[9px] uppercase tracking-[.15em] text-[#e2bd79]">{member.role}</p><p className="mb-0 text-sm leading-7 text-kodela-muted">{member.focus}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl"><p className="mb-4 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Fra oss til deg</p><h2 className="text-3xl font-light leading-[1.06] tracking-[-.04em] sm:text-5xl">Du trenger ikke kunne nettsider.<br/><span className="text-kodela-gold">Det er vår jobb.</span></h2><p className="mt-5 mb-0 max-w-xl text-sm leading-7 text-kodela-muted">Kom med bedriften, ideen og målene dine. Vi hjelper deg å gjøre resten konkret.</p></div>
          <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="w-fit bg-kodela-gold px-8 py-5 text-[10px] uppercase tracking-[.18em] text-kodela-black transition duration-300 hover:bg-[#dab77c]">Snakk med oss <span className="ml-6">→</span></a>
        </div>
      </section>
    </main>
  );
}
