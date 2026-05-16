'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Max 7 images */
	images: Image[];
}

type Pos = { top?: string; left?: string; width: string; height: string };

const POSITIONS: Pos[] = [
	{                                 width: '25vw', height: '25vh' }, // 0 — centro
	{ top: '-30vh', left: '5vw',      width: '35vw', height: '30vh' }, // 1
	{ top: '-10vh', left: '-25vw',    width: '20vw', height: '45vh' }, // 2
	{               left: '27.5vw',   width: '25vw', height: '25vh' }, // 3
	{ top: '27.5vh',left: '5vw',      width: '20vw', height: '25vh' }, // 4
	{ top: '27.5vh',left: '-22.5vw',  width: '30vw', height: '25vh' }, // 5
	{ top: '22.5vh',left: '25vw',     width: '15vw', height: '15vh' }, // 6
];

const SCALES = [4, 5, 6, 5, 6, 8, 9];

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					pin: true,
					scrub: true,
					start: 'top top',
					end: '+=200%',
				},
			});

			itemRefs.current.forEach((el, i) => {
				if (!el) return;
				tl.to(el, { scale: SCALES[i % SCALES.length], ease: 'none' }, 0);
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="relative h-screen overflow-hidden">
			{images.map(({ src, alt }, index) => {
				const pos = POSITIONS[index % POSITIONS.length];
				return (
					<div
						key={index}
						ref={(el) => { itemRefs.current[index] = el; }}
						className="absolute top-0 flex h-full w-full items-center justify-center"
					>
						<div
							style={{
								position: 'relative',
								top: pos.top,
								left: pos.left,
								width: pos.width,
								height: pos.height,
							}}
						>
							<img
								src={src || '/placeholder.svg'}
								alt={alt || `Parallax image ${index + 1}`}
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}
