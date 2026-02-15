'use client'

import { motion } from 'framer-motion'
import { GraduationCap, LandPlot, MonitorSmartphone, Trophy, LucideIcon, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { GlassCard } from '@/components/ui/glass-card'

interface Feature {
    titleKey: string;
    descKey: string;
    icon: LucideIcon;
    className: string;
    iconColor: string;
}

const features: Feature[] = [
    {
        titleKey: "feature1Title",
        descKey: "feature1Desc",
        icon: GraduationCap,
        className: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20",
        iconColor: "text-blue-400",
    },
    {
        titleKey: "feature2Title",
        descKey: "feature2Desc",
        icon: MonitorSmartphone,
        className: "bg-gradient-to-br from-cyan-500/10 to-teal-500/10 hover:from-cyan-500/20 hover:to-teal-500/20",
        iconColor: "text-cyan-400",
    },
    {
        titleKey: "feature3Title",
        descKey: "feature3Desc",
        icon: Trophy,
        className: "bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20",
        iconColor: "text-amber-400",
    },
    {
        titleKey: "feature4Title",
        descKey: "feature4Desc",
        icon: LandPlot,
        className: "bg-gradient-to-br from-emerald-500/10 to-green-500/10 hover:from-emerald-500/20 hover:to-green-500/20",
        iconColor: "text-emerald-400",
    },
]

export function WhyKumakale() {
    const t = useTranslations('HomePage')

    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto relative">
                    {/* Glowing background orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-cyan-500/20 rounded-full blur-[100px] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(34, 211, 238, 0.3)',
                                '0 0 40px rgba(34, 211, 238, 0.5)',
                                '0 0 20px rgba(34, 211, 238, 0.3)',
                            ]
                        }}
                        transition={{ boxShadow: { duration: 2, repeat: Infinity }, scale: { duration: 0.3 } }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/40 text-base font-bold text-white backdrop-blur-xl"
                    >
                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                        <span>✨ {t('whyChooseUs')} ✨</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                    >
                        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            Why{' '}
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
                            Kumakale?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100 leading-relaxed font-medium drop-shadow-lg"
                    >
                        {t('whyChooseUsDesc')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="h-full w-full max-w-sm"
                        >
                            <GlassCard className={`h-full p-8 flex flex-col items-center text-center gap-6 ${feature.className} border border-white/20 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 group`}>
                                <div className={`p-5 rounded-2xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-inner ${feature.iconColor}`}>
                                    <feature.icon className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white tracking-wide">{t(feature.titleKey)}</h3>
                                    <p className="text-gray-300 leading-relaxed text-base font-light">
                                        {t(feature.descKey)}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
