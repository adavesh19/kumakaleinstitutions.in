'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
    {
        name: "Priya Desai",
        role: "Parent - Grade 8 Student",
        content: "Kumakale has been instrumental in my daughter's growth. The teachers genuinely care, and the holistic approach to education is remarkable. She's excelling both academically and in extracurriculars.",
        image: "https://i.pravatar.cc/150?img=47",
    },
    {
        name: "Rajesh Patil",
        role: "Alumni - Class of 2020",
        content: "The values and discipline instilled at Kumakale have shaped who I am today. The quality of education prepared me well for engineering college. Proud to be a Kumakale graduate!",
        image: "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "Anita Kulkarni",
        role: "Parent - PUC 2nd Year",
        content: "We chose Kumakale for the strong academic track record and the emphasis on Mudhol's heritage. Our son has thrived here, and the college preparation support is exceptional.",
        image: "https://i.pravatar.cc/150?img=32",
    },
    {
        name: "Kiran Mudhol",
        role: "Student - 10th Grade",
        content: "I love the science lab facilities and the robotics club. Teachers are always available to help, and I feel confident about my board exams. Kumakale is the best school in Mudhol!",
        image: "https://i.pravatar.cc/150?img=8",
    },
]

export function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                        What Our Community Says
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Real experiences from students, parents, and alumni
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                                    &quot;{testimonials[currentIndex].content}&quot;
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-16 h-16 rounded-full border-2 border-primary"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                        <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="rounded-full glass-card hover:bg-white/10"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-8' : 'bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="rounded-full glass-card hover:bg-white/10"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
