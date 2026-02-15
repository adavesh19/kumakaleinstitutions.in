'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, BookOpen, GraduationCap, School } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const streams = [
    {
        id: 'school',
        key: 'schoolTitle',
        icon: School,
        image: 'https://images.unsplash.com/photo-1577896332679-56d643feeeb3?q=80&w=1000&auto=format&fit=crop', // Classroom
        features: ['schoolFeature1', 'schoolFeature2', 'schoolFeature3', 'schoolFeature4']
    },
    {
        id: 'puc',
        key: 'pucTitle',
        icon: BookOpen,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop', // Students discussing
        features: ['science1', 'commerce1', 'science3', 'commerce4'] // Using mix of features for preview
    },
    {
        id: 'degree',
        key: 'degreeTitle',
        icon: GraduationCap,
        image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop', // Campus
        features: ['ba3', 'bcom3', 'bsc3', 'bsc4']
    }
];

export function Academics() {
    const t = useTranslations('AcademicsPage');
    const tHome = useTranslations('HomePage'); // Fallback for some keys if needed
    const [activeTab, setActiveTab] = useState('puc'); // Default to PU College

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-indigo-300 uppercase tracking-wider backdrop-blur-md"
                    >
                        {t('tag')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-xl"
                    >
                        {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{t('titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed font-light"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Tabs Navigation */}
                    <div className="lg:col-span-4 space-y-4">
                        {streams.map((stream, index) => (
                            <motion.button
                                key={stream.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveTab(stream.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-center gap-4 group backdrop-blur-sm ${activeTab === stream.id
                                    ? 'bg-white/10 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                <div className={`p-3 rounded-xl transition-colors ${activeTab === stream.id ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 group-hover:text-white'
                                    }`}>
                                    <stream.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg ${activeTab === stream.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                        {t(stream.key).split('(')[0]} {/* Truncate for cleaner tab */}
                                    </h3>
                                    <p className="text-xs text-gray-500 group-hover:text-gray-400 uppercase tracking-wider mt-1">
                                        {stream.id === 'school' ? 'Grades 1-10' : stream.id === 'puc' ? 'Science & Commerce' : 'Undergraduate'}
                                    </p>
                                </div>
                                {activeTab === stream.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="ml-auto"
                                    >
                                        <ArrowRight className="w-5 h-5 text-indigo-400" />
                                    </motion.div>
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <GlassCard className="h-full p-8 md:p-10 border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden relative group">
                                    {/* Decorative Gradient Blob */}
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center h-full">
                                        <div className="order-2 md:order-1 space-y-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                                                <CheckCircle2 className="w-3 h-3" />
                                                {activeTab === 'school' ? 'Foundation' : activeTab === 'puc' ? 'Pre-University' : 'Degree'}
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                                {t(streams.find(s => s.id === activeTab)?.key || 'schoolTitle')}
                                            </h3>

                                            <ul className="space-y-4">
                                                {streams.find(s => s.id === activeTab)?.features.map((feature, i) => (
                                                    <motion.li
                                                        key={feature}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                                        className="flex items-start gap-3 text-gray-300"
                                                    >
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
                                                        <span className="leading-relaxed">{t(feature)}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <div className="pt-4">
                                                <Button className="rounded-full px-8 bg-white text-black hover:bg-gray-200 font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                                    {t('learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="order-1 md:order-2 relative h-[300px] md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                            <Image
                                                src={streams.find(s => s.id === activeTab)?.image || ''}
                                                alt={activeTab}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
