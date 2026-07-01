const AboutHero = () => {
  return (
    <div className="relative w-full h-[55vh] lg:h-[60vh] bg-[#0A111F] overflow-hidden flex items-center justify-center pt-24">
      {/* Background Image with Bokeh effect simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#061022]/80 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-8">
        {/* Breadcrumb with translucent dark background */}
        <div className="bg-[#0A111F]/60 backdrop-blur-sm px-6 py-2.5 rounded-sm flex items-center gap-2 mb-8 text-[10px] font-bold tracking-widest uppercase">
          <span className="text-white">HOME</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">ABOUT</span>
        </div>
        <h1 className="font-heading font-bold text-5xl lg:text-7xl tracking-wide uppercase text-white">ABOUT US</h1>
      </div>
    </div>
  );
};

export default AboutHero;
