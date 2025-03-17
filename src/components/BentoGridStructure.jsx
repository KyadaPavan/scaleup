import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";

export default function BentoGridServices() {
  const services = [
    {
      title: "Social Media Marketing",
      description:
        "Boost online presence with 10 engaging posts monthly. Ideal for consistent visibility.",
      price: "₹ 4,999",
    },
    {
      title: "Website Development",
      description:
        "Create a basic website to establish your digital presence and attract customers.",
      price: "₹ 9,999",
    },
    {
      title: "Video Editing",
      description:
        "Professional editing for 5 reels or shorts to captivate your audience with engaging visuals.",
      price: "₹ 999",
    },
    {
      title: "SEO",
      description:
        "Optimize website to enhance search rankings and attract more organic traffic.",
      price: "₹ 7,999",
    },
    {
      title: "Logo Design",
      description:
        "Get two unique logo concepts that align perfectly with your brand identity and vision.",
      price: "₹ 499",
    },
    {
      title: "Google Ads PPC",
      description:
        "Set up and manage strategic ad campaigns to drive targeted and high-quality traffic.",
      price: "₹ 6,999",
    },
    {
      title: "App Development",
      description:
        "Develop a basic MVP to launch your innovative mobile app idea and capture early users.",
      price: "₹ 29,999",
    },
    {
      title: "UI/UX Design",
      description:
        "Design an intuitive landing page focused on enhancing user experience and engagement.",
      price: "₹ 499",
    },
    {
      title: "Content Marketing",
      description:
        "Create two insightful blogs monthly to build authority and engage your target audience.",
      price: "₹ 7,999",
    },
  ];

  return (
    <div id="Services">
      <BentoGrid className="p-4 ">
        {services.map((service, index) => (
          <BentoGridItem
            key={index}
            title={service.title}
            description={service.description}
            pricing={service.price}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
