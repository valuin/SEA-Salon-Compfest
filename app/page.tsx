import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 bg-primary items-center">
      <Navbar />

      <div className="flex-1 w-full flex-col gap-10 max-w-4xl px-3">
        <Header />
      </div>

      <div className="flex flex-col mt-24 items-center">
        <div className="text-center w-full">
          <p className="text-neutral-950 font-bold text-4xl">Our Services</p>
        </div>
        <div className="flex justify-around items-center mt-8 w-full">
          <div className="flex flex-col items-center p-4">
            <div className="bg-gray-500 h-64 w-64 rounded-xl"></div>
            <p className="mt-4 text-2xl font-semibold text-neutral-950">Hair Styling</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
