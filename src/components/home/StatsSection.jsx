import { FaRegFileAlt, FaUsers, FaHandshake } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <div className="w-full bg-white relative pb-24">
      
      <div className="max-w-screen-xl mx-auto px-4 relative mt-16">
        
        {/* The overlapping stat boxes wrapper */}
        <div className="w-full bg-[#0A111F] text-white shadow-2xl flex flex-col md:flex-row relative">
          
          {/* Stat Column 1 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.05)] flex flex-col items-center relative pt-20 pb-16">
            {/* Icon overlap */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded shadow-lg flex items-center justify-center text-[#538AE4] text-[40px]">
              <FaRegFileAlt />
            </div>
            
            <div className="w-1.5 h-1.5 bg-[#538AE4] rounded-full mb-6"></div>
            <h3 className="font-heading font-bold text-[44px] tracking-wide mb-3">3000</h3>
            <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">PROJECT COMPLETED</p>
          </div>
          
          {/* Stat Column 2 */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.05)] flex flex-col items-center relative pt-20 pb-16">
            {/* Icon overlap */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded shadow-lg flex items-center justify-center text-[#538AE4] text-[40px]">
              <FaUsers />
            </div>
            
            <div className="w-1.5 h-1.5 bg-[#538AE4] rounded-full mb-6"></div>
            <h3 className="font-heading font-bold text-[44px] tracking-wide mb-3">5000</h3>
            <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">HAPPY CUSTOMERS</p>
          </div>

          {/* Stat Column 3 */}
          <div className="flex-1 flex flex-col items-center relative pt-20 pb-16">
            {/* Icon overlap */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#538AE4] rounded shadow-lg flex items-center justify-center text-white text-[40px]">
              <FaHandshake />
            </div>
            
            <div className="w-1.5 h-1.5 bg-[#538AE4] rounded-full mb-6"></div>
            <h3 className="font-heading font-bold text-[44px] tracking-wide mb-3">9</h3>
            <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">YEARS OF SERVICE</p>
          </div>

        </div>

      </div>

      {/* Button below */}
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center mt-24 relative">
        <button className="bg-[#538AE4] hover:bg-blue-600 transition-colors text-white font-bold text-xs tracking-widest px-12 py-5 rounded-sm uppercase shadow-md">
          DISCOVER MORE
        </button>
      </div>

    </div>
  );
};

export default StatsSection;
