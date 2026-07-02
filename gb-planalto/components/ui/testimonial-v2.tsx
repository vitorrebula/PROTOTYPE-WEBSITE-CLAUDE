"use client";

import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserCircleIcon } from "@phosphor-icons/react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Estrutura espetacular! Mestre Vinícius, Dadá e Dudu, professores extremamente comprometidos e dedicados!",
    name: "Lucas Winter",
    role: "Avaliação no Google — há 1 semana",
    stars: 5,
  },
  {
    text: "Excelente equipe de instrutores! O jiu-jitsu aqui promove disciplina, cuidado e autocontrole, experiência completa. Estou muito satisfeita. 10 estrelas!",
    name: "Aldine Santos",
    role: "Local Guide — há 8 meses",
    stars: 5,
  },
  {
    text: "Comecei Jiu-Jitsu na unidade e me senti extremamente confortável e motivado a continuar. Ter um professor atleta é um diferencial muito grande.",
    name: "Gerson Costa",
    role: "Avaliação no Google — há 1 ano",
    stars: 5,
  },
  {
    text: "Ótima academia de Jiu-Jitsu! Ambiente super acolhedor, professores altamente qualificados e sempre dispostos a ajudar no desenvolvimento técnico e físico dos alunos.",
    name: "Bruno Mendes",
    role: "Avaliação no Google — há 1 ano",
    stars: 5,
  },
  {
    text: "Excelente lugar para treinar jiu-jítsu! Ambiente acolhedor, professores extremamente capacitados e dedicados ao desenvolvimento dos alunos, independentemente do nível.",
    name: "Andre Luiz",
    role: "Local Guide — há 1 ano",
    stars: 5,
  },
  {
    text: "Academia espetacular! Seguindo todos os protocolos da Gracie Barra. Organização nota 10. Sem falar que o professor é simplesmente Campeão do Mundo, uma referência.",
    name: "Fábio Almeida",
    role: "Avaliação no Google — há 1 ano",
    stars: 5,
  },
  {
    text: "Espaço mto bom, bem equipado. O professor Vini e a professora Dada de Jiu-jitsu são muito cuidadosos e pacientes. Nem dá pra ver o tempo passar.",
    name: "Graciele Pereira",
    role: "Local Guide — há 4 anos",
    stars: 5,
  },
  {
    text: "Sempre tive muito receio de fazer atividade física, pois sou cardiopata. E a GB Planalto me surpreendeu positivamente. Os professores são feras, vão no nosso ritmo.",
    name: "Fabricio Oliveira",
    role: "Local Guide — há 4 anos",
    stars: 5,
  },
  {
    text: "As aulas de jiu-jitsu são excepcionais. O professor Vinicius possui um conhecimento e uma bagagem na luta tremendos, e passa seu conhecimento com muita paciência, atenção e cuidado com os alunos.",
    name: "João Vitor Moraes",
    role: "Local Guide — há 4 anos",
    stars: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F70000">
        <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ text, name, role, stars }: Testimonial) => (
  <motion.li
    whileHover={{
      scale: 1.025,
      y: -6,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    }}
    className="p-8 rounded-2xl border bg-white w-full md:max-w-xs cursor-default select-none list-none"
    style={{
      borderColor: "rgba(10,14,26,0.08)",
      boxShadow: "0 4px 24px rgba(10,14,26,0.06)",
    }}
  >
    <blockquote className="m-0 p-0">
      <StarRating count={stars} />
      <p
        className="leading-relaxed m-0"
        style={{
          fontFamily: "var(--font-lato), Lato, sans-serif",
          fontSize: "14px",
          color: "rgba(10,14,26,0.65)",
          fontStyle: "italic",
          fontWeight: 300,
        }}
      >
        &ldquo;{text}&rdquo;
      </p>
      <footer className="flex items-center gap-3 mt-6">
        <UserCircleIcon
          size={40}
          weight="fill"
          style={{ color: "rgba(10,14,26,0.2)" }}
        />
        <div className="flex flex-col flex-1">
          <cite
            className="not-italic font-bold leading-5"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontSize: "16px",
              letterSpacing: "0.03em",
              color: "#0A0E1A",
            }}
          >
            {name}
          </cite>
          <span
            className="leading-5 mt-0.5"
            style={{
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "12px",
              color: "rgba(10,14,26,0.4)",
            }}
          >
            {role}
          </span>
        </div>
        {/* Google attribution */}
        <div className="flex items-center gap-1 flex-shrink-0 ml-auto">
          <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <span style={{ fontFamily: "var(--font-lato), Lato, sans-serif", fontSize: "11px", color: "rgba(10,14,26,0.35)", fontWeight: 500 }}>
            Google
          </span>
        </div>
      </footer>
    </blockquote>
  </motion.li>
);

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={className}>
    <motion.ul
      animate={{ translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-5 pb-5 m-0 p-0"
    >
      {[0, 1].map((idx) => (
        <React.Fragment key={idx}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={`${idx}-${i}`} {...t} />
          ))}
        </React.Fragment>
      ))}
    </motion.ul>
  </div>
);

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#F5F6F8" }}
    >
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 12 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: isMobile ? 0.3 : 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="accent-line" />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{
                color: "rgba(10,14,26,0.4)",
                fontFamily: "var(--font-lato), Lato, sans-serif",
              }}
            >
              Depoimentos
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="leading-none"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#0A0E1A",
            }}
          >
            QUEM TREINA,{" "}
            <span style={{ color: "#F70000" }}>EVOLUI.</span>
          </h2>
          <p
            className="mt-5 max-w-sm"
            style={{
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "16px",
              color: "rgba(10,14,26,0.5)",
              lineHeight: "1.7",
            }}
          >
            Histórias reais de quem escolheu mudar de vida no tatame da Gracie Barra Planalto.
          </p>
        </div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center md:justify-start gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[680px] overflow-hidden"
          role="region"
          aria-label="Depoimentos em movimento"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} className="w-full md:w-auto" />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </motion.div>
    </section>
  );
}
