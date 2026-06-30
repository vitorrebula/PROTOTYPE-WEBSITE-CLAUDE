"use client";

import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const instructors = [
  {
    name: "Prof. Vinicius 'Jones' Almeida",
    belt: "Faixa Preta — 3 Graus",
    role: "Fundador & Head Coach",
    years: "15 anos de experiência",
    bio: "Graduado à faixa preta pelas mãos de Vinicius Draculino, seguindo os passos de Sérgio 'Seginho' Benini e Cláudio 'Caloquinha', Jones construiu a GB Planalto com a missão de espalhar o jiu-jitsu de alto nível. Campeão brasileiro, mundial, mineiro, sulamericano e sulbrasileiro — referência técnica da região.",
    img: "./jonin.jpeg",
    imgPosition: "top",
    specialties: ["Fundamentos", "Competição", "Adulto"],
  },
  {
    name: "Prof. Eduardo Laia",
    belt: "Faixa Marrom — 4 Graus",
    role: "Instrutor KIDS & Adulto",
    years: "20 anos de judô · 14 de Jiu-Jitsu",
    bio: "Com 20 anos de judô e 14 de jiu-jitsu, Dudu é um professor técnico e paciente. Coordena o time KIDS e as turmas adulto, com uma didática que permite até os menos atléticos desenvolverem um jiu-jitsu afiado.",
    img: "./dudu-ensinando.jpeg",
    specialties: ["KIDS", "Juvenil", "Adulto"],
  },
  {
    name: "Prof. Dadá",
    belt: "Faixa Prata — 1 Grau",
    role: "Instrutora Feminino, Adulto & Kids",
    years: "15 anos de experiência",
    bio: "Pioneira no programa feminino da academia, Dadá criou um ambiente único de sororidade e técnica. Também atua nas turmas adulto e infantil, com sensibilidade e didática para todos os perfis de aluno.",
    img: "./dada-1.jpeg",
    specialties: ["Feminino", "Adulto", "Kids"],
  },
];

const beltColors: Record<string, string> = {
  "Faixa Preta": "#1a1a1a",
  "Faixa Roxa": "#6b21a8",
  "Faixa Marrom": "#78350f",
};

function getBeltColor(belt: string): string {
  for (const [key, val] of Object.entries(beltColors)) {
    if (belt.includes(key.split(" ")[1])) return val;
  }
  return "#1a1a1a";
}

export default function InstructorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const paused = useRef(false);
  const dragStartX = useRef<number | null>(null);
  useScrollReveal(sectionRef);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setSlide((s) => (s + 1) % instructors.length);
      }
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    paused.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 40) {
      setSlide((s) =>
        delta < 0
          ? (s + 1) % instructors.length
          : (s - 1 + instructors.length) % instructors.length
      );
    }
    dragStartX.current = null;
    paused.current = false;
  };

  return (
    <section
      id="professores"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#07101F" }}
    >
      {/* Red accent left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "linear-gradient(180deg, transparent, #F70000, transparent)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 fade-up">
          <div className="flex items-center gap-4 mb-5">
            <div className="accent-line" />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              Professores
            </span>
          </div>
          <h2
            className="text-white leading-none max-w-2xl"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            AUTORIDADE E<br />
            <span style={{ color: "#F70000" }}>PAIXÃO NO TATAME.</span>
          </h2>
        </div>

        {/* ── Mobile carousel ── */}
        <div
          className="md:hidden overflow-hidden select-none"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            paused.current = false;
            dragStartX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${slide * 100}%)`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {instructors.map((inst) => (
              <div key={inst.name} className="w-full flex-shrink-0 self-stretch">
                <div
                  style={{
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#0F1A2E",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={inst.img}
                      alt={inst.name}
                      className="w-full h-full object-cover"
                      style={{
                        filter: "grayscale(0%) brightness(1) contrast(1.05)",
                        objectPosition: inst.imgPosition ?? "center",
                        pointerEvents: "none",
                        draggable: false,
                      } as React.CSSProperties}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, transparent 40%, rgba(7,16,31,0.95) 100%)",
                      }}
                    />
                    {/* Belt badge */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1 text-xs font-bold tracking-wider uppercase"
                      style={{
                        fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                        background: getBeltColor(inst.belt),
                        color: "#fff",
                        borderRadius: "4px",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {inst.belt}
                    </div>
                    {/* Specialties */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-1.5">
                      {inst.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1"
                          style={{
                            background: "rgba(247,0,0,0.2)",
                            border: "1px solid rgba(247,0,0,0.3)",
                            borderRadius: "22px",
                            color: "rgba(255,255,255,0.9)",
                            fontFamily: "var(--font-lato), Lato, sans-serif",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <p
                      className="text-white mb-1"
                      style={{
                        fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {inst.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-lato), Lato, sans-serif",
                        fontSize: "12px",
                        color: "#F70000",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {inst.role}
                    </p>
                    <p
                      className="mt-3 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-lato), Lato, sans-serif",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                        fontWeight: 300,
                      }}
                    >
                      {inst.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {instructors.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setSlide(i);
                  paused.current = false;
                }}
                aria-label={`Professor ${i + 1}`}
                style={{
                  width: i === slide ? "28px" : "8px",
                  height: "4px",
                  borderRadius: "2px",
                  background: i === slide ? "#F70000" : "rgba(255,255,255,0.2)",
                  transition: "all 0.3s",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop grid ── */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {instructors.map((inst, i) => (
            <div
              key={inst.name}
              className="relative overflow-hidden group cursor-pointer fade-up"
              style={{
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "#0F1A2E",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ objectPosition: inst.imgPosition ?? "center" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.9) 100%)",
                  }}
                />
                {/* Belt indicator */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-bold tracking-wider uppercase"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    background: getBeltColor(inst.belt),
                    color: "#fff",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {inst.belt}
                </div>
                {/* Hover info */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {inst.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1"
                        style={{
                          background: "rgba(247,0,0,0.2)",
                          border: "1px solid rgba(247,0,0,0.3)",
                          borderRadius: "22px",
                          color: "rgba(255,255,255,0.9)",
                          fontFamily: "var(--font-lato), Lato, sans-serif",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      fontFamily: "var(--font-lato), Lato, sans-serif",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 300,
                    }}
                  >
                    {inst.bio}
                  </p>
                </div>
              </div>
              {/* Info footer */}
              <div className="p-5">
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {inst.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "12px",
                    color: "#F70000",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {inst.role}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {inst.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
