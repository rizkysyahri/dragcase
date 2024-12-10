"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animate-tooltip";
import tumir from "../../../public/tumirs.jpg";
import cai from "../../../public/cai.jpg";
import hapid from "../../../public/hapid.jpg";
import perdi from "../../../public/perdi.jpg";
import aris from "../../../public/aris.jpg";
const people = [
  {
    id: 1,
    name: "Nizam Mirs",
    designation: "Graphic Design",
    image: '/tumirs.jpg'
  },
  {
    id: 2,
    name: "James Cai",
    designation: "Software Engineer",
    image: '/cai.jpg',
  },
  {
    id: 3,
    name: "Hapid Monarch",
    designation: "Data Scientist",
    image: '/hapid.jpg',
  },
  {
    id: 4,
    name: "Ferdy Mag",
    designation: "Project Manager",
    image: '/perdi.jpg',
  },
  {
    id: 5,
    name: "Aris St Dalg",
    designation: "Photographer",
    image: '/aris.jpg',
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
