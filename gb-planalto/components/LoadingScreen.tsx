"use client";

import { useLayoutEffect, useEffect, useRef, useState } from "react";

// Any public/ photo is eligible except logos and stock next.js icons.
const BACKGROUND_IMAGES = [
  // "1.jpeg",
  // "2.jpeg",
  // "3.jpeg",
  // "4.jpeg",
  // "5.jpeg",
  // "6.jpeg",
  // "7.jpeg",
  // "8.jpeg",
  // "cabecao-1.jpeg",
  "dada-1.jpeg",
  // "dada.jpeg",
  "dudu-ensinando.jpeg",
  // "jonin.jpeg",
  "luta-1.jpeg",
  "luta-2.jpeg",
  "luta-3.jpeg",
  "mae-e-filho-bjj.jpeg",
  "pai-e-filha.jpeg",
  "pai-e-filho-bjj-2.jpeg",
  "pai-e-filho-bjj-3.jpeg",
  "pai-e-filho-bjj.jpeg",
  // "testefundo.jpeg",
  // "turmadada.jpeg",
  "vinicius-falando.jpeg",
  "vinny-bjj.jpeg",
];

const HOLD_TIME = 1400;
const MOVE_TIME = 950;
const SKIP_MOVE_TIME = 350;

// Runs before the browser paints so the background photo and the logo
// always appear in the same frame — never the logo first, then the photo.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
  "Spacebar",
]);

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [bgImage, setBgImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLImageElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const bottomShadowRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const phaseRef = useRef<"hold" | "moving">("hold");
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useIsoLayoutEffect(() => {
    setBgImage(BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)]);

    // Guarantees the hero is what's shown once the intro ends, regardless
    // of any scroll position the browser restored on load.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // The "intro-locking" class on <html> (set server-side in layout.tsx)
    // already blocks scroll/drag from the very first paint — these
    // listeners are just extra insurance for the period after hydration.
    const html = document.documentElement;
    const preventScroll = (e: Event) => e.preventDefault();
    const preventScrollKeys = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) e.preventDefault();
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScrollKeys, { passive: false });

    const unlockScroll = () => {
      html.classList.remove("intro-locking");
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScrollKeys);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startMove = (duration: number) => {
      if (phaseRef.current !== "hold") return;
      phaseRef.current = "moving";

      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      const target = document.getElementById(
        isDesktop ? "hero-logo-desktop" : "hero-logo-mobile"
      );
      const logo = logoRef.current;

      // The logo itself never fades — it stays fully opaque and only
      // translates/scales onto the real hero logo, so it reads as
      // physically arriving there instead of dissolving away.
      if (target && logo) {
        const targetRect = target.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();

        const scale = targetRect.width / logoRect.width;
        const deltaX =
          targetRect.left + targetRect.width / 2 - (logoRect.left + logoRect.width / 2);
        const deltaY =
          targetRect.top + targetRect.height / 2 - (logoRect.top + logoRect.height / 2);

        // The entrance keyframe (`loading-logo-in`) keeps its final transform
        // value pinned via fill-mode "both", which otherwise silently
        // overrides the inline transform below for the rest of the logo's
        // life — freezing it in place despite the transition being set.
        // Forcing a reflow after clearing it commits that as the transition's
        // starting point, so the flight actually animates instead of snapping.
        logo.style.animation = "none";
        void logo.offsetWidth;
        logo.style.transition = `transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`;
        logo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
      }

      // Crossfades into the hero's actual background photo (same treatment
      // Hero itself uses) instead of fading to a blank color, so the scene
      // behind the flying logo turns into the hero, rather than just the
      // logo cutting over to it at the end.
      if (heroBgRef.current) {
        heroBgRef.current.style.transition = `opacity ${duration}ms ease`;
        heroBgRef.current.style.opacity = "1";
      }
      if (vignetteRef.current) {
        vignetteRef.current.style.transition = `opacity ${duration}ms ease`;
        vignetteRef.current.style.opacity = "0.55";
      }
      if (bottomShadowRef.current) {
        bottomShadowRef.current.style.transition = `opacity ${duration}ms ease`;
        bottomShadowRef.current.style.opacity = "1";
      }

      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      finishTimerRef.current = setTimeout(() => {
        setVisible(false);
        unlockScroll();
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        window.dispatchEvent(new Event("gb:intro-done"));
      }, duration + 50);
    };

    holdTimerRef.current = setTimeout(
      () => startMove(reduceMotion ? 200 : MOVE_TIME),
      reduceMotion ? 150 : HOLD_TIME
    );

    const handleSkip = () => {
      if (phaseRef.current !== "hold") return;
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      startMove(reduceMotion ? 120 : SKIP_MOVE_TIME);
    };

    const containerEl = containerRef.current;
    containerEl?.addEventListener("click", handleSkip);

    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      containerEl?.removeEventListener("click", handleSkip);
      unlockScroll();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center cursor-pointer"
      style={{ zIndex: 99999, background: "#07101F" }}
    >
      {bgImage && (
        <>
          <div className="absolute inset-0">
            <img
              src={`./${bgImage}`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.32, filter: "grayscale(20%) contrast(1.05) brightness(0.5)" }}
            />
            {/* Same crop/filter Hero uses on its own bg — crossfades in
                during the flight so the cut to the real hero is seamless. */}
            <img
              ref={heroBgRef}
              src="./cabecao-1.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: 0,
                filter: "grayscale(15%) contrast(1.05) brightness(0.55)",
                transform: "scale(1.1)",
              }}
            />
            <div
              ref={vignetteRef}
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7,16,31,0.25) 0%, rgba(7,16,31,0.9) 100%)",
              }}
            />
            {/* Matches Hero's own bottom shadow so it's already faded in by
                the time the overlay is removed, instead of popping in. */}
            <div
              ref={bottomShadowRef}
              className="absolute bottom-0 left-0 right-0 h-48"
              style={{ background: "linear-gradient(0deg, #07101F 0%, transparent 100%)", opacity: 0 }}
            />
          </div>
          <img
            ref={logoRef}
            src="./logo-gb.png"
            alt="Gracie Barra Planalto"
            className="loading-logo-in relative"
            style={{ width: "clamp(190px, 42vw, 260px)", height: "auto", willChange: "transform" }}
          />
        </>
      )}
    </div>
  );
}
