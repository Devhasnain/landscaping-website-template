import { ContactCTA, EstimateFormSection, FAQSection, FeatureSection, HeroSection, HowItWorksSection, ReviewsSection, ServicesSection, WorksCarouselSection, } from "@/components";
import { getFaqs, getProjects, getServices } from "@/lib/api";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:"Professional Landscaping Services | Garden Design & Care",
  description:"Create your dream garden with our expert landscape architects and gardeners. Sustainable designs, quality construction, and care. Request a free estimate today."
}

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
