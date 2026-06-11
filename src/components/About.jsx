import AnnaProfile from "../assets/Anna-profile.jpg";
import HelenaProfile from "../assets/Helena-profile.jpg";
import JaninaProfile from "../assets/Janina-profile.jpg";

const teamMembers = [
  {
    name: "Anna",
    role: "Design & digital tilstedeværelse",
    image: AnnaProfile,
  },
  {
    name: "Helena",
    role: "Frontend & brukeropplevelse",
    image: HelenaProfile,
  },
  {
    name: "Janina",
    role: "Strategi & prosjektflyt",
    image: JaninaProfile,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-kodela-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-kodela-gold">
              Om oss
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-kodela-cream md:text-7xl">
              Et lite studio med tre ulike styrker.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-kodela-muted lg:ml-auto">
            Kodela Studio kombinerer design, frontend-utvikling og digital
            strategi for å hjelpe bedrifter med nettsider og løsninger som både
            ser sterke ut og fungerer i praksis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative min-h-[520px] overflow-hidden border border-white/10 bg-kodela-dark"
            >
              <img
                src={member.image}
                alt={`${member.name} i Kodela Studio`}
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-kodela-gold">
                  Kodela Studio
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
