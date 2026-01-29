'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
    return (
        <section className="w-full py-32 px-4 flex flex-col items-center justify-center bg-transparent text-white min-h-[80vh]">
            <div className="max-w-4xl w-full flex flex-col gap-32 text-center">

                {/* First Sentence */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-tight whitespace-pre-wrap">
                        {`CREAI+IT은 인공지능과 IT 기술을 통해, \n아이디어를 실질적인 서비스와 프로덕트로\n구현하는 창업 플랫폼입니다.`}
                    </h2>
                </motion.div>

                {/* Second Sentence */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed tracking-tight text-blue-100 whitespace-pre-wrap opacity-80">
                        {`기술의 경계를 허물고 세상에 없던 가치를 \n함께 증명해 나갈 연세대학교 혁신가들을 기다립니다.`}
                    </h2>
                </motion.div>

            </div>
        </section>
    );
}
