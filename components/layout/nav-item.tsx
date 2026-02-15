'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItemProps {
    href: string;
    label: string;
}

export function NavItem({ href, label }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary uppercase tracking-widest",
                isActive ? "text-primary" : "text-muted-foreground"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(0,230,118,0.2)] -z-10"
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                />
            )}
            {label}
        </Link>
    );
}
