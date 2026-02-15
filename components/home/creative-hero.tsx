'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function FloatingElement({ children, depth = 1, className = "" }: { children: React.ReactNode, depth?: number, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const xVal = (clientX - width / 2) / width * 20 * depth;
        const yVal = (clientY - height / 2) / height * 20 * depth;
        x.set(xVal);
        y.set(yVal);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove as any);
        return () => window.removeEventListener('mousemove', handleMouseMove as any);
    }, []);

    return (
        <motion.div style={{ x: springX, y: springY }} className={className}>
            {children}
        </motion.div>
    );
}

export function CreativeHero() {
    const t = useTranslations('HomePage');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
            {/* Aurora Effect */}
            <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
            <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[8000ms] delay-1000" />

            <div className="container relative z-10 px-4 pt-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        style={{ opacity }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-sm font-medium"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>{t('admissionsOpen')}</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block"
                            >
                                {t('futureReady')}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-cyan-400"
                            >
                                {t('education')}
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl text-gray-400 max-w-xl leading-relaxed"
                        >
                            Explore a world where academic excellence meets innovation.
                            Join 1650+ students shaping their future at Kumakale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)] border border-white/10">
                                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Link href="/media">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="glass-card hover:bg-white/20 text-white border-white/30 backdrop-blur-md hover:scale-105 transition-transform rounded-full px-8"
                                >
                                    <Play className="mr-2 w-5 h-5 fill-current" /> Watch Campus Tour
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* 3D Visuals */}
                    <div className="relative h-[600px] hidden lg:block perspective-1000">
                        {/* Floating Cards simulating 3D Space */}
                        <FloatingElement depth={1} className="absolute inset-0">
                            <motion.div style={{ y: y1 }} className="absolute top-[10%] right-[10%] w-[350px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 rotate-[-6deg] z-20">
                                <Image
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Students"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold text-xl">100% Results</p>
                                </div>
                            </motion.div>
                        </FloatingElement>

                        <FloatingElement depth={2} className="absolute inset-0">
                            <motion.div style={{ y: y2 }} className="absolute top-[30%] left-[10%] w-[300px] aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl p-6 rotate-[12deg] z-10 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <Sparkles className="text-white w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-2xl">Innovation Hub</h3>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[80%] bg-primary rounded-full" />
                                </div>
                            </motion.div>
                        </FloatingElement>

                        {/* Floating Particles/Elements */}
                        <FloatingElement depth={0.5} className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-[15%] left-[20%] text-6xl opacity-20 animate-bounce">✨</div>
                        </FloatingElement>
                        <FloatingElement depth={1.5} className="absolute inset-0 pointer-events-none">
                            <div className="absolute bottom-[20%] right-[20%] text-6xl opacity-20 animate-pulse">🎓</div>
                        </FloatingElement>
                    </div>
                </div>
            </div>
        </section>
    );
}
