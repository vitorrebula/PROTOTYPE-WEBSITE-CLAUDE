'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';

const images = [
	{
		src: '/1.jpeg',
		alt: 'Projeto da academia',
	},
	{
		src: '/2.jpeg',
		alt: 'Projeto da academia',
	},
	{
		src: '/3.jpeg',
		alt: 'Projeto da academia',
	},
	{
		src: '/4.jpeg',
		alt: 'Projeto da academia',
	},
	{
		src: '/5.jpeg',
		alt: 'Projeto da academia',
	},
	{
		src: '/6.jpeg',
		alt: 'Projeto da academia',
	},
	{
		src: '/7.jpeg',
		alt: 'Projeto da academia',
	},
];

export default function ZoomParallaxSection() {
	return (
		<section className="relative" style={{ background: '#07101F' }}>
			{/* Header pinned above the parallax */}
			<div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 px-6">
				<div className="flex items-center gap-4 mb-6">
					<div className="accent-line" />
					<span
						className="text-xs tracking-[0.25em] uppercase"
						style={{
							color: 'rgba(255,255,255,0.4)',
							fontFamily: 'var(--font-lato), Lato, sans-serif',
						}}
					>
						Nossa Estrutura
					</span>
					<div className="accent-line" />
				</div>
				<h2
					className="text-center text-white leading-none"
					style={{
						fontFamily: 'var(--font-barlow), Barlow Condensed, sans-serif',
						fontWeight: 800,
						fontSize: 'clamp(2.5rem, 6vw, 5rem)',
					}}
				>
					Nova
					<span style={{ color: '#F70000' }}> GB Planalto</span>
				</h2>
			</div>

			<ZoomParallax images={images} />
		</section>
	);
}
