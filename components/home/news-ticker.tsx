'use client'

import { motion } from 'framer-motion'
import { Bell, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { fetchLatestNews, NewsItem } from '@/lib/api'
import { useTranslations, useLocale } from 'next-intl'

export function NewsTicker() {
    const t = useTranslations('HomePage')
    const locale = useLocale()
    const [news, setNews] = useState<NewsItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadNews() {
            try {
                const data = await fetchLatestNews(locale)
                setNews(data)
            } catch (error) {
                console.error("Failed to fetch news:", error)
            } finally {
                setLoading(false)
            }
        }

        loadNews()
    }, [locale])

    return (
        <div className="w-full bg-black/40 border-y border-white/10 backdrop-blur-md h-12 flex items-center overflow-hidden relative z-40">
            <div className="bg-primary text-white px-6 h-full flex items-center z-10 font-bold uppercase text-xs tracking-widest absolute left-0 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <Bell className="w-4 h-4 mr-2 animate-bounce" />
                {t('updates')}
            </div>

            <div className="flex whitespace-nowrap overflow-hidden mask-linear-fade w-full pl-36">
                {loading ? (
                    <div className="flex items-center gap-2 text-sm text-gray-400 animate-pulse pl-4">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('fetchingUpdates')}
                    </div>
                ) : (
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {/* Duplicate content for seamless loop */}
                        {[...news, ...news, ...news].map((item, i) => (
                            <div key={`${item.id}-${i}`} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#f59e0b] animate-pulse" />
                                <span className="text-accent text-xs font-mono tracking-wide">[{item.date}]</span>
                                {item.text}
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}
