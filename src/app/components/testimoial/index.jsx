"use client";

import React from "react";
import Image from "next/image";

const index = ({ testimonials }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60 pt-16 md:pb-4 w-full mt-10">
        <p className="text-[12px] text-base bg-[#0A0B0D] text-[#F3F3F3] border border-[#444] rounded-md p-2">Testimonials</p>
      <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-6">
      What Other are Saying <br/> About Us
      </h2>

      <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col justify-between shadow-lg h-full"
          >
            <p className="text-base lg:text-[20px] font-semibold mb-6">
              “{testimonial.text}”
            </p>
            <div className="flex flex-row gap-2 pt-4 items-start mt-auto">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
               className="w-[48px] h-[48px] rounded-full object-cover mb-2"
              />
              <div className='flex flex-col'>
              <span className="text-base lg:text-[20px] font-semibold pb-2">
                {testimonial.name}
              </span>
              <span className="text-[14px] lg:text-[18px] text-[#aaa] font-medium">
                {testimonial.role}
              </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
