"use client";

import { useRef, useState, useEffect } from "react";
import { Shield, Users, Trophy, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const milestones = [
  { year: "2021", title: "Nasce a GB Planalto",              body: "A Gracie Barra Planalto abre suas portas em Belo Horizonte com a missão de espalhar o Jiu-Jitsu de alto nível." },
  { year: "2024", title: "Campeão mundial IBJJF",            body: "Nosso professor torna-se campeão mundial da IBJJF em Las Vegas, Nevada — EUA. Uma conquista histórica para a academia." },
  { year: "2025", title: "Primeiro faixa preta da casa",     body: "Nossa escola forma o primeiro aluno faixa preta — uma jornada de dedicação e disciplina concluída com honra." },
  { year: "2026", title: "Inauguração da nova sede",         body: "Um novo capítulo começa: nossa nova sede, pensada para receber mais alunos e elevar ainda mais o nível técnico." },
];

const values = [
  { Icon: Shield, title: "Disciplina",    body: "A base de tudo. É o segredo para evoluir a cada dia.",               red: true  },
  { Icon: Users,  title: "Irmandade",     body: "Uma comunidade que treina, cresce e se apoia mutuamente.",           red: false },
  { Icon: Trophy, title: "Integridade",   body: "Currículo oficial Gracie Barra — sem atalhos, sem compromissos.",    red: true  },
  { Icon: Heart,  title: "Desenvolvimento", body: "Evolução técnica e humana para cada aluno, dentro e fora do tatame.", red: false },
];

const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [activeIdx, setActiveIdx] = useState(0);
  const [paused,    setPaused]    = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % milestones.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40)
      setActiveIdx((i) => delta > 0 ? Math.min(i + 1, milestones.length - 1) : Math.max(i - 1, 0));
    setTimeout(() => setPaused(false), 2000);
  };
  const goTo = (i: number) => {
    setActiveIdx(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative overflow-hidden story-section"
      style={{ background: "#07101F" }}
    >
      {/* ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(6,42,113,0.22) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div
        className="relative z-10 w-full max-w-6xl mx-auto story-inner"
        style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "clamp(48px, 8vw, 80px)" }}
      >

        {/* ── Header ── */}
        <div
          className="story-hdr"
          style={{ display: "grid", gap: 40, gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)", alignItems: "end" }}
        >
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-5">
              <div className="accent-line" />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                A Academia
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800, lineHeight: 1,
              fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#fff",
              textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0,
            }}>
              Uma família,<br />
              <span style={{ color: "var(--gb-red)" }}>uma missão.</span>
            </h2>
          </div>

          <p className="fade-up delay-100" style={{
            fontFamily: "var(--font-body)", fontWeight: 300, lineHeight: 1.7,
            fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", color: "rgba(255,255,255,0.62)", margin: 0,
          }}>
            A Gracie Barra Planalto é mais do que uma academia — é um espaço onde pessoas comuns
            descobrem o extraordinário em si mesmas. Nossa escola preserva o método do{" "}
            <strong style={{ color: "#fff", fontWeight: 700 }}>Mestre Carlos Gracie Jr.</strong>{" "}
            e entrega Jiu-Jitsu de{" "}
            <strong style={{ color: "#fff", fontWeight: 700 }}>alto nível</strong> para todas as
            idades e todos os objetivos.
          </p>
        </div>

        {/* ── Image + Values ── */}
        <div
          className="story-media"
          style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 24 }}
        >
          {/* Big image — Double-Bezel */}
          <div
            className="fade-up story-img-bezel"
            style={{
              padding: 6,
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="story-img-inner"
              style={{
                position: "relative", borderRadius: 15, overflow: "hidden",
                minHeight: 480, background: "#0F1A2E",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
              }}
            >
              <img
                src="./vinicius-falando.jpeg"
                alt="Turma da Gracie Barra Planalto"
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", filter: "grayscale(15%) contrast(1.05) brightness(0.72)",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,16,31,0.15) 0%, rgba(7,16,31,0.9) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, padding: 32, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div style={{
                  display: "inline-flex", alignSelf: "flex-start",
                  padding: "5px 12px", background: "var(--gb-red)", borderRadius: 4,
                  fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.22em", textTransform: "uppercase", color: "#fff", marginBottom: 14,
                }}>
                  Família GB Planalto
                </div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1, color: "#fff",
                  textTransform: "uppercase", letterSpacing: "-0.01em", maxWidth: 400,
                }}>
                  Disciplina forma <span style={{ color: "var(--gb-red)" }}>campeões.</span>
                </div>
                <div style={{
                  marginTop: 18, display: "flex", alignItems: "center", gap: 20,
                  color: "rgba(255,255,255,0.65)", fontSize: 11,
                  letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600,
                }}>
                  <span>Bairro Planalto · BH</span>
                  <span style={{ width: 4, height: 4, background: "rgba(255,255,255,0.35)", borderRadius: 999 }} />
                  <span>Desde 2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values — Double-Bezel cards */}
          <div className="fade-up delay-100 story-values" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 12 }}>
            {values.map(({ Icon, title, body, red }) => (
              <div
                key={title}
                className="value-card-outer"
                style={{
                  padding: 4, borderRadius: 18,
                  background: red
                    ? "linear-gradient(135deg, rgba(247,0,0,0.1) 0%, rgba(247,0,0,0.04) 100%)"
                    : "linear-gradient(135deg, rgba(6,42,113,0.18) 0%, rgba(6,42,113,0.06) 100%)",
                  border: `1px solid ${red ? "rgba(247,0,0,0.14)" : "rgba(6,42,113,0.35)"}`,
                  transition: `border-color 400ms ${EASE}, transform 400ms ${EASE}`,
                  cursor: "default",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = red ? "rgba(247,0,0,0.4)" : "rgba(49,125,195,0.5)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = red ? "rgba(247,0,0,0.14)" : "rgba(6,42,113,0.35)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="value-card-inner"
                  style={{
                    padding: 20, borderRadius: 15,
                    background: "#0C1628",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
                    height: "100%",
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 14,
                    background: red ? "rgba(247,0,0,0.12)" : "rgba(6,42,113,0.3)",
                    border: `1px solid ${red ? "rgba(247,0,0,0.28)" : "rgba(49,125,195,0.3)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: red ? "var(--gb-red)" : "#5B9BD5",
                  }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="value-card-title" style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                    color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase",
                    margin: "0 0 7px",
                  }}>
                    {title}
                  </h4>
                  <p className="value-card-body" style={{
                    fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 13,
                    lineHeight: 1.55, color: "rgba(255,255,255,0.58)", margin: 0,
                  }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="fade-up">
          <div className="flex items-center gap-3 mb-7">
            <div className="accent-line" />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
              Linha do Tempo
            </span>
          </div>

          {/* Desktop horizontal */}
          <div className="timeline-desk" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: 0, right: 0, top: 28, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 8%, rgba(255,255,255,0.18) 92%, transparent)",
            }} />
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, gap: 24 }}>
              {milestones.map((m, i) => {
                const last = i === milestones.length - 1;
                return (
                  <div key={m.year} className="fade-up" style={{ position: "relative", transitionDelay: `${i * 80}ms` }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: 999, marginTop: 22, marginBottom: 24,
                      background: last ? "var(--gb-red)" : "#fff",
                      boxShadow: last ? "0 0 0 6px rgba(205,3,3,0.18)" : "0 0 0 4px rgba(255,255,255,0.08)",
                    }} />
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: last ? "var(--gb-red)" : "#fff", letterSpacing: "-0.01em", lineHeight: 1, marginBottom: 8 }}>
                      {m.year}
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10, lineHeight: 1.2 }}>
                      {m.title}
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.55)", margin: 0 }}>
                      {m.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile carousel — Double-Bezel */}
          <div
            className="timeline-mob"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* outer shell */}
            <div style={{
              padding: 5, borderRadius: 22,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
              {/* inner core */}
              <div style={{
                position: "relative", overflow: "hidden", borderRadius: 18,
                background: "#0C1628",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
              }}>
                {/* progress track */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "rgba(255,255,255,0.06)", zIndex: 2 }}>
                  <div
                    key={`bar-${activeIdx}`}
                    style={{
                      height: "100%", background: "var(--gb-red)", borderRadius: 2,
                      animation: paused ? "none" : "tl-progress 3.2s linear forwards",
                      width: paused ? "100%" : undefined,
                    }}
                  />
                </div>

                {/* slide strip */}
                <div style={{
                  display: "flex",
                  transform: `translateX(-${activeIdx * 100}%)`,
                  transition: `transform 0.5s ${EASE}`,
                }}>
                  {milestones.map((m, i) => {
                    const last = i === milestones.length - 1;
                    return (
                      <div key={m.year} style={{ flexShrink: 0, width: "100%", padding: "36px 28px 32px" }}>
                        {/* step badge */}
                        <div style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          padding: "4px 10px 4px 4px",
                          background: "rgba(255,255,255,0.05)", borderRadius: 999,
                          border: "1px solid rgba(255,255,255,0.08)",
                          marginBottom: 20,
                        }}>
                          <div style={{
                            width: 22, height: 22, borderRadius: 999,
                            background: last ? "var(--gb-red)" : "rgba(255,255,255,0.12)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 10, fontWeight: 700, color: "#fff",
                            fontFamily: "var(--font-display)",
                          }}>
                            {i + 1}
                          </div>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                            {i + 1} de {milestones.length}
                          </span>
                        </div>

                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 56, color: last ? "var(--gb-red)" : "#fff", letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 10 }}>
                          {m.year}
                        </div>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 14, lineHeight: 1.2 }}>
                          {m.title}
                        </div>
                        <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.58)", margin: 0 }}>
                          {m.body}
                        </p>

                        {/* swipe hint — only on first slide */}
                        {i === 0 && (
                          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.28)", fontSize: 11, letterSpacing: "0.1em" }}>
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                              <path d="M1 5h14M9 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, textTransform: "uppercase" }}>deslize</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* dots — 44px touch target */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, marginTop: 16 }}>
              {milestones.map((m, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir para ${m.year}`}
                  style={{
                    minWidth: 44, minHeight: 44,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "none", border: "none", padding: 0, cursor: "pointer",
                  }}
                >
                  <span style={{
                    display: "block",
                    width: activeIdx === i ? 32 : 8, height: 8, borderRadius: 999,
                    background: activeIdx === i ? "var(--gb-red)" : "rgba(255,255,255,0.2)",
                    transition: `all 0.4s ${EASE}`,
                  }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tl-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .story-section { padding-top: clamp(72px, 10vw, 128px); padding-bottom: clamp(72px, 10vw, 128px); overflow: hidden; }
        .story-inner { overflow: hidden; }

        @media (min-width: 769px) {
          .story-inner        { padding-left: 24px; padding-right: 24px; }
          .story-hdr          { grid-template-columns: minmax(0,1.05fr) minmax(0,1fr) !important; }
          .story-media        { grid-template-columns: minmax(0,1.1fr) minmax(0,1fr) !important; }
          .story-values       { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; }
          .timeline-desk      { display: block !important; }
          .timeline-mob       { display: none !important; }
        }

        @media (max-width: 768px) {
          .story-inner        { padding-left: 16px; padding-right: 16px; }
          .story-hdr          { grid-template-columns: 1fr !important; gap: 20px !important; }
          .story-media        { grid-template-columns: 1fr !important; }
          .story-img-inner    { min-height: 300px !important; }
          .story-values       { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; gap: 10px !important; }
          .value-card-inner   { padding: 16px !important; }
          .value-card-title   { font-size: 15px !important; }
          .value-card-body    { font-size: 12px !important; }
          .story-img-bezel    { border-radius: 18px !important; }
          .timeline-desk      { display: none !important; }
          .timeline-mob       { display: block !important; }
        }

        @media (max-width: 480px) {
          .story-inner        { padding-left: 14px; padding-right: 14px; }
          .story-values       { grid-template-columns: 1fr !important; gap: 8px !important; }
          .value-card-inner   { padding: 14px !important; }
          .value-card-title   { font-size: 14px !important; }
          .value-card-body    { font-size: 12px !important; }
        }
      `}</style>
    </section>
  );
}
