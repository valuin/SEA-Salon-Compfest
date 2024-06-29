"use client";
import React, { useState } from "react";
import Link from "next/link";
import ScissorIcon from "../ScissorIcon";

const NavbarContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center scroll-smooth">
        <button
          className="focus:outline-none mr-4 navbar:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-16 6h16"></path>
          </svg>
        </button>
        <Link href="/" passHref>
          <div className="flex items-center font-bold text-sm sm:text-xl cursor-pointer">
            <ScissorIcon />
            Sea Salon
          </div>
        </Link>
        <div className="hidden navbar:flex items-center space-x-10 ml-16">
          <Link href="/review" passHref>
            <div className="font-semibold text-lg hover:text-redText cursor-pointer">
              Review
            </div>
          </Link>
          <Link href="/#services-section" passHref>
            <div className="font-semibold text-lg hover:text-redText cursor-pointer">
              Services
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`navbar:hidden fixed top-16 left-0 right-0 bg-primary border-b border-neutral-900/100 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-2">
          <Link href="/review" passHref>
            <div className="block py-2 font-semibold text-lg hover:text-redText cursor-pointer">
              Review
            </div>
          </Link>
          <Link href="/#services-section" passHref>
            <div className="block py-2 font-semibold text-lg hover:text-redText cursor-pointer">
              Services
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarContent;
