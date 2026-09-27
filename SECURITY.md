# Sikkerhet i Kodela Studio

Nettsiden er en statisk React-side. Kontaktskjemaet åpner e-postprogrammet med
`mailto:`. Det finnes ingen egen innlogging, database, betalingsløsning eller
API i dette repoet. Hosting-, GitHub-, domene- og e-postkontoene må sikres separat.

## Beskyttelse i koden

- Netlify sender CSP som begrenser kjørbare skript til eget opphav og blokkerer
  inline JavaScript, eval, objekter, innebygde rammer og nettbasert skjemainnsending.
  Skjemaets JavaScript-baserte mailto-funksjon beholdes.
- CSP og X-Frame-Options hindrer andre nettsteder i å ramme inn siden.
- HSTS ber nettleseren bruke HTTPS i ett år etter et sikkert besøk. Ingen
  includeSubDomains eller preload: dette krever kontroll av alle underdomener.
- Eksisterende nosniff, referrer-policy og begrensning av kamera/mikrofon/geolokasjon beholdes.
- Inline CSS tillates for eksisterende styling/SVG; inline JavaScript tillates ikke.
- Dependabot foreslår ukentlige npm-oppdateringer. Se gjennom og test før sammenslåing.
- `.env.*`, private nøkkelfiler og nye kontoskjermbilder ignoreres av Git.
  Dette skjuler ikke filer som allerede er sporet eller finnes i historikken.

Endrer dere hosting, booking, skjema, fonter, eksterne bilder eller analyseverktøy,
må CSP vurderes på nytt. Ikke legg til `unsafe-inline` eller `unsafe-eval` for
JavaScript som en rask løsning. Netlify-funksjoner og proxy-svar må sende egne
headere; denne konfigurasjonen beskytter statiske svar.

## Må gjøres i kontoene

1. Kontroller de tidligere kontoskjermbildene. Hvis de viser gyldige passord,
   nøkler eller gjenopprettingskoder, bytt/tilbakekall dem straks og kontroller
   innlogginger. De fem bildene er fjernet fra denne grenen, men finnes fortsatt
   i main frem til sammenslåing, og i tidligere Git-commits etterpå. Sletting av
   historikk krever en koordinert opprydding; det erstatter aldri passordbytte.
2. Aktiver tofaktor/passkeys på GitHub, Netlify og domene/e-post der tjenesten
   støtter det. Bruk unike passord og en passordbehandler.
3. Gi hver person egen konto der mulig. Fjern gamle medlemmer, tilganger,
   apper og tokens, og bruk minst mulig tilgang.
4. Sett opp beskyttelse av main med pull request og relevante byggetester.
   Kontroller hvem som kan publisere hos Netlify og om ukjente PR-er kan
   kjøre bygg med hemmeligheter. Ikke legg hemmeligheter i VITE_-variabler;
   de blir del av den offentlige nettleserkoden.
5. Kontroller HTTPS/sertifikater og sikkerhetsvarsler hos Netlify, og sikre
   domenekontoen mot uønsket endring av DNS eller eierskap.
6. Oppbevar interne avtaler og personopplysninger utenfor et offentlig repo.
   Gjennomgå også gamle commits; denne endringen er ikke en full historikkskanning.

## Kontroll før og etter publisering

- Kjør `npm ci`, `npm audit`, `npm run lint` og `npm run build`.
- Kontroller alle ruter, mobilmeny, hjelpevindu, bilder og kontaktskjema med CSP aktiv.
- Etter deploy: sjekk faktiske HTTP-headere og nettleserkonsollen på hoveddomenet.
  Netlify-innstillinger og eventuelle injiserte skript må kontrolleres i produksjon.
- Ingen kjente npm-varsler er ikke en garanti for at løsningen er uten sårbarheter.

Dokumentasjon: https://docs.netlify.com/resources/checklists/security-checklist/
og https://docs.netlify.com/manage/routing/headers/
