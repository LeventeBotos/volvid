import { S1 } from "./S1";
import { Services } from "./Services";
import { About } from "./About";
import Testamonials from "./Testamonials";
import { Location } from "./Location";
import { People } from "./People";
import { Qualities } from "./Qualities";
import Navbar from "./Navbar";
import { Kontakt } from "./Kontakt";
import Buttons from "./Buttons";

export default function Home() {
  return (
    <main className="">
      <div className="h-20 md:h-28" />
      <S1 />
      <br />
      <Navbar />
      <br />
      <Qualities />
      <br />
      <About />
      <br />
      {/* <Testamonials /> */}
      <Services />
      <br />
      <Kontakt />
      <br />
      <People />
      <br />
      <Location />
      <br />
    </main>
  );
}
