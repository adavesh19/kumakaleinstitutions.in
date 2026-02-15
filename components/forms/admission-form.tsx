'use client'

import { useActionState } from 'react'
import { submitAdmissionForm } from '@/app/actions/admissions'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const grades = ['Pre-K', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade']

export function AdmissionForm() {
    const [state, formAction, isPending] = useActionState(submitAdmissionForm, null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 max-w-2xl mx-auto"
        >
            <h2 className="text-3xl font-bold mb-6">Apply for Admission</h2>

            {state?.success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 dark:text-green-400">{state.message}</p>
                </div>
            )}

            {state?.success === false && !state?.errors && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-600 dark:text-red-400">{state.message}</p>
                </div>
            )}

            <form action={formAction} className="space-y-6">
                <div>
                    <label htmlFor="student_name" className="block text-sm font-medium mb-2">
                        Student Name *
                    </label>
                    <input
                        type="text"
                        id="student_name"
                        name="student_name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isPending}
                    />
                    {state?.errors?.student_name && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.student_name[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="parent_name" className="block text-sm font-medium mb-2">
                        Parent/Guardian Name *
                    </label>
                    <input
                        type="text"
                        id="parent_name"
                        name="parent_name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isPending}
                    />
                    {state?.errors?.parent_name && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.parent_name[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isPending}
                    />
                    {state?.errors?.email && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isPending}
                    />
                    {state?.errors?.phone && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.phone[0]}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="grade_applying_for" className="block text-sm font-medium mb-2">
                        Grade Applying For *
                    </label>
                    <select
                        id="grade_applying_for"
                        name="grade_applying_for"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isPending}
                    >
                        <option value="">Select a grade</option>
                        {grades.map((grade) => (
                            <option key={grade} value={grade}>
                                {grade}
                            </option>
                        ))}
                    </select>
                    {state?.errors?.grade_applying_for && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.grade_applying_for[0]}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-12 text-lg rounded-full"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        'Submit Application'
                    )}
                </Button>
            </form>
        </motion.div>
    )
}
