"use client";

import React, { useState } from "react";
import Image from "next/image";
import Line from "../../asset/body/Line 1.png";
import tick from "../../asset/body/tick.png";

const plans = {
  monthly: [
    {
      title: "Starter",
      price: "$0",
      span: "/month",
      features: [
        "10GB secure vault storage",
        "Up to 100 credentials per month",
        "Invite up to 4 users",
        "Share access via secure links",
        "Manage up to 10 vaults/projects",
      ],
    },
    {
      title: "Pro",
      price: "$43.9",
      span: "/month",
      features: [
        "500GB secure vault storage",
        "Unlimited credential sharing",
        "Invite up to 50 users",
        "Share access via secure links",
        "Manage up to 50 vaults/projects",
      ],
    },
    {
      title: "Enterprise",
      price: "$6.99",
      span: "/month",
      features: [
        "1TB secure vault storage",
        "Unlimited credential sharing",
        "Unlimited team invites",
        "Share access via secure links",
        "Manage up to 100 vaults/projects",
      ],
    },
  ],
  yearly: [
    {
      title: "Starter",
      price: "$0",
      span: "/yr",
      features: [
        "10GB secure vault storage",
        "Up to 100 credentials per month",
        "Invite up to 4 users",
        "Share access via secure links",
        "Manage up to 10 vaults/projects",
      ],
    },
    {
      title: "Pro",
      price: "$39.99",
      span: "/yr",
      features: [
        "500GB secure vault storage",
        "Unlimited credential sharing",
        "Invite up to 50 users",
        "Share access via secure links",
        "Manage up to 50 vaults/projects",
      ],
    },
    {
      title: "Enterprise",
      price: "$69.99",
      span: "/yr",
      features: [
        "1TB secure vault storage",
        "Unlimited credential sharing",
        "Unlimited team invites",
        "Share access via secure links",
        "Manage up to 100 vaults/projects",
      ],
    },
  ],
};

const Index = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 pt-16 md:pb-4 w-full mt-10">
      <p className="text-[12px] text-base bg-[#0A0B0D] text-[#F3F3F3] border border-[#444] rounded-md p-2">
        Pricing
      </p>
      <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-6">
        Flexible Pricing That <br />
        Grows With You
      </h2>

      <div className="flex justify-center mb-10 border border-[#AAAAAA] rounded-full ">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-full ${
            billing === "monthly"
              ? "cursor-pointer bg-black text-[#F3F3F3]"
              : "bg-[#F3F3F3] text-[#111111]"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded-full ${
            billing === "yearly"
              ? "cursor-pointer bg-black text-[#F3F3F3]"
              : "bg-[#F3F3F3] text-[#111111]"
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans[billing].map((plan, i) => (
          <div
            key={i}
            className="w-full  bg-[#282828] border border-[#444444] p-4 rounded-xl shadow-lg flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-[#F3F3F3] text-[14px] md:text-base lg:text-[18px] font-semibold mb-2">
                {plan.title}
              </h3>
              <p className="text-[40px] font-normal mb-4">
                {plan.price}
                <span className="text-[#aaa] text-[14px] md:text-base lg:text-[18px]">
                  {plan.span}
                </span>
              </p>
              <p className="text-[#aaa] font-normal text-base md:text-[18px] lg:text-[20px] pb-4">
                Perfect for you.
              </p>
              <div className="w-full flex justify-center">
                <button
                  className={`w-full px-8 py-3 rounded-[8px] cursor-pointer ${
                    i === 1
                      ? "bg-white text-black hover:bg-black  hover:text-[#f3f3f3]"
                      : "bg-[#4D4D4D] text-[#F3F3F3] hover:bg-black hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>

              <Image src={Line} alt="Line" className="py-6" />

              <p className="text-[#aaa] text-[13px] md:text-base pt-2 pb-4 ">
                Features
              </p>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-[14px] md:text-base lg:text-[18px] text-[#F3F3F3] flex items-center gap-2"
                  >
                    <Image
                      src={tick}
                      alt="tick"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
