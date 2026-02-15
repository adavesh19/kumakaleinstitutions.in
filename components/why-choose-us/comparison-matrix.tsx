'use client'

import { Check, X } from 'lucide-react'

const comparisonData = [
    { feature: "100% Board Exam Results", kumakale: true, standard: false },
    { feature: "PhD & Postgraduate Faculty", kumakale: true, standard: false },
    { feature: "Smart Classrooms with Digital Boards", kumakale: true, standard: false },
    { feature: "Fully Equipped Science & Computer Labs", kumakale: true, standard: true },
    { feature: "Sports Infrastructure (Indoor + Outdoor)", kumakale: true, standard: false },
    { feature: "Robotics & Innovation Lab", kumakale: true, standard: false },
    { feature: "Individual Student Mentorship", kumakale: true, standard: false },
    { feature: "Career Counseling & Guidance", kumakale: true, standard: true },
    { feature: "Arts & Music Programs", kumakale: true, standard: false },
    { feature: "Community Service Initiatives", kumakale: true, standard: false },
    { feature: "Alumni Network & Support", kumakale: true, standard: false },
    { feature: "Transportation Facilities", kumakale: true, standard: true },
]

export function ComparisonMatrix() {
    return (
        <section className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                        The <span className="text-primary">Kumakale</span> Difference
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        See how we stand out in Mudhol&apos;s educational landscape
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-3xl overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 bg-white/5">
                            <div className="font-bold text-lg">Features</div>
                            <div className="font-bold text-lg text-center text-primary">
                                Kumakale School
                            </div>
                            <div className="font-bold text-lg text-center text-muted-foreground">
                                Regional Standard
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        <div className="divide-y divide-white/5">
                            {comparisonData.map((row, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-3 gap-4 p-4 md:p-6 hover:bg-white/5 transition-colors"
                                >
                                    <div className="text-foreground font-medium text-sm md:text-base">
                                        {row.feature}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        {row.kumakale ? (
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <X className="w-5 h-5 text-red-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        {row.standard ? (
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                                <Check className="w-5 h-5 text-muted-foreground" />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                                <X className="w-5 h-5 text-red-400/50" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                        * Based on industry standard practices in Mudhol educational institutions
                    </p>
                </div>
            </div>
        </section>
    )
}
