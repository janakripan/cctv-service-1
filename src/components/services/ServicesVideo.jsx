import { FaPlay } from 'react-icons/fa';

const ServicesVideo = () => {
  return (
    <div className="w-full bg-white py-24 relative overflow-hidden">
      
      {/* Curved Background Shape (Left Side) */}
      <div className="absolute top-0 left-0 w-1/3 h-[120%] bg-[#f4f7f9] rounded-br-[100%] rounded-tr-[50%] -translate-y-10 z-0"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        <div className="relative w-full aspect-[16/7] bg-navy shadow-2xl">
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Team Planning" 
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-70"
          />
          
          {/* Play Button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform group">
            <FaPlay className="text-primary text-xl ml-1 group-hover:text-navy transition-colors" />
          </button>
          
          {/* Blue Stats Box */}
          <div className="absolute top-0 right-[5%] -translate-y-8 bg-primary text-white p-12 shadow-xl flex flex-col justify-center max-w-[280px]">
            <h3 className="font-heading font-black text-5xl mb-4">3000</h3>
            <p className="text-sm font-bold tracking-widest leading-relaxed uppercase">
              PROJECTS AND COUNTING
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ServicesVideo;
