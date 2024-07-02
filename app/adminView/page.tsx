import { fetchBranches, Branch } from "@/app/actions/branchActions";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/admin/Card";
import AddNewBranch from "@/components/admin/AddNewBranch";
import AddNewService from "@/components/admin/AddNewService";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

export default async function AdminDashboard() {
  const branches: Branch[] = await fetchBranches();

  return (
    <div className="flex-1 w-full flex flex-col gap-5 items-center bg-primary">
      <Navbar />
      <div className="w-full px-4">
        <h1 className="text-2xl text-center mb-4 text-neutral-950">
          Welcome to admin dashboard
        </h1>
        {branches && branches.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 my-4">
            {branches.map((branch) => (
              <Card
                key={branch.id}
                id={branch.id}
                name={branch.name}
                location={branch.location}
                openingTime={branch.openingTime}
                closingTime={branch.closingTime}
                services={branch.services}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-700">
            No branches found. Add a new branch to get started.
          </p>
        )}
        <div className="text-center mt-4 space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-neutral-950 text-primary px-4 py-2 rounded hover-effect">
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

          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-neutral-950 text-white px-4 py-2 rounded hover-effect">
                Add New Service
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
              </DialogHeader>
              <AddNewService />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
}
