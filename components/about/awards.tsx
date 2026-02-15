'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Star, Medal } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Awards() {
    const t = useTranslations('AboutPage');

    const awards = [
        {
            icon: Trophy,
            title: t('award1Title'),
            year: "2023-2025",
            description: t('award1Desc'),
        },
        {
            icon: Award,
            title: t('award2Title'),
            year: "2020-2025",
            description: t('award2Desc'),
        },
        {
            icon: Star,
            title: t('award3Title'),
            year: "2024",
            description: t('award3Desc'),
        },
        {
            icon: Medal,
            title: t('award4Title'),
            year: "2024",
            description: t('award4Desc'),
        },
    ]

    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        {t('awardsTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">{t('awardsHighlight')}</span>
                    </h2>
                    <p className="text-blue-100/70 text-lg max-w-2xl mx-auto font-light">
                        {t('awardsSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card rounded-[2rem] p-8 text-center border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300"
                        >
                            <div className="p-5 bg-gradient-to-br from-amber-500/20 to-yellow-500/10 rounded-2xl w-fit mx-auto mb-6 shadow-inner ring-1 ring-amber-500/20">
                                <award.icon className="w-10 h-10 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
                            </div>
                            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-200 text-xs font-bold mb-4 tracking-wider">
                                {award.year}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{award.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-light opacity-80">{award.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
