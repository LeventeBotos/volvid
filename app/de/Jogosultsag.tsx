export const Jogosultsag: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 text-center">
      <p className="text-2xl font-bold">Zertifikate</p>
      <div className="flex flex-col items-center justify-evenly md:flex-row">
        <a
          className="card h-20 w-full justify-center p-3 text-center align-middle underline md:w-1/4"
          href="/tanusitvanyok/O-221201-1-1825-MK-25072325-a.pdf"
        >
          <p className="align-middle">Akkreditierungsdokument</p>
        </a>
        <a
          className="card h-20 w-full p-3 text-center align-middle underline md:w-1/4"
          href="/tanusitvanyok/Scc.pdf"
        >
          <p className="m-auto">SCC Zertifikat</p>
        </a>
        <a
          className="card h-20 w-full p-3 text-center underline md:w-1/4"
          href="/tanusitvanyok/Tanúsítvány-tartályvizsgáló-VolvidZrt-2020.pdf"
        >
          <p>Tankinspektionszertifikat</p>
        </a>
      </div>
    </section>
  );
};
