import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services"; // Adjust the path as necessary

export default function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-3 bg-primary items-center">
      <Navbar />

      <div className="flex-1 w-full flex-col gap-5 px-3">
        <Header />
        <Services />
      </div>

      <Footer />
    </div>
  );
}