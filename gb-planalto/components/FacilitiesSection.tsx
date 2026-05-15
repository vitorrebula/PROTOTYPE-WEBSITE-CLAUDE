"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "./turmadada.jpeg", alt: "Tatame principal" },
  { src: "./turmadada.jpeg", alt: "Área de treino" },
  { src: "./turmadada.jpeg", alt: "Vestiário" },
  { src: "./turmadada.jpeg", alt: "Recepção" },
  { src: "./turmadada.jpeg", alt: "Sala de musculação" },
  { src: "./turmadada.jpeg", alt: "Área de alongamento" },
];

const AMENITIES = [
  "Vestiários masculino e feminino",
  "Bebedouro",
  "Acessível para cadeirantes",
];

export default function FacilitiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      className="bg-gb-off-white py-24 lg:py-32 overflow-hidden"
      id="estrutura"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 text-center mb-14">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-gb-blue mb-4">
          Conheça a Gracie Barra Planalto
        </h2>
        <p className="text-gb-blue/60 text-lg font-light max-w-xl mx-auto">
          Nosso espaço foi pensado para o seu conforto e evolução.
        </p>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex">
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className="flex flex-col basis-[75%] sm:basis-[50%] md:basis-[38%] lg:basis-[30%] cursor-pointer flex-shrink-0"
              onClick={() => scrollTo(index)}
            >
              <motion.div
                initial={false}
                animate={{
                  clipPath:
                    selectedIndex !== index
                      ? "inset(10% 0 10% 0 round 1rem)"
                      : "inset(0 0 0 0 round 1rem)",
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="w-full overflow-hidden rounded-2xl aspect-[3/4] shadow-xl mx-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full scale-105 object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex w-full items-center justify-center gap-6 mt-8">
        <button
          aria-label="Foto anterior"
          onClick={scrollPrev}
          className="flex items-center justify-center h-11 w-11 rounded-full border border-gb-blue/15 text-gb-blue hover:bg-gb-blue hover:text-white hover:border-gb-blue transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={[
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                selectedIndex === index
                  ? "bg-gb-red w-6"
                  : "bg-gb-blue/20 w-2",
              ].join(" ")}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>

        <button
          aria-label="Próxima foto"
          onClick={scrollNext}
          className="flex items-center justify-center h-11 w-11 rounded-full border border-gb-blue/15 text-gb-blue hover:bg-gb-blue hover:text-white hover:border-gb-blue transition-colors cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Amenities */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-12">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-2.5 font-display font-bold text-xs tracking-widest uppercase text-gb-blue"
            >
              <svg
                className="w-5 h-5 text-gb-red fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              {amenity}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
