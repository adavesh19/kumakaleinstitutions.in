'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function LanguageToggle() {
    const router = useRouter();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'kn' : 'en';
        startTransition(() => {
            // Set cookie manually for now
            document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
            router.refresh();
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className={`
                relative flex items-center justify-center 
                w-24 h-10 rounded-full 
                bg-secondary border border-border 
                hover:border-primary/50 hover:bg-secondary/80
                transition-all duration-300 group shadow-sm
            `}
            aria-label="Toggle Language"
        >
            <div className="flex items-center gap-2 font-sans text-sm font-bold tracking-wide relative z-10 text-foreground">
                <span className={`transition-colors duration-300 ${locale === 'en' ? 'text-primary font-extrabold' : 'text-muted-foreground'}`}>
                    EN
                </span>
                <span className="text-muted-foreground/30">|</span>
                <span className={`transition-colors duration-300 ${locale === 'kn' ? 'text-primary font-extrabold' : 'text-muted-foreground'}`}>
                    ಕನ್ನ
                </span>
            </div>

            {/* Subtle overlay */}
            <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
    );
}
