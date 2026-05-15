"use client";

import { useEffect, useRef, useState } from "react";
import { TrophyIcon, UsersIcon, ClockIcon, MedalIcon } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: UsersIcon, value: 500, suffix: "+", label: "Alunos formados", description: "Uma família crescendo a cada mês" },
  { icon: ClockIcon, value: 12, suffix: "+", label: "Anos de história", description: "Tradição e excelência em BH" },
  { icon: TrophyIcon, value: 47, suffix: "", label: "Medalhas em 2024", description: "Campeonatos regionais e nacionais" },
  { icon: MedalIcon, value: 3, suffix: "", label: "Campeões mundiais", description: "Representando o Brasil no tatame" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function AchievementsSection() {
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
              Conquistas
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
            NÚMEROS QUE<br />
            FALAM POR SI SÓS.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center p-8 fade-up rounded-[10px] group"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <Icon
                  size={28}
                  weight="duotone"
                  className="mb-4"
                  style={{ color: "#F70000" }}
                />
                <p
                  className="text-white leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className="font-bold mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lato), Lato, sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
