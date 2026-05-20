"use client";

import { useState, useEffect } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const links = [
  { label: "A Academia", href: "#historia" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Professores", href: "#professores" },
  { label: "Horários", href: "#horarios" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        {/* Logo */}
        <a href="#" className="group flex-shrink-0">
          <div
            className="rounded flex items-center justify-center transition-all duration-300 group-hover:scale-105"
            style={{
              background: "#F70000",
              width: scrolled ? "56px" : "96px",
              height: scrolled ? "56px" : "96px",
              boxShadow: "0 4px 24px rgba(247,0,0,0.28)",
            }}
          >
            <img
              src="./logo-gb.svg"
              className="object-contain transition-all duration-300"
              style={{
                width: scrolled ? "40px" : "70px",
                height: scrolled ? "40px" : "70px",
              }}
            />
          </div>
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

        {/* CTA */}
        <a
          href="https://venda.nextfit.com.br/bb3a987f-a6a8-4709-b7e1-8a30aa342ca5/contratos"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
          style={{
            fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
            background: "#F70000",
            color: "#fff",
            borderRadius: "4px",
            letterSpacing: "0.06em",
            boxShadow: "0 0 0 0 rgba(247,0,0,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 10px 30px rgba(247,0,0,0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 0 rgba(247,0,0,0.4)";
          }}
        >
          Matricule-se
        </a>

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
          <a
            href="https://venda.nextfit.com.br/bb3a987f-a6a8-4709-b7e1-8a30aa342ca5/contratos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-4 text-xl font-bold tracking-wider uppercase text-white"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              background: "#F70000",
              borderRadius: "4px",
            }}
          >
            Matricule-se
          </a>
        </div>
      </div>
    </header>
  );
}
