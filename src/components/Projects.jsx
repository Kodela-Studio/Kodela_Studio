const process = [
  { number: "01", title: "Avklaring", text: "Vi starter med bedriften, målgruppen og hva nettsiden faktisk skal hjelpe dere med å oppnå." },
  { number: "02", title: "Struktur og design", text: "Vi organiserer innholdet, bygger et tydelig visuelt hierarki og tilpasser uttrykket til bedriften." },
  { number: "03", title: "Utvikling og lansering", text: "Løsningen bygges responsivt, testes på ulike skjermstørrelser og gjøres klar for publisering." },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-kodela-dark px-6 py-20 text-kodela-cream sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-kodela-gold sm:text-sm sm:tracking-[0.3rem]">Slik jobber vi</p>
            <h2 className="max-w-4xl text-4xl font-light leading-[1.08] tracking-[-0.035em] sm:text-5xl md:text-6xl">En ryddig prosess fra idé til ferdig nettside.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-kodela-muted lg:justify-self-end">Et godt resultat handler ikke om flest mulig funksjoner. Vi avklarer hva bedriften trenger, prioriterer det viktigste og bygger en løsning som er enkel å forstå, bruke og videreføre.</p>
        </div>

        <div className="mt-14 grid border-y border-white/10 sm:mt-16 md:grid-cols-3">
          {process.map((item, index) => (
            <article key={item.number} className={`flex min-h-[270px] flex-col py-8 sm:py-10 md:min-h-[330px] md:p-10 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}>
              <span className="text-xs tracking-[0.2em] text-kodela-gold">{item.number}</span>
              <div className="mt-auto pt-14">
                <h3 className="text-2xl font-light tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-5 max-w-sm text-sm leading-7 text-kodela-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-kodela-muted">Har dere allerede en nettside? Vi kan også vurdere hva som bør beholdes, forbedres eller bygges på nytt.</p>
          <a href="mailto:post@kodela.studio?subject=Prosjektforespørsel" className="shrink-0 border border-kodela-gold px-7 py-4 text-center text-xs uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-kodela-gold hover:text-kodela-black">Snakk med oss</a>
        </div>
      </div>
    </section>
  );
}
