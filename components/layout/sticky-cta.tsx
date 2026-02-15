'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
    const t = useTranslations('HomePage');
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const show = latest > 500; // Show after scrolling 500px
        if (show !== isVisible) {
            setIsVisible(show);
        }
    });

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border z-50 md:hidden pb-safe"
        >
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-semibold uppercase">{t('admissionsOpen')}</p>
                    <p className="text-sm font-bold text-primary">Limited Seats Available</p>
                </div>
                <Link href="/admissions">
                    <Button size="sm" className="rounded-full shadow-lg bg-primary text-white">
                        {t('applyNow')} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
