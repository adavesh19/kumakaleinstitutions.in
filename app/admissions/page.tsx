'use client';

import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/admissions/process-timeline";
import { EligibilityAccordion } from "@/components/admissions/eligibility-accordion";
import { FaqSection } from "@/components/admissions/faq-section";
import { ArrowRight, Calendar, Laptop, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function AdmissionsPage() {
    const t = useTranslations('AdmissionsPage');

    return (
        <div className="relative overflow-hidden pt-24 pb-20">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-900/20 to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Floating CTA for Mobile */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="fixed bottom-6 right-6 z-50 md:hidden"
                >
                    <Button className="rounded-full h-12 px-6 shadow-[0_0_20px_rgba(16,185,129,0.5)] bg-emerald-600 text-white font-bold animate-pulse">
                        Get Admission 2026-27
                    </Button>
                </motion.div>

                {/* Hero Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-block glass-card rounded-full px-6 py-2 text-sm font-bold text-emerald-300 mb-6 border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        {t('tag')}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
                        {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{t('titleHighlight')}</span> {t('titleSuffix')}
                    </h1>
                    <p className="text-emerald-100/80 text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        {t('description')}
                    </p>

                    {/* Primary CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            className="rounded-full w-full sm:w-auto text-lg h-16 px-12 bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 font-bold"
                        >
                            {t('applyButton')} <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full w-full sm:w-auto text-lg h-16 px-12 glass-card hover:bg-white/10 text-white border-white/20 hover:border-white/40 transition-all hover:scale-105 font-bold backdrop-blur-md"
                        >
                            <Calendar className="mr-2 w-5 h-5" />
                            {t('visitButton')}
                        </Button>
                    </div>
                </div>

                {/* Smart Admission Portal Mockup */}
                <section className="mb-24">
                    <div className="relative max-w-6xl mx-auto group">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] -z-10 group-hover:bg-emerald-500/20 transition-all duration-700" />
                        <div className="glass-card rounded-[2rem] border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                            {/* Mockup Header */}
                            <div className="bg-black/60 p-4 border-b border-white/10 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="bg-black/40 rounded-full px-4 py-1.5 text-xs text-gray-400 flex items-center gap-2 border border-white/5 font-mono">
                                    <Laptop className="w-3 h-3" /> https://portal.kumakale.edu.in
                                </div>
                            </div>
                            {/* Mockup Content */}
                            <div className="p-8 md:p-16 relative">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                    <div className="space-y-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                                            <Sparkles className="w-3 h-3" /> {t('portalTag')}
                                        </div>
                                        <h3 className="text-4xl font-bold text-white leading-tight">{t('portalTitle')}</h3>
                                        <p className="text-gray-300 text-lg font-light leading-relaxed">
                                            {t('portalDesc')}
                                        </p>
                                        <ul className="space-y-4">
                                            {[t('portalFeature1'), t('portalFeature2'), t('portalFeature3')].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-base text-gray-300">
                                                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant="outline" className="rounded-full border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 hover:text-white px-8 h-12">
                                            {t('viewDemo')}
                                        </Button>
                                    </div>
                                    <div className="glass-card bg-emerald-900/10 p-8 rounded-3xl border-white/5 relative overflow-hidden group/card shadow-inner">
                                        {/* Abstract Dashboard UI */}
                                        <div className="space-y-6 opacity-80 group-hover/card:opacity-100 transition-opacity">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
                                                <div className="space-y-2">
                                                    <div className="h-4 w-32 bg-white/10 rounded-full" />
                                                    <div className="h-3 w-20 bg-white/5 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
                                                <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
                                            </div>
                                            <div className="h-32 bg-white/5 rounded-2xl border border-white/5" />
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ProcessTimeline />
                <EligibilityAccordion />
                <FaqSection />
            </div>
        </div>
    );
}
