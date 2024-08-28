import Header from "../components/Header";
// import Hero from "../components/LifeInsurance/Hero";
import Hero from "../components/BlogSection/Header";
import BlogList from "../components/BlogSection/BlogList";
import Uses from "../components/LifeInsurance/Uses";
import TypesOfLifeInsurance from "../components/LifeInsurance/Types";
import PersonalizedInsurancePlan from "../components/LifeInsurance/PersonalizedInsurancePlan";
import FrequentlyAskQuestions from "../components/LifeInsurance/FrequentlyAskQuestions";
import Footer from "../components/Footer";
export default function LifeInsurance() {
  return (
    <div>
      <Header />
      <section className="mt-[10rem] px-7 md:px-10  lg:px-20">
        <div className="border-t-1 border-[#C7C1BD]">
          <Hero />
        </div>
        <BlogList/>
      </section>
      <Footer />
    </div>
  );
}
