'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = ["SERVICE", "PRODUCT", "SOLUTIONS", "VALUE"];

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rocketRef = useRef<HTMLDivElement>(null);

    const [textStep, setTextStep] = useState<'create' | 'sequence' | 'final'>('create');
    const [wordIndex, setWordIndex] = useState(0);

    // Text Sequence Logic
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (textStep === 'create') {
            timeout = setTimeout(() => {
                setTextStep('sequence');
            }, 1000);
        } else if (textStep === 'sequence') {
            const interval = setInterval(() => {
                setWordIndex(prev => {
                    if (prev < words.length - 1) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        timeout = setTimeout(() => setTextStep('final'), 800);
                        return prev;
                    }
                });
            }, 800);
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        } else if (textStep === 'final') {
            timeout = setTimeout(() => {
                setWordIndex(0); // Reset words
                setTextStep('create');
            }, 6000); // Hold final state for 6 seconds
        }

        return () => clearTimeout(timeout);
    }, [textStep]);

    return (
        <section ref={containerRef} className="relative w-full h-[150vh] bg-transparent overflow-hidden text-white">
            {/* Main Content Fixed Area */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10 px-4">

                {/* Rocket Removed */}

                {/* Text Area */}
                <div className="relative z-20 font-bold text-5xl md:text-7xl lg:text-9xl flex items-center tracking-tighter mix-blend-difference">
                    {textStep === 'final' ? (
                        <div className="relative flex items-center justify-center">
                            {/* Typewriter Effect */}
                            <motion.div
                                className="relative z-10 flex items-center text-transparent bg-clip-text bg-gradient-to-tr from-white to-blue-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                            >
                                {["C", "R", "E", "A", "I", "+", "I", "T"].map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, display: "none" }}
                                        animate={{ opacity: 1, display: "inline-block" }}
                                        transition={{
                                            duration: 0.05,
                                            delay: index * 0.15, // Typewriter speed
                                        }}
                                        className={`${char === '+' ? 'text-blue-500 mx-2' : 'text-white'}`}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {/* Blinking Cursor */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="ml-2 w-2 h-[0.8em] bg-blue-500 inline-block align-middle"
                                />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4 md:gap-8">
                            <motion.span layoutId='create-text'>CREATE</motion.span>

                            {textStep === 'sequence' && (
                                <div className="h-[1.2em] overflow-hidden flex flex-col justify-center text-blue-400">
                                    <AnimatePresence mode="popLayout">
                                        <motion.span
                                            key={words[wordIndex]}
                                            initial={{ y: "100%", opacity: 0 }}
                                            animate={{ y: "0%", opacity: 1 }}
                                            exit={{ y: "-100%", opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "backOut" }}
                                            className="block"
                                        >
                                            {words[wordIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>

            {/* Scroll indicator or gradient at bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce">
                SCROLL TO EXPLORE
            </div>
        </section>
    );
}
