import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import he from "he";
const faqs = [
  {
    id: 1,
    question: "What services do we offer?",
    answer:
      "We provide a range of  services to help your business grow, including Scope of Work (SOW) documents, SEO reports, competitor analysis, app development consultations, social media audits, website UI/UX reviews, business consultancy audits, and various proposals for business, digital marketing startegy and website development. Each service is designed to enhance strategy, visibility, and efficiency.",
  },
  {
    id: 2,
    question: "Why do we offer these Services for ?",
    answer:
      "We believe in delivering value first, helping you identify opportunities, building strong relationships, and demonstrating how we can support your success.",
  },
  {
    id: 3,
    question: "How do I apply for these  services?",
    answer: he.decode(
      "Simply fill out our online form with your business details. Our team will reach out within 24 hours to discuss your needs."
    ),
  },
  {
    id: 4,
    question: "Do I have to pay anything to access these services?",
    answer:
      "We offer these services at a minimal fee of just ₹99 INR. This small fee helps us maintain quality while still giving you access to valuable insights and expert guidance at an affordable cost.",
  },

  {
    id: 5,
    question: "How does the collaborative discussion work?",
    answer:
      "Based on your selected service, you’ll receive detailed reports, proposals, audits, or strategic recommendations—all designed to help your business grow.",
  },

  {
    id: 6,
    question: "Can I request multiple  services?",
    answer:
      "Yes! You can request multiple services based on your business needs. We’ll guide you through the best options.",
  },
  {
    id: 7,
    question: "How soon will I receive my service deliverables?",
    answer:
      "Most reports, proposals, and audits will be delivered within a few business days after the collaborative discussion.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const imagePath = import.meta.env.VITE_PATH || "/";
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-start w-full gap-12 px-6 py-16 mx-auto bg-center bg-cover md:px-12 lg:px-20 lg:flex-row max-w-7xl"
      id="FAQs"
    >
      {/* LEFT SECTION (TITLE) */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2E2266] leading-tight">
          Frequently Asked <br />
          <span className="text-[#856EE9]">Questions</span>
        </h2>
        <p className="mt-6 text-gray-600">
          Find quick answers to common questions about our services. We're here
          to help you understand how we can support your business.
        </p>
      </div>

      {/* RIGHT SECTION (FAQs) */}
      <div className="w-full lg:w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="pb-2 mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-[#240046]"
            >
              {faq.question}
              <span className="ml-4">
                {openIndex === index ? (
                  <FaChevronUp className="text-[#8234C5] transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-[#8234C5] transition-transform duration-300" />
                )}
              </span>
            </button>

            {/* Answer with smooth animation */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-4 text-gray-600 w-[90%] mx-auto">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
