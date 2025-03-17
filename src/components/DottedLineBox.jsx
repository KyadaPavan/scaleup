import React from "react";
import he from "he";
const DottedLineBoxes = () => {
  const imagePath = import.meta.env.VITE_PATH || "/";
  const items = [
    {
      title: "Expert Insight",
      description: he.decode("Get expert insights to make smarter decisions."),
      imageUrl: "/process-step1.png",
    },
    {
      title: "Identify Weaknesses",
      description:
        "Find gaps in SEO, social media, and strategy with detailed audits.",
      imageUrl: "/process-step2.png",
    },
    {
      title: "Make Better Pitches",
      description: he.decode(
        "Strengthen proposals and profiles to win more clients and investors."
      ),
      imageUrl: "/process-step3.png",
    },
    {
      title: "Scale Faster",
      description:
        "Use actionable recommendations to grow without trial and error.",
      imageUrl: "/process-step4.png",
    },
    {
      title: " Understand Competition",
      description:
        "Gain insights on successful competitor strategies and stay ahead.",
      imageUrl: "/process-step5.png",
    },
    {
      title: "Save Time",
      description:
        "Get ready-to-use reports and proposals to speed up decision-making.",
      imageUrl: "/process-step6.png",
    },
  ];

  return (
    <div
      className="flex flex-col items-center gap-10 p-4 mt-20 bg-center bg-cover "
      // style={{
      //   backgroundImage: `url('./${imagePath}/testimonials-bg.png')`,
      // }}
    >
      <div className="container">
        <div>
          <h1 className=" text-4xl font-semibold text-[#2E2266] mb-6 text-center  mt-10 ">
            Why Choose <span className="text-[#856EE9]">Our Services?</span>
          </h1>
          <p className="mb-16 text-center text-gray-800 ">
            These services help you stay organized, eliminate confusion, and
            improve your workflow, <br /> ensuring your business runs smoothly
            and efficiently.
          </p>
        </div>

        <div className="flex flex-col gap-16 mb-10">
          <div className="flex justify-center gap-4 mb-4">
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-68"
              >
                <div className="mt-2 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white/80 w-60">
                  {item.description}
                </div>

                {/* <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2 bg-[#E8D8FF] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div> */}
                <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[0_-5px_6px_rgba(0,0,0,0.1)]">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>

                <div className="absolute left-[135px]  top-[170px] bottom-[80px] transform -translate-x-1/2 border-l-2 border-dotted border-[#2E2266] h-28" />
              </div>
            ))}
          </div>

          <div className="relative w-full h-1 mb-4 bg-dotted-line">
            <div className="absolute top-1/2  transform -translate-y-1/2 border-[#2E2266] border-2 bg-white text-white rounded-full p-4 items-center justify-center hidden md:flex">
              <img
                src={`./${imagePath}/puzzle-break.png`}
                alt="Image"
                className="w-10 h-10 md:w-14 md:h-14 "
              />
            </div>

            {/* Dotted line */}
            <div className="absolute top-1/2 left-[calc(0px+4rem)] right-[calc(0px+4rem)] transform -translate-y-1/2 border-t-2 border-dotted border-[#2E2266] z-[-4]" />
            <div className="absolute top-1/2 right-[0px] transform -translate-y-1/2 border-[#2E2266] border-2 backdrop-blur-2xl  text-white rounded-full p-6 items-center justify-center hidden md:flex ">
              <img
                src={`./${imagePath}/puzzle.png`}
                alt="Image"
                className="w-10 h-10 md:w-12 md:h-12 "
              />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {items.slice(3).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-4 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-2 text-sm text-center text-white/80 w-60">
                  {item.description}
                </div>
                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DottedLineBoxes;
