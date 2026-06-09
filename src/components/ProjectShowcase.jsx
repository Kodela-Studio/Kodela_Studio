const slides = [
  {
    title: "Webdesign",
    text: "Moderne nettsider for små og mellomstore bedrifter.",
  },
  {
    title: "Digitale løsninger",
    text: "Skreddersydde løsninger som gjør hverdagen enklere.",
  },
  {
    title: "Visuell identitet",
    text: "Logo, farger og uttrykk som bygger tillit.",
  },
];

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="relative hidden overflow-hidden rounded-xl border border-white/10 bg-kodela-dark p-8 shadow-2xl lg:block"
    >
      <div className="absolute inset-0 bg-kodela-gold/10 blur-3xl" />

      <div className="relative aspect-[4/3] rounded-lg border border-white/10 bg-black/30 p-8">
        <div className="flex h-full flex-col justify-end">
          <p className="mb-3 text-sm uppercase tracking-[0.25rem] text-kodela-gold">
            Utvalgt arbeid
          </p>

          <h2 className="text-4xl font-light">{slides[0].title}</h2>

          <p className="mt-4 max-w-sm text-kodela-muted">{slides[0].text}</p>
        </div>
      </div>
    </section>
  );
}