'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, GraduationCap, Users, Award, Building, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

interface Milestone {
    year: string;
    title: string;
    titleKn: string;
    description: string;
    descKn: string;
    icon: any;
}

const milestones: Milestone[] = [
    {
        year: '2019',
        title: 'Foundation',
        titleKn: 'ಸ್ಥಾಪನೆ',
        description: 'Kumakale School & PU College established',
        descKn: 'ಕುಮಕಾಳೆ ಶಾಲೆ ಮತ್ತು ಪಿ.ಯು ಕಾಲೇಜು ಸ್ಥಾಪನೆ',
        icon: Building
    },
    {
        year: '2021',
        title: 'Degree College Launch',
        titleKn: 'ಪದವಿ ಕಾಲೇಜು ಪ್ರಾರಂಭ',
        description: 'B.A. & B.Com programs inaugurated',
        descKn: 'B.A. ಮತ್ತು B.Com ಕಾರ್ಯಕ್ರಮಗಳ ಉದ್ಘಾಟನೆ',
        icon: GraduationCap
    },
    {
        year: '2022',
        title: '500+ Students',
        titleKn: '500+ ವಿದ್ಯಾರ್ಥಿಗಳು',
        description: 'Crossed 500 student milestone',
        descKn: '500 ವಿದ್ಯಾರ್ಥಿಗಳ ಮೈಲಿಗಲ್ಲು ದಾಟಿದೆ',
        icon: Users
    },
    {
        year: '2023',
        title: '1000+ Students',
        titleKn: '1000+ ವಿದ್ಯಾರ್ಥಿಗಳು',
        description: 'Doubled enrollment in 2 years',
        descKn: '2 ವರ್ಷಗಳಲ್ಲಿ ದ್ವಿಗುಣ ದಾಖಲಾತಿ',
        icon: TrendingUp
    },
    {
        year: '2024',
        title: 'AC Classrooms',
        titleKn: 'ಎ.ಸಿ ತರಗತಿಗಳು',
        description: 'Climate-controlled learning spaces',
        descKn: 'ಹವಾಮಾನ-ನಿಯಂತ್ರಿತ ಕಲಿಕಾ ಸ್ಥಳಗಳು',
        icon: Building
    },
    {
        year: '2026',
        title: '1650+ Students & 4.8★',
        titleKn: '1650+ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು 4.8★',
        description: '4 years of excellence & trust',
        descKn: '4 ವರ್ಷಗಳ ಶ್ರೇಷ್ಠತೆ ಮತ್ತು ವಿಶ್ವಾಸ',
        icon: Award
    }
];

export function InteractiveTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold text-sm">Our Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        4 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Excellence</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From a humble beginning in 2019 to becoming a trusted institution with 1650+ students
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Progress Line */}
                    <motion.div
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"
                        style={{ height: lineProgress }}
                    />

                    {/* Milestones */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/50 z-10"
                                >
                                    <milestone.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="glass-card p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {milestone.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
