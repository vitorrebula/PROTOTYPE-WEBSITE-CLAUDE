"use client";

import { useState, useRef } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const classes = [
  {
    id: "mini-campeoes",
    label: "Mini Campeões",
    age: "3 a 5 anos",
    headline: "Os primeiros passos no tatame.",
    description:
      "Turmas lúdicas e seguras para os pequenos explorarem o movimento, a coordenação e a disciplina de forma divertida. A melhor base que uma criança pode ter.",
    benefits: ["Coordenação motora", "Socialização", "Autoconfiança", "Disciplina lúdica"],
    img: "https://picsum.photos/seed/mini-bjj/600/800",
    color: "#062A71",
  },
  {
    id: "pequenos-campeoes",
    label: "Pequenos Campeões",
    age: "6 a 8 anos",
    headline: "Disciplina que forma caráter.",
    description:
      "Turmas estruturadas para desenvolver foco, respeito e autoconfiança. Seu filho vai adorar o tatame — e você vai ver a diferença em casa e na escola.",
    benefits: ["Foco e concentração", "Respeito e hierarquia", "Autoconfiança", "Disciplina"],
    img: "https://picsum.photos/seed/kids-bjj/600/800",
    color: "#1A3D8F",
  },
  {
    id: "futuros-campeoes",
    label: "Futuros Campeões",
    age: "9 a 13 anos",
    headline: "Técnica e formação de verdade.",
    description:
      "Jiu-Jitsu formativo e competitivo para crianças em fase escolar. Desenvolvemos técnica, responsabilidade e o espírito de equipe que vai além do tatame.",
    benefits: ["Técnica avançada", "Espírito de equipe", "Preparação competitiva", "Responsabilidade"],
    img: "https://picsum.photos/seed/future-bjj/600/800",
    color: "#0D3580",
  },
  {
    id: "adolescentes",
    label: "Adolescentes",
    age: "13 a 16 anos",
    headline: "Energia no lugar certo.",
    description:
      "Um espaço seguro para adolescentes desenvolverem caráter, resiliência e pertencimento. O Jiu-Jitsu é o antídoto certo para as pressões dessa fase.",
    benefits: ["Formação de caráter", "Resiliência", "Pertencimento", "Disciplina competitiva"],
    img: "https://picsum.photos/seed/teen-bjj/600/800",
    color: "#1A3D8F",
  },
  {
    id: "adulto",
    label: "Adultos",
    age: "16+",
    headline: "Treine, evolua, vença.",
    description:
      "Do iniciante ao avançado, com currículo estruturado pela Gracie Barra International. Alta qualidade técnica, evolução real e uma comunidade de alto nível.",
    benefits: ["Alta qualidade técnica", "Currículo GB estruturado", "Todas as faixas", "Comunidade"],
    img: "https://picsum.photos/seed/adult-bjj/600/800",
    color: "#F70000",
  },
  {
    id: "gbf",
    label: "GBF",
    age: "Feminino",
    headline: "Força, confiança, liberdade.",
    description:
      "Gracie Barra Feminino: horários exclusivos com a professora Dadá e instrutoras qualificadas. Um ambiente pensado para que mulheres se sintam completamente seguras e acolhidas no tatame.",
    benefits: ["Horários exclusivos", "Defesa pessoal real", "Instrutoras qualificadas", "Ambiente acolhedor"],
    img: "https://picsum.photos/seed/women-bjj/600/800",
    color: "#8B0000",
  },
  {
    id: "competicao",
    label: "Competição",
    age: "Por convite",
    headline: "Campeões se formam aqui.",
    description:
      "Time de competição com treinamento especializado, periodização e mentalidade de alto rendimento. Para quem quer o pódio, o acesso é por convite.",
    benefits: ["Periodização específica", "Mentoria individual", "Campeonatos nacionais", "Alto rendimento"],
    img: "https://picsum.photos/seed/competition-bjj/600/800",
    color: "#1a1a1a",
  },
];

export default function ClassesSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const c = classes[active];

  return (
    <section
      id="modalidades"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 fade-up">
          <div className="flex items-center gap-4 mb-5">
            <div className="accent-line" />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(10,14,26,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              Modalidades
            </span>
          </div>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#0A0E1A",
            }}
          >
            EXISTE UM TATAME<br />
            <span style={{ color: "#F70000" }}>PARA VOCÊ.</span>
          </h2>
        </div>

        {/* Horizontal selector + detail */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Vertical tab list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:min-w-[200px]">
            {classes.map((cls, i) => (
              <button
                key={cls.id}
                onClick={() => setActive(i)}
                className="flex-shrink-0 text-left px-5 py-4 transition-all duration-300 rounded-sm"
                style={{
                  background: active === i ? c.color : "#FFFFFF",
                  border: `1px solid ${active === i ? c.color : "rgba(10,14,26,0.1)"}`,
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  fontWeight: active === i ? 700 : 500,
                  fontSize: "16px",
                  color: active === i ? "#fff" : "rgba(10,14,26,0.55)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <span className="block">{cls.label}</span>
                <span
                  className="block text-xs mt-0.5"
                  style={{
                    color: active === i ? "rgba(255,255,255,0.7)" : "rgba(10,14,26,0.35)",
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontWeight: 400,
                    textTransform: "none",
                    letterSpacing: "0",
                  }}
                >
                  {cls.age}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel — photo overlay keeps dark */}
          <div
            key={active}
            className="flex-1 relative overflow-hidden rounded-[14px] min-h-[480px] panel-in"
          >
            <img
              src={c.img}
              alt={c.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "grayscale(25%) brightness(0.4) contrast(1.1)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${c.color}cc 0%, rgba(0,0,0,0.4) 100%)`,
              }}
            />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <span
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                {c.age}
              </span>
              <h3
                className="text-white mb-4 leading-tight"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                {c.headline}
              </h3>
              <p
                className="mb-8 max-w-lg leading-relaxed"
                style={{
                  fontFamily: "var(--font-lato), Lato, sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 300,
                }}
              >
                {c.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {c.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5"
                    style={{
                      fontFamily: "var(--font-lato), Lato, sans-serif",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "22px",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <a
                href="#aula"
                className="btn-primary self-start text-sm"
                style={{ background: "#F70000" }}
              >
                Quero começar nessa turma
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
