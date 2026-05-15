"use client";

import { useState, useRef } from "react";
import { CaretLeftIcon, CaretRightIcon, StarIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "Aluno adulto — 3 anos",
    text: "Comecei do zero, sem nenhuma experiência em artes marciais. O ambiente da Gracie Barra Planalto me acolheu desde o primeiro dia. Hoje sou faixa azul e não consigo imaginar minha semana sem treinar.",
    img: "https://picsum.photos/seed/person1/200/200",
    stars: 5,
  },
  {
    name: "Camila Rocha",
    role: "Aluna feminino — 2 anos",
    text: "Sempre quis aprender defesa pessoal mas tinha medo de não me encaixar. A turma feminina é incrível — professoras qualificadas, ambiente super seguro e respeitoso. Me sinto mais confiante em tudo.",
    img: "https://picsum.photos/seed/person2/200/200",
    stars: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Pai — filho treina há 1 ano",
    text: "Coloquei meu filho de 8 anos na turma infantil sem saber o que esperar. A transformação foi surreal. Ele ficou mais concentrado na escola, mais respeitoso em casa. O jiu-jitsu formou o caráter dele.",
    img: "https://picsum.photos/seed/person3/200/200",
    stars: 5,
  },
  {
    name: "Pedro Alves",
    role: "Competidor — 4 anos",
    text: "Ganhei três campeonatos pelo estado treinando aqui. A metodologia Gracie Barra é séria, o professor sabe exatamente o que faz. Se você quer competir de verdade, esse é o lugar certo.",
    img: "https://picsum.photos/seed/person4/200/200",
    stars: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Aluna iniciante — 6 meses",
    text: "Comecei sedentária e sem nunca ter feito esporte. Hoje já sinto a evolução a cada semana. Os professores são pacientes, explicam bem e a turma de iniciantes é acolhedora. Recomendo muito.",
    img: "https://picsum.photos/seed/person5/200/200",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }
    dragStartX.current = null;
    setDragging(false);
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
    setDragging(false);
  };

  const t = testimonials[active];

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#F5F6F8" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20 fade-up">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="accent-line" />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "rgba(10,14,26,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                Depoimentos
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
              QUEM TREINA,<br />
              <span style={{ color: "#F70000" }}>TRANSFORMA.</span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(10,14,26,0.12)",
                color: "rgba(10,14,26,0.6)",
              }}
              aria-label="Anterior"
            >
              <CaretLeftIcon size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#F70000",
                border: "1px solid #F70000",
                color: "#fff",
              }}
              aria-label="Próximo"
            >
              <CaretRightIcon size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial card — draggable */}
        <div
          className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center panel-in"
          key={active}
          style={{
            cursor: dragging ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "pan-y",
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {/* Image side */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "14px", aspectRatio: "4/3" }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
                style={{
                  filter: "grayscale(10%) contrast(1.05)",
                  pointerEvents: "none",
                  draggable: false,
                } as React.CSSProperties}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(10,14,26,0.25) 100%)",
                }}
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -bottom-3 -left-3 right-6 h-full rounded-[14px] -z-10"
              style={{ border: "2px solid rgba(247,0,0,0.25)" }}
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center pt-4 md:pt-0">
            <div className="flex gap-1 mb-5 md:mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <StarIcon key={i} size={18} weight="fill" style={{ color: "#F70000" }} />
              ))}
            </div>
            <blockquote
              className="mb-6 md:mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-lato), Lato, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(10,14,26,0.75)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-px h-10" style={{ background: "#F70000" }} />
              <div>
                <p
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontSize: "20px",
                    letterSpacing: "0.05em",
                    color: "#0A0E1A",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "13px",
                    color: "rgba(10,14,26,0.4)",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>

            {/* Dots + swipe hint on mobile */}
            <div className="flex items-center gap-4 mt-8 md:mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === active ? "28px" : "8px",
                      height: "4px",
                      borderRadius: "2px",
                      background: i === active ? "#F70000" : "rgba(10,14,26,0.15)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <span
                className="md:hidden text-xs"
                style={{ color: "rgba(10,14,26,0.3)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                arraste para navegar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
