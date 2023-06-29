export const Work = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold">Dolgozz velünk!</p>
      <div className=" flex w-full flex-col gap-3 p-5 text-xl md:w-1/2">
        <div className="flex justify-between">
          <img />
          <p>
            {" "}
            {/* Amennyiben egy nagy múltú stabil hátterű magyar cégnél szeretnél
          dolgozni de kipróbálnád magad akár külföldön is akkor a Volvid
          számodra remek lehetőség. */}
            Amennyiben az ország egyik legnagyobb anyagvizsgáló cégénél
            szeretnél dolgozni és kipróbálnád magad akár külföldön is akkor a
            Volvid Kft. számodra remek lehetőség.
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            {" "}
            Van már középfokú végzettséged és érdekel az anyagvizsgálat?{" "}
            <ul>
              Mi gondoskodunk a képzésedről és hosszútávon munkalehetőséget,
              folyamatos továbbképzést biztosítunk.
            </ul>
          </p>
          <img />
        </div>
        <div className="flex justify-between">
          {" "}
          <p>Neked a jó hozzáállást és a tanulási kedvet kell hoznod.</p>
          <img />
        </div>
        <div className="flex justify-between">
          <p>
            {" "}
            Amennyiben már anyagvizsgáló vagy, rendelkezel érvényes papírokkal
            akkor akár hosszú távú külföldi munkát is tudunk biztosítani
            számodra Németországban és Ausztriában.
          </p>
          <img />
        </div>
      </div>
    </section>
  );
};
