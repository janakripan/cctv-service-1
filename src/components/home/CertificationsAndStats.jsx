import { FaRegFileAlt, FaUsers, FaHandshake } from 'react-icons/fa';

const CertificationsAndStats = () => {
  return (
    <div className="w-full bg-white pt-16 relative">
      {/* Certifications Row */}
      <div className="max-w-[1400px] mx-auto px-4 mb-32">
        <div className="flex flex-wrap justify-between items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Dummy placeholders for logos */}
          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Logo 1" className="max-h-24 object-contain" />
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Logo 2" className="max-h-24 object-contain" />
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Logo 3" className="max-h-24 object-contain" />
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-[6px] border-blue-800 flex items-center justify-center font-bold text-center text-[10px] text-blue-800">
              ISO<br/>9001:2015<br/>CERTIFIED
            </div>
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Emblem_of_the_United_Arab_Emirates.svg/150px-Emblem_of_the_United_Arab_Emirates.svg.png" alt="Logo 5" className="max-h-24 object-contain" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#0A111F] text-white pt-24 pb-16 relative mt-16">
        <div className="max-w-[1200px] mx-auto px-4 relative">
          
          {/* The overlapping stat boxes */}
          <div className="absolute left-0 right-0 -top-[160px] flex justify-between px-4 lg:px-20">
            
            {/* Stat Box 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-xl flex items-center justify-center text-primary text-4xl mb-6 relative group overflow-hidden">
                <FaRegFileAlt className="relative z-10" />
                <div className="absolute inset-0 bg-blue-50 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              </div>
              <h3 className="font-heading font-bold text-5xl tracking-wide mb-2">3000</h3>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">PROJECT COMPLETED</p>
            </div>

            {/* Stat Box 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-xl flex items-center justify-center text-primary text-4xl mb-6 relative group overflow-hidden">
                <FaUsers className="relative z-10" />
                <div className="absolute inset-0 bg-blue-50 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              </div>
              <h3 className="font-heading font-bold text-5xl tracking-wide mb-2">5000</h3>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">HAPPY CUSTOMERS</p>
            </div>

            {/* Stat Box 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-lg shadow-xl flex items-center justify-center text-white text-4xl mb-6 relative group overflow-hidden">
                <FaHandshake className="relative z-10" />
                <div className="absolute inset-0 bg-blue-600 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              </div>
              <h3 className="font-heading font-bold text-5xl tracking-wide mb-2">9</h3>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">YEARS OF SERVICE</p>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CertificationsAndStats;
