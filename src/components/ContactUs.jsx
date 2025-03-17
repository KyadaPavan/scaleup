import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const ContactUs = () => {
  const navigate = useNavigate();
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "tween" },
    },
  };
  return (
    <>
      <div className="bg-radial h-screen">
        <div className="md:max-w-3xl max-w-[90%] p-6 mx-auto mt-10 text-gray-100 shadow-2xl bg-white/20 backdrop-blur-xl rounded-3xl">
          <h1 className=" text-3xl font-semibold  bg-gradient-to-r from-[#FFC979] via-[#F971BA] to-[#E57FFF] bg-clip-text text-transparent mb-10">
            We'd love to hear from you!
          </h1>
          <p className="text-gray-100 text-center mb-6">
            If you have any questions, suggestions, or concerns, feel free to
            reach out to us. Our team is here to assist you.
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <MdEmail className="text-purple-400 text-2xl" />
              <a
                href="mailto:sow@trustopay.com"
                className="text-purple-400 hover:underline text-lg font-medium"
              >
                sow@trustopay.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MdPhone className="text-purple-400 text-2xl" />
              <a
                href="tel:+917016481606"
                className="text-purple-400 hover:underline text-lg font-medium"
              >
                +91 7016481606
              </a>
            </div>
            <div className="flex items-start justify-center ">
              <MdLocationOn className="text-purple-400 text-2xl" />
              <p className="text-gray-100 text-lg font-medium text-center">
                C-1, Siddheshwar Plaza, TF-12, Ajwa Rd, Sayaji Park Society,
                Vadodara, Gujarat 390019
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-10">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="px-6 py-3 text-white rounded-full bg-gradient-to-br from-[#671A88] to-[#B95FCA] hover:from-[#b85fcaaf] hover:to-[#671A88] shadow-2xl font-semibold text-base"
            onClick={() => navigate("/")}
          >
            Back To Home
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
