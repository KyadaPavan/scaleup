import { motion } from "framer-motion";

const SupportSection = () => {
  return (
    <div className="bg-gradient-to-t from-[#BBA5F4] via-[#8B69E4] to-[#653AD8] py-12 px-6 md:px-12 rounded-3xl shadow-md max-w-[80%] mx-auto">
      <h2 className="text-3xl md:text-5xl font-semibold  text-[#fff]">
        We Are Here To Help <span className="text-[#fff]">24*7</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        <motion.div
          className="p-6 text-left bg-white shadow-lg rounded-2xl"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex items-center text-[#2E2266] text-4xl mb-3">
            <img src="./result-1.svg" alt="Chat" width="28" height="28" />
          </div>
          <h3 className="text-lg font-semibold text-left">Chat To Support</h3>
          <p className="mt-2 text-[#605497] text-left">
            Need assistance? We're here to help you.
          </p>
          <div className="border-2 border-[#664AE3] rounded-full mt-4 w-fit">
            <a
              href="https://wa.me/917016481606"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:py-2 text-[#664AE3] rounded-full transition-all w-fit justify-start px-4 py-2"
            >
              <img
                src="./result-2.svg"
                alt="Chat-sevg-2"
                width="20"
                height="20"
              />
              7016481606
            </a>
          </div>
        </motion.div>

        <motion.div
          className="p-6 text-left bg-white shadow-lg rounded-2xl"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex items-center text-[#2E2266] text-4xl mb-3">
            <img src="./result-3.svg" alt="Chat-svg-3" width="28" height="28" />
          </div>
          <h3 className="text-lg font-semibold text-left">Sales Inquiries</h3>
          <p className="mt-2 text-[#605497] text-left">
            Want to know about our services? Connect with our team.
          </p>
          <div className="border-2 border-[#664AE3] rounded-full mt-4 w-fit">
            <a
              href="mailto:scaleup@trustopay.com"
              className="flex items-center gap-2 md:py-2 text-[#664AE3] rounded-full transition-all w-fit justify-start px-4 py-2"
            >
              <img
                src="./result-4.svg"
                alt="Chat-svg-4"
                width="20"
                height="20"
              />
              scaleup@trustopay.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="p-6 text-left bg-white shadow-lg rounded-2xl"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex items-center text-[#2E2266] text-4xl mb-3">
            <img
              src="./result-5.png"
              alt="Chat-sevg-5"
              width="24"
              height="24"
            />
          </div>
          <h3 className="text-lg font-semibold text-left">
            Know more about us
          </h3>
          <p className="mt-2 text-[#605497] text-left">
            Learn more about who we are and what we do at:
          </p>
          <div className="border-2 border-[#664AE3] rounded-full mt-4 w-fit">
            <a
              href="https://trustopay.com/"
              className="flex items-center gap-2 md:py-2 text-[#664AE3] rounded-full transition-all w-fit justify-start px-4 py-2"
            >
              <img
                src="./result-6.png"
                alt="Chat-svg-6"
                width="20"
                height="20"
              />
              Trustopay
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportSection;
