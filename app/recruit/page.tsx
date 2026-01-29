'use client';

import CountdownTimer from "@/components/ui/CountdownTimer";
import { motion } from "framer-motion";

export default function RecruitPage() {
    const schedule = [
        { date: "2월 14일(토) ~ 3월 4일(수)", event: "지원 접수", description: "Application Period" },
        { date: "3월 5일(목) ~ 3월 8일(일)", event: "면접", description: "Interview" },
        { date: "3월 6일(월)", event: "OT", description: "Team Building" },
    ];

    return (
        <div className="w-full">
            {/* Intro Section - Full Screen */}
            <section className="w-full h-screen px-4 flex flex-col items-center justify-center bg-transparent text-white relative">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">RECRUIT</h1>
                <p className="text-xl md:text-2xl opacity-70 mb-12">Join the Crew. Launching Soon.</p>

                <div className="mb-8">
                    <CountdownTimer targetDate="2026-02-14T00:00:00" />
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-sm uppercase tracking-widest">Scroll for Schedule</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            {/* Schedule Section - Full Screen (or at least min-h-screen) */}
            <section className="w-full min-h-screen flex items-center justify-center px-4 py-20 bg-black/20 backdrop-blur-sm">
                <div className="max-w-4xl w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter"
                    >
                        TIMELINE
                    </motion.h2>

                    <div className="space-y-12">
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row items-start md:items-center border-l-4 border-blue-500 pl-6 py-2 group"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-white md:w-[450px] flex-shrink-0">
                                    {item.date}
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white mt-2 md:mt-0">
                                    {item.event}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
