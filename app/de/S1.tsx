"use client";
import Image from "next/image";

export const S1 = () => {
  function onLinkClick(num: number) {
    const sections = document.getElementsByTagName("form");
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

  return (
    <section
      id="hero"
      className="s1 flex h-96 flex-col  items-center justify-evenly bg-black text-center "
    >
      <div
        className=" -z-2 opacity-45 absolute h-96 w-full object-contain
      "
      >
        {/* <Image fill src="/images/green.webp" objectFit="cover" alt="bg" /> */}
        <img
          src="/images/green.webp"
          alt="bg"
          className=" h-full w-full object-cover"
        />
      </div>

      <p className="z-10 text-6xl font-semibold text-white">Volvid</p>
      <p className=" z-10 text-xl text-white">
        Qualität. Erfahrung. Zuverlässigkeit.
      </p>
      <div className="z-10 ">
        {" "}
        <button
          onClick={() => {
            onLinkClick(0);
          }}
          className=" bg-blur-xl items-center rounded-full border-4 border-solid border-black bg-black bg-opacity-25  p-5 text-center text-white hover:border-white hover:bg-white hover:text-black"
        >
          Contact
          {/* <span className="rounded-full">Kontakt</span> */}
        </button>
      </div>
    </section>
  );
};
