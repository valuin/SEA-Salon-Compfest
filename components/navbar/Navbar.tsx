import React from "react";
import NavbarContent from "./NavbarContent";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full flex justify-center border-b-2 border-b-neutral-900/100 h-16 bg-primary scroll-smooth">
      <div className="w-full max-w-4xl flex justify-between items-center text-sm text-neutral-900 p-3 scroll-smooth">
        <NavbarContent />
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;