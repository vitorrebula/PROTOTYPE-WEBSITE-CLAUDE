import type { Metadata } from "next";
import { Lato, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gracie Barra Planalto | Jiu-Jitsu para Todas as Idades — Belo Horizonte",
  description:
    "A Gracie Barra Planalto é uma academia de jiu-jitsu de alto nível em Belo Horizonte, MG. Turmas para adultos, crianças, iniciantes e competidores. Agende sua aula experimental.",
  keywords: "gracie barra, jiu-jitsu, academia, belo horizonte, planalto, aula experimental, bjj",
  openGraph: {
    title: "Gracie Barra Planalto | Jiu-Jitsu para Todas as Idades",
    description:
      "Academia de jiu-jitsu de alto nível em BH. Metodologia Gracie Barra, ambiente familiar e alto nível técnico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${lato.variable} ${barlow.variable} h-full antialiased intro-locking`}
    >
      <body className="min-h-full bg-black text-white overflow-x-hidden">
        {/* Runs before hydration so the browser's own scroll-restoration
            (which otherwise fights the loading screen's scrollTo(0,0) on
            reload and yanks the page back down mid-transition) never gets
            a chance to kick in. */}
        <Script id="disable-scroll-restoration" strategy="beforeInteractive">
          {`try{if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);}catch(e){}`}
        </Script>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
