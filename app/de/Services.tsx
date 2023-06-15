export const Services = () => {
  return (
    <section className="flex flex-col">
      <p className="pb-3 text-center text-3xl font-bold">Vizsgálataink</p>
      <div className=" flex flex-row flex-wrap content-around items-stretch justify-center gap-4 md:gap-10">
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Radiográfiai vizsgálat</p>
          <p>
            A radiográfiai vizsgálat (RT) röntgensugárzást használ az anyagok,
            szerkezetek és hegesztési varratok belső részeinek vizsgálatára. Ez
            segíti az anyagok és szerkezeti elemek minőségellenőrzését,
            hibakeresését és biztonságának ellenőrzését különböző iparágakban. A
            módszer hatékonyan észlelheti a térfogati jellegű anyagfolytonossági
            hibákat, bizonyos esetekben a repedéseket és szerkezeti eltéréseket.
            Szakképzett anyagvizsgáló szakemberek végzik a vizsgálatokat, és
            biztonsági előírások betartásával minimalizálják a sugárzás
            hatásának kockázatát.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Folyadékbehatolásos vizsgálat</p>
          <p>
            A folyadékbehatolásos vizsgálat (PT) egy roncsolásmentes
            anyagvizsgálati eljárás, amelyet főként felületre kifutó repedésre
            utaló indikációt, anyagfolytonossági hibák vagy anyagfáradások
            kimutatására alkalmaznak. A vizsgálat során egy folyadékot
            alkalmaznak a vizsgált felületen, majd eltávolítják, és egy fehérítő
            anyaggal kezelik. Ezután a felszínt megvizsgálják, és a fehérítő
            anyag által kitöltött repedéseket vagy hibákat könnyen észlelhetik.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Mágnesezhető poros vizsgálat</p>
          <p>
            A mágnesezhető poros vizsgálat (MT) egy roncsolásmentes
            anyagvizsgálati eljárás, amelyet a fémekben található felületi
            illetve felület közeli repedésre utaló anyagfolytonossági hibák vagy
            anyagfáradás okozta repedések kimutatására alkalmaznak. A vizsgálat
            során a mágneses térerő hatására rendeződő mágnespor által kirajzolt
            erővonalak által következtethetünk lineáris indikációra.
            {/*egy mágneses anyagot por formájában alkalmaznak a
            vizsgált felületen, majd speciális eszközökkel vizsgálják meg a
            porral kitöltött repedéseket vagy hibákat. */}
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Ultrahangos vizsgálat</p>
          <p>
            Az ultrahangos vizsgálat (UT) egy képalkotó eljárás, amelyben
            ultrahanghullámokat használnak a test belső szerkezetének
            vizsgálatára. Az ultrahangos vizsgálat segítségével részletes
            képeket kaphatunk az anyagok, szerkezeti elemek és varratok belső
            anyagfolytonossági hibáiról.
            {/* szervekről, szövetekről és
            szervrendszerekről, és felismerhetünk eltéréseket vagy
            rendellenességeket. */}
          </p>
        </div>

        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Szemrevételezéses vizsgálat</p>
          <p>
            A szemrevételezéses vizsgálat (VT) egy vizuális ellenőrzési eljárás,
            amely során a vizsgáló szabad szemmel vizsgálja a felületeket,
            alkatrészeket vagy szerkezeteket. Ez az eljárás segít az anyagok
            vagy szerkezetek látható hibáinak, sérüléseinek vagy deformációinak
            felismerésében.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Tömörségi vizsgálat</p>
          <p>
            A tömörségi vizsgálat (LT) egy anyagvizsgálati eljárás, amelyet a
            szerkezetek vagy alkatrészek tömörségének ellenőrzésére alkalmaznak.
            Ez az eljárás segít kimutatni a szivárgást, repedéseket vagy más
            anyaghibákat a vizsgált alkatrészben vagy szerkezetben.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">
            Fémek felületi szigetelésének vizsgálata
          </p>
          <p>
            A fémek felületi szigetelésének vizsgálata (IT), másnéven átütés
            vizsgálat egy eljárás, amely a fémfelületek bevonatainak épségét
            ellenőrzi. A vizsgálat során a fémfelületek bevonatát speciális
            eszközökkel vizsgálják mely során az esetleg látható elektromos ív a
            szigetelés sérülésére utal.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Keménységmérés</p>
          <p>
            A keménységmérés (HT) egy eljárás, amely a fémek vagy más anyagok
            keménységét méri. A vizsgálat során speciális műszerekkel mérik az
            anyag benyomódással szembeni ellenállását a benyomódás mértékéből
            következtethetünk az anyag keménységére.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Pozitív anyagazonosítás</p>
          <p>
            A pozitív anyagazonosítás (PMI) egy eljárás, amelynek során az
            anyagokat vagy alkatrészeket az összetételük alapján azonosítják. Az
            eljárás során elemzést végeznek, hogy meghatározzák az anyagokban
            található kémiai elemeket és összetevőket, ezáltal meghatározzák a
            vizsgált anyag összetételét.
          </p>
        </div>
      </div>
    </section>
  );
};
