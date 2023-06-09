export const Jogosultsag = () => {
  return (
    <section className="flex flex-col gap-4 text-center">
      <p className="text-2xl font-bold">Tanusitványok</p>
      <div className="m-3 flex flex-col items-center justify-evenly md:flex-row">
        <div className="card w-full p-3 text-center md:w-1/4">
          <p>Akkreditálási okirat</p>
          <a
            className="underline"
            href="/tanusitvanyok/O-221201-1-1825-MK-25072325-a.pdf"
          >
            link
          </a>
        </div>
        <div className="card w-full p-3 text-center md:w-1/4">
          <p>SCC tanusitvány</p>
          <a
            className="underline"
            href="/tanusitvanyok/SCC-Tanúsítvány-Volvid-H.pdf"
          >
            link
          </a>
        </div>
        <div className="card w-full p-3 text-center md:w-1/4">
          <p>Tartályvizsgálati tanusitvány</p>
          <a
            className="underline"
            href="/tanusitvanyok/Tanúsítvány-tartályvizsgáló-VolvidZrt-2020.pdf"
          >
            link
          </a>
        </div>
      </div>
    </section>
  );
};
