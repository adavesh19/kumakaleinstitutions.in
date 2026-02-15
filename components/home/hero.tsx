'use client'

import { Button } from '@/components/ui/button'
import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowRight, Trophy, Users, Play, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

function Counter({ value, suffix = '' }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true })
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
    const displayValue = useTransform(spring, (current) => Math.round(current))

    useEffect(() => {
        if (inView) {
            spring.set(value)
        }
    }, [inView, value, spring])

    const [currentDisplay, setCurrentDisplay] = useState(0)

    useEffect(() => {
        return displayValue.on("change", (latest) => {
            setCurrentDisplay(latest)
        })
    }, [displayValue])

    return <span ref={ref}>{currentDisplay}{suffix}</span>
}

export function Hero() {
    const t = useTranslations('HomePage')
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [0, 1000], [0, -5])
    const rotateY = useTransform(x, [0, 1000], [0, 5])

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        x.set(event.clientX)
        y.set(event.clientY)
    }

    return (
        <section
            className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0 perspective-1000 bg-background"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-amber-50/30" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -5, 5, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]"
                />
                <div className="absolute inset-0 bg-kasuti-pattern opacity-[0.06] mix-blend-multiply" />
            </div>

            <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center gap-16 pt-12">

                {/* Text Content - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-8 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-primary/20 rounded-full px-5 py-2 text-sm font-bold text-primary mb-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all mx-auto cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        {t('admissionsOpen')}
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight leading-[1.1] text-foreground drop-shadow-sm">
                        {t('futureReady')}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-primary animate-gradient bg-300%">{t('education')}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t.rich('heroTagline', {
                            excellence: (chunks) => <span className="font-bold text-primary underline decoration-2 decoration-accent/50 underline-offset-4">{chunks}</span>,
                            innovation: (chunks) => <span className="font-bold text-primary underline decoration-2 decoration-accent/50 underline-offset-4">{chunks}</span>,
                            character: (chunks) => <span className="font-bold text-primary underline decoration-2 decoration-accent/50 underline-offset-4">{chunks}</span>
                        })}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
                            <Button size="lg" className="relative rounded-full w-full sm:w-auto text-lg h-14 px-10 bg-gradient-to-r from-primary to-indigo-700 text-white hover:brightness-110 shadow-2xl transition-all border-0">
                                {t('applyNow')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto text-lg h-14 px-10 border-2 border-primary/10 bg-white/60 backdrop-blur-md hover:bg-white hover:border-primary/50 text-foreground group shadow-lg">
                            <Play className="mr-2 w-5 h-5 fill-current text-primary group-hover:scale-110 transition-transform" /> {t('watchTour')}
                        </Button>
                    </div>
                </motion.div>

                {/* 3D Visual Content / Drone Placeholder - Centered Cinema Display */}
                <motion.div
                    style={{ rotateX, rotateY }}
                    className="relative w-full max-w-5xl aspect-video perspective-1000 -mb-20"
                >
                    {/* Main Drone Footage Layer */}
                    <motion.div
                        className="relative w-full h-full rounded-t-[2rem] md:rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl z-10 group bg-black ring-1 ring-black/5"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Placeholder for Drone Footage */}
                        <Image
                            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
                            alt="Kumakale Campus Drone View"
                            fill
                            className="object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Overlay Content */}
                        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    {t('liveDrone')}
                                </div>
                                <p className="text-white/90 text-sm font-medium leading-relaxed max-w-sm hidden md:block">{t('droneDesc')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Floating Stats - Repositioned */}
                    <motion.div
                        className="absolute -left-4 md:-left-12 bottom-12 z-20 hidden lg:block"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                    >
                        <div className="bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center gap-4 border border-white/40 shadow-xl hover:scale-105 transition-transform">
                            <div className="p-3 bg-primary/10 rounded-xl relative overflow-hidden">
                                <Trophy className="w-6 h-6 text-primary relative z-10" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold font-mono text-foreground"><Counter value={100} suffix="%" /></div>
                                <div className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">{t('academicExcellence')}</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute -right-4 md:-right-12 top-12 z-20 hidden lg:block"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        <div className="bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center gap-4 border border-white/40 shadow-xl hover:scale-105 transition-transform">
                            <div className="text-right">
                                <div className="text-2xl font-bold font-mono text-foreground"><Counter value={800} suffix="+" /></div>
                                <div className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">{t('happyStudents')}</div>
                            </div>
                            <div className="p-3 bg-accent/10 rounded-xl relative overflow-hidden">
                                <Users className="w-6 h-6 text-accent relative z-10" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mobile Stats Grid - Below the visual */}
                <div className="grid grid-cols-2 gap-4 w-full lg:hidden relative z-20 -mt-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg mx-4">
                    <div className="text-center">
                        <div className="font-bold text-2xl text-primary"><Counter value={800} suffix="+" /></div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{t('students')}</div>
                    </div>
                    <div className="text-center border-l border-border">
                        <div className="font-bold text-2xl text-accent"><Counter value={100} suffix="%" /></div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{t('excellence')}</div>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator - Adjusted Position */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground/50 hidden md:flex flex-col items-center gap-2 z-30"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-4 h-4" />
            </motion.div>
        </section>
    )
}
