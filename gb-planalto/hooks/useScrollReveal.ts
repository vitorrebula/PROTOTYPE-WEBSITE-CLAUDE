"use client";

import { useEffect, RefObject } from "react";

export function useScrollReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;

    const targets = ref.current.querySelectorAll<HTMLElement>(".fade-up, .scale-in");

    // On mobile, fast flicks can carry a section straight into view before the
    // old margin (-60px, i.e. "must already be mostly on screen") would ever
    // fire — so the reveal starts late and reads as render lag. Triggering
    // while the section is still below the fold lets the (now much shorter)
    // mobile transition finish before the user's eyes get there.
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      isMobile
        ? { threshold: 0, rootMargin: "0px 0px 150px 0px" }
        : { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
}
