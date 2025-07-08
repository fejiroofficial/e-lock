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
  };

  return (
    <nav className="relative">
      <button
        className="text-white lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <Image src={menu} alt="menu-icon" width={30} height={30} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-screen bg-[#242424] z-40 shadow-lg">
          <div className="flex flex-col items-center gap-6 p-6">
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <AiOutlineClose size={24} />
            </button>

            <ul className="space-y-6 text-center pt-6 w-full">
              <li>
                <a
                  href="#features"
                  className="text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#howItWorks"
                  className="text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white normal hover:text-[#40C2FF]"
                  onClick={toggleMenu}
                >
                  FAQ
                </a>
              </li>
              <div className="block lg:hidden">
                <Button className="bg-[#EFEFEF] text-black normal p-3 w-full rounded-[8px]">
                  Start Free Trial
                </Button>
              </div>
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8">
        <li>
          <a href="#features" className="text-white normal hover:text-[#40C2FF] font-medium">
            Features
          </a>
        </li>
        <li>
          <a href="#howItWorks" className="text-white normal hover:text-[#40C2FF] font-medium">
            How it Works
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-white normal hover:text-[#40C2FF] font-medium">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="text-white normal hover:text-[#40C2FF] font-medium">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
