export const Header = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex flex-row items-center justify-between bg-[#1d1d1d] bg-opacity-70 px-4 py-2 backdrop-blur-lg backdrop-filter md:py-4">
      <div className="self-center text-center text-4xl font-bold">Volvid</div>
      <a href="/" target="_blank">
        <button className="flex flex-row items-center rounded-full text-center md:m-3">
          <span className="rounded-full">Foglalás</span>
        </button>
      </a>
    </nav>
  );
};
