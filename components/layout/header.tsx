'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { LanguageToggle } from './language-toggle';
import { Menu, X, ChevronRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { NavItem } from './nav-item';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/academics', label: 'academics' },
    { href: '/admissions', label: 'admissions' },
    { href: '/gallery', label: 'gallery' },
    { href: '/media', label: 'media' },
    { href: '/facilities', label: 'facilities' },
    { href: '/why-choose-us', label: 'whyUs' },
    { href: '/contact', label: 'contact' },
];

export function Header() {
    const t = useTranslations('Navigation');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
    const lastScrollY = React.useRef(0);

    // Auto-hide/show navbar on scroll
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set blur effect when scrolled past 50px
            setScrolled(currentScrollY > 50);

            // Hide navbar on scroll down, show on scroll up
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    // Prevent scrolling when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div className={cn(
                "glass-nav rounded-full px-6 py-3 flex items-center justify-between w-full max-w-6xl border border-white/10 shadow-lg shadow-primary/5 transition-all duration-300",
                scrolled ? "bg-black/60 backdrop-blur-2xl" : "bg-black/40 backdrop-blur-xl"
            )}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 z-50 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/20 group-hover:border-primary/50 transition-colors shadow-none">
                        <Image
                            src="/logo.png"
                            alt="Kumakale Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden md:block">
                        <div className="font-mono font-bold text-lg leading-none tracking-tight text-white group-hover:text-primary transition-colors">
                            Kumakale
                        </div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-1 group-hover:text-foreground transition-colors">
                            {t('schoolCollege')}
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/70 shadow-sm shadow-primary/5 p-1.5 rounded-full border border-white/40 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <NavItem key={link.href} href={link.href} label={t(link.label)} />
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block relative group">
                        <LanguageToggle />
                    </div>

                    <div className="hidden lg:block relative overflow-hidden rounded-full group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <Button
                            variant="default"
                            className="relative rounded-full px-6 bg-transparent hover:bg-transparent shadow-none text-white border-0"
                        >
                            <GraduationCap className="w-4 h-4 mr-2" />
                            {t('portal')}
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden z-50 p-2 text-foreground relative w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <AnimatePresence mode='wait'>
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-40 lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

                        <nav className="flex flex-col gap-2 w-full max-w-sm mx-auto">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/80 border border-transparent hover:border-border group transition-all"
                                    >
                                        <span className="text-xl font-medium font-sans text-foreground/80 group-hover:text-primary transition-colors">
                                            {t(link.label)}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto w-full max-w-sm mx-auto space-y-4 pt-8 border-t border-border"
                        >
                            <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-2xl border border-border">
                                <span className="text-sm font-medium text-foreground">{t('language')}</span>
                                <LanguageToggle />
                            </div>

                            <Button className="w-full rounded-xl py-6 text-lg bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:bg-primary/90">
                                {t('studentLogin')}
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

