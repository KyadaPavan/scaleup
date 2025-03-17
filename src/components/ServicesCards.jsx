import React from "react";
import { HoverEffect } from "./ui/CardHoverEffect";
import servicesData from "../data/servicesData";

const ServicesCards = () => {
  return (
    <div>
      <HoverEffect items={servicesData} />
    </div>
  );
};

export default ServicesCards;
