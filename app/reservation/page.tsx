import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ReservationForm from "@/components/ReservationForm";

export default async function ReservationPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-primary">
      <Navbar />

      <div className="flex flex-col max-w-4xl px-3 w-full">
        <h1 className="text-4xl text-center mt-10 text-neutral-950 font-serif mb-8">
          Make a Reservation
        </h1>
        <ReservationForm />
      </div>

      <Footer />
    </div>
  );
}
