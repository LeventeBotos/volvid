export const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex h-28 flex-row items-center justify-between bg-[#1d1d1d] bg-opacity-70 px-4 py-2 backdrop-blur-lg backdrop-filter md:py-4 ">
      <img
        src="https://static.wixstatic.com/media/1752f4_d75b1eda8bd24e9290a20ee4da74e03f~mv2.png/v1/fill/w_285,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/volvid%20logo.png"
        alt="logo"
        className="h-full self-center opacity-100"
      />
      <a href="/" target="_blank">
        <button className="flex flex-row items-center rounded-full text-center md:m-3">
          <span className="rounded-full">Kontakt</span>
        </button>
      </a>
    </nav>
  );
};
