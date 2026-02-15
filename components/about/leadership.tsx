'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Quote } from 'lucide-react';

const leaders = [
    {
        key: 'leader1', // Dr. Sanjay Gharage
        roleKey: 'leader1Title',
        bioKey: 'leader1Bio',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' // Placeholder, replace with actual
    },
    {
        key: 'leader2', // Mr. Pralhad Kumakale
        roleKey: 'leader2Title',
        bioKey: 'leader2Bio',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' // Placeholder
    },
    {
        key: 'leader3', // Shri B. H. Ingale
        roleKey: 'leader3Title',
        bioKey: 'leader3Bio',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' // Placeholder
    }
];

export function Leadership() {
    const t = useTranslations('AboutPage');

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                    >
                        {t('leadershipTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('leadershipHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100/70 max-w-2xl mx-auto text-lg font-light"
                    >
                        {t('leadershipSubtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="h-full"
                        >
                            <GlassCard className="h-full p-0 overflow-hidden group border-white/10 bg-white/5 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-[2rem]">
                                <div className="relative h-80 w-full overflow-hidden">
                                    <Image
                                        src={leader.image}
                                        alt={t(leader.roleKey)}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-blue-600/20 backdrop-blur-md px-3 py-1 rounded-lg w-fit mb-2 border border-blue-500/30">
                                            <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">{t(leader.roleKey)}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{t(leader.roleKey)}</h3> {/* Name usually goes here, reusing role/bio keys for structure based on template */}
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 rotate-180" />
                                    <p className="text-gray-300 italic relative z-10 leading-relaxed font-light">
                                        "{t(leader.bioKey)}"
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
