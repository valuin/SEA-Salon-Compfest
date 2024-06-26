import React from "react";
import Link from "next/link";
import ScissorIcon from "./ScissorIcon";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center border-b-2 border-b-neutral-900/100 h-16 bg-primary">
      <div className="w-full max-w-4xl flex justify-between items-center text-sm text-neutral-900 p-3">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center font-bold text-sm sm:text-xl cursor-pointer">
              <ScissorIcon />
              Sea Salon
            </div>
          </Link>
          <div className="hidden navbar:flex items-center space-x-10 ml-16">
            <Link href="/review" passHref>
              <div className="font-semibold text-lg hover:text-redText cursor-pointer">Review</div>
            </Link>
            <Link href="/services" passHref>
              <div className="font-semibold text-lg hover:text-redText cursor-pointer">Services</div>
            </Link>
          </div>
        </div>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;