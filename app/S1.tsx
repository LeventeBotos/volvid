"use client";

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
      className="s1 flex  flex-col items-center justify-evenly p-5 text-center text-[#1f1f1f] "
    >
      <p className="text-6xl font-semibold">Volvid</p>
      <div className="text-xl">Minőség. Tapasztalat. Megbízhatóság.</div>
      <div>
        {" "}
        <button
          onClick={() => {
            onLinkClick(0);
          }}
          className=" items-center rounded-full text-center"
        >
          <span className="rounded-full">Kontakt</span>
        </button>
      </div>
    </section>
  );
};
