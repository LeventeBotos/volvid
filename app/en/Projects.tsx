"use client";

import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function showTestimonial(index: number) {
    setActiveIndex(index);
  }

  function nextTestimonial() {
    const nextIndex = (activeIndex + 1) % projects.length;
    showTestimonial(nextIndex);
  }

  function previousTestimonial() {
    const previousIndex = (activeIndex - 1 + projects.length) % projects.length;
    showTestimonial(previousIndex);
  }

  const projects = [
    {
      name: "MOL Nyrt. Danube Refinery",
      content:
        "Material testing of plants and tanks, condition monitoring of interplant pipelines, testing of operational transformations.",
    },
    {
      name: "BayernOil in Germany",
      content: "Continuous testing in refineries near Ingolstadt.",
    },
    {
      name: "OMV Burghausen Refinery and Wacker Chemical Plant in Germany",
      content: "Continuous material testing.",
    },
    {
      name: "Kazincbarcika Plant of BorsodChem Nyrt.",
      content:
        "Material testing during plant shutdowns, we are a contracted partner.",
    },
    {
      name: "Péti Nitrogen Works",
      content: "Reactor and heat exchanger testing.",
    },
    {
      name: "Gönyű Power Plant",
      content: "Testing during plant shutdowns.",
    },
    {
      name: "OMV Schwechat Refinery",
      content:
        "Material testing during shutdowns and condition monitoring during non-shutdown periods.",
    },
  ];

  return (
    <section className="flex  flex-col gap-4 text-center">
      <p className="text-2xl font-bold">Significant Projects</p>
      <div className=" flex h-72 flex-col justify-between md:h-36 md:flex-row">
        <button
          aria-label="Previous"
          className="bg-transparent text-4xl text-primary hover:text-black"
          onClick={previousTestimonial}
        >
          <AiOutlineArrowLeft />
        </button>
        <div className=" flex w-full justify-evenly md:w-2/3">
          {projects.map((projects, index) => (
            <div
              key={index}
              className={`testimonial ${
                index === activeIndex ? "active" : ""
              } card flex h-48 items-center justify-center  p-1 text-center md:h-32 md:p-5 `}
            >
              <div className="flex h-full flex-col justify-evenly">
                <p className="text-xl font-bold">{projects.name}</p>
                <p className=" text-xl">{projects.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Next"
          className="bg-transparent text-4xl text-primary hover:text-black"
          onClick={nextTestimonial}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};
