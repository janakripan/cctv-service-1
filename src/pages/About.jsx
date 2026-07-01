import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import AboutTestimonials from '../components/about/AboutTestimonials';

const About = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <AboutHero />
      <AboutContent />
      <AboutTestimonials />
    </div>
  );
};

export default About;
