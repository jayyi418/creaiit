'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundStars() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const layers = [
                { count: 180, speed: 0.2, size: 'w-1 h-1' }, // distant
                { count: 80, speed: 0.5, size: 'w-1.5 h-1.5' }, // mid
                { count: 30, speed: 1.0, size: 'w-2 h-2' }  // close
            ];

            layers.forEach((layer, i) => {
                const layerGroup = document.createElement('div');
                layerGroup.className = `absolute inset-0 pointer-events-none layer-global-${i}`;
                containerRef.current?.appendChild(layerGroup);

                for (let j = 0; j < layer.count; j++) {
                    const star = document.createElement('div');

                    // Logic to randomise "pretty" stars
                    // Layer 2 (closest) has more sparkles. Layer 1 has some. Layer 0 mostly dots.
                    const isSparkle = i === 2 || (i === 1 && Math.random() > 0.85);

                    if (isSparkle) {
                        star.className = `absolute bg-white/90 animate-twinkle`;
                        // 4-point star shape (diamond-ish)
                        const size = i === 2 ? 4 : 3;
                        star.style.width = `${size}px`;
                        star.style.height = `${size}px`;
                        star.style.clipPath = 'polygon(50% 0%, 61% 35%, 100% 50%, 61% 65%, 50% 100%, 39% 65%, 0% 50%, 39% 35%)';
                    } else {
                        star.className = `absolute bg-white rounded-full opacity-60`;
                        // Parse size from class string roughly or just set px
                        const baseSize = i === 0 ? 1 : (i === 1 ? 2 : 3);
                        star.style.width = `${baseSize}px`;
                        star.style.height = `${baseSize}px`;

                        // Randomly twinkle some dots too
                        if (Math.random() > 0.7) {
                            star.classList.add('animate-twinkle');
                        }
                    }

                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;

                    // Randomize animation delay/duration so they don't twinkle in sync
                    star.style.animationDelay = `${Math.random() * 5}s`;
                    star.style.animationDuration = `${2 + Math.random() * 4}s`;

                    // Add subtle glow to closest layer stars
                    if (i === 2) {
                        star.style.boxShadow = `0 0 4px rgba(255, 255, 255, 0.8)`;
                    }

                    layerGroup.appendChild(star);
                }

                // Animate to simulate depth movement or slow flow
                gsap.to(`.layer-global-${i}`, {
                    y: (i + 1) * 200, // Reduced vertical movement to keep stars in view longer
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-1] bg-[#000510] pointer-events-none"
        />
    );
}
