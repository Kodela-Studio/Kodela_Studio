import { serviceCatalog, servicePageHref } from "../data/serviceCatalog";

export default function Services() {
  return (
    <section id="services" className="bg-kodela-cream px-6 py-28 text-kodela-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3rem] text-kodela-gold">Tjenester</p>
            <h2 className="text-4xl font-light leading-tight md:text-6xl">Det viktigste først. Resten når du trenger det.</h2>
          </div>
          <p className="max-w-xl leading-8 text-zinc-600 lg:justify-self-end">Vi lager profesjonelle nettsider for små bedrifter, med tydelige priser og et omfang som er lett å forstå. Booking og løpende oppfølging kan legges til når det gir mening.</p>
        </div>
        <div className="grid border border-zinc-200 md:grid-cols-3">
          {serviceCatalog.map((service, index) => (
            <a key={service.id} href={servicePageHref(service.id)} className={`group flex min-h-[390px] flex-col bg-kodela-cream p-8 transition-colors duration-300 hover:bg-white md:p-10 ${index > 0 ? "border-t border-zinc-200 md:border-l md:border-t-0" : ""}`}>
              <div className="flex items-start justify-between gap-6"><span className="text-xs tracking-[0.2em] text-kodela-gold">{service.number}</span><span className="text-xs uppercase tracking-[0.14em] text-zinc-500">{service.category}</span></div>
              <div className="mt-14"><h3 className="text-3xl font-light">{service.name}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">{service.intro}</p></div>
              <div className="mt-auto pt-10"><p className="text-lg">{service.price}</p><span className="mt-5 inline-block text-xs uppercase tracking-[0.16em] transition-transform duration-300 group-hover:translate-x-1">Se tjenesten →</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
