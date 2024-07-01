import Navbar from "@/components/navbar/Navbar";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";

export default async function ProtectedPage() {
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

      <div className="flex flex-col max-w-4xl h-min-screen mb-80 mt-12 px-3 text-center">
        <h1 className="text-4xl font-serif mb-4 text-neutral-950">
          Reservation Confirmed
        </h1>
        <p className="text-xl mb-8 text-neutral-950">
          Thank you for your reservation!
        </p>
        <Link
          href="/"
          className="bg-neutral-950 text-white px-4 py-2 rounded hover:bg-redText transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
}
