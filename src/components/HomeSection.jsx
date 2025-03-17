import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Spotlight } from "./ui/Spotlight";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import SideForm from "./SideForm";

const HomeSection = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const [isBrowser, setIsBrowser] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full px-4 mb-16 text-center text-white bg-center bg-cover bg-gradient-to-r from-[#1e1f3e] via-[#663bd8] to-[#04061c]"
      id="home"
    >
      <div>
        <Spotlight
          className="h-screen top-8 left-10 md:-left-40 md:-top-20"
          fill="white"
        />
        <Spotlight className="h-screen left-20 -top-8" fill="#7D3DF9" />
      </div>
      <div className="px-0 mx-auto max-w-8xl md:max-w-6xl sm:px-6 md:px-8">
        <h1 className="mb-8 mt-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug lg:leading-[4.5rem] text-white/97 md:block hidden">
          Connecting You with Expert Freelancers for &nbsp;
          <span className="block text-transparent bg-white bg-clip-text ">
            <TypeAnimation
              sequence={[
                "LOGO DESIGN",
                1000,
                "WEBSITE DEVELOPMENT",
                1000,
                "APP DEVELOPMENT",
                1000,
                "DIGITAL MARKETING",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h1>
        <h1 className="mb-8 mt-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug lg:leading-[4.5rem] text-white block md:hidden">
          Connecting You with Expert Freelancers for
          <span className="block text-transparent bg-white bg-clip-text">
            <TypeAnimation
              sequence={[
                "LOGO DESIGN",
                1000,
                "APP DEVELOPMENT",
                1000,
                "DIGITAL MARKETING",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="max-w-4xl px-6 mx-auto mb-6 text-lg leading-relaxed md:px-0 text-white/80">
          ScaleUp matches businesses with expert freelancers for custom digital
          solutions: logos, websites, apps, and marketing. We also offer bundled
          services for complete business growth.
        </p>
        <p className="max-w-4xl px-6 mx-auto mb-8 text-lg leading-relaxed md:px-0 text-white/80">
          Refer a friend and enjoy a &nbsp;
          <span className="relative inline-block font-bold text-white">
            get 10% off
            <span className="absolute bottom-0 left-0 h-[2px] bg-white animate-fill-line"></span>
          </span>
          &nbsp; on your next service. It's our way of saying thanks for
          spreading the word!
        </p>
        <div className="flex flex-col gap-10 mx-auto w-fit md:flex-row">
          {/* <button className="px-6 py-4  text-white transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#663bd8] to-[#7d55dd] hover:scale-105">
            View all service
          </button> */}
          <ScrollLink
            to="Services"
            smooth={true}
            duration={500}
            className="cursor-pointer "
            title="ScaleUp - Services"
            aria-label="ScaleUp Services"
          >
            <button className="px-6 py-4 text-white duration-300 rounded-full shadow-2xl bg-[url('/card-1.png')] bg-cover bg-center flex items-center gap-4 hover:gap-6 justify-center hover:shadow-[0_0_20px_rgba(125,61,249,0.1)] hover:scale-105 transition-all text-lg">
              Explore Our Services
              <FaArrowRight className="text-lg transition-transform transform group-hover:translate-x-1" />
            </button>
          </ScrollLink>

          <button
            onClick={handleOpenForm}
            className="px-6 py-4 text-white duration-300 rounded-full shadow-2xl bg-[url('/card-1.png')] bg-cover bg-center flex items-center gap-4 hover:gap-6 justify-center hover:shadow-[0_0_20px_rgba(125,61,249,0.1)] hover:scale-105 transition-all text-lg"
          >
            Refer & Save 10%
            <FaArrowRight className="text-lg transition-transform transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <SideForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );
};

export default HomeSection;
