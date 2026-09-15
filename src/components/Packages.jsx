const packages = [
  {
    name: "Start",
    price: "Fra 9 900 kr",
    label: "Lav terskel",
    bestFor: "For nye prosjekter, enkeltpersonforetak og små lokale bedrifter.",
    result:
      "En enkel, pen og mobiltilpasset nettside som gir et profesjonelt førsteinntrykk.",
    includes: [
      "1–3 sider",
      "Responsivt design",
      "Kontaktskjema",
      "Google Maps",
      "SEO-grunnlag",
      "1 revisjonsrunde",
    ],
  },
  {
    name: "Essential",
    price: "Fra 14 900 kr",
    label: "Trygg start",
    bestFor: "For små bedrifter som trenger en mer komplett digital base.",
    result:
      "En profesjonell nettside med tydelig struktur, godt uttrykk og enkel kontaktvei.",
    includes: [
      "Opptil 5 sider",
      "Skreddersydd design",
      "Mobiloptimalisering",
      "Kontaktskjema",
      "Google Analytics",
      "Search Console",
      "2 revisjonsrunder",
    ],
  },
  {
    name: "Growth",
    price: "Fra 24 900 kr",
    label: "Mest valgt",
    bestFor:
      "For bedrifter som vil forbedre nettsiden og få flere henvendelser.",
    result:
      "En mer strategisk nettside med bedre UX, sterkere merkevare og tydeligere vei til kontakt.",
    includes: [
      "Opptil 10 sider",
      "UX-forbedringer",
      "Brand board",
      "SEO-struktur",
      "Blogg/nyheter",
      "Google Business-optimalisering",
      "3 revisjonsrunder",
    ],
  },
  {
    name: "Premium",
    price: "Fra 39 900 kr",
    label: "For større behov",
    bestFor:
      "For etablerte bedrifter som trenger mer innhold, bedre flyt og flere funksjoner.",
    result:
      "En gjennomarbeidet nettside med sterkere brukeropplevelse, spesialseksjoner og enkel booking.",
    includes: [
      "Alt i Growth",
      "Wireframes",
      "Mer avansert UX/UI",
      "Enkel bookingløsning",
      "Spesialtilpassede seksjoner",
      "Animasjoner",
      "Ytelsesoptimalisering",
    ],
  },
];

const addons = [
  ["Ekstra underside", "Fra 1 500 kr"],
  ["Logo enkel", "Fra 3 900 kr"],
  ["Brand board", "Fra 4 900 kr"],
  ["Full visuell identitet", "Fra 9 900 kr"],
  ["Google Business-profil", "Fra 2 500 kr"],
  ["SEO-grunnpakke", "Fra 3 900 kr"],
  ["Enkel booking", "Fra 5 900 kr"],
  ["FAQ-seksjon", "Fra 1 500 kr"],
  ["Avansert kontaktskjema", "Fra 2 500 kr"],
  ["Tekstforbedring", "Fra 1 900 kr"],
  ["Blogginnlegg", "Fra 1 500 kr"],
  ["Bildeoptimalisering", "Fra 1 500 kr"],
];

const carePlans = [
  [
    "Care",
    "499 kr/mnd",
    "Backup, oppdateringer, overvåking og månedlig sjekk.",
  ],
  [
    "Growth Care",
    "999 kr/mnd",
    "Små innholdsoppdateringer, SEO-sjekk og prioritert support.",
  ],
  [
    "Business Care",
    "1 990 kr/mnd",
    "Månedlig rapport, forbedringsforslag og Google Business-oppfølging.",
  ],
  [
    "Digital Partner",
    "Fra 2 990 kr/mnd",
    "Fast samarbeid med design, innhold, videreutvikling og rådgivning.",
  ],
];

