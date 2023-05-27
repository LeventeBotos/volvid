import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className=" flex w-full flex-col bg-[#1f1f1f] text-center text-white">
      <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-10 py-5">
        <a href={"#hero"} className="">
          <button className="flex  flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">Főlap</span>
          </button>
        </a>
        <Link href="/" className=" ">
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">
              Ajánlataink
            </span>
          </button>
        </Link>
        <Link href="/" className="">
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">Vezetőink</span>
          </button>
        </Link>
        <Link href="/" className="">
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">Rólunk</span>
          </button>
        </Link>
        <Link href="/" className="">
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">
              Telephelyek
            </span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col p-5">
        <p>Kövess minket!</p>
        <div className="flex justify-center text-5xl">
          <a target="_blank" className="whitee" href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
          <Link
            target="_blank"
            className="whitee"
            href="https://www.linkedin.com"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
      <p className="text-gray-400">Copyright © Volvid 2023</p>
    </footer>
  );
};
