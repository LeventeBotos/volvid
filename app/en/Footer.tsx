"use client";

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
function onFormClick(num: number) {
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

export const Footer = () => {
  return (
    <footer className=" flex w-full flex-col bg-[#1f1f1f] text-center text-white">
      <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-10 py-5">
        <button
          onClick={() => {
            onLinkClick(0);
          }}
          aria-label="Main page"
          className=" items-center rounded-full text-center"
        >
          <span className="rounded-full">Main page</span>
        </button>
        <button
          onClick={() => {
            onLinkClick(1);
          }}
          aria-label="about"
          className=" items-center rounded-full text-center"
        >
          <span className="rounded-full">About</span>
        </button>
        <button
          onClick={() => {
            onLinkClick(3);
          }}
          className=" items-center rounded-full text-center"
        >
          <span className="rounded-full">Services</span>
        </button>
        <button
          onClick={() => {
            onFormClick(4);
          }}
          aria-label="contact"
          className=" items-center rounded-full text-center"
        >
          <span className="rounded-full">Contact</span>
        </button>
        <button
          onClick={() => {
            onLinkClick(5);
          }}
          aria-label="leaders"
          className=" items-center rounded-full text-center"
        >
          <span className="rounded-full">Leaders</span>
        </button>
      </div>
      <div className=" items-center self-center p-5 font-bold text-white ">
        <div className="flex w-full justify-evenly">
          <a
            href="/"
            className=" flex h-12 w-1/3 flex-col rounded-l-lg border-2 border-solid border-white text-center"
          >
            <img
              className=" h-full rounded-l-lg object-cover opacity-100"
              alt="hungarian"
              src="/images/hungarian.svg"
            />
          </a>
          <a
            href="/en"
            className="flex h-12 w-1/3 flex-col  border-2 border-solid border-white text-center"
          >
            <img
              className="h-full object-cover opacity-100"
              alt="english"
              src="/images/english.svg"
            />
          </a>
          <a
            href="/de"
            className="flex h-12 w-1/3 flex-col rounded-r-lg border-2 border-solid border-white text-center"
          >
            <img
              className="h-full rounded-r-lg object-cover opacity-100"
              alt="german"
              src="/images/german.svg"
            />
          </a>
        </div>
      </div>
      <p className="text-gray-400">Copyright &copy; Volvid</p>
    </footer>
  );
};
