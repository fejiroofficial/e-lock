import React from "react";
import line from "../../asset/problem/line.svg";
import Image from "next/image";

export default function Problem() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:gap-6 container mx-auto items-start md:py-[6rem] py-[3rem] mt-[8rem] md:mt-[10rem] lg:mt-1 px-6">
      <div className="flex justify-center items-center gap-6 lg:pl-[8rem] pb-10">
        <h2 className="text-[20px] lg:text-[24px] font-medium text-[#F3F3F3]">
          The Problem
        </h2>
        <Image
          src={line}
          alt="line"
          className="w-[80px] md:w-[160px] h-[1px]"
        />
      </div>

      <div className="space-y-6 max-w-xl">
        <p className="text-[24px] lg:text-[32px] text-[#F3F3F3]">
          Your team shares passwords. But you don’t know where they’re stored or
          who has access.
        </p>
        <p className="text-[16px] md:text-[20px] text-[#AAAAAA]">
          We give you a smart, secure way to manage and share passwords so your
          team can work faster, stay safe, and stay in control.
        </p>
      </div>
    </div>
  );
}
