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

const options2 = [
  {
    value: "RT",
    label: "Radiographic examination",
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
    label: "Liquid penetrant examination",
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
    label: "Magnetic particle examination",
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
    label: "Leakage testing",
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
    label: "Ultrasonic testing",
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
    label: "Ultrasonic testing",
    options: [
      {
        value: "ASME BPVC SEC.5 ARTICLE 5",
        label: "ASME BPVC SEC.5 ARTICLE 5",
      },
      {
        value: "MSZ EN ISO 17640 10.2 chapter",
        label: "MSZ EN ISO 17640 10.2 chapter",
      },
    ],
  },
  {
    value: "VT",
    label: "Visual testing",
    options: [
      { value: "MSZ EN ISO 17637", label: "MSZ EN ISO 17637" },
      {
        value: "ASME BPVC SEC.5 ARTICLE 9",
        label: "ASME BPVC SEC.5 ARTICLE 9",
      },
    ],
  },
  {
    value: "Other",
    label: "Other",
  },
];

const options: Option[] = [
  {
    value: "RT",
    label: "Radiographic examination",
  },
  {
    value: "PT",
    label: "Liquid penetrant examination",
  },
  {
    value: "MT",
    label: "Magnetic particle examination",
  },
  { value: "HT", label: "Hardness testing" },
  {
    value: "LT",
    label: "Leakage testing",
  },
  {
    value: "IT",
    label: "Surface insulation testing of metals",
  },
  { value: "PMI", label: "Positive material identification" },
  { value: "UT", label: "Ultrasonic testing" },
  {
    value: "VT",
    label: "Visual testing",
  },
  { value: "Other", label: "Other" },
];

export const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const [selectedSubOption, setSelectedSubOption] = useState<Option[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log("start");
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
      console.log(selectedOption);
    } else if (selectedOptions) {
      setSelectedOption([selectedOptions]);
      console.log(selectedOption);
    } else {
      setSelectedOption([]);
      console.log(selectedOption);
    }
  };

  const handleSuboptionChange = (selectedOptions: any) => {
    if (Array.isArray(selectedOptions)) {
      setSelectedSubOption(selectedOptions);
      console.log(selectedOption);
    } else if (selectedOptions) {
      setSelectedSubOption([selectedOptions]);
      console.log(selectedOption);
    } else {
      setSelectedSubOption([]);
      console.log(selectedSubOption);
    }
  };
  return (
    <form
      className="flex flex-col items-center gap-4 bg-[#1f1f1f] p-5 text-center"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-bold text-white">Contact</p>

      <div className="flex w-full items-center gap-4 text-center text-2xl md:w-2/3">
        <BsPersonVcard className="hidden text-4xl text-white md:block" />
        <input
          id="frm-first"
          type="text"
          name="first"
          placeholder="Name"
          className="w-full rounded-md p-3 md:p-5"
          autoComplete="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full items-center gap-4 text-center text-2xl md:w-2/3 ">
        <AiOutlineMail className="hidden text-4xl text-white md:block" />
        <input
          id="frm-email"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          className="w-full rounded-md p-3 md:p-5"
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
          placeholder="Phone number"
          autoComplete="tel"
          className="w-full rounded-md p-3 md:p-5"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-evenly gap-4 text-center text-2xl md:w-2/3">
        <div className="flex w-full flex-row items-center gap-4">
          <BsClipboardCheck className="hidden text-4xl text-white md:block" />
          <Select
            aria-label="Examination Procedure"
            className="w-full"
            value={selectedOption}
            onChange={(selectedOptions) => {
              handleOptionChange(selectedOptions);
            }}
            options={options}
            isClearable
            isMulti
            placeholder="Examination Procedure"
          />
        </div>
        <div className="flex w-full flex-row items-center gap-4">
          <AiOutlineSearch className="hidden text-4xl text-white md:block" />
          <Select
            aria-label="Examination Standard"
            className="w-full"
            value={selectedSubOption}
            onChange={(selectedOptions) => {
              handleSuboptionChange(selectedOptions);
            }}
            options={options2}
            isClearable
            isMulti
            placeholder="Examination Standard"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-4 text-center text-2xl md:w-2/3">
        <AiOutlineMessage className="hidden text-4xl text-white md:block" />
        <textarea
          id="frm-message"
          placeholder="Message"
          name="message"
          className="w-full rounded-md p-3 md:w-full md:p-5"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        aria-label="send"
        type="submit"
        // onClick={() => {
        //   lottieRef.current?.play();
        // }}
        className="flex flex-row items-center rounded-full bg-primary text-center"
      >
        <span className="flex items-center justify-evenly rounded-full text-center text-3xl">
          {submitted ? (
            <div className="flex justify-between">
              <p className="text-lg">Sent</p>
              <AiOutlineCheckCircle className="text-green-500" />
            </div>
          ) : (
            <div className="flex justify-between">
              <p className="text-lg">Send</p>
              <AiOutlineSend />
            </div>
            // <Lottie
            //   lottieRef={lottieRef}
            //   animationData={animationData}
            //   style={animationStyle}
            //   loop={false}
            //   autoplay={false}
            // />
          )}
        </span>
      </button>
    </form>
  );
};
