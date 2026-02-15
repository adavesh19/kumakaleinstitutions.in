'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FacultySpotlights() {
    const t = useTranslations('AcademicsPage');

    const faculty = [
        { name: "Dr. Anjali Deshpande", role: "Head of Sciences", exp: "15+ Years", subject: "Physics", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
        { name: "Prof. Rajesh Kumar", role: "Commerce Dept. Lead", exp: "12+ Years", subject: "Accountancy", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
        { name: "Mrs. Sarah Thomas", role: "Arts Coordinator", exp: "10+ Years", subject: "English Lit.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
        { name: "Mr. Veerendra Patil", role: "Sports Director", exp: "20+ Years", subject: "Physical Edu.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        {t('facultyTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">{t('facultyHighlight')}</span>
                    </h2>
                    <p className="text-teal-100/70 text-lg max-w-2xl mx-auto font-light">
                        {t('facultySubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {faculty.map((member, i) => (
                        <div key={i} className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                            <div className="glass-card rounded-2xl p-0 overflow-hidden relative h-full border-white/10 bg-black/60 backdrop-blur-xl">
                                <div className="h-64 relative overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-teal-500/20 backdrop-blur-md px-3 py-1 rounded-lg w-fit mb-2 border border-teal-500/30">
                                            <span className="text-teal-300 text-xs font-bold uppercase tracking-wider">{member.subject}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">{member.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{member.role}</p>

                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Experience</span>
                                        <span className="text-white font-bold">{member.exp}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
