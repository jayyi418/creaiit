'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
    {
        title: "RootEdu",
        desc: "교육 AI 플랫폼",
        tags: ["#AI", "#Education"],
        image: "/images/projects/rootedu.png",
        color: "from-purple-500 to-indigo-600"
    },
    {
        title: "Resio",
        desc: "재활용 플라스틱 사업",
        tags: ["#Eco", "#Business"],
        image: "/images/projects/resio.png",
        color: "from-green-500 to-teal-600"
    },
    {
        title: "AINOS",
        desc: "차세대 AI 솔루션",
        tags: ["#AI", "#Solution"],
        image: "/images/projects/ainos.png",
        color: "from-cyan-500 to-blue-600"
    },
    {
        title: "Potentivo Lab",
        desc: "데이터기반 유아분석 플랫폼",
        tags: ["#Data", "#Analytics"],
        image: "/images/projects/potentivo.png",
        color: "from-pink-400 to-rose-500"
    },
];

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="w-full pb-32 bg-transparent text-white overflow-hidden -mt-10">
            <div className="max-w-7xl mx-auto px-8 relative">

                {/* Carousel Container */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: `-${currentIndex * 340}px` }} // Basic fixed width slide for smooth logic. Adjust if card width changes.
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={`min-w-[320px] md:min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden bg-gray-900 group border border-white/10 transition-opacity duration-300 ${index < currentIndex ? 'opacity-50' : 'opacity-100'}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>

                                {/* Gradient Overlay at bottom */}
                                <div className={`absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t ${project.color} opacity-80 mix-blend-multiply`} />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                                    <div className="flex gap-2 mb-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
                                    <p className="text-xl text-white/80 font-medium">{project.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-4 rounded-full bg-black/50 backdrop-blur border border-white/10 hover:bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= projects.length - 1} // Limit to not scroll past last one
                    className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-4 rounded-full bg-black/50 backdrop-blur border border-white/10 hover:bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

            </div>
        </section>
    );
}
