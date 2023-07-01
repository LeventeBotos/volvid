import { S1 } from "./S1";
import { Services } from "./Services";
import { About } from "./About";
import { Location } from "./Location";
import { People } from "./People";
import { Qualities } from "./Qualities";
import { Kontakt } from "./Kontakt";
import { Jogosultsag } from "./Jogosultsag";
import { Projects } from "./Projects";
import { Work } from "./Work";
import { Memberships } from "./Memberships";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
    <main className="text-center">
      <Navbar />
      <div className="h-20 md:h-28" />
      <S1 />
      <br />
      <Qualities />
      <br />
      <About />
      <br />
      <Memberships />
      <br />
      <Projects />
      <br />
      <Services />
      <br />
      <Kontakt />
      <br />
      <People />
      <br />
      <Work />
      <br />
      <Location />
      <br />
      <Jogosultsag />
      <br />
      <Footer />
    </main>
  );
}
