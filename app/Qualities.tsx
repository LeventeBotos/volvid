import { FaCheck } from "react-icons/fa";

export const Qualities = () => {
  return (
    <div className="flex h-96 flex-col justify-evenly md:flex-row">
      <div className="flex flex-col justify-evenly">
        <div className="flex">
          <FaCheck className="self-center text-3xl text-primary" />
          <p className="p-3 text-center">
            Kiszállás akár 4 órán belül, országosan; 7/24-es rendelkezésre állás
          </p>
        </div>
        <div className="flex  ">
          <FaCheck className="self-center text-3xl text-primary" />
          <p className="p-3 text-center">
            Kiszállás akár 4 órán belül, országosan; 7/24-es rendelkezésre állás
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex  ">
          <FaCheck className="self-center text-3xl text-primary" />
          <p className="p-3 text-center">
            Kiszállás akár 4 órán belül, országosan; 7/24-es rendelkezésre állás
          </p>
        </div>
        <div className="flex  ">
          <FaCheck className="self-center text-3xl text-primary" />
          <p className="p-3 text-center">
            Kiszállás akár 4 órán belül, országosan; 7/24-es rendelkezésre állás
          </p>
        </div>
      </div>
    </div>
  );
};
