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
      name: "Gönyűi Erőmű",
      content: "üzemi leállás vizsgálata.",
    },
    {
      name: "MOL Nyrt. Dunai Finomító",
      content:
        "üzemek és tartályok anyagvizsgálata üzemközi csővezetékek állapotfelmérése, üzemi átalakításokvizsgálatai.",
    },
    {
      name: "Péti Nitrogén Művek",
      content: "reaktor és hőcserélővizsgálatok.",
    },
    {
      name: "OMV Schwechati Finomító",
      content:
        "leállásokon anyagvizsgálatok, és leálláson kívüli időszakban állapotfelmérés.",
    },
    {
      name: "BorsodChem Nyrt. Kazincbarcikai gyár",
      content:
        "üzemi leállások anyagvizsgálata, keretszerződött partner vagyunk.",
    },
    {
      name: "Németországban a BayernOil",
      content: "Ingolstadt környéki finomítóiban folyamatos vizsgálatok.",
    },
    {
      name: "Németországban az OMV Burghauseni Finomítóban, Wacker kémiai üzemben",
      content: "anyagvizsgálatok végzése folyamatosan.",
    },
  ];

  return (
    <section className="flex  flex-col gap-4 text-center">
      <p className="text-2xl font-bold">Jelentősebb projektek</p>
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
      <div>
        <div className="flex h-36 flex-col justify-between md:h-36 md:flex-row">
          <button
            className="bg-transparent text-4xl text-primary hover:text-black"
            onClick={previousTestimonial}
          >
            <AiOutlineArrowLeft />
          </button>
          <div className="card-container h-full w-full md:w-2/3">
            {projects.map((projects, index) => (
              <div
                key={index}
                className={`testimonial ${
                  index === activeIndex ? "active" : ""
                } card flex  flex-col justify-evenly p-1 md:p-5 `}
              >
                <p className="">{projects.name}</p>
                <p className=" text-xl">{projects.content}</p>
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
      </div>
    </section>
  );
};
