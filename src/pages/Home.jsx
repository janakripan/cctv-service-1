import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import FeaturesSection from '../components/home/FeaturesSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
};

export default Home;
