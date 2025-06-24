import React from "react";
import piggy from "../../asset/header/piggy.svg";
import axa from "../../asset/header/axa.svg";
import flutter from "../../asset/header/flutter.svg";
import talent from "../../asset/header/talentQL.svg";
import kora from "../../asset/header/kora.svg";
import enyanta from "../../asset/header/enyanta.svg";
import Image from "next/image";
import Faq from "../../components/faq/index";
import Testimonial from "../../components/testimoial/index";
import Pricing from "../../components/pricing/index";
import work from "../../asset/body/works.png";
import protect from "../../asset/body/Frame 129.png";
import built from "../../asset/body/Frame 130.png";
import monitor from "../../asset/body/Frame 131.png";
import tick from "../../asset/body/tick.png";
import key from "../../asset/body/Frame 125.png";
import line from "../../asset/body/Line 3.png";
import star from "../../asset/header/Star .png";
import Line from "../../asset/body/Line 4.png";
import close from "../../asset/body/close-sharp.png";
import padlock from "../../asset/body/padlock.png";

export default function Hero() {
  const faqData = [
    {
      question: "What is a password manager and how does it work?",
      answer:
        "A password manager securely stores your login credentials and help you auto fill them across websites and apps. Our tool encrypt your data end-to-end so only you and the team can access it.",
    },
    {
      question: "Is it safe to share passwords with team members?",
      answer:
        "Yes sharing passwords through our platform is completely secure. Unlike messaging app, we use encryption access control, and audit log to protect every login you share",
    },
    {
      question: "Can I control who has access to each login?",
      answer: "Yes, you can invite team members and manage access.",
    },
    {
      question: "Do you support two-factor authentication (2FA) and SSO?",
      answer: "You get a 14-day free trial with no credit card required.",
    },
    {
      question: "What happens if someone leaves the company?",
      answer: "You get a 14-day free trial with no credit card required.",
    },
    {
      question:
        "Is this tool suitable for small teams and large organizations?",
      answer: "You get a 14-day free trial with no credit card required.",
    },
  ];

  const testimonialsData = [
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
    {
      text: "eLOCK has provided us with a level of security we didn’t think was possible. Our confidence in our safety measures has skyrocketed.",
      name: "Lisa A",
      role: "Risk Manager @ Financial Services",
      image: "/assets/2f992c5c18be99302c59a576fef1b936ad5ca1da.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },

    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Fatima A",
      role: "HR Coordinator @ Facebook",
      image: "/assets/2f992c5c18be99302c59a576fef1b936ad5ca1da.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/2f992c5c18be99302c59a576fef1b936ad5ca1da.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/2f992c5c18be99302c59a576fef1b936ad5ca1da.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
    {
      text: "The ease of use and efficiency eLOCK provides has made onboarding new employees a breeze!",
      name: "Carlos M",
      role: "HR Coordinator @ Facebook",
      image: "/assets/90dd3bf910bbf6e12f81c74809a794e1cec80a7f.jpg",
    },
  ];
  
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 pt-16 md:pb-4 w-full mt-6">
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-4">
              We Simplify Password Management, Sharing, and Oversight
            </h2>
            <p className="text-base md:text-[18px] lg:text-[20px] font-medium text-[#AAA]">
              Easily manage passwords, share logins, and control access across
              your company. No more sticky notes. No more spreadsheets.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6 w-full">
              <button className="w-full lg:max-w-[170px] bg-[#EFEFEF] text-black px-8 py-3 rounded-[8px] hover:bg-black hover:text-white cursor-pointer">
                Get Started
              </button>
              <button className="w-full lg:max-w-[170px] text-white border border-white px-8 py-3 rounded-[8px] hover:bg-black hover:text-white cursor-pointer">
                Get Template
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={padlock} alt="Padlock" width={500} height={500} />
          </div>
        </div>

        <footer className="w-full lg:w-[70%] md:mt-20 flex flex-col items-center gap-2 overflow-scroll">
          <div className="flex flex-row items-center gap-1">
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
          </div>
          <div className="relative w-full overflow-x-scroll">
            <div className="flex gap-[24px] lg:gap-[40px] justify-center items-center whitespace-nowrap lg:w-full animate-scroll">
              {[
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
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Company ${index}`}
                  width={150}
                  height={40}
                  className="md:w-[120px] lg:w-[225px] h-[40px]"
                />
              ))}
            </div>
          </div>
        </footer>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-6">
          <div className="flex flex-row items-center gap-4 w-full lg:w-1/2">
            <p className="text-[#f3f3f3] font-medium text-[20px] md:text-[22px] lg:text-[24px]">
              The Problem
            </p>
            <Image
              src={line}
              alt="Line"
              width={30}
              height={30}
              className="w-[100px]"
            />
          </div>

          <div className="flex flex-col gap-2  w-full lg:w-1/2">
            <p className="text-[#F3F3F3] text-[24px] md:text-[28px] lg:text-[32px]">
              Your team shares passwords. But you don’t know where they’re
              stored or who has access.
            </p>
            <p className="text-[#aaa] text-base md:text-[18px] lg:text-[20px] font-medium">
              We give you a smart, secure way to manage and share passwords so
              your team can work faster, stay safe, and stay in control.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 pt-16 md:pb-4 w-full mt-6">
        <p className="text-[12px] text-base bg-[#0A0B0D] text-[#F3F3F3] border border-[#444] rounded-md p-2">
          Comparison
        </p>
        <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-4">
          See What makes Us <br />
          Stand Out
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="w-full flex flex-col items-center gap-4">
            <p className="text-[20px] md:text-[25px] lg:text-[32px] uppercase font-[800] text-[#F3F3F3]">
              Logo
            </p>
            <div className="w-full h-[420px] flex flex-col gap-6 bg-[#282828] border border-[#444444]  rounded-lg p-4">
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={tick}
                  alt="tick"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Easy password sharing for teams
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={tick}
                  alt="tick"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  End-to-end encrypted storage
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={tick}
                  alt="tick"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Built-in 2FA and SSO support
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={tick}
                  alt="tick"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Activity tracking and audit logs
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={tick}
                  alt="tick"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Beautiful, user-friendly dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            {" "}
            <p className="text-[20px] md:text-[25px] lg:text-[32px] font-medium italic text-[#AAAAAA]">
              Others
            </p>
            <div className="w-full h-[420px] flex flex-col gap-5.5 p-4 bg-[#282828] border border-[#444444] rounded-lg">
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Manual password sharing via chat or email
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Weak or unclear security standards
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  No native support for modern authentication
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  No visibility into user activity
                </p>
              </div>
              <Image
                src={Line}
                alt="Decorative Line"
                width={500}
                height={100}
                className="w-full max-w-[300px]"
              />
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={close}
                  alt="close"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                  Cluttered or outdated interfaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 pt-16 md:pb-4 w-full mt-6">
        <p className="text-[12px] text-base bg-[#0A0B0D] text-[#F3F3F3] border border-[#444] rounded-md p-2">
          Benefits
        </p>
        <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-4">
          Password Sharing <br /> made Safer
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full lg:w-1/2">
              <Image
                src={built}
                alt="Built"
                height={400}
                width={400}
                className="lg:h-[600px] lg:w-[450px] xl:w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4w-full lg:w-1/2">
              <Image src={key} alt="key" width={30} height={30} />
              <p className="text-[#aaa] text-[12px] md:text-base font-normal">
                Built-in Authenticator
              </p>
              <p className="text-[#F3F3F3] text-[32px] md:text-[38px] lg:text-[48px] font-semibold ">
                Built-in authenticator for extra protection
              </p>
              <p className="font-medium text-base md:text-[18px] lg:text-[20px] text-[#aaa]">
                No need for third-party apps, our platform includes a native 2FA
                code generator so your team can stay secure without switching
                tools.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={tick}
                    alt="tick"
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                    Generate secure codes in-app
                  </p>
                </div>

                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={tick}
                    alt="tick"
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                    Easily enforce 2FA for users and admins
                  </p>
                </div>
                <div className="flex items-start group">
                  <button className="uppercase cursor-pointer text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px] flex items-center gap-2">
                    <span className="underline">Get Started</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 no-underline">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-4w-full lg:w-1/2">
              <Image src={key} alt="key" width={30} height={30} />
              <p className="text-[#aaa] text-[12px] md:text-base font-normal">
                Breach Monitoring
              </p>
              <p className="text-[#F3F3F3] text-[32px] md:text-[38px] lg:text-[48px] font-semibold ">
                Monitor and catch threats before they escalate
              </p>
              <p className="font-medium text-base md:text-[18px] lg:text-[20px] text-[#aaa]">
                Stay ahead of potential breaches with real-time threat
                monitoring and smart alerts. Know exactly when, where, and how
                unusual activity is happening. tools.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={tick}
                    alt="tick"
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                    Get alerted to suspicious logins or device changes
                  </p>
                </div>

                <div className="flex items-start group">
                  <button className="uppercase cursor-pointer text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px] flex items-center gap-2">
                    <span className="underline">Learn More Started</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 no-underline">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={monitor}
                alt="Monitor"
                height={400}
                width={400}
                className="lg:h-[600px] lg:w-[450px]  xl:w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full lg:w-1/2">
              <Image
                src={protect}
                alt="Protect"
                height={400}
                width={400}
                className="lg:h-[600px] lg:w-[450px] xl:w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4w-full lg:w-1/2">
              <div>
                <Image src={key} alt="key" width={30} height={30} />
                <p className="text-[#aaa] text-[12px] md:text-base font-normal">
                  End-to-End Encryption
                </p>
              </div>
              <p className="text-[#F3F3F3] text-[32px] md:text-[38px] lg:text-[48px] font-semibold ">
                Protect your business with enterprise-grade security
              </p>
              <p className="font-medium text-base md:text-[18px] lg:text-[20px] text-[#aaa]">
                We use end-to-end encryption to make sure your team’s data is
                safe even from us. Every login, password, and action is secured
                from start to finish.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={tick}
                    alt="tick"
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                    End-to-end encryption for all credentials
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={tick}
                    alt="tick"
                    width={20}
                    height={20}
                    className="w-4 h-4"
                  />
                  <p className="text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                    Zero access to your stored data
                  </p>
                </div>
                <div className="flex items-start group">
                  <button className="uppercase cursor-pointer text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px] flex items-center gap-2">
                    <span className="underline">Learn More</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 no-underline">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto pl-4 md:pl-12 lg:pl-20 xl:pl-24 2xl:pl-40 pt-16 md:pb-4 w-full mt-6">
        <div className="w-full lg:w-1/2 pr-12 lg:pr-0">
          <div className="flex justify-center lg:justify-start mb-2">
            <p className="text-[12px] text-base bg-[#0A0B0D] w-[85px] text-[#F3F3F3] border border-[#444] rounded-md p-1">
              How it Works
            </p>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-center mb-4">
            Get Started with just 4 Easy Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 lg:mb-0">
            <div className="flex flex-col gap-1">
              <p className="bg-[#242424] h-8 w-8 grid place-items-center rounded-full text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                1
              </p>
              <p className="text-[#f3f3f3] text-[20px] md:text-[20px] lg:text-[24px] ">
                Invite Your Team
              </p>
              <p className="text-[#aaa] text-base md:text-[18px] lg:text-[20px] ">
                Easily onboard teammates & assign access roles in just a few
                clicks.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="bg-[#242424] h-8 w-8 grid place-items-center rounded-full text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                2
              </p>
              <p className="text-[#f3f3f3] text-[20px] md:text-[20px] lg:text-[24px] ">
                Store and Share
              </p>
              <p className="text-[#aaa] text-base md:text-[18px] lg:text-[20px] ">
                Save credentials securely and share logins without revealing
                actual passwords.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="bg-[#242424] h-8 w-8 grid place-items-center rounded-full text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                3
              </p>
              <p className="text-[#f3f3f3] text-[20px] md:text-[20px] lg:text-[24px] ">
                Track User Activity
              </p>
              <p className="text-[#aaa] text-base md:text-[18px] lg:text-[20px] ">
                Monitor who accessed what and receive instant alerts for unusual
                behavior.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="bg-[#242424] h-8 w-8 grid place-items-center rounded-full text-[#F3F3F3] text-base md:text-[18px] lg:text-[20px]">
                4
              </p>
              <p className="text-[#f3f3f3] font-normal text-[20px] md:text-[20px] lg:text-[24px] ">
                Secure and Comply
              </p>
              <p className="text-[#aaa] font-normal text-base md:text-[18px] lg:text-[20px] ">
                Use 2FA and SSO to meet your organization’s security
                requirements easily.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={work}
            alt="how it works"
            height={800}
            className="lg:h-[800px] object-contain"
          />
        </div>
      </section>

      <Pricing />

      <Testimonial testimonials={testimonialsData} />

      <Faq faqs={faqData} />

      <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60 pt-16 md:pb-4 w-full mt-6">
        <Image
          src={Line}
          alt="Decorative Line"
          width={500}
          height={100}
          className="w-full max-w-[500px] mb-6"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-[#F3F3F3] text-[32px] md:text-[56px] font-semibold">
            Try it now. Stay Secure <br className="hidden md:block" /> Forever
          </h3>
          <p className="text-[#aaa] text-base lg:text-[20px] font-medium">
            No more leaks, lost logins, or risky sharing. Just simple, secure{" "}
            <br className="hidden md:block" />
            access for your entire team.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full">
          <button className="w-full md:w-auto md:max-w-[170px] bg-[#EFEFEF] text-black px-8 py-3 rounded-[8px] hover:bg-black hover:text-white cursor-pointer">
            Get Started
          </button>
          <button className="w-full md:w-auto md:max-w-[170px] text-white border border-white px-8 py-3 rounded-[8px] hover:bg-black hover:text-white cursor-pointer">
            Get Template
          </button>
        </div>
        <Image
          src={Line}
          alt="Decorative Line"
          width={500}
          height={100}
          className="w-full max-w-[500px] mt-6"
        />
      </section>
    </div>
  );
}
