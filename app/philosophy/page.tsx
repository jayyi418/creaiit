'use client';

import { motion } from 'framer-motion';

const philosophies = [
    {
        title: "New Era",
        content: "GPT-4 출시 이후 세상은 이전과 다른 방향으로 빠르게 변하고 있습니다. 과거의 방식이 더 이상 통하지 않거나 분야 간의 경계가 사라지기도 합니다."
    },
    {
        title: "Opportunity",
        content: "인공지능을 도구로 사용하는 것에 만족할 수도 있지만 저희는 지금의 변화를 큰 <span class='text-cyan-400 font-bold'>기회</span>로 판단했습니다. 기회를 진지하게 마주하고 <span class='text-cyan-400 font-bold'>실질적인 행동</span>으로 옮기는 단체는 많지 않았습니다."
    },
    {
        title: "Beginnings",
        content: "그렇게 CREAI+IT이 시작되었습니다. 우리는 세상의 변화를 읽고 최신 기술을 활용해 <span class='text-cyan-400 font-bold'>실질적인 가치</span>를 만드는 인재를 육성합니다."
    },
    {
        title: "Our Mission",
        content: "기술을 이해하는 것을 바탕으로 직접 <span class='text-cyan-400 font-bold'>결과물</span>을 만들어내는 것. 이것이 CREAI+IT이 처음부터 지금까지 지켜온 <span class='text-cyan-400 font-bold'>미션</span>입니다."
    },
    {
        title: "Our Mission",
        content: "기술적인 역량이나 경험보다 중요한 것은 문제를 해결하려는 <span class='text-cyan-400 font-bold'>의지</span>입니다. 변화를 실질적인 행동으로 옮길 준비가 된 여러분을 기다립니다."
    }
];

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center py-32 px-6">
            <div className="max-w-3xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-20 tracking-tight text-white"
                >
                    Philosophy
                </motion.h1>

                <div className="space-y-16">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-12 group"
                        >
                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <p
                                    className="text-lg md:text-xl text-gray-200 leading-relaxed font-normal tracking-wide break-keep"
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
