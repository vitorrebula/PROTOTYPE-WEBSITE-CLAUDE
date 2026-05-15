'use client'

import { SplineScene } from "@/components/ui/spline-scene"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowRightIcon } from "@phosphor-icons/react"

export default function SplineSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #03174A 0%, #062A71 60%, #03174A 100%)' }}
    >
      {/* Red spotlight sweep */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#F70000"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #F70000, transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:h-[560px]">

        {/* Left — text content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: '#F70000' }} />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-lato, Lato, sans-serif)' }}
            >
              Tecnologia & Arte Marcial
            </span>
          </div>

          {/* Headline */}
          <h2
            className="leading-none mb-6 text-white"
            style={{
              fontFamily: 'var(--font-barlow, "Barlow Condensed", sans-serif)',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
              letterSpacing: '-0.01em',
            }}
          >
            SINTA O JIU-JITSU<br />
            <span style={{ color: '#F70000' }}>EM OUTRA DIMENSÃO</span>
          </h2>

          {/* Body */}
          <p
            className="mb-10 leading-relaxed max-w-md"
            style={{
              fontFamily: 'var(--font-lato, Lato, sans-serif)',
              fontSize: '17px',
              color: 'rgba(255,255,255,0.62)',
              fontWeight: 300,
            }}
          >
            Interatividade que vai além do tatame. Explore técnicas, conheça
            nossos campeões e descubra por que a Gracie Barra Planalto é
            referência em Belo Horizonte.
          </p>

          {/* CTA */}
          <div>
            <a
              href="#aula"
              className="btn-primary group"
              style={{ fontSize: '15px' }}
            >
              Agendar Aula Grátis
              <ArrowRightIcon
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Right — Spline 3D */}
        <div className="flex-1 relative h-[380px] md:h-full w-full">
          {/* Soft vignette so the 3D scene bleeds nicely into the dark bg */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 90% at 50% 50%, transparent 55%, #03174A 100%)',
            }}
          />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(247,0,0,0.3), transparent)' }}
      />
    </section>
  )
}
