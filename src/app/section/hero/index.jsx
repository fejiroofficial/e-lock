import React from "react";
import Image from "next/image";

import lock from "../../asset/body/lock.png";
import star from "../../asset/header/Star .png";
import piggy from "../../asset/header/piggy.svg";
import flutter from "../../asset/header/flutter.svg";
import axa from "../../asset/header/axa.svg";
import kora from "../../asset/header/kora.svg";
import talent from "../../asset/header/talentQL.svg";
import enyanta from "../../asset/header/enyanta.svg";

const logos = [
  piggy,
  flutter,
  axa,
  kora,
  talent,
  piggy,
  flutter,
  axa,
  kora,
  talent,
  enyanta,
];

const buttonStyles =
  "w-full lg:max-w-[170px] px-8 py-3 rounded-[8px] cursor-pointer transition";

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center px-4 md:px-12 pt-16 mt-16 md:mt-2">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1 xl:pl-[4rem]">
          <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold mb-4 leading-tight text-[#F3F3F3]">
            Secure Your Password From Unauthorized Access
          </h1>
          <p className="text-base md:text-[18px] lg:text-[20px] text-[#F3F3F3] mb-6">
            Easily manage passwords and sign‑ins to every application from any device
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full max-w-[400px]">
            <button
              className={`${buttonStyles} bg-[#EFEFEF] text-black hover:bg-black hover:text-white`}
            >
              Get Started
            </button>
            <button
              className={`${buttonStyles} text-white border border-white hover:bg-black hover:text-white`}
            >
              Get Template
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src={lock} alt="Lock" width={500} height={300} />
        </div>
      </div>

      <footer className="w-full lg:w-[70%] mt-20 flex flex-col items-center gap-2 py-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image key={i} src={star} alt="Star" width={20} height={20} />
          ))}
        </div>

        <div className="relative w-full overflow-x-auto mt-6">
          <div className="flex gap-[24px] lg:gap-[40px] justify-center items-center whitespace-nowrap animate-scroll">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={150}
                height={40}
                className="md:w-[120px] lg:w-[225px] h-[40px]"
              />
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
