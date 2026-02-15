'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AdmissionPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem('admissionPopupSeen');

        if (!hasSeenPopup) {
            // Show popup after a short delay
            setTimeout(() => {
                setIsVisible(true);
            }, 500);

            // Auto-hide after 5 seconds
            setTimeout(() => {
                setIsVisible(false);
                sessionStorage.setItem('admissionPopupSeen', 'true');
            }, 5500);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('admissionPopupSeen', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200]"
                        onClick={handleClose}
                    />

                    {/* Popup Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[201] pointer-events-none">
                        <motion.div
                            initial={{
                                scale: 0.5,
                                rotateY: -180,
                                opacity: 0,
                                z: -1000
                            }}
                            animate={{
                                scale: 1,
                                rotateY: 0,
                                opacity: 1,
                                z: 0
                            }}
                            exit={{
                                scale: 0.8,
                                rotateY: 180,
                                opacity: 0,
                                z: -1000
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                                duration: 0.8
                            }}
                            className="relative w-[90vw] max-w-2xl pointer-events-auto"
                            style={{
                                perspective: '1000px',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:rotate-90 duration-300 shadow-2xl"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Main Card */}
                            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 p-1 shadow-2xl">
                                {/* Animated Border Glow */}
                                <motion.div
                                    animate={{
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 blur-xl"
                                />

                                {/* Inner Content */}
                                <div className="relative bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-indigo-950/95 backdrop-blur-2xl rounded-[2.8rem] p-12 overflow-hidden">
                                    {/* Floating Orbs */}
                                    <motion.div
                                        animate={{
                                            y: [-20, 20, -20],
                                            x: [-10, 10, -10],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: 'easeInOut'
                                        }}
                                        className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl"
                                    />
                                    <motion.div
                                        animate={{
                                            y: [20, -20, 20],
                                            x: [10, -10, 10],
                                            scale: [1.2, 1, 1.2]
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: 'easeInOut'
                                        }}
                                        className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
                                    />

                                    {/* Sparkles */}
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                                rotate: 0
                                            }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1, 0],
                                                rotate: 360
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                                ease: 'easeInOut'
                                            }}
                                            className="absolute"
                                            style={{
                                                top: `${20 + (i * 10)}%`,
                                                left: `${10 + (i * 12)}%`,
                                            }}
                                        >
                                            <Sparkles className="w-6 h-6 text-cyan-400" />
                                        </motion.div>
                                    ))}

                                    {/* Content */}
                                    <div className="relative z-10 text-center space-y-6">
                                        {/* Icon */}
                                        <motion.div
                                            animate={{
                                                rotateY: [0, 360],
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                            }}
                                            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/50"
                                            style={{ transformStyle: 'preserve-3d' }}
                                        >
                                            <GraduationCap className="w-12 h-12 text-white" />
                                        </motion.div>

                                        {/* Badge */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-sm font-bold text-white shadow-lg"
                                        >
                                            🎉 ACADEMIC YEAR 2026-27
                                        </motion.div>

                                        {/* Main Heading */}
                                        <motion.h1
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 leading-tight"
                                        >
                                            ADMISSIONS
                                            <br />
                                            <span className="text-6xl md:text-7xl bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                                                OPEN!
                                            </span>
                                        </motion.h1>

                                        {/* Description */}
                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="text-blue-200 text-lg max-w-lg mx-auto font-light"
                                        >
                                            Join 1650+ students at Kumakale School & College.
                                            <span className="font-semibold text-white"> Limited seats available!</span>
                                        </motion.p>

                                        {/* CTA Button */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="pt-4"
                                        >
                                            <Link href="/admissions" onClick={handleClose}>
                                                <Button
                                                    size="lg"
                                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg px-10 py-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all border-0"
                                                >
                                                    Apply Now
                                                    <ArrowRight className="ml-2 w-5 h-5" />
                                                </Button>
                                            </Link>
                                        </motion.div>

                                        {/* Subtext */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.7 }}
                                            className="text-gray-400 text-sm"
                                        >
                                            Click anywhere to close • This won't show again
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
