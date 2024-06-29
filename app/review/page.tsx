import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import ReviewForm from "@/components/ReviewForm";

export default function ReviewPage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center bg-primary">
      <Navbar />
      <ReviewForm />

      <Footer />
    </div>
  );
}
