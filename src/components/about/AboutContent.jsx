const AboutContent = () => {
  return (
    <div className="w-full bg-white py-32 relative overflow-hidden">
      
      {/* Curved Background Shape (Left Side) */}
      <div className="absolute top-0 left-0 w-1/2 lg:w-[45%] h-[120%] bg-[#f4f7f9] rounded-br-full rounded-tr-[50%] -translate-y-16 -translate-x-12 z-0"></div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 pt-12 pr-0 lg:pr-8">
          <h4 className="text-[#538AE4] font-bold tracking-widest uppercase text-xs mb-6">
            UNPARALLELED SECURITY
          </h4>
          
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-[#0A111F] leading-[1.1] mb-12 uppercase tracking-wide">
            WE ARE AL SANA
          </h2>
          
          <div className="text-gray-500 leading-[2.2] text-sm text-justify space-y-6 lg:max-w-[95%]">
            <p>
              We, ASTS LLC , founded in 2013, is a leading Sharjah Police-
              approved CCTV Installation Company & CCTV Annual Maintenance
              Contract (AMC) provider. We enable Sharjah Industries with high-
              grade security and surveillance measures using advanced CCTV
              Systems, and ELV Systems, and run Annual Maintenance Contracts
              with our Sharjah Police Certified Expertise. We predominantly focus
              on CCTV & IT/Networking related products installation &
              maintenance work in Sharjah. We have a 24×7 call-out service and
              our Annual Maintenance Contract (AMC) is initiated within 24 hours.
            </p>
            <p>
              As a system integrator, we principally focus on delivering Security
              system & Life safety solutions to customers across the region. We
              represent all leading brands in the market. ASTS is formed to meet
              the growing demand for Security surveillance, ICT & life safety in
              the region. We have more than 3000+ loyal clients who are
              extremely positive and happy with our services.
            </p>
          </div>
        </div>

        {/* Right Side: Stacked Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12 pt-6">
          {/* Top Image */}
          <div className="w-full relative aspect-[16/9] bg-[#0A111F] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Security Camera Setup" 
              className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
            />
          </div>
          
          {/* Bottom Image */}
          <div className="w-full relative aspect-[16/9] bg-[#0A111F] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Security Cameras" 
              className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutContent;
