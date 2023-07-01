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
      name: "MOL Nyrt. Dunai Finomító",
      content:
        "Üzemek és tartályok anyagvizsgálata üzemközi csővezetékek állapotfelmérése, üzemi átalakításokvizsgálatai.",
    },
    {
      name: "Németországban a BayernOil",
      content: "Ingolstadt környéki finomítóiban folyamatos vizsgálatok.",
    },
    {
      name: "Németországban az OMV Burghauseni Finomítóban, Wacker kémiai üzemben",
      content: "Anyagvizsgálatok végzése folyamatosan.",
    },
    {
      name: "BorsodChem Nyrt. Kazincbarcikai gyár",
      content:
        "Üzemi leállások anyagvizsgálata, keretszerződött partner vagyunk.",
    },
    {
      name: "Péti Nitrogén Művek",
      content: "Reaktor és hőcserélővizsgálatok.",
    },
    {
      name: "Gönyűi Erőmű",
      content: "Üzemi leállás vizsgálata.",
    },
    {
      name: "OMV Schwechati Finomító",
      content:
        "Leállásokon anyagvizsgálatok, és leálláson kívüli időszakban állapotfelmérés.",
    },
  ];

  return (
    <section className="flex  flex-col gap-4 text-center">
      <p className="text-2xl font-bold">Jelentősebb projektek</p>
      <div className=" flex h-64 flex-col items-center justify-between md:h-36 md:flex-row">
        <button
          aria-label="Előző"
          className="bg-transparent text-4xl text-primary hover:text-black"
          onClick={previousTestimonial}
        >
          <AiOutlineArrowLeft />
        </button>
        <div className=" flex w-full justify-evenly self-center md:w-2/3">
          {projects.map((projects, index) => (
            <div
              key={index}
              className={`testimonial ${
                index === activeIndex ? "active" : ""
              } card flex h-40 items-center justify-center  p-1 text-center md:h-32 md:p-5 `}
            >
              <div className="flex h-full flex-col justify-evenly">
                <p className="text-xl font-bold">{projects.name}</p>
                <p className=" text-xl">{projects.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Következő"
          className="bg-transparent text-4xl text-primary hover:text-black"
          onClick={nextTestimonial}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};
