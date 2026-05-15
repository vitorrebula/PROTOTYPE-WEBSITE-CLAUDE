"use client";

import { useRef } from "react";
import { CalendarBlankIcon, MapPinIcon, UsersThreeIcon, MedalIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: CalendarBlankIcon,
    title: "Agende a aula",
    description:
      "Escolha um horário que encaixa na sua rotina. Basta clicar no botão abaixo ou nos chamar no WhatsApp. É rápido e gratuito.",
  },
  {
    number: "02",
    icon: MapPinIcon,
    title: "Conheça a academia",
    description:
      "Venha visitar o espaço, conhecer a estrutura, o tatame e tirar todas as suas dúvidas. Sem compromisso.",
  },
  {
    number: "03",
    icon: UsersThreeIcon,
    title: "Faça a aula experimental",
    description:
      "Treine com a gente uma vez, de graça, na turma ideal para o seu perfil. Você vai se surpreender.",
  },
  {
    number: "04",
    icon: MedalIcon,
    title: "Comece sua jornada",
    description:
      "Se se identificar, é só matricular. Da faixa branca ao pódio, estamos aqui em cada passo da sua evolução.",
  },
];

export default function HowToStartSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="como-comecar"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#F5F6F8" }}
    >
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, transparent 55%, rgba(6,42,113,0.04) 55%, rgba(6,42,113,0.04) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="accent-line" />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(10,14,26,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              É simples assim
            </span>
            <div className="accent-line" />
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
            COMO VOCÊ<br />
            <span style={{ color: "#F70000" }}>COMEÇA HOJE.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(247,0,0,0.3), transparent)" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center fade-up"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number + icon */}
                <div className="relative mb-8">
                  <div
                    className="w-20 h-20 rounded-sm flex items-center justify-center relative z-10 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(10,14,26,0.1)",
                      boxShadow: "0 4px 16px rgba(10,14,26,0.06)",
                    }}
                  >
                    <Icon size={32} style={{ color: "#F70000" }} weight="duotone" />
                  </div>
                  <span
                    className="absolute -top-4 -right-2 font-display"
                    style={{
                      fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                      fontWeight: 800,
                      fontSize: "64px",
                      color: "rgba(10,14,26,0.05)",
                      lineHeight: 1,
                      zIndex: 0,
                      userSelect: "none",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#0A0E1A",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "14px",
                    color: "rgba(10,14,26,0.5)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20 fade-up">
          <a href="#aula" className="btn-primary text-base px-12">
            Agendar minha aula grátis
          </a>
        </div>
      </div>
    </section>
  );
}
