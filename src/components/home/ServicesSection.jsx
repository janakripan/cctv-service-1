const ServicesSection = () => {
  const services = [
    {
      title: "AMC FOR CCTV",
      desc: "Annual Maintenance Contract for All Security Systems",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "CCTV & CAMERAS",
      desc: "Surveillance & Monitoring With Tech-Heavy Camera Systems",
      img: "https://images.unsplash.com/photo-1549492423-400259a2e574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "ANPR CAMERA SYSTEM",
      desc: "Precision Reading of Vehicle Number Plates",
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="w-full relative">
      {/* Dark Top Section */}
      <div className="bg-[#040B16] pt-16 pb-64 relative overflow-hidden" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0c10.5 0 21 5.3 31.5 15.8C42 26.3 52.5 42.1 63 47.4 73.5 52.7 84 47.4 94.5 36.9 105 26.3 115.5 10.5 126 10.5\' fill=\'none\' stroke=\'rgba(255,255,255,0.02)\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '200px' }}>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="max-w-2xl">
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">WE PROVIDE TOTAL SECURITY</h4>
              <h2 className="font-heading font-bold text-5xl lg:text-6xl text-white leading-[1.1]">
                SERVICES WE'RE OFFERING
              </h2>
            </div>
          </div>
          {/* Blue dot on right */}
          <div className="absolute right-32 top-32 w-2 h-2 bg-[#538AE4] rounded-full hidden lg:block"></div>
        </div>
      </div>

      {/* White Bottom Section to create the overlap effect */}
      <div className="bg-white h-48 w-full relative"></div>

      {/* Floating Cards Container */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end">
            {services.map((service, index) => (
                <div key={index} className="relative h-[420px] bg-transparent group mb-0">
                  <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden bg-[#0A111F] rounded-t-sm shadow-xl">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale contrast-125 opacity-90 transition-transform duration-700"
                    />
                  </div>
                  {/* A white overlap block at the top of the text to match image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-t-2xl shadow-2xl px-6 lg:px-8 text-center border-t-4 border-transparent group-hover:border-[#538AE4] transition-all duration-500 flex flex-col justify-center items-center h-[160px] group-hover:h-[280px] z-10">
                    <h3 className="font-heading font-bold text-xl lg:text-2xl text-navy mb-4 tracking-wide">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.desc}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
