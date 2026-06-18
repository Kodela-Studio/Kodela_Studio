const packages = [
  {
    id: "essential",
    label: "For en trygg start",
    name: "Essential",
    price: "19 900 kr",
    timeline: "2–3 uker",
    bestFor:
      "Små bedrifter, gründere og lokale aktører som trenger en profesjonell nettside raskt.",
    result:
      "Du får en tydelig, moderne og mobiltilpasset nettside som bygger tillit og gjør det enkelt for kunder å ta kontakt.",
    includes: [
      "Oppstartsmøte og behovsavklaring",
      "Målgruppe og enkel strukturplan",
      "Skreddersydd nettsidedesign",
      "Opptil 5 sider",
      "Kontaktskjema",
      "Mobiltilpasset løsning",
      "Grunnleggende SEO",
      "Google Analytics / Search Console",
      "1 revisjonsrunde",
      "1 time opplæring",
    ],
  },
  {
    id: "growth",
    label: "Mest valgt",
    name: "Growth",
    price: "39 900 kr",
    timeline: "4–6 uker",
    bestFor:
      "Bedrifter som ønsker flere henvendelser, tydeligere merkevare og en nettside som jobber mer aktivt.",
    result:
      "Du får en mer komplett digital tilstedeværelse med bedre struktur, sterkere merkevare og tydeligere vei fra besøk til kontakt.",
    includes: [
      "Alt i Essential",
      "Brand board med farger og typografi",
      "Opptil 10 sider",
      "Konverteringsoptimalisert UX",
      "Tydelige call-to-actions",
      "Blogg eller nyhetsseksjon",
      "SEO-struktur for flere sider",
      "Google Business-optimalisering",
      "Hastighetsoptimalisering",
      "2 revisjonsrunder",
      "2 timer opplæring",
    ],
  },
  {
    id: "premium",
    label: "For høyere ambisjoner",
    name: "Premium",
    price: "69 900 kr",
    timeline: "6–8 uker",
    bestFor:
      "Etablerte bedrifter som trenger en mer avansert, premium og strategisk digital løsning.",
    result:
      "Du får en skreddersydd nettside med sterkere brukerreise, mer avansert funksjonalitet og et uttrykk som løfter merkevaren.",
    includes: [
      "Alt i Growth",
      "Full UX-prosess",
      "Brukerreise og wireframes",
      "Skreddersydd UI-design",
      "Avanserte animasjoner",
      "Booking eller reservasjon",
      "Integrasjoner mot kalender, CRM eller tredjepart",
      "Avanserte skjemaer",
      "Teknisk SEO",
      "Core Web Vitals og performance",
      "3 revisjonsrunder",
      "Prioritert support under lansering",
    ],
  },
  {
    id: "digital-partner",
    label: "Skreddersydd",
    name: "Digital Partner",
    price: "Fra 99 000 kr",
    timeline: "Fra 8 uker",
    bestFor:
      "Selskaper som trenger mer enn en nettside: portal, system, automatisering eller langsiktig digital partner.",
    result:
      "Du får en digital løsning bygget rundt bedriftens prosesser, mål og videre vekst. Dette er for deg som ønsker en ekstern digital avdeling.",
    includes: [
      "Skreddersydd digital strategi",
      "Nettside eller webapplikasjon",
      "Kundeportal eller medlemsportal",
      "Dashboard og datavisning",
      "AI-chatbot eller FAQ-assistent",
      "Automatiseringer",
      "CRM / ERP-integrasjoner",
      "Løpende optimalisering",
      "Dedikert prosjektansvarlig",
      "Roadmap for videre utvikling",
    ],
  },
];

