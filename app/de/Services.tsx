import HTLightbox from "./HT";
import ITLightbox from "./IT";
import LTLightbox from "./LT";
import MTLightbox from "./MT";
import PTLightbox from "./PT";
import RTLightbox from "./RT";
import UHLightbox from "./UH";

export const Services = () => {
  return (
    <section className="flex flex-col">
      <p className="pb-3 text-center text-3xl font-bold">
        Unsere Dienstleistungen
      </p>
      <div className="flex flex-row flex-wrap content-around items-stretch justify-center gap-4 md:gap-10">
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Radiografische Prüfung</p>
          <p className="pb-3">
            Radiografische Prüfung (RT) verwendet Röntgenstrahlung, um die
            internen Teile von Materialien, Strukturen und Schweißverbindungen
            zu inspizieren. Sie unterstützt die Qualitätskontrolle, die
            Fehlererkennung und die Sicherheitsbewertung von Materialien und
            Bauteilen in verschiedenen Branchen. Die Methode erkennt effektiv
            volumetrische Diskontinuitäten, Risse und strukturelle Variationen.
            Qualifizierte Fachleute für Materialprüfung führen diese
            Inspektionen durch und minimieren dabei die mit Strahlenexposition
            verbundenen Risiken durch die Einhaltung von
            Sicherheitsvorschriften.
          </p>
          <RTLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Flüssigkeitsrissprüfung</p>
          <p className="pb-3">
            Die Flüssigkeitsrissprüfung (Liquid Penetrant Testing, PT) ist eine
            zerstörungsfreie Prüfungsmethode, die hauptsächlich zur Erkennung
            von oberflächenbrechenden Rissen, Materialdiskontinuitäten oder
            Ermüdungserscheinungen in Materialien eingesetzt wird. Bei diesem
            Test wird ein flüssiges Eindringmittel auf die zu untersuchende
            Oberfläche aufgetragen, anschließend entfernt und mit einem
            Entwickler behandelt. Die Oberfläche wird dann inspiziert, und
            Anzeichen wie mit dem Entwickler sichtbar gemachte Risse oder
            Defekte können leicht erkannt werden. Die Flüssigkeitsrissprüfung
            eignet sich gut zur Erkennung von Oberflächenfehlern in Metallen,
            Kunststoffen und Keramiken. Sie wird häufig in der Luft- und
            Raumfahrtindustrie, der Automobilindustrie, im Maschinenbau und in
            anderen Branchen angewendet.
          </p>
          <PTLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl"> Magnetpulverprüfung</p>
          <p className="pb-3">
            Die Magnetpulverprüfung (Magnetic Particle Testing, MT) ist eine
            zerstörungsfreie Prüfungsmethode, die zur Erkennung von Oberflächen-
            oder nahegelegenen Diskontinuitäten, Materialdiskontinuitäten oder
            Rissen, die durch Materialermüdung in Metallen verursacht werden,
            verwendet wird. Während des Tests richten sich die magnetischen
            Partikel unter dem Einfluss eines magnetischen Feldes aus und bilden
            sichtbare Anzeichen für lineare Defekte.c
          </p>
          <MTLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Ultrasonic Testing</p>
          <p className="pb-3">
            Die Ultraschallprüfung (Ultrasonic Testing, UT) ist eine bildgebende
            Technik, die Ultraschallwellen verwendet, um die interne Struktur
            eines Objekts zu untersuchen. Sie liefert detaillierte Bilder von
            internen Diskontinuitäten in Materialien, Bauelementen und
            Schweißverbindungen und ermöglicht die Erkennung von Abweichungen
            oder Anomalien.
          </p>
          <UHLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">visuelle Prüfung </p>
          <p className="pb-3">
            Die visuelle Prüfung (Visual Testing, VT) ist ein Verfahren der
            visuellen Inspektion, bei dem der Prüfer mit bloßem Auge
            Oberflächen, Komponenten oder Strukturen untersucht. Dieses
            Verfahren hilft bei der Identifizierung sichtbarer Mängel, Schäden
            oder Verformungen in Materialien oder Strukturen.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Dichtheitsprüfung</p>
          <p className="pb-3">
            Die Leckprüfung (Leak Testing, LT) ist eine Materialprüfungsmethode,
            die verwendet wird, um die Dichtheit von Strukturen oder Komponenten
            zu überprüfen. Bei dieser Prüfungsmethode wird untersucht, ob Lecks,
            Risse oder andere Materialfehler in der getesteten Komponente oder
            Struktur vorhanden sind. Die Leckprüfung hilft dabei,
            Undichtigkeiten zu erkennen und sicherzustellen, dass die getesteten
            Bauteile oder Strukturen den erforderlichen Dichtheitsanforderungen
            entsprechen.
          </p>
          <LTLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Beschichtungsinspektion </p>
          <p className="pb-3">
            Die Beschichtungsinspektion (Coating Inspection, IT), auch als
            Spannungsfeldprüfung oder Holiday-Test bezeichnet, ist ein Verfahren
            zur Überprüfung der Integrität von Beschichtungen auf
            Metalloberflächen. Bei dieser Inspektion wird die Beschichtung auf
            Metalloberflächen mithilfe spezieller Werkzeuge untersucht, und
            sichtbare elektrische Lichtbögen zeigen Schäden an der Isolierung
            der Beschichtung an. Der Holiday-Test wird verwendet, um
            sicherzustellen, dass die Beschichtung keine Löcher, Risse oder
            andere Defekte aufweist, die die Korrosion der darunterliegenden
            Metallfläche verursachen könnten. Diese Inspektionstechnik wird
            häufig in Industriebereichen wie der Öl- und Gasindustrie, dem
            Schiffbau und der Bauindustrie eingesetzt, um sicherzustellen, dass
            die Beschichtung den erforderlichen Schutz bietet.
          </p>
          <ITLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Härteprüfung</p>
          <p className="pb-3">
            Die Härteprüfung (Hardness Testing, HT) ist ein Verfahren zur
            Messung der Härte von Metallen und anderen Materialien. Während des
            Tests wird der Widerstand des Materials gegenüber einer Eindringung
            mithilfe spezialisierter Instrumente gemessen, und der Grad der
            Eindringung liefert Informationen über die Härte des Materials.
          </p>
          <HTLightbox />
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-between p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Positive Material Identification</p>
          <p className="pb-3">
            Die Positive Material Identification (PMI) ist ein Verfahren zur
            Identifizierung von Materialien oder Komponenten auf der Grundlage
            ihrer Zusammensetzung. Der Prozess beinhaltet eine Analyse, um die
            chemischen Elemente und Bestandteile in den Materialien zu bestimmen
            und damit die Zusammensetzung des getesteten Materials
            festzustellen. Die PMI wird eingesetzt, um sicherzustellen, dass das
            Material den erforderlichen Spezifikationen und Standards
            entspricht. Sie wird in verschiedenen Branchen angewendet, darunter
            Petrochemie, Maschinenbau, Metallverarbeitung, Luft- und Raumfahrt
            sowie in anderen Bereichen, in denen die genaue Identifikation und
            Bestätigung der Materialzusammensetzung wichtig ist.
          </p>
        </div>
      </div>
    </section>
  );
};
