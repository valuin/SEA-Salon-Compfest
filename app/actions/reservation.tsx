'use server'

import { createClient } from '@/utils/supabase/server';

export async function submitReservation(formData: FormData) {
  const supabase = createClient();
  
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const date = formData.get('date') as string;
  const time = formData.get('time') as string;

  const { data, error } = await supabase
    .from('reservations')
    .insert([{ name, phone, service, date, time }]);

  if (error) {
    console.error('Error inserting data:', error);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}