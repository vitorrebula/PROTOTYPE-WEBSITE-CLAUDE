"use client";

import { useRef } from "react";
import { MapPinIcon, NavigationArrowIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ADDRESS_LINE1 = "Rua Professor Massanielo Santos, 490";
const ADDRESS_LINE2 = "Planalto, Belo Horizonte, MG";
const MAPS_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_LINE2}`);

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #062A71 0%, #03174A 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(247,0,0,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.3)" }} />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
            >
              Localização
            </span>
            <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.3)" }} />
          </div>
          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            VENHA TREINAR<br />
            <span style={{ color: "#F70000" }}>NO PLANALTO.</span>
          </h2>
        </div>

        {/* Address + map */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div
            className="flex flex-col justify-center gap-6 p-8 md:p-10 fade-up rounded-[10px]"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              className="w-14 h-14 rounded-[10px] flex items-center justify-center"
              style={{ background: "rgba(247,0,0,0.15)" }}
            >
              <MapPinIcon size={26} weight="duotone" style={{ color: "#F70000" }} />
            </div>
            <div>
              <p
                className="text-white leading-snug"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
              >
                {ADDRESS_LINE1}
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "var(--font-lato), Lato, sans-serif",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {ADDRESS_LINE2}
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wider uppercase w-fit transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                background: "#F70000",
                color: "#fff",
                borderRadius: "4px",
                letterSpacing: "0.06em",
                textDecoration: "none",
              }}
            >
              <NavigationArrowIcon size={16} />
              Como chegar
            </a>
          </div>

          <div
            className="relative overflow-hidden fade-up rounded-[10px]"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              minHeight: "320px",
            }}
          >
            <iframe
              title="Mapa — Gracie Barra Planalto"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
