import { z } from 'zod'

export const admissionFormSchema = z.object({
    student_name: z.string().min(2, 'Student name must be at least 2 characters'),
    parent_name: z.string().min(2, 'Parent name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number is too long'),
    grade_applying_for: z.string().min(1, 'Please select a grade'),
})

export type AdmissionFormData = z.infer<typeof admissionFormSchema>
