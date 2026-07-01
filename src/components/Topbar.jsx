import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-[#0b1220] text-gray-400 text-[13px] py-3 hidden lg:block border-b border-gray-800 relative z-50">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-primary" />
            <a href="mailto:sales@sharjahcctv.com" className="hover:text-white transition-colors">sales@sharjahcctv.com</a>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-primary" />
            <a href="tel:0563469171" className="hover:text-white transition-colors">056 346 9171</a>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>Muweilah - Sharjah-UAE</span>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-white">
          <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaYoutube /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
