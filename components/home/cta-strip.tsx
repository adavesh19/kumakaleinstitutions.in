'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function CtaStrip() {
    const t = useTranslations('HomePage')

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="relative rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20 shadow-2xl">
                    {/* 3D Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                            animate={{
                                backgroundPosition: ["0px 0px", "60px 60px"]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: "linear"
                            }}
                        />
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/30" />
                    </div>

                    <div className="relative z-10 text-center md:text-left max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                            {t('ctaTitle')}
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl font-light leading-relaxed">
                            {t('ctaDesc')}
                        </p>
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-white text-indigo-700 hover:bg-gray-100 font-bold shadow-[0_0_30px_rgba(255,255,255,0.4)] border-4 border-white/20">
                                {t('applyOnline')} <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
