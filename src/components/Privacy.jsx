import Seo from "./Seo";

export default function Privacy() {
  return (
    <main className="bg-kodela-black px-6 pb-24 pt-36 text-kodela-cream sm:pt-40">
      <Seo title="Personvern | Kodela Studio" description="Les hvordan Kodela Studio behandler personopplysninger når du besøker nettsiden eller tar kontakt med oss." path="/personvern" />
      <article className="mx-auto max-w-3xl">
        <p className="mb-5 text-[10px] uppercase tracking-[.3em] text-kodela-gold">Personvern</p>
        <h1 className="text-4xl font-light tracking-[-.045em] sm:text-6xl">Personvernerklæring</h1>
        <p className="mt-7 text-base leading-8 text-kodela-muted">Vi behandler bare personopplysninger som er nødvendige for å svare på henvendelser og levere avtalte tjenester. Denne siden oppdateres dersom måten vi behandler opplysninger på endres.</p>
        <div className="mt-12 space-y-10 border-t border-white/15 pt-10 text-sm leading-7 text-zinc-300">
          <section><h2 className="mb-3 text-xl font-normal text-kodela-cream">Når du tar kontakt</h2><p>Hvis du kontakter oss, kan vi behandle navn, e-postadresse, bedriftsnavn og informasjonen du selv oppgir i henvendelsen. Opplysningene brukes for å svare deg, følge opp forespørselen og eventuelt forberede eller gjennomføre et kundeforhold.</p></section>
          <section><h2 className="mb-3 text-xl font-normal text-kodela-cream">Hvor lenge opplysninger lagres</h2><p>Vi lagrer opplysninger så lenge det er nødvendig for formålet de ble samlet inn for, eller så lenge vi er pålagt å oppbevare dem etter gjeldende regelverk.</p></section>
          <section><h2 className="mb-3 text-xl font-normal text-kodela-cream">Dine rettigheter</h2><p>Du kan be om innsyn, retting eller sletting av personopplysninger vi har om deg, der regelverket gir rett til det. Kontakt oss på post@kodela.studio.</p></section>
          <section><h2 className="mb-3 text-xl font-normal text-kodela-cream">Informasjonskapsler</h2><p>Vi bruker ikke markedsførings- eller analyseverktøy som krever samtykke på nettsiden per i dag. Dersom dette endres, oppdaterer vi informasjonen og innhenter samtykke der det er nødvendig.</p></section>
          <section><h2 className="mb-3 text-xl font-normal text-kodela-cream">Kontakt</h2><p>Kodela Studio<br/>Oslo, Norge<br/><a className="text-kodela-gold" href="mailto:post@kodela.studio">post@kodela.studio</a></p></section>
        </div>
      </article>
    </main>
  );
}
