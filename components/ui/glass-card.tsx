import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
    gradient?: boolean
}

export function GlassCard({ children, className, gradient = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl transition-all hover:shadow-2xl hover:bg-white/15 dark:bg-black/20 dark:border-white/10",
                gradient && "bg-gradient-to-br from-white/20 via-white/5 to-white/10 dark:from-white/10 dark:via-transparent dark:to-white/5",
                className
            )}
            {...props}
        >
            {gradient && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}
