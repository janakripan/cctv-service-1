import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Very good Customer Service!!! Staff was really friendly and accepted our small requests. Would highly recommend if you are looking for sharjah",
      name: "KIRAN C AJAY",
      role: "CUSTOMER",
      avatar: "https://i.pravatar.cc/150?u=kiran"
    },
    {
      text: "Really professional team. They installed everything on time and the performance of the system is outstanding. We feel much safer now.",
      name: "SREEJITH",
      role: "DESIGNER",
      avatar: "https://i.pravatar.cc/150?u=sree"
    },
    {
      text: "The annual maintenance contract has been a lifesaver. Any time we have a glitch, their 24/7 call out team is there to fix it immediately.",
      name: "FATIMA R.",
      role: "BUSINESS OWNER",
      avatar: "https://i.pravatar.cc/150?u=fatima"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-32 relative overflow-hidden group">
      {/* Topographic Background Simulation */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/topography.png")' }}
      ></div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center mb-16">
        <h4 className="text-[#538AE4] font-bold tracking-widest uppercase text-sm mb-4">OUR TESTIMONIALS</h4>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-[#0A111F] leading-[1.1]">
          WHAT THEY'RE SAYING
        </h2>
      </div>

      {/* Testimonials Slider Area */}
      <div className="max-w-screen-xl mx-auto relative z-10 px-4">
        
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView={1}
          navigation={{
            prevEl: '.testi-prev',
            nextEl: '.testi-next',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full shadow-2xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white p-12 lg:p-24 transition-colors duration-500 hover:bg-[#538AE4] group/card cursor-grab active:cursor-grabbing">
                
                <div className="border-l-2 border-[#538AE4] group-hover/card:border-white pl-6 mb-16 transition-colors duration-500">
                  <p className="text-gray-500 group-hover/card:text-white text-lg lg:text-xl leading-relaxed transition-colors duration-500">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0A111F] border-2 border-transparent group-hover/card:border-white transition-colors duration-500">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <div>
                    <h5 className="text-[#538AE4] group-hover/card:text-white font-heading font-bold tracking-widest text-lg transition-colors duration-500">{testimonial.name}</h5>
                    <p className="text-gray-400 group-hover/card:text-blue-100 text-[10px] font-bold tracking-widest uppercase transition-colors duration-500">{testimonial.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Custom Navigation Controls (Shown on Section Hover) */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none flex items-center justify-between px-4 lg:px-8 max-w-[1500px] mx-auto">
        <button className="testi-prev pointer-events-auto w-14 h-14 bg-white hover:bg-[#538AE4] text-[#538AE4] hover:text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          <FaChevronLeft className="text-xl -ml-1" />
        </button>
        <button className="testi-next pointer-events-auto w-14 h-14 bg-white hover:bg-[#538AE4] text-[#538AE4] hover:text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          <FaChevronRight className="text-xl -mr-1" />
        </button>
      </div>
      
    </div>
  );
};

export default TestimonialsSection;
