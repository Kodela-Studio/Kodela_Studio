import { useEffect, useRef, useState } from "react";
import { kodelaKnowledge } from "../data/kodelaKnowledge";

const initialMessages = [
  {
    role: "bot",
    text: "Hei! Jeg er Kodela-assistenten. Jeg kan hjelpe deg å finne riktig pakke, estimere pris eller sende en forespørsel.",
  },
];

const menuOptions = [
  "Finn riktig pakke",
  "Estimer pris",
  "Se tjenester",
  "Kontakt Kodela",
];

const leadSteps = [
  {
    key: "business",
    question: "Hva slags bedrift gjelder det?",
  },
  {
    key: "website",
    question: "Har dere nettside i dag?",
    options: ["Ja", "Nei", "Den må forbedres"],
  },
  {
    key: "goal",
    question: "Hva ønsker dere mest hjelp med?",
    options: [
      "Ny nettside",
      "Forbedre eksisterende nettside",
      "Mer profesjonelt uttrykk",
      "Flere henvendelser",
      "Logo og visuell identitet",
      "Enkel booking",
    ],
  },
  {
    key: "timeline",
    question: "Når ønsker dere å komme i gang?",
    options: [
      "Så snart som mulig",
      "Innen 1 måned",
      "1–3 måneder",
      "Bare undersøker",
    ],
  },
  {
    key: "name",
    question: "Hva heter du?",
  },
  {
    key: "email",
    question: "Hva er e-posten din?",
  },
];

const estimateSteps = [
  {
    key: "pages",
    question: "Hvor mange sider tror du dere trenger?",
    options: ["1–3 sider", "1–5 sider", "5–10 sider", "10+ sider"],
  },
  {
    key: "branding",
    question: "Trenger dere logo, brand board eller visuell identitet?",
    options: ["Ja", "Nei", "Usikker"],
  },
  {
    key: "upgrade",
    question:
      "Handler prosjektet mest om ny nettside eller forbedring av eksisterende side?",
    options: ["Ny nettside", "Forbedre eksisterende side"],
  },
  {
    key: "booking",
    question: "Trenger dere enkel booking eller timebestilling?",
    options: ["Ja", "Nei", "Usikker"],
  },
];

function getPackageRecommendation(data) {
  const business = (data.business || "").toLowerCase();
  const website = (data.website || "").toLowerCase();
  const goal = (data.goal || "").toLowerCase();
  const timeline = (data.timeline || "").toLowerCase();

  const text = `${business} ${website} ${goal} ${timeline}`;

  const needsPremium =
    text.includes("booking") ||
    text.includes("timebestilling") ||
    text.includes("10+") ||
    text.includes("mange sider") ||
    text.includes("større nettside");

  const needsGrowth =
    text.includes("forbedre") ||
    text.includes("forbedres") ||
    text.includes("profesjonelt") ||
    text.includes("flere henvendelser") ||
    text.includes("flere kunder") ||
    text.includes("logo") ||
    text.includes("visuell identitet") ||
    text.includes("brand");

  const needsEssential =
    text.includes("ny nettside") ||
    website === "nei" ||
    text.includes("første nettside");

  const needsStart =
    text.includes("enkel side") ||
    text.includes("landingsside") ||
    text.includes("1 side") ||
    text.includes("lite budsjett");

  if (needsPremium) return "Premium";
  if (needsGrowth) return "Growth";
  if (needsEssential) return "Essential";
  if (needsStart) return "Start";

  return "Growth";
}

function getPackageInfo(packageName) {
  return kodelaKnowledge.packages.find((item) => item.name === packageName);
}

function calculateEstimate(data) {
  let min = 9900;
  let max = 14900;
  let recommended = "Start";

  if (data.pages === "1–3 sider") {
    min = 9900;
    max = 14900;
    recommended = "Start";
  }

  if (data.pages === "1–5 sider") {
    min = 14900;
    max = 19900;
    recommended = "Essential";
  }

  if (data.pages === "5–10 sider") {
    min = 24900;
    max = 34900;
    recommended = "Growth";
  }

  if (data.pages === "10+ sider") {
    min = 39900;
    max = 59900;
    recommended = "Premium";
  }

  if (data.branding === "Ja") {
    min += 4900;
    max += 9900;

    if (recommended === "Start" || recommended === "Essential") {
      recommended = "Growth";
    }
  }

  if (data.upgrade === "Forbedre eksisterende side") {
    if (recommended === "Start" || recommended === "Essential") {
      recommended = "Growth";
      min = Math.max(min, 24900);
      max = Math.max(max, 34900);
    }
  }

  if (data.booking === "Ja") {
    min += 5900;
    max += 12000;
    recommended = "Premium";
  }

  return { min, max, recommended };
}

function formatCurrency(number) {
  return new Intl.NumberFormat("no-NO").format(number);
}

