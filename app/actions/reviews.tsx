'use server'

import { createClient } from '@/utils/supabase/server';

export async function submitReview(formData: FormData) {
    const supabase = createClient();
    
    const name = formData.get('name') as string;
    const review = formData.get('review') as string;
    const rating = formData.get('rating') as string;
    
    const { data, error } = await supabase
        .from('reviews')
        .insert([{ name, review, rating }]);
    
    if (error) {
        console.error('Error inserting data:', error);
        return { success: false, error: error.message };
    }
    
    return { success: true, data };
    }