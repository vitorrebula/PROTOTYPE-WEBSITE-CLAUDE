"use client";

import { useRef } from "react";
import { ArrowRightIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="aula"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#07101F" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="./luta-2.jpeg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(40%) brightness(0.2) contrast(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,42,113,0.5) 0%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </div>

      {/* Red line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #F70000, transparent)" }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.2)" }} />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              Comece hoje
            </span>
            <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.2)" }} />
          </div>

          <h2
            className="text-white leading-none mb-6"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
            }}
          >
            SEU PRIMEIRO PASSO<br />
            <span style={{ color: "#F70000" }}>COMEÇA AGORA.</span>
          </h2>

          <p
            className="mx-auto mb-12 leading-relaxed"
            style={{
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              fontWeight: 300,
              maxWidth: "520px",
            }}
          >
            Uma aula experimental gratuita. Sem compromisso. Venha conhecer o
            tatame, nossa equipe e sentir por que tantas pessoas transformaram
            suas vidas aqui.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/553125310071?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20Gracie%20Barra%20Planalto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4"
              style={{ fontSize: "16px" }}
            >
              Agendar Aula Experimental
              <ArrowRightIcon size={20} />
            </a>
            <a
              href="https://wa.me/553125310071"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
              style={{ fontSize: "16px" }}
            >
              <WhatsappLogoIcon size={20} style={{ color: "#25D366" }} />
              WhatsApp
            </a>
          </div>

          {/* Trust signals */}
          <div
            className="flex flex-wrap items-center justify-center gap-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px" }}
          >
            {[
              "Aula experimental gratuita",
              "Sem compromisso",
              "Todas as idades",
              "Metodologia Gracie Barra",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#F70000" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
