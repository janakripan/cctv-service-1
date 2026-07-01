import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const AboutTestimonials = () => {
  const testimonials = [
    {
      text: "Very good Customer Service!!! Staff was really friendly and accepted our small requests. Would highly recommend if you are looking for sharjah",
      name: "kiran c ajay",
      role: "Customer",
    },
    {
      text: "Really professional team. They installed everything on time and the performance of the system is outstanding. We feel much safer now.",
      name: "sreejith",
      role: "Designer",
    },
    {
      text: "The annual maintenance contract has been a lifesaver. Any time we have a glitch, their 24/7 call out team is there to fix it immediately.",
      name: "fatima r.",
      role: "Business Owner",
    },
  ];

  return (
    <div className="w-full bg-white py-32 relative overflow-hidden group/section">
      {/* Headings */}
      <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center mb-16">
        <h4 className="text-[#538AE4] font-bold tracking-widest uppercase text-xs lg:text-sm mb-4">
          OUR TESTIMONIALS
        </h4>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-[#0A111F] leading-[1.1] uppercase tracking-wide">
          WHAT THEY'RE SAYING
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto w-full relative">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <svg
              width="44"
              height="44"
              viewBox="0 0 40 40"
              fill="#538AE4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8 H18 V22 L8 32 Z" />
              <path d="M22 8 H32 V22 L22 32 Z" />
            </svg>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={1}
            navigation={{
              prevEl: ".about-testi-prev",
              nextEl: ".about-testi-next",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col items-center text-center cursor-grab active:cursor-grabbing px-4 lg:px-16">
                  {/* Testimonial Text */}
                  <p className="text-gray-400 font-light text-xl lg:text-2xl leading-[1.8] mb-12 max-w-3xl">
                    {testimonial.text}
                  </p>

                  {/* Author Details */}
                  <div className="flex flex-col items-center gap-1">
                    <h5 className="text-[#0A111F] font-heading font-bold text-sm uppercase tracking-wide">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-400 text-xs capitalize tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Navigation Controls (Outside Content, Only visible on section hover) */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none flex items-center justify-between px-4 lg:px-24 max-w-[1600px] mx-auto opacity-0 group-hover/section:opacity-100 transition-opacity duration-300">
        {/* PREV Button */}
        <div className="flex items-center gap-6">
          <button className="about-testi-prev w-20 h-20 flex items-center justify-center pointer-events-auto text-gray-300 hover:bg-[#0A111F] hover:text-white transition-colors duration-300 font-bold tracking-widest text-[10px] uppercase">
            PREV
          </button>
          <div className="w-px h-16 bg-gray-300 hidden md:block"></div>
        </div>

        {/* NEXT Button */}
        <div className="flex items-center gap-6">
          <div className="w-px h-16 bg-gray-300 hidden md:block"></div>
          <button className="about-testi-next w-20 h-20 flex items-center justify-center pointer-events-auto text-gray-300 hover:bg-[#0A111F] hover:text-white transition-colors duration-300 font-bold tracking-widest text-[10px] uppercase">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;
