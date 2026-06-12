const projects = [
  {
    title: "Nordic Interior",
    category: "Nettside",
    image: "/images/project-1.jpg",
  },
  {
    title: "Fjord Advisory",
    category: "Digital løsning",
    image: "/images/project-2.jpg",
  },
  {
    title: "Aurora Skincare",
    category: "Logo & Identitet",
    image: "/images/project-3.jpg",
  },
  {
    title: "Peak Performance",
    category: "Nettside",
    image: "/images/project-4.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-kodela-black px-6 py-28 text-kodela-cream"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3rem] text-kodela-gold">
              Utvalgte prosjekter
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Vi bygger digitale opplevelser for ambisiøse merkevarer.
            </h2>
          </div>

          <a
            href="#"
            className="border border-kodela-gold px-8 py-4 text-sm uppercase tracking-widest transition hover:bg-kodela-gold hover:text-kodela-black"
          >
            Se alle prosjekter →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden border border-white/10 bg-kodela-dark"
            >
              <div className="aspect-[4/3] bg-zinc-800" />

              <div className="p-6">
                <h3 className="mb-2 text-lg">
                  {project.title}
                </h3>

                <p className="text-sm text-kodela-muted">
                  {project.category}
                </p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}