"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Comecei do zero, sem nenhuma experiência em artes marciais. O ambiente da Gracie Barra Planalto me acolheu desde o primeiro dia. Hoje sou faixa azul e não consigo imaginar minha semana sem treinar.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rafael Mendes",
    role: "Aluno adulto — 3 anos",
    stars: 5,
  },
  {
    text: "Sempre quis aprender defesa pessoal mas tinha medo de não me encaixar. A turma feminina é incrível — professoras qualificadas, ambiente super seguro e respeitoso. Me sinto mais confiante em tudo.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Camila Rocha",
    role: "Aluna feminino — 2 anos",
    stars: 5,
  },
  {
    text: "Coloquei meu filho de 8 anos na turma infantil sem saber o que esperar. A transformação foi surreal — mais concentrado na escola, mais respeitoso em casa. O jiu-jitsu formou o caráter dele.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcos Oliveira",
    role: "Pai — filho treina há 1 ano",
    stars: 5,
  },
  {
    text: "Ganhei três campeonatos pelo estado treinando aqui. A metodologia Gracie Barra é séria, o professor sabe exatamente o que faz. Se você quer competir de verdade, esse é o lugar certo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Pedro Alves",
    role: "Competidor — 4 anos",
    stars: 5,
  },
  {
    text: "Comecei sedentária e sem nunca ter feito esporte. Hoje já sinto a evolução a cada semana. Os professores são pacientes, explicam bem e a turma de iniciantes é acolhedora demais.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ana Beatriz",
    role: "Aluna iniciante — 6 meses",
    stars: 5,
  },
  {
    text: "O jiu-jitsu mudou minha forma de lidar com pressão no trabalho. Aprendi que a técnica sempre supera a força — dentro e fora do tatame. Gracie Barra Planalto é referência.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lucas Ferreira",
    role: "Aluno adulto — 2 anos",
    stars: 5,
  },
  {
    text: "Minha filha de 6 anos adora as aulas. A pedagogia é incrível — ensinam disciplina, respeito e confiança de um jeito que ela absorve naturalmente. Resultado visível em casa.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Juliana Costa",
    role: "Mãe — filha treina há 8 meses",
    stars: 5,
  },
  {
    text: "Voltei a treinar após 10 anos parado. A equipe me recebeu sem julgamento, no meu próprio ritmo. Em 6 meses já estava competindo novamente. Estrutura de alto nível.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rodrigo Lima",
    role: "Praticante veterano — 6 meses",
    stars: 5,
  },
  {
    text: "O diferencial aqui é a constância dos professores. Cada aula tem propósito, progressão clara. Em um ano evoluí mais do que em três anos em outras academias.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Fernanda Souza",
    role: "Aluna — 1 ano",
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

const TestimonialCard = ({ text, image, name, role, stars }: Testimonial) => (
  <motion.li
    whileHover={{
      scale: 1.025,
      y: -6,
      transition: { type: "spring", stiffness: 400, damping: 20 },
    }}
    className="p-8 rounded-2xl border bg-white max-w-xs w-full cursor-default select-none list-none"
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
        <img
          width={40}
          height={40}
          src={image}
          alt={`Foto de ${name}`}
          className="h-10 w-10 rounded-full object-cover"
          style={{ border: "2px solid rgba(247,0,0,0.2)" }}
        />
        <div className="flex flex-col">
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
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#F5F6F8" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
            <span style={{ color: "#F70000" }}>TRANSFORMA.</span>
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
          className="flex justify-start gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[680px] overflow-hidden"
          role="region"
          aria-label="Depoimentos em movimento"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
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
