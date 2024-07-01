import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/admin/Card";
import AddNewBranch from "@/components/admin/AddNewBranch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
interface Branch {
  id: number;
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
  services: {
    service: {
      id: number;
      name: string;
      duration: number;
    };
  }[];
}

export default async function AdminDashboard() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    return redirect("/auth/login");
  }

  const { data: userData, error: roleError } = await supabase
    .from("users")
    .select("role")
    .eq("email", user.email)
    .single();

  if (roleError || !userData || userData.role !== "Admin") {
    return redirect("/");
  }

  const { data: branches, error: branchesError } = (await supabase.from(
    "branches"
  ).select(`
      id,
      name,
      location,
      openingTime,
      closingTime,
      services:branch_services(
        service:services(id, name, duration)
      )
    `)) as { data: Branch[] | null; error: any };

  if (branchesError) {
    console.error("Error fetching branches:", branchesError);
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-5 items-center bg-primary">
      <Navbar />
      <div className="w-full px-4">
        <h1 className="text-2xl text-center mb-4 text-neutral-950">
          Welcome to admin dashboard
        </h1>
        {branches && branches.length > 0 ? (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4 my-4">
              {branches.map((branch) => (
                <Card key={branch.id} {...branch} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-neutral-700">
            No branches found. Add a new branch to get started.
          </p>
        )}
        <div className="text-center mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-neutral-950 text-primary px-4 py-2 rounded hover:bg-redText hover:-translate-y-1 hover:shadow-lg hover:shadow-redText/50 active:scale-90 duration-150">
                Add New Branch
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Branch</DialogTitle>
              </DialogHeader>
              <AddNewBranch />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
}
