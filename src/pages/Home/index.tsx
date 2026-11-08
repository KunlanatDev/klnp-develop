import { AboutSection } from './sections/AboutSection';
import { ContactCtaSection } from './sections/ContactCtaSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { TechStackSection } from './sections/TechStackSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <ContactCtaSection />
    </>
  );
}
