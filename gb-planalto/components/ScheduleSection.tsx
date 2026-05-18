"use client";

import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScheduleItem = { time: string; label: string; type: string };
type DaySchedule = Record<string, ScheduleItem[]>;

const schedule: DaySchedule = {
  "Seg": [
    { time: "07:00", label: "Jiu jitsu", type: "adulto" },
    { time: "07:30", label: "Adulto Fund.", type: "adulto" },
    { time: "11:30", label: "Adulto Fund.", type: "adulto" },
    { time: "17:00", label: "Infantil", type: "infantil" },
    { time: "18:30", label: "Adulto Avançado", type: "adulto" },
    { time: "19:30", label: "Adulto Fund.", type: "adulto" },
    { time: "20:30", label: "Competição", type: "competicao" },
  ],
  "Ter": [
    { time: "07:00", label: "Jiu jitsu", type: "adulto" },
    { time: "11:30", label: "Feminino", type: "feminino" },
    { time: "17:00", label: "Juvenil", type: "juvenil" },
    { time: "18:30", label: "Adulto Avançado", type: "adulto" },
    { time: "19:30", label: "Adulto Fund.", type: "adulto" },
    { time: "20:30", label: "No-Gi", type: "adulto" },
  ],
  "Qua": [
    { time: "07:00", label: "Jiu jitsu", type: "adulto" },
    { time: "07:30", label: "Adulto Fund.", type: "adulto" },
    { time: "11:30", label: "Adulto Fund.", type: "adulto" },
    { time: "17:00", label: "Infantil", type: "infantil" },
    { time: "18:30", label: "Feminino", type: "feminino" },
    { time: "19:30", label: "Adulto Avançado", type: "adulto" },
    { time: "20:30", label: "Competição", type: "competicao" },
  ],
  "Qui": [
    { time: "07:00", label: "Jiu jitsu", type: "adulto" },
    { time: "11:30", label: "Adulto Fund.", type: "adulto" },
    { time: "17:00", label: "Juvenil", type: "juvenil" },
    { time: "18:30", label: "Adulto Avançado", type: "adulto" },
    { time: "19:30", label: "Adulto Fund.", type: "adulto" },
  ],
  "Sex": [
    { time: "07:00", label: "Jiu jitsu - NOGI", type: "adulto" },
    { time: "07:30", label: "Adulto Fund.", type: "adulto" },
    { time: "11:30", label: "Feminino", type: "feminino" },
    { time: "17:00", label: "Infantil", type: "infantil" },
    { time: "18:30", label: "Adulto Avançado", type: "adulto" },
    { time: "19:30", label: "Adulto Fund.", type: "adulto" },
    { time: "20:30", label: "Competição", type: "competicao" },
  ],
  "Sáb": [
    { time: "10:00", label: "Competição", type: "competicao" },
    { time: "11:00", label: "Jiu jitsu - Treino Livre", type: "adulto" },
  ],
};

const typeColors: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  adulto:     { bg: "rgba(6,42,113,0.07)",   text: "#062A71", dot: "#062A71", border: "rgba(6,42,113,0.18)" },
  infantil:   { bg: "rgba(247,0,0,0.07)",    text: "#c00000", dot: "#F70000", border: "rgba(247,0,0,0.2)" },
  feminino:   { bg: "rgba(160,0,90,0.07)",   text: "#a0005a", dot: "#cc0066", border: "rgba(160,0,90,0.2)" },
  juvenil:    { bg: "rgba(50,100,200,0.07)", text: "#2b55b0", dot: "#3264C8", border: "rgba(50,100,200,0.2)" },
  competicao: { bg: "rgba(180,110,0,0.07)",  text: "#8a5500", dot: "#B8860B", border: "rgba(180,110,0,0.2)" },
};

const filters = [
  { label: "Todas", value: "all" },
  { label: "Adulto", value: "adulto" },
  { label: "Infantil", value: "infantil" },
  { label: "Feminino", value: "feminino" },
  { label: "Competição", value: "competicao" },
];

const days = Object.keys(schedule);

