import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegUser,
  FaRegComments,
  FaAngleRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const BlogSection = () => {
  const posts = [
    {
      date: "JANUARY 7, 2021",
      author: "ASTSGROUP2015",
      comments: "0 COMMENTS",
      title: "ASTS: YOUR TRUSTED CCTV PARTNER IN THE UAE",
      excerpt:
        "For most individuals, smart technology can be a bit intimidating. Despite the fact that",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      date: "JANUARY 7, 2021",
      author: "ASTSGROUP2015",
      comments: "0 COMMENTS",
      title: "THE TOP QUALITY SECURITY SERVICES IN SHARJAH",
      excerpt:
        "An annual maintenance contract provides businesses with the peace of mind knowing that their systems",
      img: "https://images.unsplash.com/photo-1508344928928-7137b29de218?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-32 relative group/section">
      <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center mb-16">
        <h4 className="text-[#538AE4] font-bold tracking-widest uppercase text-xs lg:text-sm mb-4">
          DIRECT FROM THE BLOG
        </h4>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-[#0A111F] leading-[1.1]">
          LATEST NEWS & ARTICLES
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView={1}
          navigation={{
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full shadow-2xl"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col cursor-grab active:cursor-grabbing pb-12 px-4 lg:px-8">
                
                {/* Unified Card Container */}
                <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
                  
                  {/* Image Section */}
                  <div className="w-full h-[400px] lg:h-[450px] relative bg-[#0A111F]">
                    {/* Left part image, right part solid navy */}
                    <div className="absolute left-0 top-0 bottom-0 w-[60%] lg:w-[65%]">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full px-8 py-10 lg:px-16 lg:py-12 relative z-20">
                    
                    {/* Blue Date Badge (Attached to top-left of the text container, overlapping the image) */}
                    <div className="absolute -top-[3.5rem] left-0 bg-[#538AE4] text-white py-4 px-6 lg:px-8 font-bold text-[10px] tracking-widest uppercase z-10">
                      {post.date}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 cursor-pointer group">
                        <FaRegUser className="text-[#538AE4] text-sm" />
                        <span className="text-gray-500 group-hover:text-[#538AE4] text-[10px] font-bold tracking-widest uppercase transition-colors">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 cursor-pointer group">
                        <FaRegComments className="text-[#538AE4] text-sm" />
                        <span className="text-gray-500 group-hover:text-[#538AE4] text-[10px] font-bold tracking-widest uppercase transition-colors">{post.comments}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-2xl lg:text-3xl text-[#0A111F] hover:text-[#538AE4] cursor-pointer transition-colors mb-6 uppercase">
                      {post.title}
                    </h3>

                    {/* Excerpt without inline blue dot */}
                    <p className="text-gray-500 leading-loose text-sm max-w-3xl mb-10">
                      {post.excerpt}
                    </p>

                    {/* Bottom Divider and Read More */}
                    <div className="border-t border-gray-100 pt-8 flex items-center justify-between">
                      <button className="text-gray-400 hover:text-[#538AE4] font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 transition-colors">
                        READ MORE <FaAngleRight className="text-sm" />
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Controls (Shown on Section Hover) outside the content wrapper */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none flex items-center justify-between px-4 lg:px-8 max-w-[1500px] mx-auto">
        <button className="blog-prev pointer-events-auto w-14 h-14 bg-white hover:bg-[#538AE4] text-[#538AE4] hover:text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/section:opacity-100 transition-all duration-300">
          <FaChevronLeft className="text-xl -ml-1" />
        </button>
        <button className="blog-next pointer-events-auto w-14 h-14 bg-white hover:bg-[#538AE4] text-[#538AE4] hover:text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover/section:opacity-100 transition-all duration-300">
          <FaChevronRight className="text-xl -mr-1" />
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
