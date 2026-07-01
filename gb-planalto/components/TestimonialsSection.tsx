"use client";

import { useState, useRef } from "react";
import { CaretLeftIcon, CaretRightIcon, StarIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Lucas Winter",
    role: "Avaliação no Google — há 1 semana",
    text: "Estrutura espetacular! Mestre Vinícius, Dadá e Dudu, professores extremamente comprometidos e dedicados!",
    img: "https://picsum.photos/seed/lucaswinter/200/200",
    stars: 5,
  },
  {
    name: "Aldine Santos",
    role: "Local Guide — há 8 meses",
    text: "Excelente equipe de instrutores! O jiu-jitsu aqui promove disciplina, cuidado e autocontrole, experiência completa. Estou muito satisfeita. 10 estrelas!",
    img: "https://picsum.photos/seed/aldinesantos/200/200",
    stars: 5,
  },
  {
    name: "Gerson Costa",
    role: "Avaliação no Google — há 1 ano",
    text: "Comecei Jiu-Jitsu na unidade e me senti extremamente confortável e motivado a continuar. Ter um professor atleta é um diferencial muito grande.",
    img: "https://picsum.photos/seed/gersoncosta/200/200",
    stars: 5,
  },
  {
    name: "Bruno Mendes",
    role: "Avaliação no Google — há 1 ano",
    text: "Ótima academia de Jiu-Jitsu! Ambiente super acolhedor, professores altamente qualificados e sempre dispostos a ajudar no desenvolvimento técnico e físico dos alunos. As aulas são bem estruturadas, com muita atenção aos detalhes e ao progresso individual.",
    img: "https://picsum.photos/seed/brunomendes/200/200",
    stars: 5,
  },
  {
    name: "Andre Luiz",
    role: "Local Guide — há 1 ano",
    text: "Excelente lugar para treinar jiu-jítsu! Ambiente acolhedor, professores extremamente capacitados e dedicados ao desenvolvimento dos alunos, independentemente do nível. A estrutura é ótima, e o clima entre os praticantes é sempre de respeito e amizade.",
    img: "https://picsum.photos/seed/andreluiz/200/200",
    stars: 5,
  },
  {
    name: "Fábio Almeida",
    role: "Avaliação no Google — há 1 ano",
    text: "Academia espetacular! Seguindo todos os protocolos da Gracie Barra. Organização nota 10. Ambiente diferenciado, professor e instrutores altamente capacitados. Sem falar que o professor é simplesmente Campeão do Mundo, uma referência.",
    img: "https://picsum.photos/seed/fabioalmeida/200/200",
    stars: 5,
  },
  {
    name: "Graciele Pereira",
    role: "Local Guide — há 4 anos",
    text: "Espaço mto bom, bem equipado. O professor Vini e a professora Dada de Jiu-jitsu são muito cuidadosos e pacientes. Mto profissionais, as aulas são mto gostosas de fazer. Nem dá pra ver o tempo passar.",
    img: "https://picsum.photos/seed/gracielepereira/200/200",
    stars: 5,
  },
  {
    name: "Fabricio Oliveira",
    role: "Local Guide — há 4 anos",
    text: "Sempre tive muito receio de fazer algum tipo de atividade física, pois sou cardiopata. E a GB Planalto me surpreendeu positivamente. Os professores são feras, vão no nosso ritmo. Para quem fica com receio de se matricular em algum tipo de luta: aqui é o lugar.",
    img: "https://picsum.photos/seed/fabricioooliveira/200/200",
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
          className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center panel-in w-full"
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
          <div className="relative w-full max-w-md mx-auto md:max-w-none md:mx-0">
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
            {/* Accent border — hidden on mobile to avoid overflow misalignment */}
            <div
              className="hidden md:block absolute -bottom-3 -left-3 right-6 h-full rounded-[14px] -z-10"
              style={{ border: "2px solid rgba(247,0,0,0.25)" }}
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center items-start pt-4 md:pt-0 w-full">
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