export default function ScheduleSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileDay, setMobileDay] = useState(days[0]);
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="horarios"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#F5F6F8" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 fade-up">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="accent-line" />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: "rgba(10,14,26,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                Quadro de Horários
              </span>
            </div>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#0A0E1A",
              }}
            >
              ENCONTRE<br />
              <span style={{ color: "#F70000" }}>SEU HORÁRIO.</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className="px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  borderRadius: "22px",
                  background: activeFilter === f.value ? "#F70000" : "rgba(10,14,26,0.06)",
                  border: `1px solid ${activeFilter === f.value ? "#F70000" : "rgba(10,14,26,0.12)"}`,
                  color: activeFilter === f.value ? "#fff" : "rgba(10,14,26,0.6)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile schedule: day tabs + vertical list ── */}
        <div className="md:hidden">
          {/* Day selector */}
          <div
            className="flex rounded-xl overflow-hidden mb-5"
            style={{ border: "1px solid rgba(10,14,26,0.1)", background: "#FFFFFF" }}
          >
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setMobileDay(day)}
                className="flex-1 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                  background: mobileDay === day ? "#F70000" : "transparent",
                  color: mobileDay === day ? "#fff" : "rgba(10,14,26,0.45)",
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Class list for selected day */}
          <div className="flex flex-col gap-3">
            {(schedule[mobileDay] ?? [])
              .filter((item) => activeFilter === "all" || item.type === activeFilter)
              .map((item, i) => {
                const colors = typeColors[item.type] ?? typeColors.adulto;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl px-5 py-4"
                    style={{
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <span
                      className="font-bold text-lg leading-none w-14 shrink-0"
                      style={{
                        fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                        color: colors.dot,
                      }}
                    >
                      {item.time}
                    </span>
                    <div
                      className="w-px self-stretch"
                      style={{ background: colors.border }}
                    />
                    <span
                      className="text-sm leading-snug"
                      style={{
                        fontFamily: "var(--font-lato), Lato, sans-serif",
                        color: colors.text,
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </span>
                    <div
                      className="ml-auto w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: colors.dot }}
                    />
                  </div>
                );
              })}
            {(schedule[mobileDay] ?? []).filter(
              (item) => activeFilter === "all" || item.type === activeFilter
            ).length === 0 && (
              <p
                className="text-center py-8 text-sm"
                style={{ color: "rgba(10,14,26,0.35)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
              >
                Nenhuma aula neste dia para o filtro selecionado.
              </p>
            )}
          </div>
        </div>

        {/* ── Desktop schedule grid ── */}
        <div
          className="hidden md:block overflow-x-auto rounded-[14px]"
          style={{ border: "1px solid rgba(10,14,26,0.08)", background: "#FFFFFF" }}
        >
          <table className="w-full min-w-[640px]" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(10,14,26,0.03)", borderBottom: "1px solid rgba(10,14,26,0.07)" }}>
                {Object.keys(schedule).map((day) => (
                  <th
                    key={day}
                    className="text-center"
                    style={{
                      fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "rgba(10,14,26,0.5)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "16px 12px",
                    }}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, rowIdx) => (
                <tr
                  key={rowIdx}
                  style={{ borderBottom: "1px solid rgba(10,14,26,0.05)" }}
                >
                  {Object.values(schedule).map((dayItems, colIdx) => {
                    const item = dayItems[rowIdx];
                    if (!item) return (
                      <td key={colIdx} className="p-2 align-top" />
                    );
                    const isVisible = activeFilter === "all" || item.type === activeFilter;
                    const colors = typeColors[item.type] ?? typeColors.adulto;
                    return (
                      <td key={colIdx} className="p-2 align-top schedule-cell">
                        <div
                          className="rounded-sm px-3 py-2 transition-all duration-300"
                          style={{
                            background: isVisible ? colors.bg : "transparent",
                            border: isVisible
                              ? `1px solid ${colors.border}`
                              : "1px solid transparent",
                            opacity: isVisible ? 1 : 0.2,
                          }}
                        >
                          <p
                            className="font-bold mb-0.5"
                            style={{
                              fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                              fontSize: "13px",
                              color: colors.dot,
                            }}
                          >
                            {item.time}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-lato), Lato, sans-serif",
                              fontSize: "11px",
                              color: colors.text,
                              lineHeight: 1.3,
                            }}
                          >
                            {item.label}
                          </p>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 fade-up">
          {Object.entries(typeColors).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: val.dot }}
              />
              <span
                className="capitalize text-xs"
                style={{ fontFamily: "var(--font-lato), Lato, sans-serif", color: "rgba(10,14,26,0.45)" }}
              >
                {key === "competicao" ? "Competição" : key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
