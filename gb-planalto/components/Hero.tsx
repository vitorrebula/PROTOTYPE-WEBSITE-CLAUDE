"use client";

import { useEffect, useRef } from "react";
import { ArrowRightIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

const stats = [
  { value: "500+", label: "Alunos ativos" },
  { value: "12+", label: "Anos de história" },
  { value: "3", label: "Campeões mundiais" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      headlineRef.current,
      subRef.current,
      ctaRef.current,
      statsRef.current,
    ].filter(Boolean) as HTMLElement[];

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 150 + i * 140);
    });

    // Parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.4;
        bgRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://picsum.photos/seed/martialarts/1920/1080"
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: "grayscale(30%) contrast(1.1) brightness(0.35)",
            transform: "scale(1.1)",
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,42,113,0.45) 0%, transparent 70%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(0deg, #07101F 0%, transparent 100%)" }}
      />

      {/* Red accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #F70000, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center pt-28 md:pt-24 pb-8">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{ opacity: 0 }}
          ref={undefined}
        >
          <div className="h-px w-10" style={{ background: "#F70000" }} />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
          >
            Belo Horizonte — Planalto
          </span>
          <div className="h-px w-10" style={{ background: "#F70000" }} />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="w-full font-display text-white leading-none mb-6"
          style={{
            fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.4rem, 8vw, 7rem)",
            letterSpacing: "-0.01em",
            maxWidth: "900px",
          }}
        >
          DISCIPLINE FORGES{" "}
          <span style={{ color: "#F70000" }}>CHAMPIONS</span>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="mb-10 leading-relaxed max-w-xl"
          style={{
            fontFamily: "var(--font-lato), Lato, sans-serif",
            fontSize: "18px",
            color: "rgba(255,255,255,0.72)",
            fontWeight: 300,
          }}
        >
          Jiu-Jitsu de alto nível para todas as idades. Da sua primeira aula
          até o pódio — venha fazer parte da família Gracie Barra Planalto.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#aula"
            className="btn-primary group"
            style={{ fontSize: "15px", paddingLeft: "36px", paddingRight: "36px" }}
          >
            Agendar Aula Experimental
            <ArrowRightIcon
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
            style={{ fontSize: "15px" }}
          >
            <WhatsappLogoIcon size={18} style={{ color: "#25D366" }} />
            Falar no WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="font-display leading-none mb-1"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#F70000",
                }}
              >
                {s.value}
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
        >
          scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
