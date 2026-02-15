'use client';

import { HistoryTimeline } from "@/components/about/history-timeline";
import { InteractiveTimeline } from "@/components/about/interactive-timeline";
import { Leadership } from "@/components/about/leadership";
import { Awards } from "@/components/about/awards";
import { Target, Eye } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <div className="relative overflow-hidden pt-24 pb-20">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center relative z-10">
                <div className="inline-block glass-card rounded-full px-6 py-2 text-sm font-bold text-blue-300 mb-6 border-blue-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {t('since')}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
                    {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('kumakale')}</span>
                </h1>
                <p className="text-blue-100/80 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                    {t('description')}
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="glass-card rounded-[2.5rem] p-10 border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 group">
                            <div className="p-4 bg-blue-500/20 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">{t('missionTitle')}</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {t('missionDesc')}
                            </p>
                        </div>
                        <div className="glass-card rounded-[2.5rem] p-10 border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 group">
                            <div className="p-4 bg-purple-500/20 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-8 h-8 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-white">{t('visionTitle')}</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {t('visionDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Timeline */}
            <div className="relative z-10">
                <InteractiveTimeline />
            </div>

            {/* Leadership Team */}
            <div className="relative z-10">
                <Leadership />
            </div>

            {/* Awards */}
            <div className="relative z-10">
                <Awards />
            </div>
        </div>
    );
}
