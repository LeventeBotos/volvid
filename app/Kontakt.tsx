"use client";
import {
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineSearch,
  AiOutlineSend,
} from "react-icons/ai";
import { BsClipboardCheck, BsPersonVcard } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
// import Lottie, { LottiePlayer } from "lottie-react";
// import animationData from "./lotties/sending.json";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface Option {
  value: string;
  label: string;
  optionss?: Option[];
}

// const animationStyle = {
//   height: 75,
// };

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
const options2 = [
  {
    value: "RT",
    label: "Radiográfiai vizsgálat",
    options: [
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
    options: [
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
    options: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 7",
        label: "ASME BPVC SEC.5 ARTICLE 7",
      },
      { value: "MSZ EN ISO 17638", label: "MSZ EN ISO 17638" },
    ],
  },
  {
    value: "LT",
    label: "Tömörségi vizsgálat",
    options: [
      { value: "MSZ EN 1593", label: "MSZ EN 1593" },
      {
        value: "ASME BPVC SEC.5 ARTICLE 10",
        label: "ASME BPVC SEC.5 ARTICLE 10",
      },
    ],
  },
  {
    value: "UTw",
    label: "Ultrahangos vizsgálat",
    options: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 23",
        label: "ASME BPVC SEC.5 ARTICLE 23",
      },
      { value: "MSZ EN ISO 13588", label: "MSZ EN ISO 13588" },
    ],
  },
  {
    value: "UT-L",
    label: "Ultrahangos vizsgálat",
    options: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 5",
        label: "ASME BPVC SEC.5 ARTICLE 5",
      },
      {
        value: "MSZ EN ISO 17640 10.2-es fejezet",
        label: "MSZ EN ISO 17640 10.2-es fejezet",
      },
    ],
  },
  {
    value: "VT",
    label: "Szemrevételezéses vizsgálat",
    options: [
      { value: "MSZ EN ISO 17637", label: "MSZ EN ISO 17637" },
      {
        value: "ASME BPVC SEC.5 ARTICLE 9",
        label: "ASME BPVC SEC.5 ARTICLE 9",
      },
    ],
  },
  {
    value: "Más",
    label: "Más",
  },
];

const options: Option[] = [
  {
    value: "RT",
    label: "Radiográfiai vizsgálat",
  },
  {
    value: "PT",
    label: "Folyadékbehatolásos vizsgálat",
  },
  {
    value: "MT",
    label: "Mágnesezhető poros vizsgálat",
  },
  { value: "HT", label: "Keménységmérés" },
  {
    value: "LT",
    label: "Tömörségi vizsgálat",
  },
  {
    value: "IT",
    label: "Fémek felületi szigetelésének vizsgálata",
  },
  { value: "PMI", label: "Pozitív anyagazonosítás" },
  { value: "UT", label: "Ultrahangos vizsgálat" },
  {
    value: "VT",
    label: "Szemrevételezéses vizsgálat",
  },
  { value: "Other", label: "Más" },
];

export const Kontakt = () => {
  // const lottieRef = useRef<typeof LottiePlayer | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const [selectedSubOption, setSelectedSubOption] = useState<Option[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
            selectedOption: JSON.stringify(selectedOption), // Pass the stringified version
            selectedOption2: JSON.stringify(selectedSubOption),
            message: message,
          },
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }
  const handleOptionChange = (selectedOptions: any) => {
    if (Array.isArray(selectedOptions)) {
      setSelectedOption(selectedOptions);
    } else if (selectedOptions) {
      setSelectedOption([selectedOptions]);
    } else {
      setSelectedOption([]);
    }
  };

  const handleSuboptionChange = (selectedOptions: any) => {
    if (Array.isArray(selectedOptions)) {
      setSelectedSubOption(selectedOptions);
    } else if (selectedOptions) {
      setSelectedSubOption([selectedOptions]);
    } else {
      setSelectedSubOption([]);
    }
  };

  return (
    <form
      className=" flex flex-col items-center gap-4 bg-[#1f1f1f] p-5 text-center"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-bold text-white">Kapcsolat</p>

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
      <div className="flex w-full flex-col items-center justify-evenly gap-4 text-center text-2xl md:w-2/3">
        <div className=" flex w-full flex-row items-center gap-4">
          <BsClipboardCheck className="hidden text-4xl text-white md:block" />
          <Select
            className="w-full"
            value={selectedOption}
            aria-label="Vizsgálati Eljárás"
            onChange={(selectedOptions) => {
              handleOptionChange(selectedOptions);
            }}
            options={options}
            isClearable
            isMulti
            placeholder="Vizsgálati Eljárás"
          />
        </div>
        <div className=" flex w-full flex-row items-center gap-4">
          <AiOutlineSearch className="hidden text-4xl text-white md:block" />
          <Select
            aria-label="Vizsgálati Szabvány"
            className="w-full"
            value={selectedSubOption}
            onChange={(selectedOptions) => {
              handleSuboptionChange(selectedOptions);
            }}
            options={options2}
            isClearable
            isMulti
            placeholder="Vizsgálati Szabvány"
          />
        </div>
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
        />
      </div>

      <button
        type="submit"
        aria-label="Küldés"
        className="flex flex-row items-center rounded-full bg-primary  text-center "
      >
        <span className=" flex items-center justify-evenly rounded-full text-center text-3xl">
          {submitted ? (
            <div className="flex justify-between">
              <p className="text-lg">Elküldve</p>
              <AiOutlineCheckCircle className="text-green-500" />
            </div>
          ) : (
            <div className="flex justify-between">
              <p className="text-lg">Küldés</p>
              <AiOutlineSend />
            </div>
          )}
        </span>
      </button>
      <p className="text-center text-2xl text-white">
        Vagy írj{" "}
        <a
          href="mailto:info@volvid.hu"
          className="trnsition-all font-bold underline duration-300 hover:text-gray-300"
        >
          email
        </a>
        -en
      </p>
    </form>
  );
};
