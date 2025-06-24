"use client";

import Image from "next/image";
import React from "react";
import x from "../../asset/footer/x_logo.svg.svg";
import Linkdln from "../../asset/footer/Symbol.svg.svg";
import facebook from "../../asset/footer/Symbol.svg (1).svg";
import discord from "../../asset/footer/discord_symbol.svg.svg";
import elock from "../../asset/footer/eLOCK.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const index = () => {
  const [isMediumUp, setIsMediumUp] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMediumUp(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <footer
      className="flex flex-col lg:flex-row items-start lg:items-center lg:h-44 justify-between gap-8 lg:gap-0 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60 pt-8 md:pb-4 w-full mt-4 bg-cover bg-center bg-no-repeat"
      style={isMediumUp ? { backgroundImage: `url(${elock.src})` } : {}}
    >
      <p className="text-[32px] font-bold uppercase text-[#F3F3F3]">Logo</p>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-4 xl:gap-8">
        {["Features", "How it Works", "Pricing", "FAQs", "Contact us"].map(
          (text, i) => (
            <Link href="#" key={i}>
              <li className="text-[#F3F3F3] font-medium list-none text-base md:text-[20px] cursor-pointer">
                {text}
              </li>
            </Link>
          )
        )}
      </div>

      <div className="flex flex-row items-center justify-between md:justify-center gap-20 md:gap-[10rem] lg:gap-4 xl:gap-8">
        <Image src={x} alt="x logo" width={25} height={20} />
        <Image src={discord} alt="discord logo" width={25} height={20} />
        <Image src={facebook} alt="facebook logo" width={25} height={20} />
        <Image src={Linkdln} alt="linkedin logo" width={25} height={20} />
      </div>

      <Image
        src={elock}
        alt="elock"
        width={400}
        height={100}
        className="block md:hidden"
      />
    </footer>
  );
};

export default index;
