export const Work = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold">Work with Us!</p>
      <div className="card flex w-full flex-col p-5 text-xl md:w-1/2">
        <p>
          We constantly have career opportunities at our company. Send an{" "}
          <a
            className="hover:underline"
            href="mailto:volvid.prescherv@volvid.hu"
          >
            email
          </a>{" "}
          or contact us{" "}
          <a href="tel:+36 20 403 5353" className="hover:underline">
            by phone
          </a>
          !(Prescher Viktoria)
        </p>
      </div>
    </section>
  );
};