const subscriptions = [
  {
    name: "Care",
    price: "499 kr/mnd",
    text: "For deg som vil sikre at nettsiden holdes oppdatert og trygg etter lansering.",
    items: ["Backup", "Oppdateringer", "Overvåking", "Månedlig statuskontroll"],
  },
  {
    name: "Growth Care",
    price: "999 kr/mnd",
    text: "For deg som vil ha litt mer hjelp i hverdagen og slippe å tenke på småjusteringer selv.",
    items: [
      "Alt i Care",
      "Prioritert support",
      "Innholdsoppdateringer",
      "Enkel SEO-sjekk",
    ],
  },
  {
    name: "Business Growth",
    price: "1 990 kr/mnd",
    text: "For bedrifter som ønsker jevnlig innsikt, synlighet og forbedringer over tid.",
    items: [
      "Alt i Growth Care",
      "Månedlig rapport",
      "Google Business-optimalisering",
      "Konverteringsanbefalinger",
    ],
  },
  {
    name: "Digital Partner Care",
    price: "4 990 kr/mnd",
    text: "For bedrifter som ønsker oss tett på som strategisk og teknisk digital partner.",
    items: [
      "Alt i Business Growth",
      "Månedlig strategimøte",
      "Løpende forbedringer",
      "Prioritert utviklingstid",
    ],
  },
];

