import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-24 max-w-[95%]">
      <div className="relative flex flex-col items-center">
        <div
          className="absolute flex items-center justify-center w-40 h-40 text-[#2E2266] bg-center bg-cover rounded-full shadow-2xl -left-60 top-36 md:w-72 md:h-72"
          style={{ backgroundImage: "url('/global-payment-bg.png')" }}
        >
          <h2 className="text-lg font-semibold text-center md:text-3xl">
            WHY CHOOSE <br /> OUR <br /> SERVICES ?
          </h2>
        </div>
        <div
          className="w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-cover bg-center  rounded-full flex shadow-2xl items-center justify-center text-center p-6  flex-col gap-10"
          style={{ backgroundImage: "url('/image-mesh-gradient.png')" }}
        >
          <p className="text-base text-white  max-w-[70%] mx-auto">
            Our services streamline operations, reduce inefficiencies, and keep
            everything organized, helping your business run seamlessly while
            enhancing productivity.
          </p>
          <p className="text-base text-white  max-w-[70%] mx-auto">
            By eliminating confusion and optimizing workflows, we empower you to
            focus on growth, ensuring smooth and efficient business processes.
          </p>
        </div>

        {/* Icons and Descriptions */}
        <div className="flex flex-col space-y-6 ">
          <div className="absolute flex items-center gap-10 space-x-3 -right-60 top-8">
            <div
              className="flex items-center justify-center w-20 h-20 text-white bg-center bg-cover rounded-full shadow-2xl "
              style={{ backgroundImage: "url('/accordian-bg.png')" }}
            >
              <img
                src="/resource.png"
                alt="maxmimum-resources-logo"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#2E2266] text-xl">
                Maximize Resources
              </h3>
              <p className="text-sm text-[#856EE9] font-medium w-64">
                Get expert insights to make smarter decisions without extra
                costs.
              </p>
            </div>
          </div>
          <div className="absolute flex items-center gap-8 space-x-3 -right-80 top-40">
            <div
              className="flex items-center justify-center w-20 h-20 text-white bg-center bg-cover rounded-full shadow-2xl"
              style={{ backgroundImage: "url('/accordian-bg.png')" }}
            >
              <img
                src="/up.png"
                alt="maxmimum-resources-logo"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#2E2266] text-xl">
                Make Better Pitches
              </h3>
              <p className="text-sm text-[#856EE9] font-medium w-64">
                Strengthen proposals and profiles to win more clients and
                investors.
              </p>
            </div>
          </div>
          <div className="absolute flex items-center gap-8 space-x-3 -right-80 top-80">
            <div
              className="flex items-center justify-center w-20 h-20 text-white bg-center bg-cover rounded-full shadow-2xl"
              style={{ backgroundImage: "url('/accordian-bg.png')" }}
            >
              <img
                src="/presentation.png"
                alt="maxmimum-resources-logo"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#2E2266] text-xl">
                Scale Faster
              </h3>
              <p className="text-sm text-[#856EE9] font-medium w-64">
                Use actionable recommendations to grow without trial and error.
              </p>
            </div>
          </div>
          <div className="absolute flex items-center gap-10 space-x-3 -right-64 bottom-10">
            <div
              className="flex items-center justify-center w-20 h-20 text-white bg-center bg-cover rounded-full shadow-2xl"
              style={{ backgroundImage: "url('/accordian-bg.png')" }}
            >
              <img
                src="/save-time.png"
                alt="maxmimum-resources-logo"
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#2E2266] text-xl">
                Save Time
              </h3>
              <p className="text-sm text-[#856EE9] font-medium w-64">
                Get ready-to-use reports and proposals to speed up
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
