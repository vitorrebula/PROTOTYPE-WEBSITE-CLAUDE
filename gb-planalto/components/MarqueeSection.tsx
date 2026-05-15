"use client";

const items = [
  "Disciplina",
  "Evolução",
  "Comunidade",
  "Família",
  "Respeito",
  "Alto Nível",
  "Confiança",
  "Defesa Pessoal",
  "Competição",
  "Excelência",
  "Gracie Barra",
  "Jiu-Jitsu",
];

const doubled = [...items, ...items];

export default function MarqueeSection() {
  return (
    <section
      className="relative py-14 overflow-hidden"
      style={{ borderTop: "1px solid rgba(10,14,26,0.07)", borderBottom: "1px solid rgba(10,14,26,0.07)", background: "#F0F1F5" }}
    >
      {/* Left/right fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #F0F1F5 0%, transparent 100%)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #F0F1F5 0%, transparent 100%)" }}
      />

      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-display uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: i % 2 === 0 ? "rgba(10,14,26,0.75)" : "rgba(6,42,113,0.35)",
                letterSpacing: "0.15em",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              {item}
            </span>
            <span
              className="text-xs"
              style={{ color: "#F70000", paddingRight: "1rem" }}
            >
              ●
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
