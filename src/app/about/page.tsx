import Image from "next/image";
import Hero from "../components/About/Hero";
import Stats from "../components/Stats";
import Legacy from "../components/Legacy";
import Roadmap from "../components/About/Roadmap";
import Testimonials from "../components/Testimonials";
import Consumer from "../components/Consumer";
import Merits from "../components/Merits";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mission from "../components/About/Mission";
import Value from "../components/About/Value";
import History from "../components/About/History";
import Team from "../components/About/Team";
import Association from "../components/About/Association";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="w-full">
        <Image
          src="/images/Rectangle 425.png"
          alt="HeroImg"
          layout="responsive"
          width={240}
          height={240}
        />
      </div>
      <Mission />
      <Roadmap />
      <Value />
      <History />
      <Team />
      <Association />
      <Footer />

      {/* <Articles />
      <Footer />  */}
    </div>
  );
}
