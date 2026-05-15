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
      style={{ paddingTop: scrolled ? "12px" : "24px" }}
    >
      <nav
        className="w-full max-w-6xl mx-4 flex items-center justify-between px-6 py-3 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(7,16,31,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderRadius: scrolled ? "14px" : "0",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
              style={{ background: "#F70000" }}
            >
              <img src="./logo-gb.svg" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <p
                className="text-white font-bold leading-none tracking-wide uppercase"
                style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif", fontSize: "15px", letterSpacing: "0.08em" }}
              >
                Gracie Barra
              </p>
              <p className="text-white/50 text-xs leading-none tracking-widest uppercase mt-1">
                Planalto · BH
              </p>
            </div>
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
          href="#aula"
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
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(247,0,0,0.4)";
          }}
        >
          Aula Experimental
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
            href="#aula"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-4 text-xl font-bold tracking-wider uppercase text-white"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              background: "#F70000",
              borderRadius: "4px",
            }}
          >
            Aula Experimental
          </a>
        </div>
      </div>
    </header>
  );
}
