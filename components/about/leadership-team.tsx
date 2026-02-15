'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function LeadershipTeam() {
    const t = useTranslations('AboutPage');

    const leaders = [
        {
            name: "Dr. Rajesh Kumar",
            title: t('leader1Title'),
            bio: t('leader1Bio'),
            image: "https://i.pravatar.cc/300?img=12",
        },
        {
            name: "Prof. Anita Desai",
            title: t('leader2Title'),
            bio: t('leader2Bio'),
            image: "https://i.pravatar.cc/300?img=47",
        },
        {
            name: "Mr. Suresh Patil",
            title: t('leader3Title'),
            bio: t('leader3Bio'),
            image: "https://i.pravatar.cc/300?img=33",
        },
        {
            name: "Dr. Meena Kulkarni",
            title: t('leader4Title'),
            bio: t('leader4Bio'),
            image: "https://i.pravatar.cc/300?img=32",
        },
    ]

    return (
        <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                        {t('leadershipTitle')} <span className="text-primary">{t('leadershipHighlight')}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t('leadershipSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-card rounded-2xl p-6 text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    fill
                                    className="rounded-full object-cover border-4 border-primary/20"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                            <p className="text-primary text-sm font-medium mb-3">{leader.title}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
