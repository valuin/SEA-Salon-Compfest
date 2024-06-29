import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";

export default function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-3 bg-primary items-center scroll-smooth">
      <Navbar />

      <div className="flex-1 w-full flex-col gap-5 px-3">
        <Header />
        <Services />
        <Reviews />
      </div>

      <Footer />
    </div>
  );
}
