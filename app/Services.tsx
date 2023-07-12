import HTLightbox from "./{lightboxes}/HT";
import ITLightbox from "./{lightboxes}/IT";
import MTLightbox from "./{lightboxes}/MT";
import PTLightbox from "./{lightboxes}/PT";
import LTLightbox from "./{lightboxes}/LT";
import RTLightbox from "./{lightboxes}/RT";
import UHLightbox from "./{lightboxes}/UH";

export const Services = () => {
  return (
    <section className="flex flex-col">
      <p className="pb-3 text-center text-3xl font-bold">Vizsgálataink</p>
      <div className=" flex flex-row flex-wrap content-around items-stretch justify-center gap-4 md:gap-10">
        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className=" z-10 flex h-full w-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className=" pb-3 text-2xl">Radiográfiai vizsgálat</p>
            <p className="pb-3">
              A radiográfiai vizsgálat (RT) röntgensugárzást használ az anyagok,
              szerkezetek és hegesztési varratok belső részeinek vizsgálatára.
              Ez segíti az anyagok és szerkezeti elemek minőségellenőrzését,
              hibakeresését és biztonságának ellenőrzését különböző iparágakban.
              A módszer hatékonyan észlelheti a térfogati jellegű
              anyagfolytonossági hibákat, bizonyos esetekben a repedéseket és
              szerkezeti eltéréseket. Szakképzett anyagvizsgáló szakemberek
              végzik a vizsgálatokat, és biztonsági előírások betartásával
              minimalizálják a sugárzás hatásának kockázatát.
            </p>
            <RTLightbox />
          </div>
          <img
            src="/images/RT/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>
        <div className="relative flex w-full flex-col items-center justify-between rounded-full text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full w-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Folyadékbehatolásos vizsgálat</p>
            <p className="pb-3">
              A folyadékbehatolásos vizsgálat (PT) egy roncsolásmentes
              anyagvizsgálati eljárás, amelyet főként felületre kifutó repedésre
              utaló indikációt, anyagfolytonossági hibák vagy anyagfáradások
              kimutatására alkalmaznak. A vizsgálat során egy folyadékot
              alkalmaznak a vizsgált felületen, majd eltávolítják, és egy
              fehérítő anyaggal kezelik. Ezután a felszínt megvizsgálják, és a
              fehérítő anyag által kitöltött repedéseket vagy hibákat könnyen
              észlelhetik.
            </p>
            <PTLightbox />
          </div>
          <img
            src="/images/PT/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>
        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Mágnesezhető poros vizsgálat</p>
            <p className="pb-3">
              A mágnesezhető poros vizsgálat (MT) egy roncsolásmentes
              anyagvizsgálati eljárás, amelyet a fémekben található felületi
              illetve felület közeli repedésre utaló anyagfolytonossági hibák
              vagy anyagfáradás okozta repedések kimutatására alkalmaznak. A
              vizsgálat során a mágneses térerő hatására rendeződő mágnespor
              által kirajzolt erővonalak által következtethetünk lineáris
              indikációra.
            </p>
            <MTLightbox />
          </div>
          <img
            src="/images/MT/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>
        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Ultrahangos vizsgálat</p>
            <p className="pb-3">
              Az ultrahangos vizsgálat (UT) egy képalkotó eljárás, amelyben
              ultrahanghullámokat használnak a test belső szerkezetének
              vizsgálatára. Az ultrahangos vizsgálat segítségével részletes
              képeket kaphatunk az anyagok, szerkezeti elemek és varratok belső
              anyagfolytonossági hibáiról.
            </p>
            <UHLightbox />
          </div>
          <img
            src="/images/UH/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>
        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Szemrevételezéses vizsgálat</p>
            <p className="pb-3">
              A szemrevételezéses vizsgálat (VT) egy vizuális ellenőrzési
              eljárás, amely során a vizsgáló szabad szemmel vizsgálja a
              felületeket, alkatrészeket vagy szerkezeteket. Ez az eljárás segít
              az anyagok vagy szerkezetek látható hibáinak, sérüléseinek vagy
              deformációinak felismerésében.
            </p>
          </div>
        </div>
        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Tömörségi vizsgálat</p>
            <p className="pb-3">
              A tömörségi vizsgálat (LT) egy anyagvizsgálati eljárás, amelyet a
              szerkezetek vagy alkatrészek tömörségének ellenőrzésére
              alkalmaznak. Ez az eljárás segít kimutatni a szivárgást,
              repedéseket vagy más anyaghibákat a vizsgált alkatrészben vagy
              szerkezetben.
            </p>
            <LTLightbox />
          </div>
          <img
            src="/images/LT/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>

        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">
              Fémek felületi szigetelésének vizsgálata
            </p>
            <p className="pb-3">
              A fémek felületi szigetelésének vizsgálata (IT), másnéven átütés
              vizsgálat egy eljárás, amely a fémfelületek bevonatainak épségét
              ellenőrzi. A vizsgálat során a fémfelületek bevonatát speciális
              eszközökkel vizsgálják mely során az esetleg látható elektromos ív
              a szigetelés sérülésére utal.
            </p>
            <ITLightbox />
          </div>
          <img
            src="/images/IT/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>

        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Keménységmérés</p>
            <p className="pb-3">
              A keménységmérés (HT) egy eljárás, amely a fémek vagy más anyagok
              keménységét méri. A vizsgálat során speciális műszerekkel mérik az
              anyag benyomódással szembeni ellenállását a benyomódás mértékéből
              következtethetünk az anyag keménységére.
            </p>
            <HTLightbox />
          </div>
          <img
            src="/images/HT/1.webp"
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover opacity-100 blur-sm"
          />
        </div>

        <div className=" relative flex w-full flex-col items-center justify-between rounded-lg text-center shadow-2xl md:w-1/3">
          <div className="z-10 flex h-full flex-col items-center justify-evenly rounded-lg bg-black bg-opacity-50 p-2 text-white">
            <p className="pb-3 text-2xl">Pozitív anyagazonosítás</p>
            <p className="pb-3">
              A pozitív anyagazonosítás (PMI) egy eljárás, amelynek során az
              anyagokat vagy alkatrészeket az összetételük alapján azonosítják.
              Az eljárás során elemzést végeznek, hogy meghatározzák az
              anyagokban található kémiai elemeket és összetevőket, ezáltal
              meghatározzák a vizsgált anyag összetételét.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
