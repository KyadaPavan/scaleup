import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const PrivacyPolicy = () => {
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
          <h1 className="mb-2 text-3xl font-semibold  bg-gradient-to-r from-[#1e1f3e] via-[#663bd8] to-[#04061c] bg-clip-text text-transparent ">
            Privacy Policy
          </h1>
          <p className="mb-6 text-sm text-gray-300">
            Last Updated: January 28, 2025
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">
              Interpretation and Definitions
            </h2>
            <h3 className="mt-4 text-lg font-semibold">• Interpretation</h3>
            <p>
              The words with capitalized initials have defined meanings under
              the following conditions.
            </p>

            <h3 className="mt-4 text-lg font-semibold">• Definitions</h3>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Account:</strong> A unique account created for You to
                access our Service.
              </li>
              <li>
                <strong>Affiliate:</strong> An entity under common control with
                our Company.
              </li>
              <li>
                <strong>Company:</strong> Trustopay Innovations Pvt Ltd, located
                at TF-12, Shree Siddheshwar Hallmark, Ajwa Road, Vadodara.
              </li>
              <li>
                <strong>Cookies:</strong> Small files placed on Your device to
                track website activity.
              </li>
              <li>
                <strong>Country:</strong> Gujarat, India.
              </li>
              <li>
                <strong>Device:</strong> Any device that can access the Service.
              </li>
              <li>
                <strong>Personal Data:</strong> Information relating to an
                identifiable individual.
              </li>
              <li>
                <strong>Service:</strong> The Website.
              </li>
              <li>
                <strong>Service Provider:</strong> Third parties processing data
                on behalf of the Company.
              </li>
              <li>
                <strong>Usage Data:</strong> Data collected automatically from
                the Service.
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://trustopay.com/" className="text-purple-400">
                  Trustopay
                </a>
                .
              </li>
              <li>
                <strong>You:</strong> The individual accessing or using the
                Service.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">
              Collecting and Using Your Personal Data
            </h2>
            <h3 className="mt-4 text-lg font-semibold">
              • Types of Data Collected
            </h3>
            <p>
              <strong>Personal Data:</strong> Includes, but is not limited to:
            </p>
            <ul className="ml-6 list-disc">
              <li>
                Email:{" "}
                <a href="mailto:sow@trustopay.com" className="text-purple-400">
                  sow@trustopay.com
                </a>
              </li>
              <li>First and last name</li>
              <li>
                Phone:{" "}
                <a href="tel:+917016481606" className="text-purple-400">
                  +91 7016481606
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">
              Tracking Technologies and Cookies
            </h2>
            <p>
              We use cookies to track activity and store certain information.
            </p>
            <h3 className="mt-4 text-lg font-semibold">• Types of Cookies</h3>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Essential Cookies:</strong> Allow basic functionalities.
              </li>
              <li>
                <strong>Acceptance Cookies:</strong> Identify if users accept
                cookies.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Store user preferences.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Use of Your Personal Data</h2>
            <p>We use personal data to:</p>
            <ul className="ml-6 list-disc">
              <li>Provide and maintain our Service.</li>
              <li>Manage your account.</li>
              <li>Contact you via email or phone.</li>
              <li>Analyze data for service improvements.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Data Security & Retention</h2>
            <h3 className="mt-4 text-lg font-semibold">• Security</h3>
            <p>
              We use industry-standard measures to protect data but cannot
              guarantee 100% security.
            </p>

            <h3 className="mt-4 text-lg font-semibold">• Retention</h3>
            <p>
              We retain personal data as needed for legal compliance and service
              improvement.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Children's Privacy</h2>
            <p>
              We do not knowingly collect data from individuals under 13 years
              old.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Third-Party Links</h2>
            <p>
              Our Service may contain links to external websites. We are not
              responsible for their privacy practices.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy periodically. The latest version will be
              available at{" "}
              <a href="https://trustopay.com/" className="text-purple-400">
                our website
              </a>
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>For any privacy-related questions, contact us:</p>
            <ul className="ml-6 list-disc">
              <li>
                Email:{" "}
                <a href="mailto:sow@trustopay.com" className="text-purple-400">
                  sow@trustopay.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+917016481606" className="text-purple-400">
                  +91 7016481606
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://trustopay.com/contact"
                  className="text-purple-400"
                >
                  Contact Page
                </a>
              </li>
            </ul>
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

export default PrivacyPolicy;