export default function Packages() {
  return (
    <main className="bg-kodela-black pt-28 text-kodela-cream">
      <section className="relative overflow-hidden px-6 py-24 md:py-36">
        <div className="absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-kodela-gold/10 blur-3xl" />
        <div className="absolute right-0 top-36 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.45rem] text-kodela-gold">
              Tjenester og pakker
            </p>

            <h1 className="max-w-5xl text-5xl font-light leading-[0.98] md:text-7xl">
              Gjør et sterkere førsteinntrykk.
              <span className="block text-kodela-gold">
                Få flere til å velge deg.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-kodela-muted">
              Vi designer nettsider, visuelle identiteter og digitale
              opplevelser som bygger tillit, gjør bedriften tydeligere og senker
              terskelen for at kunder tar kontakt.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="border border-kodela-gold bg-kodela-gold px-8 py-4 text-xs uppercase tracking-widest text-kodela-black transition hover:bg-transparent hover:text-kodela-gold"
              >
                Se pakkene
              </a>

              <a
                href="mailto:post@kodela.studio"
                className="border border-white/15 px-8 py-4 text-xs uppercase tracking-widest text-kodela-cream transition hover:border-kodela-gold hover:text-kodela-gold"
              >
                Få anbefaling
              </a>
            </div>

            <div className="mt-16 grid max-w-3xl gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-light text-kodela-gold">01</p>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Strategisk struktur før design
                </p>
              </div>

              <div>
                <p className="text-3xl font-light text-kodela-gold">02</p>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Responsivt på alle enheter
                </p>
              </div>

              <div>
                <p className="text-3xl font-light text-kodela-gold">03</p>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Bygget for synlighet og kontakt
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3rem] text-kodela-gold">
                Kodela-metoden
              </p>

              <h2 className="mt-5 text-3xl font-light leading-tight">
                Design først.
                <br />
                Resultater etterpå.
              </h2>

              <p className="mt-5 leading-7 text-kodela-muted">
                Vi starter med målene deres, kartlegger hva kundene trenger og
                bygger en løsning som både ser profesjonell ut og gjør jobben
                den skal.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10">
                {[
                  "Tydeligere budskap",
                  "Bedre brukerflyt",
                  "Sterkere digital troverdighet",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-kodela-black/70 p-4 text-sm text-kodela-muted"
                  >
                    <span className="text-kodela-gold">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden border border-kodela-gold bg-kodela-black px-6 py-5 text-sm text-kodela-muted shadow-2xl md:block">
              <span className="block text-xs uppercase tracking-[0.25rem] text-kodela-gold">
                Neste steg
              </span>
              Velg pakke eller spør oss først.
            </div>
          </div>
        </div>
      </section>

      <section
        id="packages"
        className="bg-kodela-cream px-6 py-28 text-kodela-black"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Våre pakker
            </p>
            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Velg nivået som passer bedriften akkurat nå.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
              Prisene er startpriser eks. mva. Endelig tilbud avhenger av
              innhold, antall sider, funksjoner og hvor mye materiale som må
              produseres.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {packages.map((pack) => {
              const isFeatured = pack.name === "Growth";

              return (
                <article
                  key={pack.name}
                  className={`group relative flex min-h-[660px] flex-col overflow-hidden border p-8 transition duration-300 hover:-translate-y-2 ${
                    isFeatured
                      ? "border-kodela-gold bg-kodela-black text-kodela-cream shadow-2xl"
                      : "border-zinc-200 bg-[#fbfaf7] hover:bg-white hover:shadow-2xl"
                  }`}
                >
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-kodela-gold/20 blur-2xl" />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.3rem] text-kodela-gold">
                        {pack.label}
                      </p>
                      {isFeatured && (
                        <span className="border border-kodela-gold px-3 py-1 text-[0.6rem] uppercase tracking-[0.2rem] text-kodela-gold">
                          Anbefalt
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl font-light">{pack.name}</h3>
                    <p className="mt-5 text-4xl font-light text-kodela-gold">
                      {pack.price}
                    </p>

                    <p
                      className={`mt-6 text-sm leading-7 ${
                        isFeatured ? "text-kodela-muted" : "text-zinc-600"
                      }`}
                    >
                      {pack.bestFor}
                    </p>

                    <div
                      className={`my-8 h-px ${
                        isFeatured ? "bg-white/10" : "bg-zinc-200"
                      }`}
                    />

                    <ul
                      className={`space-y-4 text-sm ${
                        isFeatured ? "text-kodela-muted" : "text-zinc-700"
                      }`}
                    >
                      {pack.includes.map((item) => (
                        <li key={item} className="flex gap-3 leading-6">
                          <span className="text-kodela-gold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className={`relative mt-auto inline-block border px-6 py-4 text-center text-xs uppercase tracking-widest transition ${
                      isFeatured
                        ? "border-kodela-gold text-kodela-cream hover:bg-kodela-gold hover:text-kodela-black"
                        : "border-kodela-gold text-kodela-black hover:bg-kodela-gold"
                    }`}
                  >
                    Be om tilbud
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Detaljer
            </p>
            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Hva betyr pakkene i praksis?
            </h2>
          </div>

          <div className="grid gap-6">
            {packages.map((pack, index) => (
              <article
                key={pack.name}
                className="grid gap-8 overflow-hidden border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:grid-cols-[0.7fr_1.3fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3rem] text-kodela-gold">
                    0{index + 1} / {pack.label}
                  </p>
                  <h3 className="mt-4 text-4xl font-light">{pack.name}</h3>
                  <p className="mt-4 text-2xl text-kodela-gold">{pack.price}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-xl font-medium">Passer for</h4>
                    <p className="leading-7 text-kodela-muted">
                      {pack.bestFor}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 text-xl font-medium">Resultat</h4>
                    <p className="leading-7 text-kodela-muted">{pack.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kodela-cream px-6 py-28 text-kodela-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Tilleggstjenester
            </p>
            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Små tillegg som gjør løsningen mer komplett.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
              Perfekt når du ikke trenger en større pakke, men vil legge til
              akkurat det som gir mest verdi.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3">
            {addons.map(([name, price]) => (
              <article
                key={name}
                className="group bg-[#fbfaf7] p-8 transition hover:bg-kodela-black hover:text-kodela-cream"
              >
                <div className="mb-8 h-px w-12 bg-kodela-gold transition group-hover:w-20" />
                <h3 className="text-2xl font-light">{name}</h3>
                <p className="mt-4 text-kodela-gold">{price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Drift og videre samarbeid
            </p>
            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Hold nettsiden oppdatert etter lansering.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {carePlans.map(([name, price, text]) => (
              <article
                key={name}
                className="border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-kodela-gold/60"
              >
                <h3 className="text-2xl font-light">{name}</h3>
                <p className="mt-4 text-2xl text-kodela-gold">{price}</p>
                <p className="mt-6 text-sm leading-7 text-kodela-muted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-kodela-cream px-6 py-28 text-kodela-black"
        id="contact"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
            Neste steg
          </p>
          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Usikker på hvilken pakke som passer?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600">
            Send oss noen linjer om bedriften og hva dere ønsker hjelp med, så
            anbefaler vi riktig nivå og eventuelle tillegg.
          </p>
          <a
            href="mailto:post@kodela.studio"
            className="mt-10 inline-block bg-kodela-black px-8 py-4 text-xs uppercase tracking-widest text-kodela-cream transition hover:bg-kodela-gold hover:text-kodela-black"
          >
            Kontakt oss →
          </a>
        </div>
      </section>
    </main>
  );
}
