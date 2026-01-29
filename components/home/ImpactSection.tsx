'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const impacts = [
    { label: "운영 기간", value: "3", suffix: "년", delay: 0 },
    { label: "운영 기수", value: "4", suffix: "기", delay: 0.1 },
    { label: "누적 활동", value: "65", suffix: "명", delay: 0.2 },
    { label: "런칭 서비스", value: "6", suffix: "개", delay: 0.3 },
    { label: "지원금 확보", value: "1,000", suffix: "만원+", delay: 0.4 },
    { label: "연사 초청", value: "20", suffix: "+", delay: 0.5 },
];

const Counter = ({ value, suffix }: { value: string, suffix: string }) => {
    // A simple counter logic could be added here if needed, 
    // but for now we'll stick to static text with entrance animation
    // to match the request "Impact styled like our website".
    // If complex counting is needed (e.g. for "1,000"), standard frame-motion text staggering is easier.
    return (
        <span className="flex items-baseline">
            {value}
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold ml-1 text-white/60">{suffix}</span>
        </span>
    );
};

export default function ImpactSection() {
    return (
        <section className="w-full py-32 px-4 flex flex-col items-center bg-transparent text-white relative">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter"
            >
                IMPACT
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {impacts.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-500" />

                        <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                            <h3 className="text-lg text-blue-300 font-medium tracking-wide uppercase opacity-80">
                                {item.label}
                            </h3>
                            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200">
                                <Counter value={item.value} suffix={item.suffix} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
