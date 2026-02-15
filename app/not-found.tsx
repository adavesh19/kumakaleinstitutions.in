import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-4xl font-mono font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-muted-foreground mb-8">Could not find requested resource</p>
            <Button asChild className="rounded-full">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}
