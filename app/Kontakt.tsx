"use client";
import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsClipboardCheck, BsPersonVcard } from "react-icons/bs";
import { useState } from "react";
import Select from "react-select";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface Option {
  value: string;
  label: string;
  optionss?: Option[];
}

/* 
RT: MSZ EN ISO 17636-1 
DRT: MSZ EN ISO 17636-2  
UT: MSZ EN ISO 17640 10.2-es fejezet
UT-PAw: MSZ EN ISO 13588
VT: MSZ EN ISO 17637
PT: MSZ EN ISO 3451-1
MT: MSZ EN ISO 17638
LT: MSZ EN 1593

ASME:
UTw: ASME BPVC SEC.5 ARTICLE 23
VT: ASME BPVC SEC.5 ARTICLE 9
UT-L: ASME BPVC SEC.5 ARTICLE 5
PT: ASME BPVC SEC.5 ARTICLE 6
MT: ASME BPVC SEC.5 ARTICLE 7
RT: ASME BPVC SEC.5 ARTICLE 2
UT-pa: ASME BPVC SEC.5 ARTICLE 4
LT: ASME BPVC SEC.5 ARTICLE 10
*/
const options: Option[] = [
  {
    value: "RT",
    label: "Radiográfiai vizsgálat",
    optionss: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 2",
        label: "ASME BPVC SEC.5 ARTICLE 2",
      },
      { value: "MSZ EN ISO 17636-1", label: "MSZ EN ISO 17636-1" },
    ],
  },
  {
    value: "PT",
    label: "Folyadékbehatolásos vizsgálat",
    optionss: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 6",
        label: "ASME BPVC SEC.5 ARTICLE 6",
      },
      { value: "MSZ EN ISO 3451-1", label: "MSZ EN ISO 3451-1" },
    ],
  },
  {
    value: "MT",
    label: "Mágnesezhető poros vizsgálat",
    optionss: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 7",
        label: "ASME BPVC SEC.5 ARTICLE 7",
      },
      { value: "MSZ EN ISO 17638", label: "MSZ EN ISO 17638" },
    ],
  },
  { value: "HT", label: "Keménységmérés" },
  {
    value: "LT",
    label: "Tömörségi vizsgálat",
    optionss: [{ value: "MSZ EN 1593", label: "MSZ EN 1593" }],
  },
  {
    value: "IT",
    label: "Fémek felületi szigetelésének vizsgálata",
    optionss: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 23",
        label: "ASME BPVC SEC.5 ARTICLE 23",
      },
    ],
  },
  { value: "PMI", label: "Pozitív anyagazonosítás" },
  { value: "UT", label: "Ultrahangos vizsgálat" },
  {
    value: "VT",
    label: "Szemrevételezéses vizsgálat",
    optionss: [
      { value: "MSZ EN ISO 17637", label: "MSZ EN ISO 17637" },
      {
        value: "ASME BPVC SEC.5 ARTICLE 9",
        label: "ASME BPVC SEC.5 ARTICLE 9",
      },
    ],
  },
  { value: "Other", label: "Más" },
];

let options2: Option[] = [];

export const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedSuboption, setSelectedSuboption] = useState<Option | null>(
    null
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(JSON.stringify(selectedOption));
    try {
      const response = await axios.post(
        "https://volvid.vercel.app/api/email",
        // "http://localhost:3000/api/email",
        null,
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            selectedOption: JSON.stringify(selectedOption),
            selectedOption2: JSON.stringify(selectedSuboption),
            message: message,
          },
        }
      );
      console.log("Email sent successfully");
      console.log(response);
      alert("sent succesfully!");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }

  const handleOptionChange = (selectedOption: Option | null) => {
    setSelectedOption(selectedOption);
    setSelectedSuboption(null);
  };

  const handleSuboptionChange = (selectedSuboption: Option | null) => {
    setSelectedSuboption(selectedSuboption);
  };

  return (
    <form
      className="flex flex-col items-center gap-4 bg-[#1f1f1f] p-5 text-center"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-bold text-white">Kontakt</p>

      <div className="flex w-full items-center gap-4 text-center text-2xl md:w-2/3">
        <BsPersonVcard className="hidden text-4xl text-white md:block" />
        <input
          id="frm-first"
          type="text"
          name="first"
          placeholder="Név"
          className="w-full rounded-md p-3 md:p-5"
          autoComplete="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className=" flex w-full items-center gap-4 text-center text-2xl md:w-2/3 ">
        <AiOutlineMail className="hidden text-4xl text-white md:block" />
        <input
          id="frm-email"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          className=" w-full  rounded-md p-3 md:p-5"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full items-center gap-4 text-center text-2xl md:w-2/3">
        <AiOutlinePhone className="hidden text-4xl text-white md:block" />
        <input
          id="frm-phone"
          type="text"
          name="phone"
          placeholder="Telefonszám"
          autoComplete="tel"
          className="w-full rounded-md p-3  md:p-5"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="flex h-28 w-full flex-col items-center justify-evenly gap-4 text-center text-2xl md:w-2/3">
        <div className=" flex w-full flex-row items-center gap-4">
          <BsClipboardCheck className="hidden text-4xl text-white md:block" />
          <Select
            className="w-full"
            value={selectedOption}
            onChange={handleOptionChange}
            options={options}
            isClearable
            placeholder="Vizsgálati Eljárás"
          />
        </div>
        {selectedOption && (
          <div className=" flex w-full flex-row items-center gap-4">
            <AiOutlineSearch className="hidden text-4xl text-white md:block" />
            <Select
              className="w-full"
              value={selectedSuboption}
              onChange={handleSuboptionChange}
              options={selectedOption.optionss || []}
              isClearable
              placeholder="Vizsgálati Szabvány"
            />
          </div>
        )}
      </div>
      <div className="flex w-full items-center gap-4 text-center text-2xl md:w-2/3">
        <AiOutlineMessage className="hidden text-4xl text-white md:block" />
        <textarea
          id="frm-message"
          placeholder="Üzenet"
          name="message"
          className="w-full rounded-md p-3 md:w-full md:p-5"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex flex-row items-center rounded-full bg-primary text-center md:m-3"
      >
        <span className="rounded-full">
          {submitted ? "Köszönjük!" : "Küldés"}
        </span>
      </button>
    </form>
  );
};
