'use client'

import { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Search } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function FaqSection() {
    const t = useTranslations('AdmissionsPage');
    const [searchQuery, setSearchQuery] = useState('')

    const faqs = [
        {
            question: t('faq1Q'),
            answer: t('faq1A'),
        },
        {
            question: t('faq2Q'),
            answer: t('faq2A'),
        },
        {
            question: t('faq3Q'),
            answer: t('faq3A'),
        },
        {
            question: t('faq4Q'),
            answer: t('faq4A'),
        },
        {
            question: t('faq5Q'),
            answer: t('faq5A'),
        },
        {
            question: t('faq6Q'),
            answer: t('faq6A'),
        },
        {
            question: t('faq7Q'),
            answer: t('faq7A'),
        },
        {
            question: t('faq8Q'),
            answer: t('faq8A'),
        },
    ]

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        {t('faqTitle')}
                    </h2>
                    <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-light">
                        {t('faqSubtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Search Bar */}
                    <div className="mb-12 relative group">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl group-hover:bg-emerald-500/30 transition-all" />
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-400" />
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 rounded-2xl glass-card border border-white/10 bg-black/40 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:bg-black/60 outline-none transition-all text-lg shadow-xl"
                            />
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    {filteredFaqs.length > 0 ? (
                        <Accordion type="single" collapsible className="space-y-4">
                            {filteredFaqs.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`faq-${i}`}
                                    className="glass-card rounded-2xl px-8 border-white/5 bg-white/5 hover:bg-white/10 transition-colors border-none"
                                >
                                    <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-emerald-300 hover:no-underline py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 text-gray-300 leading-relaxed text-base font-light">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <div className="text-center text-gray-400 py-12">
                            <p className="text-xl">No matching questions found.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
