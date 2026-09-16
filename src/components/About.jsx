import AnnaProfile from "../assets/Anna-profile.jpg";
import HelenaProfile from "../assets/Helena-profile.jpg";
import JaninaProfile from "../assets/Janina-profile.jpg";

const teamMembers=[
  {name:"Anna",role:"Utvikling og grafisk design",image:AnnaProfile},
  {name:"Helena",role:"Utvikling og UX-design",image:HelenaProfile},
  {name:"Janina",role:"Utvikling og sikkerhet",image:JaninaProfile},
];

export default function About(){
  return <section id="about" className="bg-kodela-black px-6 py-20 text-kodela-cream sm:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
        <div><p className="mb-5 text-xs uppercase tracking-[.32em] text-kodela-gold">Kodela Studio</p><h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-6xl">Tre perspektiver. Én tydelig retning.</h2></div>
        <p className="max-w-xl text-base leading-8 text-kodela-muted lg:justify-self-end">Vi kombinerer utvikling, brukeropplevelse, grafisk design og sikkerhet. Det gjør at vi kan tenke helhetlig uten å gjøre prosessen unødvendig komplisert.</p>
      </div>
      <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3">
        {teamMembers.map(member=><article key={member.name} className="group relative aspect-[4/5] overflow-hidden bg-kodela-dark"><img src={member.image} alt={`${member.name} i Kodela Studio`} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"/><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/><div className="absolute bottom-0 left-0 right-0 p-7"><h3 className="text-2xl font-light">{member.name}</h3><p className="mt-2 text-xs uppercase tracking-[.12em] text-kodela-muted">{member.role}</p></div></article>)}
      </div>
      <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-xs uppercase tracking-[.28em] text-kodela-gold">Klar for neste steg?</p><h2 className="text-3xl font-light tracking-[-.03em] sm:text-5xl">La oss skape noe bra sammen.</h2></div><a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="shrink-0 bg-kodela-gold px-8 py-4 text-center text-xs uppercase tracking-[.16em] text-kodela-black">Ta kontakt <span className="ml-4">→</span></a></div>
    </div>
  </section>
}
