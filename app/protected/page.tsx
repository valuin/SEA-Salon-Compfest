import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-primary">
      <Navbar />

      <div className="flex flex-col max-w-4xl px-3">
        <Header />
      </div>
      <div className="mt-24">
        <h1 className="text-4xl text-center mt-10 text-neutral-950">Welcome to the protected page</h1>
      </div>

      <Footer />
    </div>
  );
}
