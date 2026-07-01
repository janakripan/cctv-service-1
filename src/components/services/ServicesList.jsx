import { FaBookOpen, FaCamera, FaCircleNotch, FaNetworkWired } from 'react-icons/fa';

const ServicesList = () => {
  const services = [
    {
      id: "01",
      title: "AMC FOR CCTV",
      desc: "Our CCTV Annual Maintenance Contract ensures your security systems are fully operational year-round.",
      icon: <FaBookOpen className="text-5xl text-primary" />,
    },
    {
      id: "02",
      title: "CCTV CAMERAS",
      desc: "CCTV or close circuit television is a video system that provides continuous surveillance for properties.",
      icon: <FaCamera className="text-5xl text-primary" />,
    },
    {
      id: "03",
      title: "ANPR CAMERA SYSTEM",
      desc: "The immense growth of the automobile industry demands advanced license plate recognition.",
      icon: <FaCircleNotch className="text-5xl text-primary" />,
    },
    {
      id: "04",
      title: "ELV SYSTEMS",
      desc: "With the rise of commercial crimes in every commercial sector, advanced ELV systems are crucial.",
      icon: <FaNetworkWired className="text-5xl text-primary" />,
    }
  ];

  return (
    <div className="w-full relative flex flex-col">
      
      {/* Blue Header Section */}
      <div className="w-full bg-[#538AE4] relative pt-24 pb-32 z-20">
        {/* Wavy Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" width="60" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 Q 15 0, 30 10 T 60 10" fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Text */}
          <div className="w-full lg:w-5/12">
            <h4 className="text-white/80 font-bold tracking-widest uppercase text-sm mb-4">REINVENTING SECURITY MEASURES</h4>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white leading-[1.1]">
              OUR SERVICES
            </h2>
          </div>
          {/* Right Text */}
          <div className="w-full lg:w-7/12">
            <p className="text-white text-sm leading-[2.2] text-justify lg:pr-12">
              We are ISO 9001 certified Sharjah's recommended security systems integrator. We integrate CCTV systems, run Annual Maintenance Contracts, and give security advisory to businesses across Sharjah. Our services are Sharjah Police approved with a 24x7 call-out and we provide free site surveys & proposals and Annual Maintenance Contracts within 24 hours.
            </p>
          </div>
        </div>

        {/* Speech Bubble Tail aligned left */}
        <div className="absolute bottom-0 left-[10%] translate-y-[98%] w-0 h-0 border-l-[0px] border-l-transparent border-t-[40px] border-t-[#538AE4] border-r-[120px] border-r-transparent"></div>
      </div>

      {/* Cards Section */}
      <div className="w-full relative bg-[#f4f7f9] pt-32 pb-32 overflow-hidden z-10">
        
        {/* Faint Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply opacity-5"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        ></div>

        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white pt-12 pb-0 px-8 flex flex-col items-start text-left shadow-xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2 min-h-[480px] rounded-sm"
              >
                {/* Bottom line that is always visible: gray by default, blue on hover, taller height */}
                <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#e5e7eb] group-hover:bg-[#538AE4] transition-colors duration-500"></div>

                <div className="w-full flex justify-between items-start mb-12">
                  <div className="text-[#538AE4]">{service.icon}</div>
                  {/* Faint outlined number */}
                  <div className="text-7xl font-heading font-extralight text-gray-100/50" style={{ WebkitTextStroke: '1px #e5e7eb', color: 'transparent' }}>
                    {service.id}
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-[#0A111F] text-lg mb-8 uppercase tracking-wide w-full">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-loose mb-10 w-full">
                  {service.desc}
                </p>
                
                <div className="w-full flex-grow flex flex-col justify-end pb-10">
                  <button className="group/btn relative w-[130px] py-4 rounded-md bg-gradient-to-r from-[#e5e7eb] from-50% to-[#f3f4f6] to-50% text-gray-500 hover:from-[#538AE4] hover:to-[#538AE4] hover:text-white transition-all duration-500 text-[11px] font-bold tracking-widest uppercase overflow-hidden">
                    <span className="relative z-10">MORE</span>
                    {/* Circle ripple effect on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full border border-white/40 scale-50 group-hover/btn:scale-100 transition-transform duration-500"></div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesList;
