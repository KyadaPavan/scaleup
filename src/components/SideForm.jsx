import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SideForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [yourName, setYourName] = useState("");
  const [referralName, setReferralName] = useState("");
  const [referralEmail, setReferralEmail] = useState("");
  const [referralPhone, setReferralPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!yourName) {
      errors.yourName = "Your name is required";
    }
    if (!referralName) {
      errors.referralName = "Referral's name is required";
    }
    if (!referralEmail) {
      errors.referralEmail = "Referral's email is required";
    } else if (!/\S+@\S+\.\S+/.test(referralEmail)) {
      errors.referralEmail = "Email is invalid";
    }
    if (!referralPhone) {
      errors.referralPhone = "Referral's phone number is required";
    } else if (!/^\d{10}$/.test(referralPhone)) {
      errors.referralPhone = "Phone number should be of 10 digits";
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
        yourName,
        referralName,
        referralEmail,
        referralPhone,
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
        onClose();
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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 transition-opacity bg-black bg-opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-xl"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                Give Referral
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 transition-colors hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-6">
              <p className="max-w-4xl px-6 mx-auto  text-lg leading-relaxed md:px-0 text-[#04061c]">
                Refer a friend and enjoy a &nbsp;
                <span className="relative inline-block font-bold ">
                  get 10% off
                  <span className="absolute bottom-0 left-0 h-[2px] bg-[#04061c]  animate-fill-line"></span>
                </span>
                &nbsp; on your next service. It's our way of saying thanks for
                spreading the word!
              </p>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                className="w-full p-6 rounded-xl bg-gradient-to-t from-[#1e1f3e] via-[#663bd8] to-[#04061c]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Let's Get Started
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {formErrors.general && (
                    <p className="text-red-500">{formErrors.general}</p>
                  )}

                  <div className="flex flex-col">
                    {formErrors.yourName && (
                      <p className="text-sm text-red-500">
                        {formErrors.yourName}
                      </p>
                    )}
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    {formErrors.referralName && (
                      <p className="text-sm text-red-500">
                        {formErrors.referralName}
                      </p>
                    )}
                    <input
                      type="text"
                      placeholder="Enter referral's name"
                      className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                      value={referralName}
                      onChange={(e) => setReferralName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    {formErrors.referralEmail && (
                      <p className="text-sm text-red-500">
                        {formErrors.referralEmail}
                      </p>
                    )}
                    <input
                      type="email"
                      placeholder="Enter referral's email"
                      className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                      value={referralEmail}
                      onChange={(e) => setReferralEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    {formErrors.referralPhone && (
                      <p className="text-sm text-red-500">
                        {formErrors.referralPhone}
                      </p>
                    )}
                    <input
                      type="tel"
                      placeholder="Enter referral's phone number"
                      className="w-full p-3 text-white placeholder-white rounded-md bg-white/20 backdrop-blur-3xl focus:outline-none"
                      value={referralPhone}
                      onChange={(e) => setReferralPhone(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-white text-[#04061c] font-semibold px-4 py-2 rounded-full w-full hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Confirming Details..." : "Submit Referral"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SideForm;
