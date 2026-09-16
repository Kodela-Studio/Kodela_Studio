import { serviceCatalog, servicePageHref } from "../data/serviceCatalog";

const serviceVisuals = [
  "bg-[radial-gradient(circle_at_72%_25%,rgba(201,166,107,.20),transparent_24%),linear-gradient(145deg,#26221b,#111_55%,#080808)]",
  "bg-[radial-gradient(circle_at_45%_35%,rgba(245,245,245,.10),transparent_22%),linear-gradient(155deg,#171717,#28231b_52%,#0c0c0c)]",
  "bg-[radial-gradient(circle_at_25%_25%,rgba(201,166,107,.14),transparent_22%),linear-gradient(135deg,#0d0d0d,#24211c_58%,#111)]",
];

export default function Services() {
  return (
    <section id="services" className="bg-kodela-black px-6 py-20 text-kodela-cream sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.65fr] lg:items-end">
          <div><p className="mb-5 text-xs uppercase tracking-[.32em] text-kodela-gold">Våre tjenester</p><h2 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-6xl">Alt du trenger for en sterk digital tilstedeværelse.</h2></div>
          <div className="lg:justify-self-end"><p className="max-w-md text-sm leading-7 text-kodela-muted sm:text-base">Vi holder tilbudet enkelt. En god nettside først, med booking og oppfølging når bedriften trenger det.</p><a href="/packages" className="mt-7 inline-block border-b border-kodela-gold/60 pb-2 text-xs uppercase tracking-[.16em]">Se alle tjenester <span className="ml-4 text-kodela-gold">→</span></a></div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 sm:mt-16">
          {serviceCatalog.map((service,index)=>(
            <a key={service.id} href={servicePageHref(service.id)} className="group relative min-h-[440px] overflow-hidden border border-white/10">
              <div className={`absolute inset-0 ${serviceVisuals[index]}`} />
              <div className="absolute inset-0 opacity-70 transition duration-700 group-hover:scale-105">
                <div className="absolute right-[12%] top-[15%] h-[38%] w-[58%] border border-white/10 bg-black/20 shadow-2xl" />
                <div className="absolute right-[19%] top-[22%] h-[24%] w-[43%] border border-kodela-gold/25 bg-black/25" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="relative flex h-full min-h-[440px] flex-col justify-end p-7 sm:p-8">
                <span className="mb-auto text-xs tracking-[.2em] text-kodela-gold">{service.number}</span>
                <h3 className="text-3xl font-light tracking-[-.03em]">{service.name}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-kodela-muted">{service.intro}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5"><span className="text-sm">{service.price}</span><span className="text-kodela-gold transition-transform group-hover:translate-x-1">→</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
