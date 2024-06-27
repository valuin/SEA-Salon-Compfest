import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurServices from "@/components/Services"; // Adjust the path as necessary

export default function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-10 bg-primary items-center">
      <Navbar />

      <div className="flex-1 w-full flex-col gap-5 px-3">
        <Header />
        <OurServices />
      </div>

      <Footer />
    </div>
  );
}