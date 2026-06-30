"use client";

import { useState, useEffect, useRef } from "react";
import { ListIcon, XIcon, CaretDownIcon, ArrowRightIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

const links = [
  { label: "Academia", href: "#historia" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Professores", href: "#professores" },
  { label: "Horários", href: "#horarios" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ctaDropOpen, setCtaDropOpen] = useState(false);
  const ctaDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ctaDropRef.current && !ctaDropRef.current.contains(e.target as Node)) {
        setCtaDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
      style={{ paddingTop: scrolled ? "10px" : "20px" }}
    >
      <nav
        className="w-full max-w-6xl mx-4 flex items-center justify-between px-6 transition-all duration-500"
        style={{
          paddingTop: scrolled ? "10px" : "14px",
          paddingBottom: scrolled ? "10px" : "14px",
          background: scrolled ? "rgba(7,16,31,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderRadius: scrolled ? "14px" : "0",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        {/* Logo — hidden at top (hero shows its own), appears on scroll */}
        <a
          href="#"
          className="group flex-shrink-0"
          style={{
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? "auto" : "none",
            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <img
            src="./logo-gb.png"
            alt="Gracie Barra Planalto"
            className="object-contain transition-all duration-500 group-hover:scale-105"
            style={{ width: "60px", height: "60px" }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
                style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA dropdown */}
        <div ref={ctaDropRef} className="hidden md:block relative">
          <button
            onClick={() => setCtaDropOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              background: "#F70000",
              color: "#fff",
              borderRadius: "4px",
              letterSpacing: "0.06em",
              boxShadow: ctaDropOpen ? "0 10px 30px rgba(247,0,0,0.35)" : "0 0 0 0 rgba(247,0,0,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Matricule-se
            <CaretDownIcon
              size={14}
              style={{
                transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                transform: ctaDropOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {/* Dropdown panel */}
          {ctaDropOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "rgba(7,16,31,0.97)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                zIndex: 200,
                minWidth: "220px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                overflow: "hidden",
              }}
            >
              <a
                href="https://venda.nextfit.com.br/bb3a987f-a6a8-4709-b7e1-8a30aa342ca5/contratos"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCtaDropOpen(false)}
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
                href="https://wa.me/553125310071"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCtaDropOpen(false)}
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
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Menu"
        >
          {open ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(7,16,31,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-3xl font-bold tracking-wide uppercase"
              style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col items-center gap-3 mt-4">
            <a
              href="https://venda.nextfit.com.br/bb3a987f-a6a8-4709-b7e1-8a30aa342ca5/contratos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-8 py-4 text-xl font-bold tracking-wider uppercase text-white"
              style={{
                fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                background: "#F70000",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <ArrowRightIcon size={18} />
              Matricule-se online
            </a>
            <a
              href="https://wa.me/553125310071"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-8 py-4 text-xl font-bold tracking-wider uppercase"
              style={{
                fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <WhatsappLogoIcon size={18} style={{ color: "#25D366" }} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
