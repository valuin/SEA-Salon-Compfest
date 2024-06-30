import Navbar from "@/components/navbar/Navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  const { data: userData, error } = await supabase
    .from("users")
    .select("role")
    .eq("email", user.email)
    .single();

  if (error || !userData || userData.role !== "Admin") {
    return redirect("/");
  }

  // Continue with page logic for users with the 'Admin' role

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center bg-primary">
      <Navbar />
      <div className="mt-4">
        <h1 className="text-4xl text-center mb-4 text-neutral-950">
          Welcome to the protected page
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-neutral-950 text-primary px-4 py-2 rounded hover:bg-redText hover:-translate-y-1 hover:shadow-lg hover:shadow-redText/50 active:scale-90 duration-150">
              Add New Branch
            </button>
          </DialogTrigger>
          <DialogContent>
            <h1>LALALLALA</h1>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}
