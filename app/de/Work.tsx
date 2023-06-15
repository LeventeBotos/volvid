export const Work = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold">Dolgozz velünk!</p>
      <div className="card flex w-full flex-col p-5 text-xl md:w-1/2">
        <p>
          Folyamatosan vannak karrierlehetőségek a cégünknél, írj egy{" "}
          <a
            className=" hover:underline"
            href="mailto:volvid.prescherv@volvid.hu"
          >
            emailt
          </a>{" "}
          vagy keress{" "}
          <a href="tel:+36 20 403 5353" className=" hover:underline ">
            telefonon
          </a>
          !(Prescher Viktoria)
        </p>
      </div>
    </section>
  );
};
