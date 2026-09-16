import AnnaProfile from "../assets/Anna-profile.jpg";
import HelenaProfile from "../assets/Helena-profile.jpg";
import JaninaProfile from "../assets/Janina-profile.jpg";

const teamMembers = [
  { name: "Anna", role: "Utvikling og grafisk design", image: AnnaProfile },
  { name: "Helena", role: "Utvikling og UX-design", image: HelenaProfile },
  { name: "Janina", role: "Utvikling og sikkerhet", image: JaninaProfile },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 bg-kodela-black px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-kodela-gold">Studioet</p>
            <h2 className="max-w-3xl text-5xl font-light leading-[1] tracking-[-0.045em] text-kodela-cream md:text-7xl">Tre fagområder. Ett helhetlig uttrykk.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-kodela-muted lg:ml-auto">
            Kodela Studio kombinerer utvikling, brukeropplevelse, grafisk design og sikkerhet. Det gir oss muligheten til å se hele den digitale løsningen, fra førsteinntrykk til ferdig nettside.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="group relative min-h-[520px] overflow-hidden border border-white/10 bg-kodela-dark">
              <img src={member.image} alt={`${member.name} i Kodela Studio`} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="text-3xl font-light tracking-[-0.03em] text-white">{member.name}</h3>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
