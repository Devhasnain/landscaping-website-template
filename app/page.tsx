import { ContactCTA, EstimateFormSection, FAQSection, FeatureSection, HeroSection, HowItWorksSection, ReviewsSection, ServicesSection, WorksCarouselSection, } from "@/components";
import { getFaqs, getProjects, getServices } from "@/lib/api";


const Home = async () => {
  const services = await getServices(4);
  const projects = await getProjects(4);
  const faqs = await getFaqs();
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <ServicesSection services={services} />
      <WorksCarouselSection projects={projects} />
      <EstimateFormSection />
      <ReviewsSection />
      <FAQSection faqs={faqs} />
      <ContactCTA />
    </main>
  );
};

export default Home;
