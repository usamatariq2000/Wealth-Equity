import Header from "../components/Header";
import Hero from "../components/PersonalWealthPotential/Hero";
import UnlockPotential from "../components/PersonalWealthPotential/UnlockPotential";
import PersonalizedInsurancePlan from "../components/LifeInsurance/PersonalizedInsurancePlan";
import FrequentlyAskQuestions from "../components/LifeInsurance/FrequentlyAskQuestions";
import Footer from "../components/Footer";
export default function LifeInsurance() {
  return (
    <div>
        <Header/>
        <Hero/>
        <UnlockPotential/>       
        <PersonalizedInsurancePlan/>
        <FrequentlyAskQuestions/>
        <Footer/>
    </div>
  );
}
