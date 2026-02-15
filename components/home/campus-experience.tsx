'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { Trophy, Music, Cpu, Heart, ArrowUpRight } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop',
        tag: 'Wellness',
        title: 'International Yoga Day',
        desc: 'Mindfulness & Harmony',
        icon: Heart,
        color: 'from-rose-500 to-pink-500',
        shadow: 'shadow-rose-500/20',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-2'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
        tag: 'Innovation',
        title: 'Robotics Workshop',
        desc: 'Building the Future',
        icon: Cpu,
        color: 'from-cyan-500 to-blue-500',
        shadow: 'shadow-cyan-500/20',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
        tag: 'Culture',
        title: 'Karnataka Rajyotsava',
        desc: 'Celebrating Heritage',
        icon: Music,
        color: 'from-amber-500 to-orange-500',
        shadow: 'shadow-amber-500/20',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
        tag: 'Sports',
        title: 'Annual Sports Meet',
        desc: 'Champions Rising',
        icon: Trophy,
        color: 'from-emerald-500 to-green-500',
        shadow: 'shadow-emerald-500/20',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1'
    }
];

function TiltCard({ item, index }: { item: typeof galleryItems[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse tracking for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative group rounded-[2rem] cursor-pointer ${item.colSpan} ${item.rowSpan} min-h-[300px] md:min-h-[auto]`}
        >
            <div style={{ transform: "translateZ(20px)" }} className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${item.shadow}`} />

            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20">
                <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </motion.div>

                <div style={{ transform: "translateZ(50px)" }} className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center justify-between mb-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md border border-white/10 text-white`}>
                            {item.tag}
                        </span>
                        <div className={`p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                            <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight drop-shadow-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {item.desc}
                    </p>
                </div>

                {/* Floating Icon in Top Right */}
                <div style={{ transform: "translateZ(40px)" }} className="absolute top-6 right-6">
                    <div className={`p-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function CampusExperience() {
    const t = useTranslations('CampusExperience');

    return (
        <section className="relative py-32 overflow-hidden perspective-1000">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-20" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20 max-w-4xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block relative"
                    >
                        <div className="absolute inset-0 bg-primary/50 blur-xl opacity-50" />
                        <span className="relative px-6 py-2 rounded-full bg-black/50 border-t border-white/20 border-b border-black/50 text-sm font-bold text-primary-foreground uppercase tracking-[0.2em] backdrop-blur-lg shadow-2xl">
                            {t('tag', { defaultMessage: 'Beyond Academics' })}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl"
                    >
                        {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 animate-gradient-x">Unleashed</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:grid-rows-2 h-auto md:h-[600px]">
                    {galleryItems.map((item, index) => (
                        <TiltCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
