import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const TermsAndConditions = () => {
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
        <div className="md:max-w-3xl max-w-[90%] p-6 mx-auto my-10 text-gray-100 shadow-2xl bg-white/20 backdrop-blur-xl rounded-3xl">
          <h1 className="mb-2 text-3xl font-semibold  bg-gradient-to-r from-[#FFC979] via-[#F971BA] to-[#E57FFF] bg-clip-text text-transparent ">
            Terms And Conditions
          </h1>
          <p className="mb-6 text-sm text-gray-300">
            Last Updated: January 28, 2025
          </p>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              Agreement to Our Legal Terms
            </h2>
            <p>
              Welcome to Trustopay Innovations Pvt Ltd (“we,” “us,” or “our”).
              By using our website
              <a
                href="https://trustopay.com/"
                className="text-purple-400 underline"
              >
                {" "}
                https://trustopay.com/
              </a>
              and related services (“Services”), you agree to these Terms of
              Use. If you do not agree, please discontinue use immediately.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
            <p>
              Phone:{" "}
              <a href="tel:7016481606" className="text-purple-400 underline">
                7016481606
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sow@trustopay.com"
                className="text-purple-400 underline"
              >
                sow@trustopay.com
              </a>
            </p>
            <p>
              Address: C-1, Siddheshwar Plaza, TF-12, Ajwa Rd, Sayaji Park
              Society, Vadodara, Gujarat 390019
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
            <h2 className="mb-2 text-xl font-semibold">Key Terms</h2>
            <ul className="pl-5 list-disc">
              <li>
                Your Agreement: Using our Services confirms your acceptance of
                these Terms. Updates may occur, so check this page regularly.
              </li>
              <li>
                Age Requirement: You must be 18 or older to use our Services.
              </li>
              <li>
                Intellectual Property: All content, trademarks, and designs
                belong to us. Use them only for personal, non-commercial
                purposes.
              </li>
              <li>
                Prohibited Activities: Do not misuse the Services, post harmful
                content, or violate laws.
              </li>
              <li>
                Purchases & Subscriptions: Ensure accurate payment details. All
                sales are final, and subscription cancellations take effect at
                the end of the billing cycle.
              </li>
              <li>
                Privacy: Your use of the Services is subject to our{" "}
                <a href="/privacy-policy" className="text-purple-400 underline">
                  Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">
              Modifications and Contact
            </h2>
            <p>
              We reserve the right to modify or discontinue the Services without
              notice.
            </p>
            <p>
              For questions, contact us at{" "}
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

export default TermsAndConditions;
