import { BsStarFill, BsStarHalf } from "react-icons/bs";

export const S1 = () => {
  return (
    <div className="flex h-min w-full flex-col justify-between md:h-96 md:flex-row">
      <div className="flex w-full flex-col justify-evenly text-center text-2xl md:w-2/3">
        <div className="text-4xl font-bold">Volvid</div>
        <div>Budapest legjobb fodrásza</div>
        <div className="flex justify-center text-primary">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
      </div>
      <img
        alt="Kép a fodrászról"
        className="block h-96 w-full object-cover opacity-60 md:w-1/3"
        src="https://scontent.fbud6-4.fna.fbcdn.net/v/t31.18172-8/10550109_1568846540049714_8505667615229158979_o.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=REkjbDTHXDgAX-dmPmE&_nc_ht=scontent.fbud6-4.fna&oh=00_AfA1-3LNLkscj2MVzEZ4GjyYo-Y2SMgwM9p1oGCT5YSXMw&oe=6491ECA6"
      />
    </div>
  );
};
