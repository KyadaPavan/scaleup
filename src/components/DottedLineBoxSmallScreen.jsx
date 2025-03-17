import React from "react";
import he from "he";
const DottedLineBoxSmallScreen = () => {
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
    <div className="flex flex-col items-center min-h-screen gap-10 p-4 ">
      <div className="container">
        <div>
          <h1 className=" text-4xl font-semibold text-[#2E2266] mb-6 text-center mt-10">
            Why Choose <span className="text-[#856EE9]">Our Services?</span>
          </h1>
          <p className="px-10 mb-10 text-center text-gray-800">
            These services help you stay organized, eliminate confusion, and
            improve your workflow, <br /> ensuring your business runs smoothly
            and efficiently.
          </p>
        </div>

        <div className="flex flex-col gap-16 ">
          <div className="relative flex flex-col items-center justify-center gap-20 mb-4">
            <div className="w-fit border-[#2E2266] border-2 bg-white text-white rounded-full p-4 items-center justify-center block md:hidden">
              <img
                src={`./${imagePath}/puzzle-break.png`}
                alt="Image"
                className="w-10 h-10 md:w-16 md:h-16"
              />
            </div>

            {/* First Item */}
            {items.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-2 mb-2 font-semibold text-center text-white text-md ">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white/80 w-60">
                  {item.description}
                </div>

                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}

            {/* Vertical Dotted Line */}
            <div className="absolute   top-[68px]  bottom-[80px] transform -translate-x-1/2 border-l-2 border-dotted border-[#2E2266] h-10 " />

            {/* Second Item */}
            {items.slice(1, 2).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-2 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white w-60">
                  {item.description}
                </div>

                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}

            <div className="absolute h-10 border-l-2  top-[275px]  border-[#2E2266] border-dotted"></div>

            {/* Third Item */}

            {items.slice(2, 3).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-2 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white w-60">
                  {item.description}
                </div>

                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}

            <div className="absolute top-[470px]    h-10 border-l-2 border-[#2E2266] border-dotted" />

            {/* Fourth Item */}

            {items.slice(3, 4).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-2 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white w-60">
                  {item.description}
                </div>

                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}

            <div className="absolute border-[#2E2266] border-dotted border-l-2 h-10 top-[665px] " />

            {/* Fifth Item */}

            {items.slice(4, 5).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-2 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white w-60">
                  {item.description}
                </div>

                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}

            <div className="absolute border-[#2E2266] border-dotted border-l-2   h-10 bottom-[530px]" />

            {/* Sixth Item */}

            {items.slice(5, 6).map((item, index) => (
              <div
                key={index}
                className="relative p-4 text-center bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033] rounded-lg shadow-lg w-min"
              >
                <div className="mt-2 mb-4 font-semibold text-center text-white text-md">
                  {item.title}
                </div>
                <div className="mb-4 text-sm text-center text-white w-60">
                  {item.description}
                </div>

                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-2xl text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  <img
                    src={`./${imagePath}${item.imageUrl}`}
                    alt="Item image"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}

            <div className="absolute border-[#2E2266] border-dotted border-l-2 h-10   top-[1070px]" />
            <div className="absolute border-[#2E2266] border-dotted border-l-2 h-20   top-[1280px]" />

            <div className="w-fit border-[#2E2266] border-2 bg-white text-white rounded-full p-4 items-center justify-center block md:hidden">
              <img
                src={`./${imagePath}/puzzle.png`}
                alt="Image"
                className="w-10 h-10 md:w-16 md:h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DottedLineBoxSmallScreen;
