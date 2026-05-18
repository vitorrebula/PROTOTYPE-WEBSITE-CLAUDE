'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';

const images = [
	{
		src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Treino de jiu-jitsu',
	},
	{
		src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Atletas treinando',
	},
	{
		src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Arte marcial',
	},
	{
		src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Grappling',
	},
	{
		src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Treinamento físico',
	},
	{
		src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Academia de luta',
	},
	{
		src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
		alt: 'Equipe Gracie Barra',
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
