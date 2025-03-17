import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6A33D4",
      transition: { duration: 0.3, type: "tween" },
    },
  };
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen ">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/Successfully.gif"
              alt="Form Filled Successfully"
              className="w-48 h-48"
            />
          </div>
          <h1 className="text-4xl font-semibold text-[#4b3f95]">
            Thank you for getting in touch!
          </h1>
          <p className="w-2/3 mt-2 text-lg text-center text-gray-600">
            We've received your request of your service and will begin
            processing it shortly. A member from our team will contact you
            within 24-48 hours.
          </p>
          <p className="w-1/3 my-4 text-lg text-center text-gray-600 ">
            Need help or have questions? Contact us at{" "}
            <a href="mailto:support@trustopay.com" className="text-[#4b3f95]">
              support@trustopay.com
            </a>
          </p>

          <motion.button
            variants={buttonVariants}
            onClick={handleBackToHome}
            whileHover="hover"
            className="px-6 py-3 overflow-hidden text-white rounded-full bg-gradient-to-r from-[#250A47] to-[#743E7D] shadow-md font-semibold text-base"
          >
            Back To Home
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
