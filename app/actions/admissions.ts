'use server'

import { createClient } from '@/lib/supabase/server'
import { admissionFormSchema, type AdmissionFormData } from '@/lib/validations/admission'

type ActionState = {
    success: boolean
    message: string
    errors?: Record<string, string[]>
}

export async function submitAdmissionForm(
    prevState: ActionState | null,
    formData: FormData
): Promise<ActionState> {
    try {
        // Extract form data
        const rawData = {
            student_name: formData.get('student_name') as string,
            parent_name: formData.get('parent_name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            grade_applying_for: formData.get('grade_applying_for') as string,
        }

        // Validate with Zod
        const validationResult = admissionFormSchema.safeParse(rawData)

        if (!validationResult.success) {
            return {
                success: false,
                message: 'Validation failed',
                errors: validationResult.error.flatten().fieldErrors,
            }
        }

        const validatedData = validationResult.data

        // Create Supabase client
        const supabase = await createClient()

        // Insert into database
        const { error } = await supabase
            .from('admissions')
            .insert([validatedData])

        if (error) {
            console.error('Supabase error:', error)
            return {
                success: false,
                message: 'Failed to submit admission form. Please try again.',
            }
        }

        return {
            success: true,
            message: 'Admission form submitted successfully! We will contact you soon.',
        }
    } catch (error) {
        console.error('Unexpected error:', error)
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again.',
        }
    }
}

export async function getAnnouncements() {
    try {
        const supabase = await createClient()

        const { data, error } = await supabase
            .from('announcements')
            .select('*')
            .eq('is_active', true)
            .order('published_at', { ascending: false })

        if (error) {
            console.error('Supabase error:', error)
            return []
        }

        return data || []
    } catch (error) {
        console.error('Unexpected error:', error)
        return []
    }
}
