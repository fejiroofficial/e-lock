import React from "react";
import Link from "next/link";
import NavBar from "../../components/navbar";
import Button from "../../components/button";

const Header = () => {
  return (
    <div className="relative pb-[6rem]">
      <header className="px-4 lg:py-6 lg:px-0 lg:mx-20 lg:fixed lg:top-6 lg:left-1/2 -translate-x-1/2 z-50 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6 py-4 bg-[#242424] rounded-lg mx-auto max-w-[964px]">
          <Link href="/" className="flex items-center gap-2">
            <p className="text-2xl md:text-[32px] font-bold text-[#EFEFEF] pl-1 md:pl-3">
              eLOCK
            </p>
          </Link>

          <div className="w-full md:w-auto">
            <NavBar />
          </div>

          <div className="hidden lg:block">
            <Button className="bg-[#EFEFEF] text-black normal px-8 py-3 max-w-[170px] rounded-[8px] hover:bg-black hover:text-white cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
