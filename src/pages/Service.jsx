import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesVideo from '../components/services/ServicesVideo';

const Service = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ServicesVideo />
    </div>
  );
};

export default Service;
