import { createClient } from "@/utils/supabase/server";

export async function insertReservation(data:any) {
    const supabase = createClient();
    const { error } = await supabase
        .from('reservations')
        .insert([data]);

    if (error) throw new Error(error.message);
    return;
}