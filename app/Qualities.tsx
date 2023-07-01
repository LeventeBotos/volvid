import { FaCheck } from "react-icons/fa";

export const Qualities = () => {
  return (
    <div className="h-min-96 flex flex-row flex-wrap content-around items-stretch justify-center gap-5">
      <div className="flex h-20 w-full items-center justify-center px-3 text-center md:w-1/3">
        <FaCheck className=" w-10 self-center p-2 text-9xl text-primary lg:w-1/12" />
        <p className="w-5/6 px-2">Magas színvonalú szakértelem és precizitás</p>
      </div>
      <div className="flex h-20 w-full items-center justify-center px-3 text-center md:w-1/3">
        <FaCheck className="w-10 self-center p-2 text-9xl text-primary lg:w-1/12" />
        <p className="w-5/6 px-2">Hatékony megoldások gyors ütemben</p>
      </div>

      <div className="flex h-20 w-full items-center justify-center px-3 text-center md:w-1/3">
        <FaCheck className="w-10 self-center p-2 text-9xl text-primary lg:w-1/12" />
        <p className=" w-5/6 px-2">Hozzáértés és rugalmasság egy helyen</p>
      </div>
      <div className="flex h-20 w-full items-center justify-center px-3 text-center md:w-1/3">
        <FaCheck className="w-10 self-center p-2 text-9xl text-primary lg:w-1/12" />
        <p className=" w-5/6 px-2">
          Professzionális szolgáltatás, bármikor és bárhol
        </p>
      </div>
    </div>
  );
};
