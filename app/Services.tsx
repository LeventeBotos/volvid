export const Services = () => {
  return (
    <section className="flex flex-col">
      <p className="pb-3 text-center text-3xl font-bold">Vizsgálataink</p>
      <div className=" flex flex-row flex-wrap content-around items-stretch justify-center gap-4 md:gap-10">
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Radiográfiai vizsgálat</p>
          <p>
            A radiográfiai vizsgálat (RT) egy orvosi képalkotó eljárás, amelyben
            röntgensugárzást használnak a test belső részeinek vizsgálatára. A
            módszer lehetővé teszi a szervek, csontok és más anatómiai
            struktúrák részletes vizsgálatát, segítve az orvosokat a diagnózis
            felállításában és a megfelelő terápia kiválasztásában.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Folyadékbehatolásos vizsgálat</p>
          <p>
            A folyadékbehatolásos vizsgálat (PT) egy roncsolás mentes
            anyagvizsgálati eljárás, amelyet főként repedések, hibák vagy
            anyagfáradások kimutatására alkalmaznak. A vizsgálat során egy
            folyadékot alkalmaznak a vizsgált felületen, majd eltávolítják, és
            egy fehérítő anyaggal kezelik. Ezután a felszínt megvizsgálják, és a
            fehérítő anyag által kitöltött repedéseket vagy hibákat könnyen
            észlelhetik.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Mágnesezhető poros vizsgálat</p>
          <p>
            A mágnesezhető poros vizsgálat (MT) egy nemromboló anyagvizsgálati
            eljárás, amelyet a fémekben található felületi repedések, hibák vagy
            anyagfáradások kimutatására alkalmaznak. A vizsgálat során egy
            mágneses anyagot por formájában alkalmaznak a vizsgált felületen,
            majd speciális eszközökkel vizsgálják meg a porral kitöltött
            repedéseket vagy hibákat.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Ultrahangos vizsgálat</p>
          <p>
            Az ultrahangos vizsgálat (UT) egy képalkotó eljárás, amelyben
            ultrahanghullámokat használnak a test belső szerkezetének
            vizsgálatára. Az ultrahangos vizsgálat segítségével részletes
            képeket kaphatunk a szervekről, szövetekről és szervrendszerekről,
            és felismerhetünk eltéréseket vagy rendellenességeket.
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
            A fémek felületi szigetelésének vizsgálata (IT) egy eljárás, amely a
            fémfelületek szigetelésének hatékonyságát ellenőrzi. A vizsgálat
            során a fémfelületet elektromosan ellenálló réteggel vonják be, majd
            speciális eszközökkel mérnek az esetleges áteresztődést vagy
            hiányosságot.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Keménységmérés</p>
          <p>
            A keménységmérés (HT) egy eljárás, amely a fémek vagy más anyagok
            keménységét méri. A vizsgálat során speciális műszerekkel mérik a
            anyag ellenállását a behatolásra vagy nyomásra, és ez alapján
            meghatározzák a keménységi értéket.
          </p>
        </div>
        <div className="card m-10 flex w-full flex-col items-center justify-evenly p-3 text-center md:w-1/3">
          <p className="pb-3 text-2xl">Pozitív anyagazonosítás</p>
          <p>
            A pozitív anyagazonosítás (PMI) egy eljárás, amelynek során az
            anyagokat vagy alkatrészeket az összetételük alapján azonosítják. Az
            eljárás során elemzést végeznek, hogy meghatározzák az anyagokban
            található kémiai elemeket és összetevőket, ezáltal meghatározzák az
            anyag pontos azonosítását.
          </p>
        </div>
      </div>
    </section>
  );
};