function createMailto(lead, recommendation) {
  const subject = encodeURIComponent("Forespørsel fra Kodela-chatbot");
  const body = encodeURIComponent(`
Hei Kodela Studio,

Jeg ønsker mer informasjon om tjenester/pakker.

Navn: ${lead.name || ""}
E-post: ${lead.email || ""}
Bedriftstype: ${lead.business || ""}
Har nettside i dag: ${lead.website || ""}
Viktigste mål: ${lead.goal || ""}
Tidshorisont: ${lead.timeline || ""}
Anbefalt pakke: ${recommendation || ""}

Sendt via Kodela-chatboten.
  `);

  return `mailto:${kodelaKnowledge.contact.email}?subject=${subject}&body=${body}`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [leadData, setLeadData] = useState({});
  const [estimateData, setEstimateData] = useState({});
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  function addBotMessage(text, extra = {}) {
    setMessages((current) => [...current, { role: "bot", text, ...extra }]);
  }

  function addUserMessage(text) {
    setMessages((current) => [...current, { role: "user", text }]);
  }

  function startLeadFlow() {
    setMode("lead");
    setStepIndex(0);
    setLeadData({});
    addBotMessage(leadSteps[0].question, {
      options: leadSteps[0].options || [],
    });
  }

  function startEstimateFlow() {
    setMode("estimate");
    setStepIndex(0);
    setEstimateData({});
    addBotMessage(estimateSteps[0].question, {
      options: estimateSteps[0].options || [],
    });
  }

  function showServices() {
    addBotMessage(
      `Kodela Studio tilbyr: ${kodelaKnowledge.services.join(", ")}.`,
    );
  }

  function showContact() {
    addBotMessage(
      `Du kan kontakte oss på ${kodelaKnowledge.contact.email}. Fortell gjerne kort om bedriften og hva dere ønsker hjelp med.`,
    );
  }

  function showPackageCard(packageName) {
    const packageInfo = getPackageInfo(packageName);

    if (!packageInfo) return;

    addBotMessage(`Basert på svarene dine anbefaler jeg ${packageName}.`, {
      card: packageInfo,
    });
  }

  function completeLeadFlow(updatedData) {
    const recommendation = getPackageRecommendation(updatedData);
    showPackageCard(recommendation);

    addBotMessage(
      "Jeg kan gjøre dette klart som en forespørsel til Kodela Studio. Trykk på knappen under, så åpnes en ferdig utfylt e-post.",
      {
        cta: {
          label: "Send forespørsel",
          href: createMailto(updatedData, recommendation),
        },
      },
    );

    setMode("idle");
    setStepIndex(0);
  }

  function completeEstimateFlow(updatedData) {
    const estimate = calculateEstimate(updatedData);
    const packageInfo = getPackageInfo(estimate.recommended);

    addBotMessage(
      `Basert på svarene dine estimerer jeg prosjektet til ca. ${formatCurrency(
        estimate.min,
      )}–${formatCurrency(
        estimate.max,
      )} kr eks. mva. Endelig pris avhenger av innhold, funksjoner og omfang.`,
      {
        card: packageInfo,
      },
    );

    addBotMessage(
      "Vil du at jeg hjelper deg å gjøre dette om til en forespørsel?",
      {
        options: ["Ja, start forespørsel", "Nei, bare informasjon"],
      },
    );

    setMode("idle");
    setStepIndex(0);
  }

  function handleFlowAnswer(answer) {
    addUserMessage(answer);

    if (mode === "lead") {
      const currentStep = leadSteps[stepIndex];
      const updatedData = { ...leadData, [currentStep.key]: answer };
      setLeadData(updatedData);

      const nextStepIndex = stepIndex + 1;

      if (nextStepIndex >= leadSteps.length) {
        completeLeadFlow(updatedData);
        return;
      }

      const nextStep = leadSteps[nextStepIndex];
      setStepIndex(nextStepIndex);
      addBotMessage(nextStep.question, {
        options: nextStep.options || [],
      });
      return;
    }

    if (mode === "estimate") {
      const currentStep = estimateSteps[stepIndex];
      const updatedData = { ...estimateData, [currentStep.key]: answer };
      setEstimateData(updatedData);

      const nextStepIndex = stepIndex + 1;

      if (nextStepIndex >= estimateSteps.length) {
        completeEstimateFlow(updatedData);
        return;
      }

      const nextStep = estimateSteps[nextStepIndex];
      setStepIndex(nextStepIndex);
      addBotMessage(nextStep.question, {
        options: nextStep.options || [],
      });
    }
  }

  function handleMenuChoice(choice) {
    addUserMessage(choice);

    if (choice === "Finn riktig pakke") {
      startLeadFlow();
      return;
    }

    if (choice === "Estimer pris") {
      startEstimateFlow();
      return;
    }

    if (choice === "Se tjenester") {
      showServices();
      return;
    }

    if (choice === "Kontakt Kodela") {
      showContact();
    }
  }

  function handleFreeText(message) {
    const normalized = message.toLowerCase();

    if (
      normalized.includes("pris") ||
      normalized.includes("koster") ||
      normalized.includes("kostnad") ||
      normalized.includes("estimat")
    ) {
      startEstimateFlow();
      return;
    }

    if (
      normalized.includes("nettside") ||
      normalized.includes("pakke") ||
      normalized.includes("hjelp") ||
      normalized.includes("tilbud") ||
      normalized.includes("forbedre")
    ) {
      addBotMessage(
        "Klart. Jeg stiller noen raske spørsmål og anbefaler riktig pakke.",
      );
      startLeadFlow();
      return;
    }

    if (
      normalized.includes("kontakt") ||
      normalized.includes("epost") ||
      normalized.includes("mail")
    ) {
      showContact();
      return;
    }

    showServices();
    addBotMessage("Vil du at jeg skal hjelpe deg å finne riktig pakke?", {
      options: ["Finn riktig pakke", "Estimer pris", "Kontakt Kodela"],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = input.trim();
    if (!message) return;

    setInput("");

    if (mode === "lead" || mode === "estimate") {
      handleFlowAnswer(message);
      return;
    }

    addUserMessage(message);
    handleFreeText(message);
  }

  function handleOptionClick(option) {
    if (mode === "lead" || mode === "estimate") {
      handleFlowAnswer(option);
      return;
    }

    if (option === "Ja, start forespørsel" || option === "Finn riktig pakke") {
      handleMenuChoice("Finn riktig pakke");
      return;
    }

    if (option === "Estimer pris") {
      handleMenuChoice("Estimer pris");
      return;
    }

    if (option === "Kontakt Kodela") {
      handleMenuChoice("Kontakt Kodela");
      return;
    }

    addUserMessage(option);
    addBotMessage(
      "Null stress. Du kan stille meg et nytt spørsmål når som helst.",
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[999] md:bottom-8 md:right-8">
      {isOpen && (
        <div className="mb-4 flex h-[72vh] max-h-[700px] min-h-[540px] w-[calc(100vw-2.5rem)] max-w-[410px] flex-col overflow-hidden border border-white/10 bg-kodela-black shadow-[0_30px_90px_rgba(0,0,0,0.55)] md:w-[410px]">
          <div className="border-b border-white/10 bg-kodela-dark/95 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3rem] text-kodela-gold">
                  Kodela Studio
                </p>
                <h2 className="mt-2 text-xl font-medium text-kodela-cream">
                  Digital rådgiver
                </h2>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Finn pakke, estimer pris eller send forespørsel.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-9 w-9 place-items-center border border-white/10 text-xl text-kodela-muted transition hover:border-kodela-gold hover:text-kodela-gold"
                aria-label="Lukk chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`}>
                <div
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] border px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "border-kodela-gold bg-kodela-gold text-kodela-black"
                        : "border-white/10 bg-kodela-dark text-kodela-cream"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>

                {message.card && (
                  <div className="mt-3 border border-kodela-gold/40 bg-kodela-gold/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25rem] text-kodela-gold">
                      Anbefalt pakke
                    </p>
                    <h3 className="mt-2 text-2xl font-medium text-kodela-cream">
                      {message.card.name}
                    </h3>
                    <p className="mt-2 text-xl text-kodela-gold">
                      {message.card.price}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-kodela-muted">
                      {message.card.description}
                    </p>
                  </div>
                )}

                {message.options && message.options.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleOptionClick(option)}
                        className="border border-white/10 px-3 py-2 text-left text-[0.7rem] uppercase tracking-[0.15rem] text-kodela-muted transition hover:border-kodela-gold hover:text-kodela-gold"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {message.cta && (
                  <a
                    href={message.cta.href}
                    className="mt-3 inline-block bg-kodela-gold px-5 py-3 text-xs uppercase tracking-widest text-kodela-black transition hover:bg-kodela-cream"
                  >
                    {message.cta.label}
                  </a>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-kodela-black p-4">
            {mode === "idle" && (
              <div className="mb-4 grid grid-cols-2 gap-2">
                {menuOptions.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => handleMenuChoice(choice)}
                    className="border border-white/10 px-3 py-2 text-left text-[0.62rem] uppercase leading-5 tracking-[0.15rem] text-kodela-muted transition hover:border-kodela-gold hover:text-kodela-gold"
                  >
                    {choice}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={
                  mode === "idle"
                    ? "Skriv spørsmålet ditt..."
                    : "Skriv svaret ditt..."
                }
                className="min-w-0 flex-1 border border-white/10 bg-kodela-dark px-4 py-3 text-sm text-kodela-cream outline-none placeholder:text-kodela-muted focus:border-kodela-gold"
              />

              <button
                type="submit"
                className="bg-kodela-gold px-5 py-3 text-xs uppercase tracking-widest text-kodela-black transition hover:bg-kodela-cream"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`group flex h-16 items-center gap-3 border border-kodela-gold px-5 text-xs uppercase tracking-widest shadow-2xl transition ${
          isOpen
            ? "bg-kodela-gold text-kodela-black"
            : "bg-kodela-black text-kodela-cream hover:bg-kodela-gold hover:text-kodela-black"
        }`}
        aria-label={isOpen ? "Lukk chatbot" : "Åpne chatbot"}
      >
        <span className="grid h-8 w-8 place-items-center border border-current">
          ✦
        </span>
        <span className="hidden sm:inline">
          {isOpen ? "Lukk chat" : "Spør oss"}
        </span>
      </button>
    </div>
  );
}
