'use client';

import { motion } from 'framer-motion';
import { Award, Computer, Bus, Library, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { GlassCard } from '@/components/ui/glass-card';

export function BentoFeatures() {
    const t = useTranslations('HomePage');

    const features = [
        {
            icon: Award,
            title: 'Academic Excellence',
            titleKn: 'ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ',
            description: '100% results & specialized coaching for competitive exams',
            descKn: '100% ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಿಗೆ ವಿಶೇಷ ತರಬೇತಿ',
            color: 'from-yellow-500 to-orange-600',
            size: 'large' // spans 2 columns
        },
        {
            icon: Computer,
            title: 'High-Tech Computer Lab',
            titleKn: 'ಹೈಟೆಕ್ ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್',
            description: 'Latest hardware and software for hands-on learning',
            descKn: 'ಪ್ರಾಯೋಗಿಕ ಕಲಿಕೆಗಾಗಿ ಇತ್ತೀಚಿನ ಹಾರ್ಡ್‌ವೇರ್ ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್',
            color: 'from-purple-500 to-pink-600',
            size: 'tall' // 2 rows
        },
        {
            icon: Bus,
            title: 'Bus Facility',
            titleKn: 'ಬಸ್ ಸೌಲಭ್ಯ',
            description: 'Safe and comfortable transportation across Mudhol',
            descKn: 'ಮುಧೋಳದಾದ್ಯಂತ ಸುರಕ್ಷಿತ ಮತ್ತು ಆರಾಮದಾಯಕ ಸಾರಿಗೆ',
            color: 'from-orange-500 to-red-600',
            size: 'square'
        },
        {
            icon: Library,
            title: 'Resourceful Library',
            titleKn: 'ಸಂಪನ್ಮೂಲ ಗ್ರಂಥಾಲಯ',
            description: '10,000+ books, journals, and digital resources',
            descKn: '10,000+ ಪುಸ್ತಕಗಳು, ನಿಯತಕಾಲಿಕೆಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಸಂಪನ್ಮೂಲಗಳು',
            color: 'from-green-500 to-emerald-600',
            size: 'wide' // spans 2 columns
        },
    ];

    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'md:col-span-2 md:row-span-2';
            case 'tall':
                return 'md:row-span-2';
            case 'wide':
                return 'md:col-span-2';
            default:
                return '';
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    {/* Glowing background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/20 rounded-full blur-[100px] -z-10" />

                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(59, 130, 246, 0.3)',
                                '0 0 40px rgba(59, 130, 246, 0.5)',
                                '0 0 20px rgba(59, 130, 246, 0.3)',
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/40 mb-8 backdrop-blur-xl"
                    >
                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                        <span className="text-white font-bold text-base tracking-wide">✨ PREMIUM FACILITIES ✨</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            Special{' '}
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                            Features
                        </span>
                    </h2>

                    <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                        🎓 World-class infrastructure designed for excellence in education
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={getSizeClasses(feature.size)}
                        >
                            <GlassCard className="h-full p-8 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                                >
                                    <feature.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover Glow */}
                                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
