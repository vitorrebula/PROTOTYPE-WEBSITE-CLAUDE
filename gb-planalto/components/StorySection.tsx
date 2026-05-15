"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#07101F" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(6,42,113,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 fade-up">
          <div className="accent-line" />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
          >
            Nossa História
          </span>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[280px] grid-flow-dense">

          {/* Card A — large hero story card (col 7, row 2) */}
          <div
            className="col-span-12 md:col-span-7 md:row-span-2 relative overflow-hidden rounded-[14px] fade-up group min-h-[400px] md:min-h-[560px]"
            style={{ background: "#062A71" }}
          >
            <img
              src="https://picsum.photos/seed/jiujitsu1/800/600"
              alt="Academia GB Planalto"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "grayscale(20%) brightness(0.45) contrast(1.1)", mixBlendMode: "luminosity" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(6,42,113,0.85) 0%, rgba(0,0,0,0.3) 100%)",
              }}
            />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <h2
                className="text-white leading-none mb-4"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                UMA FAMÍLIA,<br />
                <span style={{ color: "#F70000" }}>UMA MISSÃO.</span>
              </h2>
              <p
                className="max-w-md leading-relaxed"
                style={{
                  fontFamily: "var(--font-lato), Lato, sans-serif",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 300,
                }}
              >
                Fundada com o propósito de transformar vidas através do
                jiu-jitsu, a Gracie Barra Planalto é um espaço onde disciplina,
                respeito e evolução constante fazem parte de cada aula.
              </p>
            </div>
          </div>

          {/* Card B — mission */}
          <div
            className="col-span-12 md:col-span-5 relative overflow-hidden rounded-[14px] fade-up delay-200 group cursor-pointer"
            style={{ background: "#0F1A2E", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ background: "rgba(247,0,0,0.12)", border: "1px solid rgba(247,0,0,0.2)" }}
              >
                <div className="w-4 h-4 rounded-sm" style={{ background: "#F70000" }} />
              </div>
              <div>
                <h3
                  className="text-white text-2xl mb-3"
                  style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif", fontWeight: 700 }}
                >
                  Metodologia Gracie Barra
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  Um currículo estruturado, reconhecido mundialmente, que leva
                  você do fundamento básico ao alto rendimento.
                </p>
              </div>
            </div>
          </div>

          {/* Card C — community */}
          <div
            className="col-span-12 md:col-span-3 relative overflow-hidden rounded-[14px] fade-up delay-300"
            style={{ background: "#F70000" }}
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <span
                className="text-white/40 text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                Comunidade
              </span>
              <div>
                <p
                  className="text-white leading-tight"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  "Jiu-Jitsu para Todos"
                </p>
              </div>
            </div>
          </div>

          {/* Card D — values */}
          <div
            className="col-span-12 md:col-span-4 relative overflow-hidden rounded-[14px] fade-up delay-400 group"
            style={{ background: "#0F1A2E", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <img
              src="https://picsum.photos/seed/bjjteam/600/400"
              alt="Comunidade GB"
              className="absolute inset-0 w-full h-full object-cover opacity-25 transition-all duration-700 group-hover:opacity-35 group-hover:scale-105"
              style={{ filter: "grayscale(80%)" }}
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                {["Disciplina", "Respeito", "Família"].map((v) => (
                  <span
                    key={v}
                    className="text-xs py-1 px-3 rounded-full"
                    style={{
                      fontFamily: "var(--font-lato), Lato, sans-serif",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                }}
              >
                Valores que transformam
              </h3>
            </div>
          </div>

          {/* Card E — location */}
          <div
            className="col-span-12 md:col-span-5 relative overflow-hidden rounded-[14px] fade-up delay-500"
            style={{
              background: "linear-gradient(135deg, #062A71 0%, #03174A 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <span
                className="text-white/40 text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                Belo Horizonte · MG
              </span>
              <div>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    lineHeight: 1.1,
                  }}
                >
                  PLANALTO,<br />O SEU TATAME.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Um ambiente moderno, estruturado e acolhedor, pronto para
                  receber você do primeiro ao último dia da sua jornada.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
