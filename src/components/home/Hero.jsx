import { FaRegUser } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#061022]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#538AE4]/30 mix-blend-overlay"></div>
      </div>

      {/* Floating Chat Icon moved to global layout */}

      {/* Blue dot decoration on the left of the card in the dark area */}
      <div className="absolute -bottom-24 right-[28rem] lg:right-[35rem] w-3 h-3 bg-[#538AE4] rounded-full z-20"></div>

      {/* Floating Blue Box (Bottom Right overlapping next section) */}
      <div className="absolute -bottom-[160px] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-40 z-30 w-[90%] max-w-[320px] h-[380px] bg-[#538AE4] flex flex-col items-center justify-center text-white p-6 shadow-2xl">
        <div className="relative w-28 h-28 mb-10">
          <div className="absolute inset-0 border-[3px] border-white rounded-full"></div>
          <div className="absolute inset-2 border-2 border-white/40 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaRegUser className="text-5xl" />
          </div>
          {/* Decorative nodes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
        </div>

        <div className="text-center font-heading">
          <div className="text-7xl font-bold mb-3 tracking-wide">9+</div>
          <div className="text-xl font-bold tracking-[0.2em] leading-relaxed">
            YEARS OF
            <br />
            EXPERIENCE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
