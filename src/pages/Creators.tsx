
import CreatorsHeader from "@/components/creators/CreatorsHeader";
import CreatorsHero from "@/components/creators/CreatorsHero";
import CreatorsBenefits from "@/components/creators/CreatorsBenefits";
import CreatorsSuccessStories from "@/components/creators/CreatorsSuccessStories";
import CreatorsHowItWorks from "@/components/creators/CreatorsHowItWorks";
import CreatorsStats from "@/components/creators/CreatorsStats";
import CreatorsFAQ from "@/components/creators/CreatorsFAQ";
import CreatorsApplicationForm from "@/components/creators/CreatorsApplicationForm";
import CreatorsFooter from "@/components/creators/CreatorsFooter";

const Creators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F3] to-[#FFF1E6] overflow-hidden">
      <CreatorsHeader />
      <CreatorsHero />
      <CreatorsBenefits />
      <CreatorsSuccessStories />
      <CreatorsHowItWorks />
      <CreatorsStats />
      <CreatorsFAQ />
      <CreatorsApplicationForm />
      <CreatorsFooter />
    </div>
  );
};

export default Creators;
