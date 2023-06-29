export const Jogosultsag = () => {
  return (
    <section className="flex flex-col gap-4 text-center">
      <p className="text-2xl font-bold">Certificates</p>
      <div className=" flex flex-col items-center justify-evenly md:flex-row">
        <a
          className="card h-20 w-full justify-center p-3 text-center align-middle underline md:w-1/4"
          href="/tanusitvanyok/O-221201-1-1825-MK-25072325-a.pdf"
        >
          <p className="align-middle">Accreditation document</p>
          {/* <br /> */}
        </a>

        {/* <a
          className="card w-full p-3 text-center  underline md:w-1/4"
          href="/tanusitvanyok/SCC-Tanúsítvány-Volvid-H.pdf"
        >
          <p>SCC tanusitvány</p>
        </a> */}
        <a
          className=" card h-20 w-full p-3 text-center align-middle underline md:w-1/4"
          href="/tanusitvanyok/SCC-Tanúsítvány-Volvid-H.pdf"
        >
          <p className=" m-auto">SCC certificate</p>
        </a>
        <a
          className=" card h-20 w-full p-3 text-center underline md:w-1/4"
          href="/tanusitvanyok/Tanúsítvány-tartályvizsgáló-VolvidZrt-2020.pdf"
        >
          <p>Tank inspection certificate</p>
        </a>
      </div>
    </section>
  );
};
