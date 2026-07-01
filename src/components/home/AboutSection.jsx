import { FaPhoneAlt, FaFileContract, FaPhoneVolume } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="w-full bg-white py-24 relative overflow-hidden">
      
      {/* Background Patterns for the whole section */}
      {/* Diagonal Lines Pattern (Bottom Left) */}
      <div className="absolute bottom-12 left-0 w-64 h-64 border-t border-r border-gray-100 opacity-60 z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #f3f4f6 10px, #f3f4f6 11px)' }}></div>
      
      {/* Blue Dots Pattern (Top Right) */}
      <div className="absolute top-24 right-24 grid grid-cols-6 gap-3 opacity-60 z-0 hidden lg:grid">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#538AE4] rounded-full"></div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-16 relative z-10">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-[45%] relative">
          {/* Image Container with Top/Bottom Borders */}
          <div className="relative z-10 w-full h-[600px] bg-[#538AE4] border-t-[14px] border-b-[14px] border-[#0A111F] shadow-xl overflow-visible">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="CCTV Installation" 
              className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
            />
            
            {/* White cut-out top right */}
            {/* To overlap the top border, use negative top margin/positioning */}
            <div className="absolute -top-[14px] -right-[2px] w-[40%] h-[180px] bg-white"></div>
            
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] relative pl-0 lg:pl-12 xl:pl-20 mt-12 lg:mt-[180px]">
          
          <h4 className="text-[#538AE4] font-bold tracking-widest uppercase text-xs lg:text-sm mb-4">SAFEGUARDING SHARJAH</h4>
          
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#0A111F] leading-[1.1] mb-8">
            SOPHISTICATED SECURITY<br/>ENABLERS OF SHARJAH
          </h2>
          
          <div className="border-l border-[#538AE4] pl-6 mb-12">
            <p className="text-gray-400 leading-[2.2] text-sm max-w-2xl">
              We are ASTS LLC , a leading Sharjah Police-approved CCTV
              Installation Company & CCTV Annual Maintenance Contract (AMC)
              provider. We equip Sharjah Industries, residents, and
              establishments with high-level security and surveillance measures
              using advanced CCTV Systems, ELV Systems, and ANPR Systems.<br/><br/>
              Our 'Sharjah Police' certified professional fleet is fully equipped for
              all industrial domains including HealthCare, Financial Services,
              Hospitality, and Real Estate.
            </p>
          </div>

          <div className="border-t border-gray-100 py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 lg:gap-16">
              <div className="flex items-center gap-4">
                <FaPhoneVolume className="text-[#538AE4] text-5xl" />
                <span className="font-bold text-[#0A111F] text-lg tracking-wide">24/7 CALL OUT</span>
              </div>
              <div className="flex items-center gap-4">
                <FaFileContract className="text-[#538AE4] text-5xl" />
                <span className="font-bold text-[#0A111F] text-lg tracking-wide">AMC WITHIN 24HR</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
              <button className="bg-[#538AE4] hover:bg-blue-600 transition-colors text-white font-bold text-xs lg:text-sm tracking-widest px-10 py-5 rounded-sm uppercase">
                DISCOVER MORE
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-[#538AE4]">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">CALL US ANYTIME</span>
                  <span className="font-bold text-[#0A111F] text-xl lg:text-2xl">056 346 9171</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
