import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const RefundPolicy = () => {
  const navigate = useNavigate();
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "tween" },
    },
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e1f3e] via-[#663bd8] to-[#04061c]">
        <div className="md:max-w-3xl max-w-[90%] p-6 mx-auto my-12 text-gray-100 shadow-2xl bg-white/20 backdrop-blur-xl rounded-3xl ">
          <h1 className="mb-2 text-3xl font-semibold  bg-gradient-to-r from-[#FFC979] via-[#F971BA] to-[#E57FFF] bg-clip-text text-transparent ">
            Refund Policy
          </h1>
          <p className="mb-6 text-sm text-gray-300">
            Last Updated: January 28, 2025
          </p>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              Returns and Refunds Policy.
            </h2>
            <p>Non-tangible irrevocable goods (“Digital products”)</p>
          </section>

          <section className="mb-6">
            <p>
              We do not issue refunds for non-tangible irrevocable goods
              (“digital products”) once the order is confirmed.
            </p>
            <p>
              We recommend contacting us for assistance if you experience any
              issues receiving or downloading our products.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">Who We Are</h2>
            <p>
              We are a company registered in India at the address above. Contact
              us via email or phone for any queries.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              Contact us for any issues:
            </h2>
            <p>
              If you have any questions about our Returns and Refunds Policy,
              please contact us:
            </p>
            <p>
              – By email: &nbsp;
              <a
                href="mailto:sow@trustopay.com"
                className="text-purple-400 underline"
              >
                sow@trustopay.com
              </a>
              .
            </p>
          </section>
        </div>
        <div className="flex items-center justify-center my-10">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="px-6 py-4 text-white duration-300 rounded-full shadow-2xl bg-[url('/card-1.png')] bg-cover bg-center flex items-center gap-4 hover:gap-6 justify-center hover:shadow-[0_0_20px_rgba(125,61,249,0.1)] hover:scale-105 transition-all"
            onClick={() => navigate("/")}
          >
            Back To Home
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
