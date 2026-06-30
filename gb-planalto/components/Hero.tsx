"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, WhatsappLogoIcon, CaretDownIcon } from "@phosphor-icons/react";

const stats = [
  { value: "5+", label: "Anos de história" },
  { value: "3", label: "Professores renomados" },
  { value: "10", label: "Instrutores certificados PCI 2026" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownCoords, setDropdownCoords] = useState({ top: 0, centerX: 0 });

  const handleDropdownToggle = () => {
    if (!dropdownOpen && dropdownBtnRef.current) {
      const rect = dropdownBtnRef.current.getBoundingClientRect();
      setDropdownCoords({
        top: rect.bottom + 8,
        centerX: rect.left + rect.width / 2,
      });
    }
    setDropdownOpen((v) => !v);
  };

  useEffect(() => {
    if (!dropdownOpen) return;
    const close = () => setDropdownOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [dropdownOpen]);

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
    <>
      {/* Dropdown backdrop — fixed, outside overflow-hidden section */}
      {dropdownOpen && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 9998 }}
          onClick={() => setDropdownOpen(false)}
        />
      )}

      {/* Dropdown panel — fixed so it escapes overflow-hidden */}
      {dropdownOpen && (
        <div
          style={{
            position: "fixed",
            top: dropdownCoords.top,
            left: dropdownCoords.centerX,
            transform: "translateX(-50%)",
            zIndex: 9999,
            background: "rgba(7,16,31,0.97)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "10px",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            minWidth: "230px",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          <a
            href="https://venda.nextfit.com.br/bb3a987f-a6a8-4709-b7e1-8a30aa342ca5/contratos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
            className="flex items-center gap-3 px-5 py-4 transition-colors duration-200"
            style={{
              color: "#fff",
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(247,0,0,0.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <ArrowRightIcon size={15} style={{ color: "#F70000", flexShrink: 0 }} />
            Matricule-se online
          </a>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 16px" }} />
          <a
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDropdownOpen(false)}
            className="flex items-center gap-3 px-5 py-4 transition-colors duration-200"
            style={{
              color: "#fff",
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <WhatsappLogoIcon size={15} style={{ color: "#25D366", flexShrink: 0 }} />
            Chamar no WhatsApp
          </a>
        </div>
      )}

      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ height: "100svh", maxHeight: "100svh" }}
      >
        {/* Background image with parallax */}
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <img
            src="./cabecao-1.jpeg"
            alt=""
            className="w-full h-full object-cover"
            style={{
              filter: "grayscale(15%) contrast(1.05) brightness(0.55)",
              transform: "scale(1.1)",
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,42,113,0.35) 0%, transparent 70%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(0deg, #07101F 0%, transparent 100%)" }}
        />

        {/* Watermark logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img
            src="./logo-gb.svg"
            alt=""
            style={{
              width: "min(55vw, 600px)",
              height: "auto",
              opacity: 0.07,
            }}
          />
        </div>

        {/* Red accent top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #F70000, transparent)" }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center pt-12 md:pt-20">
          {/* Eyebrow */}
          <div
            className="hidden sm:flex items-center gap-3 mb-4 sm:mb-6"
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
            className="w-full font-display text-white leading-none mb-4 sm:mb-6"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.9rem, 8vw, 7rem)",
              letterSpacing: "-0.01em",
              maxWidth: "900px",
            }}
          >
            DISCIPLINA FORMA{" "}
            <span style={{ color: "#F70000" }}>CAMPEÕES</span>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="mb-6 sm:mb-8 leading-relaxed max-w-xl"
            style={{
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "clamp(15px, 4vw, 18px)",
              color: "rgba(255,255,255,0.72)",
              fontWeight: 300,
            }}
          >
            Jiu-Jitsu de alto nível para todas as idades. Da sua primeira aula
            até o pódio — venha fazer parte da família Gracie Barra Planalto.
          </p>

          {/* CTA — single dropdown button */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-8 sm:mb-10">
            <button
              ref={dropdownBtnRef}
              onClick={handleDropdownToggle}
              className="btn-primary group"
              style={{ fontSize: "15px", paddingLeft: "36px", paddingRight: "28px" }}
            >
              Quero Começar
              <CaretDownIcon
                size={16}
                style={{
                  transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 items-start justify-center gap-4 sm:gap-10 md:gap-12 w-full max-w-md sm:max-w-none"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="font-display leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 4vw, 3rem)",
                    color: "#F70000",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[10px] sm:text-xs tracking-widest uppercase leading-tight"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hidden sm:flex flex-col items-center gap-2 mt-8 pb-6">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              scroll
            </span>
            <div
              className="w-px h-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
