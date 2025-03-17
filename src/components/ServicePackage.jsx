import React from "react";
import {
  BentoGridPackage,
  BentoGridItemPackage,
} from "./ui/Bento-grid-service";

export default function ServicePackage() {
  const services = [
    {
      title: "Startup Essentials Pack",
      points: [
        "Logo Design",
        "Basic Website Development",

        {
          main: "Social Media Setup",
          sub: ["Facebook", "Instagram", "LinkedIn"],
        },
      ],
      price: "₹ 11,999",
    },
    {
      title: "Growth Booster Pack",
      points: [
        "SEO Setup",
        {
          main: "Google Ads PPC",
          sub: ["Text Ads", "Display Ads", "Video Ads"],
        },

        {
          main: "Social Media Content (5 posts / month)",
          sub: ["Facebook", "Instagram", "LinkedIn"],
        },
      ],
      price: "₹ 14,999",
    },
    {
      title: "Complete Digital Pack",
      points: [
        "Advanced Website Development",
        "SEO Setup",
        {
          main: "Google Ads PPC",
          sub: ["Text Ads", "Display Ads", "Video Ads"],
        },

        {
          main: "Social Media Content (10 posts / month)",
          sub: ["Facebook", "Instagram", "LinkedIn"],
        },
        "Email Marketing",
        {
          main: "Content Marketing",
          sub: ["Blog Writing", "Article Writing"],
        },
      ],
      price: "₹ 24,999",
    },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto text-center text-white">
        <h1 className="mb-6 text-2xl font-semibold md:mb-8 md:text-5xl">
          Unlock Value with Our Service Packages
        </h1>

        <p className="mx-auto mb-6 text-lg text-center md:max-w-4xl max-w-[80%] md:mb-8 text-white/80">
          Explore our versatile service packages designed to offer comprehensive
          solutions for every need. Whether you're looking to enhance your
          online presence, streamline your projects, or elevate your creative
          content, our bundles provide the perfect mix of quality and value.
        </p>
      </div>
      <BentoGridPackage className="p-4">
        {services.map((service, index) => (
          <BentoGridItemPackage
            key={index}
            title={service.title}
            points={service.points}
            pricing={service.price}
          />
        ))}
      </BentoGridPackage>
      <div className="md:max-w-3xl max-w-[92%] mx-auto text-center text-white bg-[#04061c]/80 mt-10 p-4 rounded-xl">
        <div className="my-4 mb-4 font-sans text-3xl font-bold text-center text-white">
          Full Stack Digital Marketing Pack
        </div>

        <p className="mb-6 text-base text-center text-white/80">
          Unlock a range of services including Premium Website Development,
          Social Media Management, SEO, and Video Editing. To know more about
          everything included, contact our team by filling out the form.
        </p>
        <div className="mx-auto mt-8 mb-2 w-fit">
          <button className="px-6 py-2  text-white transition-transform duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#663bd8] to-[#7d55dd] hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
