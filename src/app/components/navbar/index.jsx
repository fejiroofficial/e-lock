"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import menu from "../../asset/svg/menu.svg";
import Image from "next/image";
import Button from "../button";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <nav className="relative">
      {/* Mobile Menu Button */}
      <button
        className="text-white lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <Image src={menu} alt="menu-icon" width={30} height={30} />
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#242424] z-50 flex flex-col items-center justify-center px-6">
    
          <button
            className="absolute top-6 right-6 text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <AiOutlineClose size={28} />
          </button>

          <ul className="space-y-6 text-center mt-10 w-full">
            <li>
              <a
                href="#features"
                className="text-white text-lg hover:text-[grey]"
                onClick={toggleMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#howItWorks"
                className="text-white text-lg hover:text-[grey]"
                onClick={toggleMenu}
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-white text-lg hover:text-[grey]"
                onClick={toggleMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white text-lg hover:text-[grey]"
                onClick={toggleMenu}
              >
                FAQ
              </a>
            </li>

            {/* Mobile CTA Button */}
            <div className="w-full pt-4">
              <Button className="bg-[#EFEFEF] text-black text-base py-3 w-full rounded-[8px]">
                Start Free Trial
              </Button>
            </div>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8">
        <li>
          <a href="#features" className="text-white hover:text-[grey] font-medium">
            Features
          </a>
        </li>
        <li>
          <a href="#howItWorks" className="text-white hover:text-[grey] font-medium">
            How it Works
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-white hover:text-[grey] font-medium">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="text-white hover:text-[grey] font-medium">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
