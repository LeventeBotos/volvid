import { S1 } from "./S1";
import { Services } from "./Services";
import { About } from "./About";
import Testamonials from "./Testamonials";
import { Location } from "./Location";

export default function Home() {
  return (
    <main className="">
      <div className="h-28" />
      <S1 />
      <Services />
      <Testamonials />
      <About />
      <Location />
    </main>
  );
}
