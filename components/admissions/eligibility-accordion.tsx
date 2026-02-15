'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl"

export function EligibilityAccordion() {
    const t = useTranslations('AdmissionsPage');

    const eligibilityData = [
        {
            program: t('prog1Title'),
            requirements: [t('prog1Req1'), t('prog1Req2'), t('prog1Req3'), t('prog1Req4'), t('prog1Req5'), t('prog1Req6')],
        },
        {
            program: t('prog2Title'),
            requirements: [t('prog2Req1'), t('prog2Req2'), t('prog2Req3'), t('prog2Req4'), t('prog2Req5'), t('prog2Req6')],
        },
        {
            program: t('prog3Title'),
            requirements: [t('prog3Req1'), t('prog3Req2'), t('prog3Req3'), t('prog3Req4'), t('prog3Req5'), t('prog3Req6')],
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        {t('eligibilityTitle')}
                    </h2>
                    <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto font-light">
                        {t('eligibilitySubtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-6">
                        {eligibilityData.map((item, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="glass-card rounded-[1.5rem] px-8 border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 data-[state=open]:bg-white/10 data-[state=open]:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                            >
                                <AccordionTrigger className="text-xl font-bold text-white hover:text-emerald-300 hover:no-underline py-8">
                                    {item.program}
                                </AccordionTrigger>
                                <AccordionContent className="pb-8">
                                    <ul className="space-y-3">
                                        {item.requirements.map((req, j) => (
                                            <li key={j} className="flex items-start gap-3 group">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 group-hover:bg-emerald-500 transition-colors">
                                                    <span className="text-emerald-400 text-xs font-bold group-hover:text-white">✓</span>
                                                </div>
                                                <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
