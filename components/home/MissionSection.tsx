'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const missions = [
    { title: "Product Planning", subtitle: "프로덕트 기획", desc: "문제 정의부터 솔루션 도출까지, 시장이 원하는 프로덕트를 기획합니다.", image: "/images/missions/planning.png" },
    { title: "UI/UX Design", subtitle: "디자인", desc: "사용자 경험을 설계하고 심미적인 인터페이스를 구현합니다.", image: "/images/missions/design.png" },
    { title: "Frontend", subtitle: "프론트엔드", desc: "사용자와 직접 상호작용하는 웹/앱 인터페이스를 개발합니다.", image: "/images/missions/frontend.png" },
    { title: "Backend", subtitle: "백엔드", desc: "안정적인 데이터 처리와 서버 인프라를 구축합니다.", image: "/images/missions/backend.png" },
    { title: "Market Launch", subtitle: "시장출시", desc: "실제 시장에 제품을 출시하고 사용자 피드백을 분석합니다.", image: "/images/missions/launch.png" },
    { title: "Cooperation", subtitle: "산학협력", desc: "기업과의 협업을 통해 실무 경험을 쌓고 가치를 창출합니다.", image: "/images/missions/coop.png" },
];

export default function MissionSection() {
    return (
        <section className="w-full py-20 px-4 flex flex-col items-center bg-transparent text-white">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter"
            >
                MISSION
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-4">
                {missions.map((mission, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        className="group relative flex flex-col"
                    >
                        {/* Image Card */}
                        <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300 relative mb-6">
                            <Image
                                src={mission.image}
                                alt={mission.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6">
                                <div className="text-6xl font-black text-white/10">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                                <div className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors uppercase tracking-widest text-center translate-y-4 group-hover:translate-y-0 duration-300 h-full flex flex-col justify-end pb-8">
                                    {mission.title}
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-2 px-2">
                            <h3 className="text-2xl font-bold text-blue-100">{mission.subtitle}</h3>
                            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                                {mission.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="mt-24"
            >
                <a
                    href="#"
                    className="px-8 py-4 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white transition-all duration-300 backdrop-blur-sm font-bold tracking-wide"
                >
                    커리큘럼 상세보기
                </a>
            </motion.div>
        </section>
    );
}
