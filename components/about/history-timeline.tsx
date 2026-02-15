'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const milestones = [
    { year: 2019, key: 'milestone1', title: 'Foundation', desc: 'Established to provide quality education in Mudhol.' },
    { year: 2021, key: 'milestone2', title: 'Degree College', desc: 'Expanded to include B.A. and B.Com programs.' },
    { year: 2024, key: 'milestone3', title: 'Digital Era', desc: 'Implemented Smart Classrooms and Computer Labs.' },
    { year: 2026, key: 'milestone4', title: 'Future Ready', desc: '1650+ Students and growing strong.' },
];

export function HistoryTimeline() {
    const t = useTranslations('AboutPage');

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                        {t('historyTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('historyHighlight', { fallback: '' })}</span>
                    </h2>
                    <p className="text-blue-100/70 max-w-xl mx-auto text-lg font-light">{t('historySubtitle')}</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Neon Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_15px_#3b82f6]" />

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex items-center justify-between flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`w-full md:w-[45%] mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                                    <span className="text-6xl md:text-8xl font-black text-white/5 absolute -z-10 select-none transform -translate-y-1/2 translate-x-10 scale-150">
                                        {milestone.year}
                                    </span>
                                    <span className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] relative z-10 block mb-2">{milestone.year}</span>
                                </div>

                                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-black z-10 shadow-[0_0_15px_#3b82f6] relative">
                                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                                </div>

                                <div className="w-full md:w-[45%]">
                                    <div className={`glass-card p-8 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                                        <h3 className="font-bold text-2xl mb-2 text-white">{milestone.title}</h3>
                                        <p className="text-gray-300 leading-relaxed font-light">{milestone.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
