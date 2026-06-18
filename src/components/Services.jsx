const services = [
  {
    title: "Webdesign",
    description:
      "Nettsider med tydelig struktur, moderne uttrykk og god brukeropplevelse fra første klikk.",
    icon: "▱",
  },
  {
    title: "UX & struktur",
    description:
      "Vi hjelper deg å gjøre innhold, flyt og kontaktvei enklere for kundene dine.",
    icon: "</>",
  },
  {
    title: "Nettsider",
    description:
      "Raske, responsive og SEO-vennlige nettsider bygget for synlighet, tillit og vekst.",
    icon: "◇",
  },
  {
    title: "Logo & identitet",
    description:
      "Visuell identitet, farger og typografi som gjør merkevaren din mer gjenkjennelig.",
    icon: "✦",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-kodela-cream px-6 py-28 text-kodela-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3rem] text-kodela-gold">
            Våre tjenester
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Digitale løsninger som gjør det enklere å bli valgt.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
            Vi kombinerer design, teknologi og strategi for å lage nettsider og
            visuelle uttrykk som bygger tillit, skaper tydelighet og gjør det
            enklere for kunder å ta kontakt.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.title}
              href="/packages"
              className="group block bg-kodela-cream p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              <div className="mb-10 text-4xl text-kodela-gold">
                {service.icon}
              </div>

              <h3 className="mb-4 text-xl font-medium">{service.title}</h3>

              <p className="text-sm leading-7 text-zinc-600">
                {service.description}
              </p>

              <span className="mt-8 inline-block text-xs uppercase tracking-widest text-kodela-black transition group-hover:translate-x-1 group-hover:text-kodela-gold">
                Se pakker →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
