export const Work = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold">Arbeiten Sie mit uns!</p>
      <div className=" flex w-full flex-col gap-3 p-5 text-xl md:w-1/2">
        <div className="flex justify-between">
          <img />
          <p>
            {" "}
            {/* Amennyiben egy nagy múltú stabil hátterű magyar cégnél szeretnél
          dolgozni de kipróbálnád magad akár külföldön is akkor a Volvid
          számodra remek lehetőség. */}
            Wenn Sie daran interessiert sind, bei einem der größten
            Materialprüfungsunternehmen des Landes zu arbeiten und auch im
            Ausland neue Erfahrungen sammeln möchten, bietet Volvid Ltd. eine
            großartige Gelegenheit für Sie.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            {" "}
            <p>
              Haben Sie bereits einen Abschluss in der Sekundarstufe und sind
              Sie an der Materialprüfung interessiert?
            </p>
            <p>
              Wir kümmern uns um Ihre Ausbildung und bieten langfristige
              Arbeitsmöglichkeiten sowie kontinuierliche Weiterbildung.
            </p>
          </div>
          <img />
        </div>
        <div className="flex justify-between">
          {" "}
          <p>
            Sie sollten eine positive Einstellung und Lernbereitschaft
            mitbringen.
          </p>
          <img />
        </div>
        <div className="flex justify-between">
          <p>
            {" "}
            Wenn Sie bereits Materialprüfer sind und über gültige Dokumentation
            verfügen, können wir Ihnen sogar langfristige Jobmöglichkeiten in
            Deutschland und Österreich bieten.
          </p>
          <img />
        </div>
      </div>
    </section>
  );
};
