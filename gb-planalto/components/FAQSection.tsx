"use client";

import { useState, useRef } from "react";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Preciso ter experiência para começar?",
    answer:
      "Não. A Gracie Barra Planalto recebe iniciantes absolutos todos os dias. As turmas de fundamentos foram criadas exatamente para quem nunca pisou num tatame. Você aprenderá do zero, com segurança e no seu ritmo.",
  },
  {
    question: "Posso fazer uma aula experimental gratuita?",
    answer:
      "Sim! Oferecemos uma aula experimental totalmente gratuita e sem compromisso. Você treina com a gente, conhece o ambiente, os professores e tira todas as suas dúvidas antes de qualquer decisão.",
  },
  {
    question: "Qual é a idade mínima para começar?",
    answer:
      "Crianças a partir de 4 anos já podem fazer parte da turma infantil. Para adultos, não há limite de idade — temos alunos de todas as faixas etárias, inclusive acima dos 50 anos.",
  },
  {
    question: "Preciso comprar kimono antes de começar?",
    answer:
      "Não. Para a aula experimental, não é necessário kimono. Se você decidir se matricular, orientamos sobre o equipamento ideal. Temos parcerias que oferecem boas condições para os nossos alunos.",
  },
  {
    question: "Existe turma exclusiva para mulheres?",
    answer:
      "Sim. Temos um programa feminino com horários exclusivos, instrutoras qualificadas e um ambiente pensado para que mulheres se sintam completamente seguras e acolhidas no tatame.",
  },
  {
    question: "Posso começar sendo sedentário?",
    answer:
      "Com certeza. O jiu-jitsu é para todos os corpos e condicionamentos físicos. As primeiras aulas focam em técnica, não em intensidade. Você vai evoluir no seu próprio ritmo, e o jiu-jitsu em si já é um excelente exercício físico.",
  },
  {
    question: "Quanto tempo leva para evoluir de faixa?",
    answer:
      "A jornada é individual. Em média, a faixa azul leva de 1 a 2 anos com treinos regulares. A metodologia Gracie Barra tem um currículo claro que guia sua evolução, e os professores avaliam seu progresso com critério e respeito.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="accent-line" />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(10,14,26,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              Perguntas Frequentes
            </span>
            <div className="accent-line" />
          </div>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#0A0E1A",
            }}
          >
            TIRE SUAS<br />
            <span style={{ color: "#F70000" }}>DÚVIDAS.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2 fade-up delay-200">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="accordion-item overflow-hidden"
              style={{ borderRadius: "10px" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200"
                style={{
                  background: open === i ? "rgba(6,42,113,0.05)" : "#FFFFFF",
                  border: `1px solid ${open === i ? "rgba(6,42,113,0.2)" : "rgba(10,14,26,0.08)"}`,
                  borderRadius: open === i ? "10px 10px 0 0" : "10px",
                }}
              >
                <span
                  className="pr-4"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    color: open === i ? "#062A71" : "rgba(10,14,26,0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {faq.question}
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i ? "#F70000" : "rgba(10,14,26,0.06)",
                    color: open === i ? "#fff" : "rgba(10,14,26,0.5)",
                  }}
                >
                  {open === i ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                </div>
              </button>

              <div
                className="accordion-content"
                style={{ ...(open === i ? { maxHeight: "300px" } : {}) }}
              >
                <div
                  className="px-6 py-5"
                  style={{
                    background: "rgba(6,42,113,0.03)",
                    border: "1px solid rgba(6,42,113,0.12)",
                    borderTop: "none",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-lato), Lato, sans-serif",
                      fontSize: "15px",
                      color: "rgba(10,14,26,0.6)",
                      fontWeight: 300,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
