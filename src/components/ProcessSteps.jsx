import React, { useContext } from "react";
import { Link } from "react-scroll";

export default function ProcessSteps() {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const steps = [
    {
      icon: "/step1.png",
      title: "Fill Out the Form",
      description:
        "Share your business needs in a quick and easy form to help us understand how we can support you.",
      step: "Step 1",
    },
    {
      icon: "/step2.png",
      title: "Receive a Call from Our Team",
      description:
        "Our team will connect with you within 24 hours to discuss your goals and guide you through our free services.",
      step: "Step 2",
    },
    {
      icon: "/step3.png",
      title: "Collaborative Discussion",
      description:
        "Connect with us on Google Meet for collaborative discussion & finalize your requirements. ",
      step: "Step 3",
    },
    {
      icon: "/step4.png",
      title: "Get Your Free Resources via Email",
      description:
        "Receive carefully curated reports straight to your inbox, ready to help you grow.",
      step: "Step 4",
    },
  ];

  return (
    <div className="container px-6 py-2 text-center " id="process">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-[#4b3f95] mb-6 text-center mt-14 lg:mt-20">
        What&apos;s The Process
      </h1>
      <p className="mb-1 lg:mb-20 text-center text-[#727272] ">
        Follow these simple steps to get your required FREE services
        created by our experts.
      </p>

      {/* Process Steps */}
      <div className="relative flex flex-col items-center justify-between max-w-6xl mx-auto space-y-12 lg:flex-row md:space-y-8">
        <div className="container absolute right-0 z-0 hidden w-5/6 border-t-2 border-black border-dotted left-16 top-16 lg:flex" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center space-y-4 text-center"
          >
            {/* Icon */}
            <div className="p-4 bg-[#E8D8FF] rounded-full">
              <img
                src={`./${imagePath}${step.icon}`}
                alt={`Icon for ${step.title}`}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            {/* Title */}
            <h2 className="w-48 text-lg font-semibold text-center lg:h-12 lg:w-48">
              {step.title}
            </h2>

            {/* Description */}
            <p className="w-64 text-sm text-gray-500 lg:h-24 lg:w-48">
              {step.description}
            </p>

            {/* Step Indicator */}
            <span className="inline-block px-3 py-1 text-sm text-white bg-gradient-to-r from-[#542282] to-[#503E94] rounded-full hover:from-[#503E94] hover:to-[#542282] cursor-pointer">
              {step.step}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button Mobile  */}
      <div className="block mt-12 lg:hidden">
        <Link to="freebtn" smooth={true} duration={500}>
          <button className="px-8 py-3 text-lg text-white transition bg-[#542282] rounded-full hover:bg-[#8101F7]">
            Get Free Service
          </button>
        </Link>
      </div>

      <div className="hidden mt-12 lg:block">
        <Link to="SOW" smooth={true} duration={500}>
          <button className="px-8 py-3 text-lg text-white transition bg-[#542282] rounded-full hover:bg-[#8101F7]">
            Get Free Service
          </button>
        </Link>
      </div>
    </div>
  );
}
