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
      {/* <div>
        <ul className="gap-2 text-xl">
          <li>Gönyűi Erőmű üzemi leállás vizsgálata</li>
          <li>
            MOL Nyrt. Dunai Finomító üzemek és tartályok anyagvizsgálata,
            üzemközi csővezetékek állapotfelmérése, üzemi átalakítások
            vizsgálatai.
          </li>
          <li>Péti Nitrogén Művekben reaktor és hőcserélővizsgálatok.</li>
          <li>
            OMV Schwechati Finomító – leállásokon anyagvizsgálatok, és leálláson
            kívüli időszakban állapotfelmérés.
          </li>
          <li>
            BorsodChem Nyrt. Kazincbarcikai gyár – üzemi leállások
            anyagvizsgálata, keretszerződött partner vagyunk.
          </li>
          <li>
            Németországban a BayernOil – Ingolstadt környéki finomítóiban
            folyamatos vizsgálatok.
          </li>
          <li>
            Németországban az OMV Burghauseni Finomítóban és a Wacker kémiai
            üzemben anyagvizsgálatok végzése folyamatosan.
          </li>
        </ul>
      </div> */}
      <div className=" flex h-64 flex-col justify-between md:h-36 md:flex-row">
        <button
          className="bg-transparent text-4xl text-primary hover:text-black"
          onClick={previousTestimonial}
        >
          <AiOutlineArrowLeft />
        </button>
        <div className=" w-full md:w-2/3">
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
          className="bg-transparent text-4xl text-primary hover:text-black"
          onClick={nextTestimonial}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};
