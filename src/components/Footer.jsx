import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaCameraRetro, FaRegCalendarAlt, FaArrowUp } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A111F] text-gray-400 relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between pt-32 pb-8">
      {/* Topographic Background Simulation */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/topography.png")' }}
      ></div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-[rgba(255,255,255,0.05)] pb-24">
          
          {/* Column 1: Logo & About */}
          <div className="pr-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative flex items-center justify-center">
                <BsShieldLockFill className="text-[40px] text-white" />
                <FaCameraRetro className="absolute text-[#0A111F] text-sm mt-1" />
              </div>
              <span className="text-3xl font-heading font-bold text-white tracking-wide">
                ASTS <span className="font-light">LLC</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-loose">
              Implementing security and surveillance measures using advanced CCTV Systems, ELV Systems, and Run Annual Maintenance Contracts with our Sharjah Police certified expertise.
            </p>
          </div>

          {/* Column 2: News */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white tracking-widest mb-8 uppercase">NEWS</h4>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-800 flex-shrink-0 rounded-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&q=80" alt="News 1" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#538AE4] text-[10px] font-bold tracking-widest mb-2 uppercase flex items-center gap-1.5">
                    <FaRegCalendarAlt className="text-xs" /> JANUARY 7, 2021
                  </p>
                  <a href="#" className="text-white text-sm font-medium hover:text-[#538AE4] transition-colors leading-snug">ASTS: Your Trusted CCTV Partner in the UAE</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-800 flex-shrink-0 rounded-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1510166089176-b57564a5b78e?w=100&q=80" alt="News 2" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#538AE4] text-[10px] font-bold tracking-widest mb-2 uppercase flex items-center gap-1.5">
                    <FaRegCalendarAlt className="text-xs" /> JANUARY 7, 2021
                  </p>
                  <a href="#" className="text-white text-sm font-medium hover:text-[#538AE4] transition-colors leading-snug">The Top Qualities You Need To Look For in a CCTV AMC Company in the Middle East</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Links */}
          <div className="lg:pl-8">
            <h4 className="font-heading font-bold text-lg text-white tracking-widest mb-8 uppercase">LINKS</h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/service" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white tracking-widest mb-8 uppercase">CONTACT</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#538AE4] text-lg" />
                <a href="tel:0563469171" className="text-gray-400 hover:text-white transition-colors text-sm">056 346 9171</a>
              </div>
              <div className="w-full h-px bg-[rgba(255,255,255,0.05)]"></div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#538AE4] text-lg" />
                <a href="mailto:sales@sharjahcctv.com" className="text-gray-400 hover:text-white transition-colors text-sm">sales@sharjahcctv.com</a>
              </div>
              <div className="w-full h-px bg-[rgba(255,255,255,0.05)]"></div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#538AE4] text-lg" />
                <span className="text-gray-400 text-sm">Muweilah, Sharjah, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto px-4 relative z-10 w-full mt-auto">
        <div className="pt-8 flex flex-col md:flex-row items-center justify-end gap-4 relative">
          
          <div className="flex items-center gap-8 text-white mr-16">
            <a href="#" className="hover:text-[#538AE4] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#538AE4] transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-[#538AE4] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#538AE4] transition-colors"><FaPinterestP /></a>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="absolute right-0 bottom-0 bg-[rgba(255,255,255,0.05)] hover:bg-[#538AE4] text-white flex flex-col items-center justify-center px-4 py-3 transition-colors rounded-t-sm"
          >
            <FaArrowUp className="text-sm mb-1" />
            <span className="text-[10px] tracking-widest font-bold">TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
