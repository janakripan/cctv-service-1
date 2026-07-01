import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMap = () => {
  return (
    <div className="w-full relative h-[600px]">
      
      {/* Overlapping Info Box */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1200px] bg-[#0a111f] z-20 shadow-2xl p-8 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24">
          
          {/* Phone */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#182336] flex items-center justify-center flex-shrink-0">
              <FaPhoneAlt className="text-primary text-xl" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">PHONE LINE</p>
              <a href="tel:0563469171" className="text-white font-heading font-bold text-lg hover:text-primary transition-colors">056 346 9171</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#182336] flex items-center justify-center flex-shrink-0">
              <FaEnvelope className="text-primary text-xl" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">EMAIL US</p>
              <a href="mailto:SALES@SHARJAHCCTV.COM" className="text-white font-heading font-bold text-lg hover:text-primary transition-colors truncate">SALES@SHARJAHCCTV.COM</a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#182336] flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-primary text-xl" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">VISIT US</p>
              <span className="text-white font-heading font-bold text-lg uppercase leading-tight">MUWEILAH - SHARJAH-<br/>UAE</span>
            </div>
          </div>

        </div>
      </div>

      {/* Google Map Embedded iframe */}
      <div className="w-full h-full z-10 relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14421.365691032822!2d55.43126895!3d25.27596285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4b5f8c6b7d%3A0x8e8b2b6b5b5b5b5b!2sMuweilah%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
