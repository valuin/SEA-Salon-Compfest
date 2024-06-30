'use server'

import { createClient } from "@/utils/supabase/server";

export async function getReviews() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, rating, review')
    .order('id', { ascending: false });

  if (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }

  return data;
}