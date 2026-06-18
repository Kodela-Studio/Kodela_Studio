import { useState } from "react";

const quickQuestions = [
  "Hva tilbyr dere?",
  "Hva koster en nettside?",
  "Hvilken pakke passer for meg?",
  "Tilbyr dere drift?",
  "Hvordan kontakter jeg dere?",
];

const answers = [
  {
    keywords: ["tilbyr", "tjenester", "hjelpe", "gjør dere"],
    answer:
      "Kodela Studio hjelper bedrifter med nettsider, webdesign, merkevare, logo, digitale løsninger, booking, kundeportaler, AI-løsninger, SEO og videre digital vekst.",
  },
  {
    keywords: ["pris", "koster", "kostnad", "nettside", "pakke"],
    answer:
      "Nettsidepakkene våre starter på 19 900 kr for Essential, 39 900 kr for Growth, 69 900 kr for Premium og fra 99 000 kr for Digital Partner. Endelig pris avhenger av omfang, innhold og funksjoner.",
  },
  {
    keywords: ["essential", "start", "liten", "enkel"],
    answer:
      "Essential passer for små bedrifter, gründere og lokale aktører som trenger en profesjonell, trygg og mobiltilpasset nettside. Pakken starter på 19 900 kr.",
  },
  {
    keywords: ["growth", "vekst", "flere kunder", "henvendelser"],
    answer:
      "Growth er pakken vi anbefaler for bedrifter som ønsker flere henvendelser, tydeligere merkevare og bedre struktur. Den inkluderer blant annet brand board, opptil 10 sider, SEO-struktur og blogg/nyheter.",
  },
  {
    keywords: ["premium", "avansert", "booking", "integrasjon"],
    answer:
      "Premium passer for etablerte bedrifter som trenger en mer avansert løsning med UX-prosess, wireframes, booking, integrasjoner, avanserte skjemaer, animasjoner og teknisk optimalisering.",
  },
  {
    keywords: ["digital partner", "portal", "kundeportal", "system", "webapp"],
    answer:
      "Digital Partner er for selskaper som trenger mer enn en nettside. Det kan inkludere webapplikasjon, kundeportal, dashboard, AI-chatbot, automatiseringer og løpende digital strategi.",
  },
  {
    keywords: ["drift", "vedlikehold", "support", "abonnement"],
    answer:
      "Ja, vi tilbyr abonnementer etter lansering. Care starter på 499 kr/mnd, Growth Care på 999 kr/mnd, Business Growth på 1 990 kr/mnd og Digital Partner Care på 4 990 kr/mnd.",
  },
  {
    keywords: ["seo", "google", "synlighet"],
    answer:
      "Ja, vi kan hjelpe med grunnleggende SEO, SEO-struktur, Google Business-optimalisering, teknisk SEO og løpende SEO-arbeid gjennom egne pakker eller abonnement.",
  },
  {
    keywords: ["ai", "chatbot", "automatisering"],
    answer:
      "Ja, vi tilbyr AI-chatbot, FAQ-assistent og automatiseringer. Dette passer godt for bedrifter som ønsker å spare tid, svare raskere på kundehenvendelser eller effektivisere arbeidsflyt.",
  },
  {
    keywords: ["kontakt", "mail", "epost", "snakke", "tilbud"],
    answer:
      "Du kan kontakte oss på post@kodela.studio. Fortell gjerne kort om bedriften, hva dere ønsker hjelp med og hvilken pakke som virker mest relevant.",
  },
];

function findAnswer(message) {
  const normalized = message.toLowerCase();

  const match = answers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (match) return match.answer;

  return "Godt spørsmål. Jeg kan svare på tjenester, pakker, priser, SEO, drift, AI-løsninger og kontakt. Hvis du ønsker et konkret tilbud, kan du sende en e-post til post@kodela.studio.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hei, jeg er Kodela-assistenten. Jeg kan hjelpe deg med spørsmål om tjenester, pakker, priser og hvordan du kommer i gang.",
    },
  ]);

  function sendMessage(text) {
    const message = text.trim();

    if (!message) return;

    const botAnswer = findAnswer(message);

    setMessages((current) => [
      ...current,
      { role: "user", text: message },
      { role: "bot", text: botAnswer },
    ]);

    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {isOpen && (
        <div className="mb-4 flex h-[620px] w-[calc(100vw-3rem)] max-w-[420px] flex-col overflow-hidden border border-white/10 bg-kodela-black shadow-2xl md:w-[420px]">
          <div className="border-b border-white/10 bg-kodela-dark p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3rem] text-kodela-gold">
                  Kodela Studio
                </p>
                <h2 className="mt-2 text-xl font-medium text-kodela-cream">
                  Digital assistent
                </h2>
                <p className="mt-2 text-sm leading-6 text-kodela-muted">
                  Spør om tjenester, priser eller hvilken pakke som passer.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-2xl text-kodela-muted transition hover:text-kodela-cream"
                aria-label="Lukk chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-none border p-4 text-sm leading-6 ${
                    message.role === "user"
                      ? "border-kodela-gold bg-kodela-gold text-kodela-black"
                      : "border-white/10 bg-kodela-dark text-kodela-cream"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="border border-white/10 px-3 py-2 text-left text-[0.7rem] uppercase tracking-widest text-kodela-muted transition hover:border-kodela-gold hover:text-kodela-gold"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Skriv spørsmålet ditt..."
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
        className="group flex items-center gap-3 border border-kodela-gold bg-kodela-black px-6 py-4 text-xs uppercase tracking-widest text-kodela-cream shadow-2xl transition hover:bg-kodela-gold hover:text-kodela-black"
        aria-label={isOpen ? "Lukk chatbot" : "Åpne chatbot"}
      >
        <span className="text-lg">✦</span>
        {isOpen ? "Lukk chat" : "Spør oss"}
      </button>
    </div>
  );
}
