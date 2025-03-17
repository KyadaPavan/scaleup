import { PiLinkDuotone } from "react-icons/pi";

const Success = () => {
  return (
    <div className="success bg-pink-100">
      <img
        src="/Successfully.gif"
        alt="Form Filled Successfully"
        className="mt-4 w-36 h-36"
      />
      <h2 className="text-3xl font-semibold text-[#4b3f95]">
        Thank You for Your Request!
      </h2>
      <p className="mt-4">
        We've received your request for service name and will begin processing
        it shortly. A member from our team will contact you within 24-48 hours.
      </p>
      <p className="mt-4">
        Need help or have questions? Contact us at{" "}
        <a href="mailto:support@trustopay.com" className="text-[#4b3f95]">
          support@trustopay.com
        </a>{" "}
        or call us at{" "}
        <a href="tel:+916353093171" className="text-[#4b3f95]">
          63530 93171.
        </a>
      </p>
      <p className="mt-8">
        While you wait, explore our other free services and join our community
        to connect with other users:
      </p>
      <ul className="mt-2">
        <li>
          <a
            href="https://trustopay.com/"
            target="_blank"
            className="text-[#4b3f95] font-medium"
          >
            <PiLinkDuotone className="inline mr-2 text-[#4b3f95] w-5 h-5" />
            Know more about Trustopay
          </a>
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.trustopay.android"
            target="_blank"
            className="text-[#4b3f95] font-medium"
          >
            <PiLinkDuotone className="inline mr-2 text-[#4b3f95] w-5 h-5" />
            Download the Trustopay App
          </a>
        </li>
        <li>
          <a
            href="http://community.trustopay.com/"
            target="_blank"
            className="text-[#4b3f95] font-medium"
          >
            <PiLinkDuotone className="inline mr-2 text-[#4b3f95] w-5 h-5 " />
            Join the Trustopay Community
          </a>
        </li>
        <li>
          <a
            href="http://startupscribe.trustopay.com/"
            target="_blank"
            className="text-[#4b3f95] font-medium"
          >
            <PiLinkDuotone className="inline mr-2 text-[#4b3f95] w-5 h-5" />
            Join the StartUpScribe Community
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Success;
