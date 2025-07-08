import React from "react";
import Link from "next/link";
import NavBar from "../../components/navbar";
import Button from "../../components/button";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="lg:py-6 rounded-md lg:px-2 lg:mx-20">
        <div className="flex justify-between items-center px-2 md:px-6 py-4 lg:px-2 lg:py-2 max-w-[964px] mx-auto  bg-[#242424] rounded-lg">
          <Link href="/" className="flex items-center gap-2">
            <p className="text-[32px] font-bold text-[#EFEFEF] pl-3">
              eLOCK
            </p>
          </Link>

          <div>
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
