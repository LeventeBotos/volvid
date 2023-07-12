export const People = () => {
  return (
    <section>
      <p className="pb-3 text-center text-3xl font-bold">Vezetőink</p>
      <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-4 md:gap-10">
        <div className="card flex w-full flex-col justify-between p-3 text-center shadow-2xl md:w-1/4">
          <p className="text-xl">Kovács Gyula</p>
          <p>vezérigazgató</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Botos Kornél</p>
          <p>műszaki igazgató</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Kuruczné Prescher Viktória</p>
          <p>termelési igazgató</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Tarnóczi Péter</p>
          <p>kirendeltség vezető, Százhalombatta</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Nagy László</p>
          <p>kirendeltség vezető, Miskolc</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Polestyuk Zoltán</p>
          <p>kirendeltség vezető, Szeged</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Maár Viktória</p>
          <p>gazdasági igazgató</p>
        </div>
        <div className=" card flex w-full flex-col justify-between p-3 text-center md:w-1/4">
          <p className="text-xl">Zsigmond Hajnalka</p>
          <p>irodavezető</p>
        </div>
      </div>
    </section>
  );
};
