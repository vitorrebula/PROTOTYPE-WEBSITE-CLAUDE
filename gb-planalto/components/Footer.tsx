"use client";

import { WhatsappLogoIcon, InstagramLogoIcon, FacebookLogoIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "#07101F",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ background: "#F70000" }}
              >
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif", fontWeight: 900, fontSize: "14px" }}
                >
                  GB
                </span>
              </div>
              <div>
                <p
                  className="text-white font-bold leading-none tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif", fontSize: "16px", letterSpacing: "0.1em" }}
                >
                  Gracie Barra Planalto
                </p>
                <p
                  className="text-xs mt-0.5 tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-lato), Lato, sans-serif" }}
                >
                  Belo Horizonte · MG
                </p>
              </div>
            </div>
            <p
              className="mb-6 leading-relaxed max-w-sm"
              style={{
                fontFamily: "var(--font-lato), Lato, sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                fontWeight: 300,
              }}
            >
              Jiu-Jitsu para todas as idades e níveis. Metodologia Gracie Barra
              Internacional em um ambiente acolhedor e de alto nível técnico.
            </p>
            <div className="flex gap-3">
              {[
                { icon: InstagramLogoIcon, href: "#" },
                { icon: FacebookLogoIcon, href: "#" },
                { icon: WhatsappLogoIcon, href: "https://wa.me/5531999999999" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#F70000";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor = "#F70000";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-white mb-5 uppercase tracking-wider text-sm"
              style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif", fontWeight: 700 }}
            >
              Academia
            </p>
            <ul className="space-y-3">
              {["Nossa História", "Modalidades", "Professores", "Horários", "Resultados"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{
                      fontFamily: "var(--font-lato), Lato, sans-serif",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white mb-5 uppercase tracking-wider text-sm"
              style={{ fontFamily: "var(--font-barlow), Barlow Condensed, sans-serif", fontWeight: 700 }}
            >
              Contato
            </p>
            <ul className="space-y-4">
              {[
                { icon: MapPinIcon, text: "Rua das Palmeiras, 500\nBairro Planalto, BH - MG" },
                { icon: PhoneIcon, text: "(31) 99999-9999" },
                { icon: EnvelopeIcon, text: "contato@gbplanalto.com.br" },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#F70000" }}
                  />
                  <span
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      fontFamily: "var(--font-lato), Lato, sans-serif",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © {new Date().getFullYear()} Gracie Barra Planalto. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "var(--font-lato), Lato, sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Parte da rede Gracie Barra International
          </p>
        </div>
      </div>
    </footer>
  );
}
