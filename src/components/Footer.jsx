import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <footer className="container px-8 pt-20 pb-0 text-white bg-center bg-cover lg:pb-10 md:px-12">
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
        {/* Left Side */}
        <div className="mb-0 text-center lg:mb-6 md:mb-0 md:text-left">
          <p className="flex items-center justify-center gap-2 text-4xl font-semibold lg:justify-start  bg-[#fff] bg-clip-text text-transparent mb-6 mx-10 md:mx-0 text-center md:text-left">
            ScaleUp with Trustopay
          </p>

          <div className="w-full md:w-4/6">
            <p className="p-4 mx-10 mt-2 mb-6 text-center md:mb-0 sm:text-left md:text-base text-slate-200 lg:p-0 md:mx-0">
              ScaleUp connects you with expert freelancers for custom digital
              solutions and bundled services that drive complete business
              growth.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 mt-10 md:items-start">
            <div className="flex gap-3 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="w-5 h-5 text-white transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
              <a
                href="mailto:scaleup@trustopay.com"
                aria-label="Email Support"
                className="text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                scaleup@trustopay.com
              </a>
            </div>

            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                className="w-5 h-5 text-white transition-all duration-300 hover:scale-125 hover:-rotate-12 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
              <a
                href="tel:+917016481606"
                aria-label="Call Support"
                className="text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                7016481606
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center mt-6 md:items-end md:mt-20">
          {/* Socials */}
          <div className="flex space-x-4">
            <a
              href="mailto:scaleup@trustopay.com"
              className="text-white transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              aria-label="socials-mail-icon"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="1x"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/trustopayy/"
              target="_blank"
              className="text-white transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              aria-label="socials-linkedin-icon"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="1x"
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://youtube.com/@trustopay.?si=qk8MTOeL6pVfQv4o"
              target="_blank"
              className="text-white transition-all duration-300 hover:scale-125 hover:-rotate-12 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              aria-label="socials-youtube-icon"
            >
              <FontAwesomeIcon icon={faYoutube} size="1x" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/trustopay_official?igsh=MTBhcmg5bXJobHliYQ=="
              target="_blank"
              className="text-white transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              aria-label="socials-instagram-icon"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative flex-wrap pt-4 text-center lg:mt-10 md:text-left">
        {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFC979] via-[#F971BA] to-[#E57FFF]" /> */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200 md:justify-between">
          <div>© Copyright 2025 </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink
              to="/privacy-policy"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/refund-policy"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Refund Policy
            </NavLink>
            <NavLink
              to="/terms-and-conditions"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Terms & Conditions
            </NavLink>
            <NavLink
              to="/contact-us"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
