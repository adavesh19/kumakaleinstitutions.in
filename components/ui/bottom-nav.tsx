'use client'

import { Home, BookOpen, Users, Phone, Image } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/academics', icon: BookOpen, label: 'Academics' },
    { href: '/admissions', icon: Users, label: 'Admissions' },
    { href: '/gallery', icon: Image, label: 'Gallery' },
    { href: '/contact', icon: Phone, label: 'Contact' },
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <nav className="glass-nav flex justify-around items-center h-16 px-4">
                {navItems.map(({ href, icon: Icon, label }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors hover:text-primary",
                                isActive ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            <Icon className="w-5 h-5 mb-1" />
                            <span>{label}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
