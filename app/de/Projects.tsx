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
        "Materialprüfung von Anlagen und Behältern, Zustandsüberwachung von zwischenbetrieblichen Pipelines, Prüfung von betrieblichen Umwandlungen.",
    },
    {
      name: "BayernOil in Deutschland",
      content:
        "Kontinuierliche Prüfungen in Raffinerien in der Nähe von Ingolstadt.",
    },
    {
      name: "OMV Burghausen Refinery und Wacker Chemical Plant in Deutschland",
      content: "Kontinuierliche Materialprüfung.",
    },
    {
      name: "Kazincbarcika-Werk von BorsodChem Nyrt.",
      content:
        "Materialprüfung während Anlagenstillständen, wir sind ein Vertragspartner.",
    },
    {
      name: "Péti Stickstoffwerk",
      content: "Reaktor- und Wärmetauscherprüfung.",
    },
    {
      name: "Kraftwerk Gönyű",
      content: "Prüfung während Anlagenstillständen.",
    },
    {
      name: "OMV Schwechat Raffinerie",
      content:
        "Materialprüfung während Stillständen und Zustandsüberwachung während Nicht-Stillstandszeiten.",
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
