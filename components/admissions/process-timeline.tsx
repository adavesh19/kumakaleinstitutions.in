'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Search, FileText, UserCheck, BookOpen } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ProcessTimeline() {
    const t = useTranslations('AdmissionsPage');

    const steps = [
        { title: t('step1Title'), description: t('step1Desc'), icon: Search, color: "text-emerald-400" },
        { title: t('step2Title'), description: t('step2Desc'), icon: FileText, color: "text-teal-400" },
        { title: t('step3Title'), description: t('step3Desc'), icon: UserCheck, color: "text-cyan-400" },
        { title: t('step4Title'), description: t('step4Desc'), icon: BookOpen, color: "text-green-400" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Ambient background for timeline */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-emerald-900/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        {t('processTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{t('processHighlight')}</span> {t('processSuffix')}
                    </h2>
                    <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-light">
                        {t('processSubtitle')}
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-green-500/30 rounded-full z-0">
                        <div className="absolute inset-0 bg-emerald-400/20 blur-sm" />
                    </div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative z-10 group"
                        >
                            <div className="glass-card rounded-[2rem] p-8 text-center bg-black/40 border-white/10 hover:bg-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] h-full flex flex-col items-center">
                                <div className="relative mb-8">
                                    <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 ${step.color} group-hover:bg-emerald-500/20 transition-colors duration-500`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-black/80 border-2 border-emerald-500/50 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-8 relative">
                    <div className="absolute top-0 bottom-0 left-8 w-1 bg-white/10 rounded-full" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-6 relative"
                        >
                            <div className="flex flex-col items-center relative z-10">
                                <div className={`p-4 rounded-xl bg-black/60 border border-white/10 ${step.color} shadow-lg`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="glass-card p-6 rounded-2xl flex-1 border-white/10 bg-white/5">
                                <div className="text-xs font-bold text-emerald-400 mb-1 uppercase tracking-wider">Step {i + 1}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-400 font-light">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
