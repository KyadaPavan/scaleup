import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./AccountSetup.css";
import { FormHighlightContext } from "../context/FormHighlightContext";
const steps = [
  {
    title: "Fill Out the Form",
    description:
      "Share your business needs in a quick and easy form to help us understand how we can support you.",
  },
  {
    title: "Receive a Call from Our Team",
    description:
      "Our team will connect with you within 24 hours to discuss your goals and guide you through our services.",
  },
  {
    title: "Collaborative Discussion",
    description:
      "Connect with us on Google Meet for collaborative discussion & finalize your requirements.",
  },
  {
    title: "Get Your Resources via Email",
    description:
      "Receive carefully curated reports straight to your inbox, ready to help you grow.",
  },
];

export default function AccountSetup() {
  const [activeStep, setActiveStep] = useState(0);
  const [manualStep, setManualStep] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("Select a Service");
  const serviceRef = useRef();
  const services = [
    "Social Media Marketing",
    "Website Development",
    "Video Editing",
    "SEO Setup",
    "Logo Design",
    "Google Ads PPC",
    "App Development",
    "UI/UX Design",
    "Content Marketing",
    "Startup Essentials Pack",
    "Growth Booster Pack",
    "Complete Digital Pack",
    "Full Stack Digital Marketing Pack",
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
    setDropdownVisible(false);
  };

  const { formHighlight, setFormHighlight } = useContext(FormHighlightContext);

  const handleButtonClick = () => {
    setFormHighlight(true);
    setTimeout(() => setFormHighlight(false), 4000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (manualStep === null) {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [manualStep]);

  const handleStepClick = (index) => {
    setManualStep(index === manualStep ? null : index);
    setActiveStep(index);
  };

  const imagePath = import.meta.env.VITE_PATH || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!phonenumber) {
      errors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phonenumber)) {
      errors.phonenumber = "Phone number should be of 10 digits";
    }
    if (selectedService === "Select a Service") {
      errors.service = "Service is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // Validate environment variables
      const baseUrl = process.env.BASE_URL;
      const Endpoint = process.env.Mail_END_POINT;

      if (!baseUrl || !Endpoint) {
        throw new Error("API configuration is missing");
      }

      const formData = {
        name,
        email,
        phonenumber,
        service: selectedService,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(`${baseUrl}${Endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Request-ID": crypto.randomUUID(),
        },
        body: JSON.stringify(formData),
      });

      const responseClone = response.clone();

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully", data.message);

        // Redirect to different Razorpay links based on the selected service
        const serviceLinks = {
          "Social Media Marketing": "https://pages.razorpay.com/sowo",
          "Website Development": "https://pages.razorpay.com/sowo",
          "Video Editing": "https://pages.razorpay.com/sowo",
          "SEO Setup": "https://pages.razorpay.com/sowo",
          "Logo Design": "https://pages.razorpay.com/sowo",
          "Google Ads PPC": "https://pages.razorpay.com/sowo",
          "App Development": "https://pages.razorpay.com/sowo",
          "UI/UX Design": "https://pages.razorpay.com/sowo",
          "Content Marketing": "https://pages.razorpay.com/sowo",
          "Startup Essentials Pack": "https://pages.razorpay.com/sowo",
          "Growth Booster Pack": "https://pages.razorpay.com/sowo",
          "Complete Digital Pack": "https://pages.razorpay.com/sowo",
          "Full Stack Digital Marketing Pack":
            "https://pages.razorpay.com/sowo",
        };

        const redirectUrl =
          serviceLinks[selectedService] || "https://pages.razorpay.com/default";
        window.location.href = redirectUrl;
        return;
      }

      // Handle error responses
      switch (response.status) {
        case 400:
          const badRequestData = await response.text();
          setFormErrors({
            general: "Please check your form details and try again.",
          });
          break;

        case 429:
          setFormErrors({
            general: "Too many attempts. Please wait a moment and try again.",
          });
          break;

        default:
          try {
            const errorData = await response.json();
            setFormErrors({
              general:
                errorData.message ||
                "Form submission failed. Please try again.",
            });
          } catch {
            const textError = await responseClone.text();
            setFormErrors({
              general: "An unexpected error occurred. Please try again.",
            });
          }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormErrors({
        general: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full px-6  md:px-12 md:max-w-[80%] max-w-full mx-auto bg-center bg-cover md:pt-16"
      id="Process"
    >
      <div className="flex flex-col items-center justify-between w-full gap-10 lg:flex-row">
        {/* LEFT SECTION */}
        <div className="space-y-6 text-left lg:w-1/2">
          <h1 className="text-4xl md:text-left text-center  md:text-5xl font-semibold leading-tight text-[#2E2266] ">
            Connecting <br />
            Freelancers at <br /> Your
            <span className="text-[#856EE9] md:text-left text-center ">
              {" "}
              Fingertips!
            </span>
          </h1>
          <p className="text-xl text-gray-600 md:w-[90%] w-full md:text-left text-center ">
            Connecting you with the right freelancers to achieve your business
            goals faster.
          </p>

          {/* FORM BOX */}
          <div
            className={`w-full p-6 rounded-xl md:w-[90%] bg-gradient-to-t from-[#1e1f3e] via-[#663bd8] to-[#04061c] relative 
              ${
                formHighlight
                  ? "border-red-500 shadow-[0_0_10px_2px_rgba(255,0,0,0.8)]"
                  : "border-transparent shadow-[0_0_10px_2px_rgba(130,52,197,0.0)]"
              }   `}
            id="Form"
          >
            {formHighlight && (
              <div className="w-full p-2 text-sm font-medium text-left text-red-500">
                * Fill out this form to get started with your service
              </div>
            )}

            <h3 className="text-lg font-semibold text-white">
              Let's Get Started
            </h3>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              {formErrors.general && (
                <p className="text-red-500">{formErrors.general}</p>
              )}

              <div className="flex flex-col ">
                {formErrors.name && (
                  <p className="text-sm text-red-500">{formErrors.name}</p>
                )}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                {formErrors.email && (
                  <p className="text-sm text-red-500">{formErrors.email}</p>
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                {formErrors.phonenumber && (
                  <p className="text-sm text-red-500">
                    {formErrors.phonenumber}
                  </p>
                )}
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>

              <div>
                {formErrors.service && (
                  <p className="text-sm text-red-500 ">{formErrors.service}</p>
                )}
                <div
                  className="relative w-full p-3 mt-1 text-white rounded-lg cursor-pointer bg-white/20 backdrop-blur-3xl focus:outline-none"
                  onClick={() => setDropdownVisible(!isDropdownVisible)}
                >
                  {selectedService}
                </div>
                <input type="hidden" ref={serviceRef} value={selectedService} />

                <AnimatePresence>
                  {isDropdownVisible && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute z-10 mt-1 overflow-x-hidden overflow-y-auto text-white rounded-lg shadow-lg bg-white/20 backdrop-blur-3xl lg:w-96 md:w-88 w-72 max-h-60"
                    >
                      {services.map((service, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelect(service)}
                          className="p-2  cursor-pointer hover:bg-[#04061c] "
                        >
                          {service}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <button
                className="bg-white text-[#04061c] font-semibold px-4 py-2 rounded-full w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Conforming Details..." : "Get Started"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4 lg:w-1/2 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-4 md:p-6 md:py-10 py-8 rounded-2xl shadow-lg relative transition-all duration-500 ${
                activeStep === index ? "bg-white" : "bg-white"
              } overflow-hidden cursor-pointer`}
              onClick={() => handleStepClick(index)}
            >
              {/* PROGRESS BAR */}
              {activeStep === index && (
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#1e1f3e] via-[#663bd8] to-[#04061c] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              )}

              {/* STEP HEADER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:w-full w-[90%]">
                  <img
                    src={activeStep === index ? "./verify.png" : "./add.png"}
                    alt={activeStep === index ? "Check" : "Plus"}
                    className="w-6 h-6"
                  />
                  <h4 className="text-lg font-semibold ">{step.title}</h4>
                </div>
              </div>

              {/* STEP DESCRIPTION */}
              {(activeStep === index || manualStep === index) &&
                step.description && (
                  <motion.p
                    className="mt-2 text-gray-600 max-w-[70%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                )}
              {/* Step Number at the Bottom */}
              <span className="absolute bottom-0 right-0 text-7xl font-bold text-transparent bg-clip-text  mr-4 bg-gradient-to-r from-[#663bd8] via-[#663bd8] to-[#663bd8] opacity-50">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
