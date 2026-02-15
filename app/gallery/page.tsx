'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, ZoomIn } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop',
        category: 'Sports',
        width: 'md:col-span-2 md:row-span-2',
        height: 'h-[500px]'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?q=80&w=800&auto=format&fit=crop',
        category: 'Events',
        width: 'md:col-span-1 md:row-span-1',
        height: 'h-[240px]'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
        category: 'Campus',
        width: 'md:col-span-1 md:row-span-1',
        height: 'h-[240px]'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
        category: 'Academics',
        width: 'md:col-span-1 md:row-span-2',
        height: 'h-[500px]'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
        category: 'Culture',
        width: 'md:col-span-2 md:row-span-1',
        height: 'h-[240px]'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
        category: 'Events',
        width: 'md:col-span-1 md:row-span-1',
        height: 'h-[240px]'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop', // Group study
        category: 'Academics',
        width: 'md:col-span-1 md:row-span-1',
        height: 'h-[240px]'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop', // Campus
        category: 'Campus',
        width: 'md:col-span-2 md:row-span-1',
        height: 'h-[240px]'
    }
];

export default function GalleryPage() {
    const t = useTranslations('GalleryPage');

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block glass-card rounded-full px-6 py-2 text-sm font-bold text-fuchsia-300 mb-6 border-fuchsia-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(232,121,249,0.2)]">
                        <Camera className="w-4 h-4 inline-block mr-2" />
                        {t('tag')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl">
                        {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">{t('titleHighlight')}</span>
                    </h1>
                    <p className="text-purple-100/80 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden group glass-card border-none bg-black/40 ${item.width} ${item.height}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opactiy-60 group-hover:opacity-40 transition-opacity" />

                            <Image
                                src={item.src}
                                alt={item.category}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 backdrop-blur-sm">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <button className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110">
                                        <ZoomIn className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>

                            {/* Label */}
                            <div className="absolute bottom-6 left-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-fuchsia-300 bg-black/60 backdrop-blur-md rounded-lg border border-fuchsia-500/30">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Capture {item.id}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
