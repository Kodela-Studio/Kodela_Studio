export default function Logo({ variant = "large" }) {
  const isSmall = variant === "small";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-center gap-2 font-light ${
          isSmall ? "text-2xl" : "text-5xl"
        }`}
      >
        <span>{"<"}</span>
        <span className="text-kodela-gold">/</span>
        <span>{">"}</span>
      </div>

      <p
        className={`mt-1 tracking-[0.45rem] font-light ${
          isSmall ? "text-sm" : "text-4xl"
        }`}
      >
        KODELA
      </p>

      <p
        className={`text-kodela-gold tracking-[0.55rem] ${
          isSmall ? "text-[0.55rem]" : "text-sm"
        }`}
      >
        STUDIO
      </p>
    </div>
  );
}