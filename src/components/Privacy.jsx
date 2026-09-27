import Seo from "./Seo";

const sections = [
  ["ansvar", "Hvem er ansvarlig?"],
  ["kontakt", "Når du kontakter oss"],
  ["besok", "Når du besøker nettsiden"],
  ["lagring", "Lagring og sletting"],
  ["leverandorer", "Leverandører og overføring"],
  ["rettigheter", "Dine rettigheter"],
  ["endringer", "Endringer"],
];

function Section({ id, title, children }) {
  return <section id={id} className="scroll-mt-32 border-t border-white/15 pt-8">
    <h2 className="mb-4 text-2xl font-normal text-kodela-cream">{title}</h2>
    <div className="space-y-4 text-base leading-8 text-zinc-300">{children}</div>
  </section>;
}

function Pending({ children }) {
  return <p className="border-l-2 border-kodela-gold pl-4 text-sm leading-7 text-zinc-200"><strong>Avklares før publisering: </strong>{children}</p>;
}

export default function Privacy() {
  const link = "text-kodela-gold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  return (
    <main className="bg-kodela-black px-6 pb-24 pt-36 text-kodela-cream sm:pt-40">
      <Seo title="Personvernerklæring | Kodela Studio" description="Slik behandler Kodela Studio personopplysninger ved nettsidebesøk og kundehenvendelser." path="/personvern" robots="noindex, nofollow" />
      <article className="mx-auto max-w-3xl">
        <p className="mb-5 text-xs uppercase tracking-[.25em] text-kodela-gold">Kodela Studio</p>
        <h1 className="break-words text-4xl font-light tracking-[-.045em] sm:text-6xl">Personvernerklæring</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">Her forklarer vi hvordan vi behandler personopplysninger når du besøker nettsiden, tar kontakt eller samarbeider med oss.</p>
        <p className="mt-4 text-sm text-zinc-300">Utkast oppdatert <time dateTime="2026-09-27">27. september 2026</time></p>
        <aside aria-label="Utkaststatus" className="mt-8 border border-kodela-gold/60 bg-white/5 p-5 text-sm leading-7 text-zinc-200">
          <strong className="block text-kodela-gold">Utkast – må ferdigstilles før publisering</strong>
          Navn, ansvarsfordeling, foreslåtte slettefrister og leverandøropplysninger må bekreftes. Markerte avklaringer er ikke ferdig personverninformasjon.
        </aside>
        <nav aria-label="Innhold i personvernerklæringen" className="my-10 border-y border-white/15 py-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {sections.map(([id, title]) => <li key={id}><a className={link} href={`#${id}`}>{title}</a></li>)}
          </ul>
        </nav>
        <div className="space-y-10">
          <Section id="ansvar" title="Hvem er ansvarlig?">
            <p>Kodela Studio er samarbeidet mellom Anna [fullt navn], Helena [fullt navn] og Janina [fullt navn]. Vi bestemmer i fellesskap hvorfor og hvordan opplysninger brukes i arbeidet vårt, og er felles behandlingsansvarlige for behandlingen som beskrives her.</p>
            <p>Felles kontaktpunkt er <a className={link} href="mailto:post@kodelastudio.no">post@kodelastudio.no</a>. Du kan også utøve rettighetene dine overfor hver av de behandlingsansvarlige.</p>
            <Pending>Fyll inn fulle navn og relevant kontaktadresse. Beskriv hovedinnholdet i den avtalte ansvarsfordelingen, inkludert oppfølging av personvernhenvendelser, sletting og sikkerhet.</Pending>
            <p>Erklæringen gjelder vår egen nettside og kundeoppfølging. Opplysninger vi behandler på vegne av en kunde i kundens løsning, reguleres av oppdraget og en eventuell databehandleravtale. Kundens personverninformasjon gjelder da for den aktuelle løsningen.</p>
          </Section>

          <Section id="kontakt" title="Når du kontakter oss">
            <p>Vi behandler navn, e-postadresse, eventuelt bedriftsnavn, hva henvendelsen gjelder og innholdet du sender oss. Opplysningene kommer fra deg og brukes til å besvare spørsmål, gi tilbud og følge opp dialogen.</p>
            <p>Kontaktskjemaet åpner e-postprogrammet ditt med en ferdig utfylt melding. Du må selv sende meldingen derfra. Skjemaet sender ikke innholdet til en skjemadatabase hos oss eller Netlify. Når du sender e-posten, mottar vi den gjennom e-posttjenesten hos Domene AS.</p>
            <p>Det er frivillig å kontakte oss. Navn, e-post og melding er påkrevde felt i skjemaet; bedriftsnavn og tjenestevalg er valgfrie. Du kan også sende oss en vanlig e-post. Vi trenger en svaradresse og nok informasjon til å behandle forespørselen. Unngå å sende fødselsnummer, passord, helseopplysninger eller andre sensitive opplysninger.</p>
            <h3 className="font-semibold text-kodela-cream">Rettslig grunnlag</h3>
            <p>Ved generelle spørsmål og kontakt med representanter for bedrifter er grunnlaget vår berettigede interesse i å besvare relevante henvendelser og administrere forretningsforhold, jf. GDPR artikkel 6 nr. 1 bokstav f. Når du selv er avtalepart og ber om tilbud eller bestiller en tjeneste, bruker vi artikkel 6 nr. 1 bokstav b for behandling som er nødvendig for å forberede eller oppfylle avtalen.</p>
            <p>Ved et kundeoppdrag bruker vi kontaktopplysninger, avtalt leveranse og nødvendig prosjektkorrespondanse for å gjennomføre og følge opp oppdraget, med samme skille mellom avtale og berettiget interesse. Opplysninger som må oppbevares for å oppfylle en konkret lovpålagt plikt, behandles etter artikkel 6 nr. 1 bokstav c.</p>
          </Section>

          <Section id="besok" title="Når du besøker nettsiden">
            <p>Netlify leverer nettsiden til nettleseren din. Dette innebærer behandling av tekniske opplysninger som IP-adresse og forespørsler etter nettsidens innhold. Drifts- og sikkerhetslogger kan også inneholde tidspunkt, besøkt adresse og informasjon om nettleser og enhet. Formålet er å levere nettsiden, feilsøke og beskytte den mot misbruk. Grunnlaget er vår berettigede interesse i en tilgjengelig og sikker nettside, jf. artikkel 6 nr. 1 bokstav f.</p>
            <h3 className="font-semibold text-kodela-cream">Cookies og hjelpefunksjon</h3>
            <p>Nettsidekoden bruker ikke analyseverktøy, markedsføringspiksler eller cookies for sporing. Den lagrer heller ikke skjemainnhold i nettleserens localStorage eller sessionStorage.</p>
            <p>«Kan vi hjelpe?» viser forhåndsskrevne svar når du velger en knapp. Funksjonen sender ikke valg eller samtaler til en AI-tjeneste og har ikke et fritekstfelt. Vi bruker ikke denne funksjonen til profilering eller automatiserte avgjørelser med rettslig eller tilsvarende vesentlig virkning for deg.</p>
            <Pending>Kontroller logger og eventuelle ekstra skript i Netlify-panelet og på den publiserte siden. Hvis samtykkepliktig teknologi tas i bruk, må informasjon og samtykkeløsning være på plass før aktivering.</Pending>
          </Section>

          <Section id="lagring" title="Lagring og sletting">
            <Pending>Følgende sletterutiner er forslag. De må vedtas og settes i praksis før teksten publiseres.</Pending>
            <ul className="list-disc space-y-3 pl-6">
              <li><strong>Henvendelser uten oppdrag:</strong> slettes senest 12 måneder etter avsluttet dialog. Opplysninger uten videre relevans slettes tidligere.</li>
              <li><strong>Løpende kundeoppfølging:</strong> beholdes mens oppdraget eller vedlikeholdsavtalen løper. Unødvendige opplysninger og vedlegg slettes underveis.</li>
              <li><strong>Avtaler og nødvendig prosjektdokumentasjon:</strong> beholdes som foreslått hovedregel i tre år etter avsluttet oppdrag for å dokumentere leveransen og håndtere mulige krav. Ved en konkret tvist beholdes relevante opplysninger til saken er endelig avsluttet og aktuelle frister er utløpt. Grunnlaget er berettiget interesse.</li>
              <li><strong>Lovpålagt dokumentasjon:</strong> [Angi aktuelle dokumenttyper, lovgrunnlag og konkrete oppbevaringsfrister dersom slik dokumentasjon behandles.]</li>
              <li><strong>Tekniske logger og sikkerhetskopier:</strong> [Fyll inn bekreftede lagringstider hos Netlify og Domene AS, inkludert når slettet e-post forsvinner fra sikkerhetskopier.]</li>
            </ul>
          </Section>

          <Section id="leverandorer" title="Leverandører og overføring">
            <p>De i Kodela som trenger opplysningene for å håndtere henvendelsen eller oppdraget, har tilgang. Vi bruker disse leverandørene:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li><strong>Domene AS (domene.no):</strong> leverer vanlig e-post og behandler e-postinnhold, vedlegg og tekniske opplysninger knyttet til levering og drift.</li>
              <li><strong>Netlify, Inc.:</strong> leverer hosting og distribusjon av nettsiden og behandler tekniske besøksopplysninger. Innhold fra kontaktskjemaet sendes ikke til Netlify av nettsidekoden.</li>
            </ul>
            <p>Opplysninger kan også utleveres til offentlige myndigheter når vi er rettslig forpliktet til det.</p>
            <h3 className="font-semibold text-kodela-cream">Behandling utenfor EØS</h3>
            <p>Netlify er en amerikansk leverandør med internasjonal infrastruktur. Behandling kan skje i USA og land der relevante underleverandører opererer. Databehandleravtalen beskriver bruk av EU–US Data Privacy Framework for overføringer som omfattes av ordningen, og EUs standard personvernbestemmelser for overføringer som ikke omfattes og krever slike garantier.</p>
            <p>Se <a className={link} href="https://www.netlify.com/pdf/netlify-dpa.pdf">Netlifys databehandleravtale</a> og <a className={link} href="https://www.netlify.com/legal/subprocessors/">oversikten over underleverandører og land</a>. Kontakt oss for informasjon om garantiene som gjelder for dine opplysninger.</p>
            <Pending>Bekreft land, underleverandører og overføringsgrunnlag for deres Netlify-oppsett. Innhent databehandleravtale for e-postinnhold hos Domene AS, og bekreft lagringsland, underleverandører og eventuell tilgang eller overføring utenfor EØS. Domene AS sin offentlige personverntekst punkt 1.6 dekker ikke kunders e-postinnhold.</Pending>
          </Section>

          <Section id="rettigheter" title="Dine rettigheter">
            <p>Kontakt <a className={link} href="mailto:post@kodelastudio.no">post@kodelastudio.no</a> for å bruke rettighetene dine. Avhengig av behandlingen har du rett til:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li><strong>Innsyn</strong> i opplysningene om deg og hvordan de brukes.</li>
              <li><strong>Retting</strong> av uriktige opplysninger og supplering av mangelfulle opplysninger.</li>
              <li><strong>Sletting</strong> når vilkårene er oppfylt. Lovpålagt oppbevaring eller behovet for å håndtere rettskrav kan begrense retten.</li>
              <li><strong>Begrensning</strong> i bestemte situasjoner, for eksempel mens riktigheten av opplysninger undersøkes.</li>
              <li><strong>Å protestere</strong> av grunner knyttet til din særlige situasjon når behandlingen bygger på berettiget interesse. Vi stanser da behandlingen med mindre vi påviser tvingende berettigede grunner som veier tyngre, eller behandlingen er nødvendig for rettskrav.</li>
              <li><strong>Dataportabilitet</strong> for opplysninger du selv har gitt oss, når behandlingen skjer automatisk og bygger på avtale eller samtykke.</li>
            </ul>
            <p>Behandlingen beskrevet her bygger ikke på samtykke. Hvis vi senere ber om samtykke til en egen behandling, får du egen informasjon og kan trekke samtykket tilbake. Dette påvirker ikke lovligheten av behandlingen før tilbaketrekkingen.</p>
            <p>Vi svarer uten ugrunnet opphold og normalt senest innen én måned. Ved særlig kompliserte eller mange forespørsler kan fristen forlenges med opptil to måneder. Du får da beskjed og en begrunnelse innen den første måneden. Vi kan be om nødvendige opplysninger for å bekrefte identiteten din.</p>
            <p>Du kan klage direkte til <a className={link} href="https://www.datatilsynet.no/">Datatilsynet</a> hvis du mener behandlingen er i strid med personvernreglene. Du trenger ikke kontakte oss først.</p>
          </Section>

          <Section id="endringer" title="Endringer og kontakt">
            <p>Vi oppdaterer erklæringen når behandlingen endres. Ved vesentlige endringer informerer vi berørte personer på en egnet måte. Nye formål eller samtykkepliktig behandling vurderes før de tas i bruk.</p>
            <p>Spørsmål om personvern sendes til <a className={link} href="mailto:post@kodelastudio.no">post@kodelastudio.no</a>.</p>
            <a className={link} href="/kontakt">Gå til kontaktsiden</a>
          </Section>
        </div>
      </article>
    </main>
  );
}
