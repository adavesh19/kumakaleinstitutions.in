import { Button } from "@/components/ui/button";
import { TestimonialsCarousel } from "@/components/why-choose-us/testimonials-carousel";
import { ComparisonMatrix } from "@/components/why-choose-us/comparison-matrix";
import {
    GraduationCap,
    MonitorSmartphone,
    Trophy,
    LandPlot,
    Heart,
    ArrowRight,
    Calendar,
    Snowflake,
    ShieldCheck,
    Library,
    Star
} from "lucide-react";

const differentiators = [
    {
        icon: Snowflake,
        title: "Smart Ventilated Classrooms",
        description: "Experience learning in a fresh and dynamic environment. Our spacious, well-ventilated classrooms are equipped with smart boards and ergonomic furniture, designed for the local climate.",
        stats: ["Digital Boards", "Natural Light", "Airy Spaces"],
        color: "text-cyan-400",
        glow: "shadow-[0_0_20px_rgba(34,211,238,0.3)]"
    },
    {
        icon: GraduationCap,
        title: "Expert Faculty",
        description: "Learn from the best. Our faculty includes PhD holders and industry veterans with over 10 years of experience. We don't just teach the syllabus; we mentor future leaders.",
        stats: ["PhD Mentors", "10+ Yrs Exp", "Subject Experts"],
        color: "text-primary",
        glow: "shadow-[0_0_20px_rgba(0,230,118,0.3)]"
    },
    {
        icon: Library,
        title: "Resourceful Library",
        description: "Unlock a world of knowledge. Our digital and physical library houses 10,000+ books, international journals, and 24/7 access to online research databases.",
        stats: ["10k+ Books", "Digital Access", "Quiet Zones"],
        color: "text-accent",
        glow: "shadow-[0_0_20px_rgba(255,215,0,0.3)]"
    },
    {
        icon: ShieldCheck,
        title: "High-Level Campus Security",
        description: "Safety is our priority. With 24/7 CCTV surveillance, biometric access control, and trained security personnel, we ensure a secure environment for all students.",
        stats: ["24/7 CCTV", "Biometric Entry", "Secure Campus"],
        color: "text-red-400",
        glow: "shadow-[0_0_20px_rgba(248,113,113,0.3)]"
    },
]

export default function WhyChooseUsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

                <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6 border-primary/20">
                    <Star className="w-4 h-4 fill-primary" /> The Kumakale Advantage
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-8 max-w-5xl mx-auto leading-tight">
                    Beyond Education: The <br /> <span className="text-primary text-glow">Kumakale Edge</span>
                </h1>

                <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    We don't just prepare students for exams. We provide a premium, secure, and advanced environment for holistic growth in Mudhol.
                </p>

                {/* Rating Showcase */}
                <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl border-primary/30 bg-black/40 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="text-5xl font-bold font-mono text-foreground flex items-center gap-2">
                            4.8 <span className="text-2xl text-muted-foreground">/ 5</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className={`w-5 h-5 ${s <= 5 ? 'fill-accent text-accent' : 'text-muted'}`} />
                            ))}
                        </div>
                    </div>
                    <div className="h-12 w-px bg-white/10 hidden sm:block" />
                    <div className="text-left">
                        <div className="font-bold text-lg">Top Rated in Bagalkot</div>
                        <div className="text-sm text-primary">Based on 300+ Reviews</div>
                        <div className="text-xs text-muted-foreground mt-1">"Best facilities in the region"</div>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {differentiators.map((diff, i) => (
                            <div
                                key={i}
                                className="group relative glass-card p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${diff.glow} shadow-inner`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${diff.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <diff.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 font-mono">{diff.title}</h3>

                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        {diff.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/5">
                                        {diff.stats.map((stat, j) => (
                                            <div key={j} className="text-center">
                                                <div className={`text-sm font-bold ${diff.color} mb-1`}>{stat}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsCarousel />

            {/* Comparison Matrix */}
            <ComparisonMatrix />

            {/* Dual CTAs */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto border-primary/20 bg-gradient-to-b from-black/40 to-primary/5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
                            Ready to Experience the Future?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                            Join the hundreds of satisfied families who have chosen Kumakale for its excellence, safety, and modern infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button
                                size="lg"
                                className="rounded-full w-full sm:w-auto text-lg h-14 px-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,230,118,0.3)] hover:shadow-[0_0_50px_rgba(0,230,118,0.5)] transition-all duration-300"
                            >
                                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full w-full sm:w-auto text-lg h-14 px-12 glass-card hover:bg-white/10 border-white/20"
                            >
                                <Calendar className="mr-2 w-5 h-5" />
                                Schedule a Visit
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
