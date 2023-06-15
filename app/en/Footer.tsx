"use client";

import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function onLinkClick(num: number) {
  const sections = document.getElementsByTagName("section");
  if (num >= 0 && num < sections.length) {
    const section = sections[num];
    const offset = 105; // Adjust this value to set the desired offset

    const sectionTop = section.offsetTop;
    const bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const targetScrollTop = sectionTop - offset;

    // Calculate the scroll distance
    const scrollDistance = targetScrollTop - bodyScrollTop;

    // Smooth scroll to the target position
    scrollToSmoothly(scrollDistance);
  }
}

function scrollToSmoothly(scrollDistance: number, duration = 300) {
  const start = document.documentElement.scrollTop || document.body.scrollTop;
  const startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  const animateScroll = function () {
    const currentTime =
      "now" in window.performance ? performance.now() : new Date().getTime();
    const elapsed = currentTime - startTime;

    const ease = function (t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    window.scroll(0, ease(elapsed, start, scrollDistance, duration));

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scroll(0, start + scrollDistance);
    }
  };

  animateScroll();
}

export const Footer = () => {
  return (
    <footer className=" flex w-full flex-col bg-[#1f1f1f] text-center text-white">
      <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-10 py-5">
        <div
          onClick={() => {
            onLinkClick(0);
          }}
          className=""
        >
          <button className="flex  flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">Főlap</span>
          </button>
        </div>
        <div
          onClick={() => {
            onLinkClick(1);
          }}
          className=" "
        >
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">
              Ajánlataink
            </span>
          </button>
        </div>
        <div
          onClick={() => {
            onLinkClick(2);
          }}
          className=""
        >
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">Vezetőink</span>
          </button>
        </div>
        <div
          onClick={() => {
            onLinkClick(3);
          }}
          className=""
        >
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">Rólunk</span>
          </button>
        </div>
        <div
          onClick={() => {
            onLinkClick(4);
          }}
          className=""
        >
          <button className="flex flex-row items-center rounded-full text-center md:m-3">
            <span className="whitee rounded-full bg-[#1f1f1f]">
              Telephelyek
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <p>Follow us!</p>
        <div className="flex justify-center text-5xl">
          <a target="_blank" className="whitee" href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
          <Link
            target="_blank"
            className="whitee"
            href="https://www.Linkedin.com"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
      <p className="text-gray-400">Copyright © Volvid 2023</p>
    </footer>
  );
};
