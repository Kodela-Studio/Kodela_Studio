export default function ProjectShowcase() {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-kodela-dark p-4 shadow-2xl sm:p-6 lg:p-7">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-kodela-gold/10 blur-3xl" />
      <div className="relative aspect-[5/4] min-h-[300px] overflow-hidden border border-white/10 bg-black/30 p-6 sm:min-h-[390px] sm:p-8 lg:aspect-[4/5] xl:aspect-[5/4]">
        <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-b border-white/10 pb-4 sm:left-8 sm:right-8 sm:top-8">
          <span className="text-[0.62rem] uppercase tracking-[0.22em] text-kodela-gold">Kodela Studio</span>
          <span className="text-[0.62rem] tracking-[0.18em] text-kodela-muted">01 / 03</span>
        </div>

        <div className="absolute left-6 top-1/2 h-px w-16 bg-kodela-gold/60 sm:left-8 sm:w-24" />
        <div className="absolute right-6 top-[38%] h-24 w-24 border border-white/10 sm:right-8 sm:h-32 sm:w-32" />
        <div className="absolute right-10 top-[42%] h-16 w-16 border border-kodela-gold/35 sm:right-12 sm:h-24 sm:w-24" />

        <div className="relative flex h-full flex-col justify-end">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-kodela-gold">Digital tilstedeværelse</p>
          <h2 className="max-w-md text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">Design som gjør innholdet tydelig.</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-kodela-muted sm:text-base">Rolig visuelt uttrykk, tydelig hierarki og en struktur som leder kunden videre.</p>
        </div>
      </div>
    </div>
  );
}
