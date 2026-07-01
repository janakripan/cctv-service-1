const FeaturesSection = () => {
  return (
    <div className="w-full bg-white py-24 relative overflow-hidden">
      
      {/* Top Section: Text and Image */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-16 relative z-10 mb-24">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 pt-0 lg:pt-4 pr-0 lg:pr-16">
          <h4 className="text-[#538AE4] font-bold tracking-widest uppercase text-xs lg:text-sm mb-4">UPSCALING SECURITY</h4>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[40px] text-[#0A111F] leading-[1.2] mb-8">
            SHIELDING SHARJAH WITH ULTRA SECURITY MEASURES
          </h2>
          
          <p className="text-gray-400 leading-[2.2] text-sm text-justify">
            We are Sharjah Police certified security enablers. Founded in 2013,
            we equip security solutions for all businesses across Sharjah. With a
            24x7 call-out, we provide free site surveys & proposals and Annual
            Maintenance Contracts within 24 hours. We have completed 3000+
            projects and worked with 1000+ clients in industries like Public
            Sector, Medical, Education, Technology, Industries, Media, Marketing,
            Real- Estate, Trading, and Contracting. Our Sharjah Police certified
            professional fleet has expertise in all industrial domains-
            HealthCare, Financial Services, Hospitality, and Real Estate- to
            implement IT Systems, ELV Systems, and Security Systems with
            high precision.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          
          {/* Diagonal Lines Pattern on the right */}
          <div className="absolute top-[40%] -right-20 w-64 h-64 opacity-50 z-0" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #538AE4 10px, #538AE4 11px)' }}></div>
          
          {/* Image */}
          <div className="relative z-10 w-full lg:w-[90%] aspect-[4/3] bg-navy shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Security Technology" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Logos Row */}
      <div className="max-w-screen-xl mx-auto px-4 mt-8">
        <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-4">
          
          {/* ISO Badge */}
          <div className="w-32 h-32 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-[5px] border-[#1D3B73] flex flex-col items-center justify-center font-bold text-center text-[#1D3B73]">
              <span className="text-[9px] tracking-widest mt-1">CERTIFIED</span>
              <span className="text-[26px] font-black leading-none my-1">ISO</span>
              <span className="text-[10px] tracking-wide font-semibold">9001:2015</span>
              <span className="text-[9px] tracking-widest mt-1 mb-1">COMPANY</span>
            </div>
          </div>

          {/* Partners Logos - Placedholders */}
          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Partner Logo" className="max-h-24 object-contain opacity-90 transition-all duration-300" />
          </div>

          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Partner Logo" className="max-h-24 object-contain opacity-90 transition-all duration-300" />
          </div>

          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Partner Logo" className="max-h-24 object-contain opacity-90 transition-all duration-300" />
          </div>

          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Partner Logo" className="max-h-24 object-contain opacity-90 transition-all duration-300" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default FeaturesSection;
