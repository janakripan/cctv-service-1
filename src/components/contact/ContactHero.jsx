const ContactHero = () => {
  return (
    <div className="relative w-full h-[55vh] lg:h-[60vh] bg-[#0A111F] overflow-hidden flex items-center justify-center pt-24">
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-8">
        {/* Breadcrumb with translucent dark background */}
        <div className="bg-[#0A111F]/60 backdrop-blur-sm px-6 py-2.5 rounded-sm flex items-center gap-2 mb-8 text-[10px] font-bold tracking-widest uppercase">
          <span className="text-white">HOME</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">CONTACT</span>
        </div>
        
        <h1 className="font-heading font-bold text-5xl lg:text-7xl tracking-wide uppercase text-white">
          CONTACT US
        </h1>
      </div>
      
    </div>
  );
};

export default ContactHero;
