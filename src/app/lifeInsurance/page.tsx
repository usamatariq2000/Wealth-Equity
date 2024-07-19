import Header from "../components/Header";
import Hero from "../components/LifeInsurance/Hero";
import Uses from "../components/LifeInsurance/Uses";
import TypesOfLifeInsurance from "../components/LifeInsurance/Types";
import PersonalizedInsurancePlan from "../components/LifeInsurance/PersonalizedInsurancePlan";
import FrequentlyAskQuestions from "../components/LifeInsurance/FrequentlyAskQuestions";
import Footer from "../components/Footer";
export default function LifeInsurance() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Uses/>
        <div className="mb-10">
        <TypesOfLifeInsurance/>
        </div>
       
        <PersonalizedInsurancePlan/>
        <FrequentlyAskQuestions/>
        <Footer/>
    </div>
  );
}
