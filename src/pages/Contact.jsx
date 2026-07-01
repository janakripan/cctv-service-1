import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default Contact;
