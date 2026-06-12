const services = [
  {
    title: "Webdesign",
    description:
      "Moderne, responsive og brukervennlige nettsider som gir bedriften din et profesjonelt førsteinntrykk.",
    icon: "▱",
  },
  {
    title: "Digitale løsninger",
    description:
      "Skreddersydde løsninger som gjør hverdagen enklere, mer effektiv og bedre tilpasset dine behov.",
    icon: "</>",
  },
  {
    title: "Nettsider",
    description:
      "Raske, sikre og SEO-vennlige nettsider bygget for synlighet, tillit og vekst.",
    icon: "◇",
  },
  {
    title: "Logo & Identitet",
    description:
      "Visuell identitet, farger og uttrykk som hjelper merkevaren din å skille seg ut.",
    icon: "✦",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-kodela-cream px-6 py-28 text-kodela-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3rem] text-kodela-gold">
            Våre tjenester
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Helhetlige digitale løsninger skreddersydd for din vekst.
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-600">
            Vi kombinerer design, teknologi og strategi for å lage løsninger
            som ikke bare ser bra ut, men som faktisk fungerer.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-kodela-cream p-8 transition hover:bg-white"
            >
              <div className="mb-10 text-4xl text-kodela-gold">
                {service.icon}
              </div>

              <h3 className="mb-4 text-xl font-medium">{service.title}</h3>

              <p className="text-sm leading-7 text-zinc-600">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block text-xs uppercase tracking-widest text-kodela-black transition group-hover:text-kodela-gold"
              >
                Les mer →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
