"use client";
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";

export const Kontakt = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
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
        />
      </div>
      <div className="flex items-center gap-4 text-center text-2xl">
        <AiOutlineMail className="hidden text-4xl md:block" />
        <input
          id="frm-phone"
          type="text"
          name="phone"
          placeholder="Telefonszám"
          autoComplete="tel"
          className=" rounded-xl p-3 text-white md:p-5"
          required
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
          autoComplete="given-name"
          required
        />
      </div>
      <div className="flex items-center gap-4 text-center text-2xl">
        <AiOutlineMessage className="hidden text-4xl md:block" />
        <textarea
          id="frm-message"
          placeholder="Üzenet"
          name="message"
          className="rounded-xl p-3 text-white md:w-full md:p-5"
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
