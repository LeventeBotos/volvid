import { S1 } from "./S1";
import { Services } from "./Services";
import { About } from "./About";
import Testamonials from "./Testamonials";
import { Location } from "./Location";
import { People } from "./People";
import { Qualities } from "./Qualities";
import Navbar from "./Navbar";
import { Kontakt } from "./Kontakt";

export default function Home() {
  return (
    <main className="">
      <div className="h-20 md:h-28" />
      <S1 />
      <br />
      <div className="h-96 w-full bg-slate-600 text-center text-xl font-bold text-white">
        hi
      </div>
      <Navbar />
      <br />
      <Qualities />
      <br />
      {/* <Testamonials /> */}
      <Services />
      <br />
      <Kontakt />
      <br />
      <People />
      <br />
      <About />
      <br />
      <Location />
      <br />
    </main>
  );
}
