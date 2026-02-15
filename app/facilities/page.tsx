'use client';

import { Building, FlaskConical, BookText, Trophy, Home, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FacilitiesPage() {
    const t = useTranslations('FacilitiesPage');

    const facilities = [
        {
            title: t('scienceTitle'),
            description: t('scienceDesc'),
            images: [
                "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1581093458791-9f3c3550b0f3?w=800&auto=format&fit=crop",
            ],
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            title: t('libraryTitle'),
            description: t('libraryDesc'),
            images: [
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
            ],
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        },
        {
            title: t('sportsTitle'),
            description: t('sportsDesc'),
            images: [
                "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop",
            ],
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            title: t('transportTitle'),
            description: t('transportDesc'),
            images: [
                "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop", // School bus image
                "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=800&auto=format&fit=crop", // Another bus/transport image
            ],
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
    ];

    const campusZones = [
        { name: "Admin Block", icon: Building, position: "top-[10%] left-[10%]", color: "bg-blue-500 text-white shadow-blue-500/50" },
        { name: "Science Labs", icon: FlaskConical, position: "top-[20%] right-[15%]", color: "bg-cyan-500 text-white shadow-cyan-500/50" },
        { name: "Library", icon: BookText, position: "bottom-[20%] left-[15%]", color: "bg-amber-500 text-white shadow-amber-500/50" },
        { name: "Sports Ground", icon: Trophy, position: "bottom-[15%] right-[10%]", color: "bg-green-500 text-white shadow-green-500/50" },
        { name: "Transport Hub", icon: Home, position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", color: "bg-purple-500 text-white shadow-purple-500/50" },
    ];

    return (
        <div className="relative overflow-hidden pt-24 pb-20">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center relative z-10">
                <div className="inline-block glass-card rounded-full px-6 py-2 text-sm font-bold text-blue-300 mb-6 border-blue-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {t('tag')}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
                    {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('titleHighlight')}</span>
                </h1>
                <p className="text-blue-100/80 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                    {t('description')}
                </p>
            </section>

            {/* Interactive Campus Map Placeholder */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            {t('mapTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('mapHighlight')}</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg max-w-2xl mx-auto font-light">
                            {t('mapSubtitle')}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="glass-card rounded-[2.5rem] p-4 md:p-12 relative min-h-[600px] bg-black/40 border-white/10 overflow-hidden shadow-2xl group">
                            {/* Abstract Map Background */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                            {/* Central Visual */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
                                <Building className="w-96 h-96 text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]" strokeWidth={0.5} />
                            </div>

                            {/* Zones */}
                            {campusZones.map((zone, i) => (
                                <div key={i} className={`absolute ${zone.position} flex flex-col items-center gap-3 group/zone cursor-pointer z-10`}>
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${zone.color} shadow-lg transform transition-all duration-500 group-hover/zone:scale-110 group-hover/zone:rotate-3`}>
                                        <zone.icon className="w-8 h-8" />
                                    </div>
                                    <div className="glass-card px-4 py-2 rounded-full border-white/10 bg-black/60 backdrop-blur-md opacity-0 group-hover/zone:opacity-100 transform translate-y-2 group-hover/zone:translate-y-0 transition-all duration-300">
                                        <p className="text-sm font-bold text-white whitespace-nowrap">{zone.name}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">{t('comingSoon')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Galleries */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-20">
                        {facilities.map((visual, index) => (
                            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2 space-y-6">
                                    <div className={`inline-block px-4 py-1.5 rounded-lg ${visual.bg} ${visual.color} text-sm font-bold uppercase tracking-wider border ${visual.border}`}>
                                        FEATURE 0{index + 1}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white leading-tight">{visual.title}</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed font-light">
                                        {visual.description}
                                    </p>
                                    <button className={`flex items-center gap-2 ${visual.color} font-bold hover:underline underline-offset-4 group`}>
                                        Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="grid grid-cols-2 gap-4">
                                        {visual.images.map((img, imgIndex) => (
                                            <div key={imgIndex} className={`relative rounded-3xl overflow-hidden shadow-2xl ${imgIndex === 1 ? 'mt-8' : 'mb-8'}`}>
                                                <div className="aspect-[3/4]">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                                    <img
                                                        src={img}
                                                        alt={`${visual.title} ${imgIndex + 1}`}
                                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
