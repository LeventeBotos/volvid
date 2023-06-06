"use client";
import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";
import { useState } from "react";

export const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log("sending");
    let data = {
      name,
      email,
      message,
    };
    console.log(data);
    fetch;
  }

  return (
    <form
      className="flex flex-col items-center gap-4 text-center "
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-bold ">Kontakt</p>
      <div className="flex items-center gap-4 text-center text-2xl ">
        <AiOutlineMail className="hidden text-4xl md:block" />
        <input
          id="frm-email"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          className=" rounded-xl p-3 text-white md:p-5"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 text-center text-2xl">
        <AiOutlinePhone className="hidden text-4xl md:block" />
        <input
          id="frm-phone"
          type="text"
          name="phone"
          placeholder="Telefonszám"
          autoComplete="tel"
          className=" rounded-xl p-3 text-white md:p-5"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 text-center text-2xl">
        <BsPersonVcard className="hidden text-4xl md:block" />
        <input
          id="frm-first"
          type="text"
          name="first"
          placeholder="Név"
          className="rounded-xl p-3 text-white  md:p-5"
          autoComplete="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 text-center text-2xl">
        <AiOutlineMessage className="hidden text-4xl md:block" />
        <textarea
          id="frm-message"
          placeholder="Üzenet"
          name="message"
          className="rounded-xl p-3 text-white md:w-full md:p-5"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex flex-row items-center rounded-full bg-primary text-center md:m-3"
      >
        <span className="rounded-full">Küldés</span>
      </button>
    </form>
  );
};
