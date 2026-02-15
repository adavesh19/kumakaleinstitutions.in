'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Navigation');

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden bg-black/40 border-t border-white/10 backdrop-blur-xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/25">
                                <span className="font-bold text-white text-xl">K</span>
                            </div>
                            <span className="font-mono font-bold text-2xl tracking-tighter text-white">KUMAKALE</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            {t('about')}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-white">
                            <span className="w-1 h-4 bg-accent rounded-full" />
                            {t('quickLinks')}
                        </h4>
                        <ul className="space-y-3">
                            {['about', 'academics', 'admissions', 'gallery', 'contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link}`}
                                        className="text-gray-400 hover:text-primary transition-all duration-200 flex items-center gap-2 group justify-center md:justify-start"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                                        {tNav(link)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-white">
                            <span className="w-1 h-4 bg-primary rounded-full" />
                            {t('connect')}
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3 justify-center md:justify-start">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0 border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                                <span className="text-left">{t('address')}</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0 border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                                <span className="font-mono">{t('phone')}</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0 border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                                <span className="font-mono">{t('email')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Map Placeholder */}
                    <div className="glass-card p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center md:items-start w-full">
                        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary">Visit Campus</h4>
                        <div className="w-full h-32 bg-secondary rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-white/90 text-xs font-bold px-3 py-1 rounded-full text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                    View Map
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            Open Mon-Sat, 9am - 5pm
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground font-medium">
                        {t('rights')}
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
