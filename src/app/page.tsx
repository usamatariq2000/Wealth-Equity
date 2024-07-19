import Image from "next/image";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Legacy from "./components/Legacy";
import Roadmap from "./components/Roadmap";
import Testimonials from "./components/Testimonials";
import Consumer from "./components/Consumer";
import Merits from "./components/Merits";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Legacy />
      <Roadmap />
      <Testimonials />
      <Consumer />
      <Merits />
      <Blog />
      <Footer />

      {/* <Articles />
      <Footer />  */}
    </div>
  );
}