export default function Packages() {
  return (
    <main className="bg-kodela-black pt-32 text-kodela-cream">
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.45rem] text-kodela-gold">
              Tjenester og pakker
            </p>

            <h1 className="max-w-5xl text-5xl font-light leading-[1.05] md:text-7xl">
              Digitale løsninger som gjør bedriften enklere å velge.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-kodela-muted">
              Her finner du en tydelig oversikt over hvordan Kodela Studio kan
              hjelpe deg med nettside, merkevare, digitale løsninger, drift og
              videre vekst.
            </p>
          </div>

          <div className="border border-white/10 bg-kodela-dark p-8">
            <p className="text-sm uppercase tracking-[0.3rem] text-kodela-gold">
              Kort fortalt
            </p>
            <h2 className="mt-5 text-3xl font-light">
              Vi bygger ikke bare nettsider. Vi bygger digitale salgsflater.
            </h2>
            <p className="mt-5 leading-7 text-kodela-muted">
              Målet er at kunden raskt skal forstå hvem dere er, hvorfor dere er
              relevante og hvordan de kan ta neste steg.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-kodela-cream px-6 py-28 text-kodela-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Våre pakker
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Velg nivået som passer ambisjonene deres.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
              Alle pakkene er bygget for å gi en profesjonell og trygg prosess.
              Prisene er startpriser eks. mva. Endelig tilbud avhenger av
              innhold, funksjoner og teknisk omfang.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {packages.map((pack) => (
              <article
                key={pack.name}
                className={`flex min-h-[620px] flex-col border p-8 transition hover:-translate-y-2 hover:shadow-2xl ${
                  pack.name === "Growth"
                    ? "border-kodela-gold bg-white shadow-xl"
                    : pack.name === "Digital Partner"
                      ? "border-kodela-black bg-kodela-black text-kodela-cream"
                      : "border-zinc-200 bg-white"
                }`}
              >
                <p className="mb-5 text-xs uppercase tracking-[0.3rem] text-kodela-gold">
                  {pack.label}
                </p>

                <h3 className="text-3xl font-medium">{pack.name}</h3>

                <p className="mt-6 text-4xl font-light">{pack.price}</p>

                <p
                  className={`mt-6 text-sm leading-7 ${
                    pack.name === "Digital Partner"
                      ? "text-zinc-300"
                      : "text-zinc-600"
                  }`}
                >
                  {pack.bestFor}
                </p>

                <div className="my-8 h-px bg-current opacity-10" />

                <ul className="space-y-4 text-sm">
                  {pack.includes.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-3 leading-6">
                      <span className="text-kodela-gold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`#${pack.id}`}
                  className={`mt-auto inline-block border px-6 py-4 text-center text-xs uppercase tracking-widest transition ${
                    pack.name === "Digital Partner"
                      ? "border-kodela-gold text-kodela-cream hover:bg-kodela-gold hover:text-kodela-black"
                      : "border-kodela-gold text-kodela-black hover:bg-kodela-gold"
                  }`}
                >
                  Se detaljer
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {packages.map((pack, index) => (
        <section
          key={pack.id}
          id={pack.id}
          className={`px-6 py-28 ${
            index % 2 === 0
              ? "bg-kodela-black text-kodela-cream"
              : "bg-kodela-dark text-kodela-cream"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
                {pack.label}
              </p>

              <h2 className="text-5xl font-light md:text-6xl">{pack.name}</h2>

              <p className="mt-6 text-4xl text-kodela-gold">{pack.price}</p>

              <p className="mt-4 text-sm uppercase tracking-[0.25rem] text-kodela-muted">
                Leveringstid: {pack.timeline}
              </p>

              <p className="mt-8 max-w-md text-lg leading-8 text-kodela-muted">
                {pack.result}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <h3 className="mb-5 text-2xl font-medium">
                  Hvem passer pakken for?
                </h3>
                <p className="leading-8 text-kodela-muted">{pack.bestFor}</p>
              </div>

              <div className="border border-white/10 bg-white/[0.03] p-8">
                <h3 className="mb-5 text-2xl font-medium">
                  Hva blir resultatet?
                </h3>
                <p className="leading-8 text-kodela-muted">{pack.result}</p>
              </div>

              <div className="border border-white/10 bg-white/[0.03] p-8 md:col-span-2">
                <h3 className="mb-8 text-2xl font-medium">
                  Dette er inkludert
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  {pack.includes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-4 border border-white/10 bg-kodela-black/40 p-5"
                    >
                      <span className="text-kodela-gold">✓</span>
                      <span className="text-sm leading-6 text-kodela-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-kodela-gold/40 bg-kodela-gold/10 p-8 md:col-span-2">
                <h3 className="mb-4 text-2xl font-medium">
                  Når bør du velge {pack.name}?
                </h3>
                <p className="leading-8 text-kodela-muted">
                  Velg denne pakken hvis du ønsker en løsning som matcher
                  ambisjonsnivået deres nå, men som også kan bygges videre på
                  senere med drift, SEO, innhold, booking eller mer avansert
                  funksjonalitet.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-kodela-cream px-6 py-28 text-kodela-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Etter lansering
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Drift, vedlikehold og videre vekst.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
              En nettside er ikke ferdig den dagen den lanseres. Den bør holdes
              oppdatert, trygg og relevant. Derfor tilbyr vi abonnementer som
              gir forutsigbar oppfølging.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {subscriptions.map((sub) => (
              <article
                key={sub.name}
                className="border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-2xl font-medium">{sub.name}</h3>
                <p className="mt-4 text-3xl font-light text-kodela-gold">
                  {sub.price}
                </p>
                <p className="mt-5 min-h-24 text-sm leading-7 text-zinc-600">
                  {sub.text}
                </p>
                <ul className="mt-8 space-y-4 text-sm text-zinc-700">
                  {sub.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-kodela-gold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
              Tilleggstjenester
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Bygg videre når behovet vokser.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Logo & branding", "Fra 7 900 kr"],
              ["SEO-pakke", "Fra 4 900 kr/mnd"],
              ["AI-chatbot", "Fra 9 900 kr"],
              ["Automatiseringer", "Fra 7 900 kr"],
              ["Kundeportal", "Fra 24 900 kr"],
              ["Bookingløsning", "Fra 9 900 kr"],
              ["Innholdsproduksjon", "Fra 1 900 kr/mnd"],
              ["Ekstra landingsside", "Fra 4 900 kr"],
              ["Teknisk rådgivning", "Fra 950 kr/time"],
            ].map(([name, price]) => (
              <article key={name} className="bg-kodela-black p-8">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className="mt-4 text-kodela-gold">{price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kodela-cream px-6 py-28 text-kodela-black">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35rem] text-kodela-gold">
            Neste steg
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Usikker på hvilken pakke som passer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600">
            fortell oss litt om bedriften, målet deres og hva dere ønsker å få
            til. Vi anbefaler riktig nivå før dere bestemmer dere.
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
