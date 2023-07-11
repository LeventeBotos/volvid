"use clients";

import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Flagselect = () => {
  const [openLang, setLang] = useState(false);

  function toggleLang() {
    setLang(!openLang);
  }
  return (
    <div className="h-12 w-24">
      <div
        onClick={() => {
          toggleLang();
        }}
        className=" flex h-full rounded-none  "
      >
        <img
          className="my-1 rounded-md object-cover opacity-100"
          alt="hungarian"
          src="/images/hungarian.svg"
        />
        <AiOutlineDown className="ml-1 self-center text-xl" />
      </div>
      <div
        className={` relative flex w-24 flex-col gap-2 rounded-b-lg bg-white p-2 ${
          openLang ? "block" : "hidden"
        }`}
      >
        <a href="/en" className=" items-center ">
          <img
            className=" rounded-lg object-contain opacity-100"
            alt="english"
            src="/images/english.svg"
            loading="lazy"
          />
        </a>
        <a href="/de" className="">
          <img
            className=" rounded-lg opacity-100"
            alt="german"
            src="/images/german.svg"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Flagselect;
