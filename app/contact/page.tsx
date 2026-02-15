'use client';

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, MessageCircle, Map as MapIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            {/* Global Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
                <div className="inline-block glass-card rounded-full px-6 py-2 text-sm font-bold text-primary mb-6 border-primary/30 shadow-[0_0_15px_rgba(37,99,235,0.3)] backdrop-blur-md">
                    {t('tag')}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-2xl">
                    {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('titleHighlight')}</span>
                </h1>
                <p className="text-blue-100/80 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                    {t('description')}
                </p>
            </section>

            {/* Contact Info & Form Grid */}
            <section className="py-12 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="glass-card rounded-[2.5rem] p-10 space-y-10 border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-4 text-white">
                                    <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
                                    {t('infoTitle')}
                                </h2>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300 border border-primary/20 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                        <MapPin className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl text-white">{t('addressTitle')}</h3>
                                        <p className="text-gray-300 text-base leading-relaxed font-light">
                                            {t('addressLine1')}<br />
                                            {t('addressLine2')}<br />
                                            {t('addressLine3')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-all duration-300 border border-accent/20 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                                        <Phone className="w-8 h-8 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl text-white">{t('phoneTitle')}</h3>
                                        <p className="text-gray-300 text-base leading-relaxed font-light">
                                            <span className="text-white font-medium">+91 98765 43210</span> <span className="text-sm opacity-60 ml-2">{t('officeLabel')}</span><br />
                                            <span className="text-white font-medium">+91 98765 43211</span> <span className="text-sm opacity-60 ml-2">{t('admissionsLabel')}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-green-500/10 rounded-2xl group-hover:bg-green-500/20 transition-all duration-300 border border-green-500/20 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                        <Mail className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2 text-xl text-white">{t('emailTitle')}</h3>
                                        <p className="text-gray-300 text-base leading-relaxed font-light">
                                            <span className="text-white hover:text-green-300 transition-colors cursor-pointer">info@kumakale.edu.in</span><br />
                                            <span className="text-white hover:text-green-300 transition-colors cursor-pointer">admissions@kumakale.edu.in</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="glass-card rounded-3xl p-8 border-white/5 bg-black/40 backdrop-blur-xl">
                                <h2 className="text-2xl font-bold mb-6 text-white">{t('connectTitle')}</h2>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Facebook, label: 'Facebook', color: 'text-blue-500', hover: 'hover:bg-blue-500/20' },
                                        { icon: Instagram, label: 'Instagram', color: 'text-pink-500', hover: 'hover:bg-pink-500/20' },
                                        { icon: Linkedin, label: 'LinkedIn', color: 'text-blue-400', hover: 'hover:bg-blue-400/20' },
                                        { icon: MessageCircle, label: 'WhatsApp', color: 'text-green-500', hover: 'hover:bg-green-500/20' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className={`p-4 bg-white/5 rounded-2xl transition-all hover:scale-110 ${social.hover}`}
                                            aria-label={social.label}
                                        >
                                            <social.icon className={`w-6 h-6 ${social.color}`} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border-white/10 bg-black/60 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10" />

                            <h2 className="text-3xl font-bold mb-2 text-white">{t('formTitle')}</h2>
                            <p className="text-gray-400 mb-8">{t('formSubtitle')}</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">{t('nameLabel')}</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-white/10 outline-none transition-all"
                                            placeholder={t('namePlaceholder')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">{t('emailLabel')}</label>
                                        <input
                                            type="email"
                                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-white/10 outline-none transition-all"
                                            placeholder={t('emailPlaceholder')}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">{t('subjectLabel')}</label>
                                    <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary/50 focus:bg-black/80 outline-none transition-all appearance-none cursor-pointer">
                                        <option className="bg-gray-900">{t('subjectOption1')}</option>
                                        <option className="bg-gray-900">{t('subjectOption2')}</option>
                                        <option className="bg-gray-900">{t('subjectOption3')}</option>
                                        <option className="bg-gray-900">{t('subjectOption4')}</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">{t('messageLabel')}</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-white/10 outline-none transition-all resize-none"
                                        placeholder={t('messagePlaceholder')}
                                    />
                                </div>
                                <Button size="lg" className="w-full rounded-xl h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                    {t('submitButton')}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Integration */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-sm font-medium text-accent mb-4 border-accent/20">
                            <MapIcon className="w-4 h-4" /> {t('locateTag')}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            {t('visitTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('visitHighlight')}</span>
                        </h2>
                        <p className="text-blue-100/70 text-lg max-w-2xl mx-auto font-light">
                            {t('visitDesc')}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto glass-card rounded-[2rem] overflow-hidden p-2 border-primary/30 shadow-2xl bg-black/60 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                        <div className="relative w-full h-[500px] rounded-[1.8rem] overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://maps.google.com/maps?q=Durgadevi%20Temple%20Mudhol%20Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 glass-card p-6 rounded-2xl max-w-xs bg-black/80 backdrop-blur-xl border-white/10 shadow-lg hidden md:block group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                                <h4 className="font-bold text-white mb-2">{t('mapCardTitle')}</h4>
                                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                                    {t('mapCardDesc')}
                                </p>
                                <Button size="sm" variant="outline" className="w-full text-xs h-9 rounded-lg border-primary text-primary hover:bg-primary/20 hover:text-white transition-all">
                                    {t('directionsButton')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

