import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="w-full bg-white py-24 relative">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
        
        {/* Left Side: Title & Socials */}
        <div className="flex flex-col gap-12 pt-8 pr-0 lg:pr-16">
          <h2 className="font-heading font-black text-5xl lg:text-6xl text-navy leading-[1.1] uppercase">
            CALL US TO<br />
            KNOW HOW TO<br />
            SCALE UP<br />
            YOUR<br />
            SECURITY
          </h2>
          
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-[#f4f7f9] text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#f4f7f9] text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#f4f7f9] text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#f4f7f9] text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-[#f4f7f9] p-5 text-sm outline-none font-light placeholder:text-gray-400"
              />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#f4f7f9] p-5 text-sm outline-none font-light placeholder:text-gray-400"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <input 
                type="text" 
                placeholder="Phone number" 
                className="w-full bg-[#f4f7f9] p-5 text-sm outline-none font-light placeholder:text-gray-400"
              />
              <div className="relative">
                <select className="w-full bg-[#f4f7f9] p-5 text-sm outline-none font-light text-gray-400 appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>Subject</option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                  ▼
                </div>
              </div>
              
            </div>

            <textarea 
              placeholder="Write Message" 
              rows="6"
              className="w-full bg-[#f4f7f9] p-5 text-sm outline-none font-light placeholder:text-gray-400 resize-none mt-4"
            ></textarea>
            
            <button 
              type="submit" 
              className="bg-primary text-white font-bold tracking-widest text-xs uppercase py-5 px-8 w-fit hover:bg-navy transition-colors mt-2"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
