import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const navbarItems = [
    { to: "Services", label: "Services" },
    { to: "ServicePacakage", label: "ServicePackage" },
    { to: "Process", label: "Process" },
    { to: "FAQs", label: "FAQs" },
  ];
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  const handleMobileLinkClick = (link) => {
    setMenuOpen(false);
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "tween" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6A33D4",
      transition: { duration: 0.3, type: "tween" },
    },
  };

  const imagePath = import.meta.env.VITE_PATH || "/";

  return (
    <>
      <nav
        className={`fixed z-[100] w-screen  shadow-lg transition-all duration-300 bg-white/20 backdrop-blur-2xl   ${
          isScrollingDown ? "-top-20" : "top-0"
        }`}
      >
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          {/* Logo */}

          {isBrowser ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer "
              title="ScaleUp - Home"
              aria-label="ScaleUp Home"
            >
              <img
                src={`./${imagePath}/tp_whitelogo.svg`}
                alt="Trustopay"
                className="w-40 py-6 ml-4 md:py-0 lg:w-44 md:w-44"
              />
            </ScrollLink>
          ) : (
            <a
              href="/"
              className="text-base font-normal transition-colors duration-300 cursor-pointer "
            >
              <img
                src={`./${imagePath}/tp_whitelogo.svg`}
                alt="Trustopay"
                className="w-40 py-10 md:py-0 lg:w-44 md:w-44"
              />
            </a>
          )}

          {/* Desktop Menu */}

          <div className="items-center hidden space-x-8 text-lg lg:flex">
            {navbarItems.map((item) => (
              <React.Fragment key={item.to}>
                {isBrowser ? (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="relative inline-block font-semibold text-[#04061c] cursor-pointer hover:text-[#fff] transition-colors duration-300"
                  >
                    <motion.span
                      variants={linkVariants}
                      whileHover="hover"
                      style={{ display: "inline-block" }}
                      className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#fff] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </motion.span>
                  </ScrollLink>
                ) : (
                  <a
                    href={`/${item.to}`}
                    className="text-[white] font-normal text-base  transition-colors duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                )}
              </React.Fragment>
            ))}

            <div className="relative hidden group lg:block md:block">
              {isBrowser ? (
                <ScrollLink to="Services" smooth={true} duration={500}>
                  <button className="px-6 py-2 text-white duration-300 rounded-full shadow-2xl bg-[url('/card-1.png')] bg-cover bg-center flex items-center gap-4 hover:gap-6 justify-center hover:shadow-[0_0_20px_rgba(125,61,249,0.1)] hover:scale-105 transition-all text-lg">
                    Get Service
                  </button>
                </ScrollLink>
              ) : (
                <a
                  href="/pricing"
                  className="text-[white] font-normal text-base transition-colors duration-300 cursor-pointer"
                >
                  Get Service
                </a>
              )}
            </div>
          </div>

          {/* Enroll Button */}

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <AiOutlineClose className="text-[#04061c] text-3xl font-bold " />
              ) : (
                <AiOutlineMenu className="text-[#04061c] text-3xl font-bold " />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="flex flex-col items-center justify-center p-4 space-y-4 text-xl font-semibold text-white shadow-md lg:hidden"
            >
              {navbarItems.map((link) => (
                <React.Fragment key={link.to}>
                  {isBrowser ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="block transition-colors duration-300 cursor-pointer text-[#04061c]"
                      onClick={() => handleMobileLinkClick(link)}
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <a
                      href={`/${link.to}`}
                      className="block text-[white]  transition-colors duration-300 cursor-pointer"
                      onClick={() => handleMobileLinkClick(link)}
                    >
                      {link.label}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </>
  );
};

export default Navbar;
