import { FaRegCalendarAlt, FaRegUser, FaRegComment, FaSearch, FaAngleRight } from 'react-icons/fa';

const BlogContent = () => {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JANUARY 7, 2021",
      author: "ASTSGROUP2015",
      comments: "0 COMMENTS",
      title: "ASTS: YOUR TRUSTED CCTV PARTNER IN THE UAE",
      excerpt: "For most individuals, smart technology can be a bit intimidating. Despite the fact that we use it on a daily basis, most of us have little comprehension of how it works. But everyone understands that life is simpler with a"
    },
    {
      img: "https://images.unsplash.com/photo-1508344928928-7137b29de218?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "JANUARY 7, 2021",
      author: "ASTSGROUP2015",
      comments: "0 COMMENTS",
      title: "THE TOP QUALITIES YOU NEED TO LOOK FOR IN A CCTV AMC COMPANY IN THE MIDDLE EAST",
      excerpt: "An annual maintenance contract is a cost-effective way to keep the service or systems of your business running smoothly. It cannot be emphasized enough that quality is a critical aspect in today's competitive environment. Regular maintenance is necessary to get"
    },
    {
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "DECEMBER 12, 2020",
      author: "ASTSGROUP2015",
      comments: "0 COMMENTS",
      title: "LATEST ADVANCEMENTS IN ACCESS CONTROL",
      excerpt: "Mobile Access Control Cloud Security Biometrics Multi-Factor Authentication Model Subscription-Based Security Model Last year we have seen security firms emphasizing contactless service models with technologies like advanced Facial Recognition, Touchless access, and Cloud Computing. Now it has garnered demand in"
    }
  ];

  return (
    <div className="w-full bg-white py-24 relative">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content (Left) */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col border-b border-gray-200 pb-16 last:border-0">
              <div className="w-full aspect-[16/9] mb-6 overflow-hidden bg-gray-100">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">
                <div className="flex items-center gap-2"><FaRegCalendarAlt /> {post.date}</div>
                <div className="flex items-center gap-2"><FaRegUser /> {post.author}</div>
                <div className="flex items-center gap-2"><FaRegComment /> {post.comments}</div>
              </div>
              
              <h2 className="font-heading font-bold text-3xl text-navy mb-4 uppercase leading-snug hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-widest uppercase hover:text-primary transition-colors w-fit">
                READ MORE <FaAngleRight />
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar (Right) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Search Box */}
          <div className="bg-primary p-8">
            <label className="text-white text-xs font-bold tracking-widest uppercase mb-4 block">Search</label>
            <div className="flex">
              <input type="text" placeholder="Search..." className="w-full p-3 text-sm outline-none" />
              <button className="bg-white px-4 text-gray-400 hover:text-primary transition-colors">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-[#f4f7f9] p-8">
            <h4 className="font-heading font-bold text-navy text-lg uppercase tracking-wide mb-6">Recent Posts</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium text-gray-500">
              <li className="flex items-start gap-2 hover:text-primary transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-primary mt-1.5 flex-shrink-0"></span>
                ASTS: Your Trusted CCTV Partner in the UAE
              </li>
              <li className="flex items-start gap-2 hover:text-primary transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-primary mt-1.5 flex-shrink-0"></span>
                The Top Qualities You Need To Look For in a CCTV AMC Company in the Middle East
              </li>
              <li className="flex items-start gap-2 hover:text-primary transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-primary mt-1.5 flex-shrink-0"></span>
                Latest Advancements in Access Control
              </li>
            </ul>
          </div>

          {/* Recent Comments */}
          <div className="bg-[#f4f7f9] p-8">
            <h4 className="font-heading font-bold text-navy text-lg uppercase tracking-wide mb-6">Recent Comments</h4>
            <p className="text-xs text-gray-500">No comments to show.</p>
          </div>

          {/* Archives */}
          <div className="bg-[#f4f7f9] p-8">
            <h4 className="font-heading font-bold text-navy text-lg uppercase tracking-wide mb-6">Archives</h4>
            <ul className="flex flex-col gap-3 text-xs font-medium text-primary">
              <li className="flex items-start gap-2 hover:text-navy transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-gray-400 mt-1.5 flex-shrink-0"></span>
                January 2021
              </li>
              <li className="flex items-start gap-2 hover:text-navy transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-gray-400 mt-1.5 flex-shrink-0"></span>
                December 2020
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-[#f4f7f9] p-8">
            <h4 className="font-heading font-bold text-navy text-lg uppercase tracking-wide mb-6">Categories</h4>
            <ul className="flex flex-col gap-3 text-xs font-medium text-primary uppercase">
              <li className="flex items-start gap-2 hover:text-navy transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-gray-400 mt-1.5 flex-shrink-0"></span>
                app development
              </li>
              <li className="flex items-start gap-2 hover:text-navy transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-gray-400 mt-1.5 flex-shrink-0"></span>
                Uncategorized
              </li>
              <li className="flex items-start gap-2 hover:text-navy transition-colors cursor-pointer">
                <span className="w-1 h-1 bg-gray-400 mt-1.5 flex-shrink-0"></span>
                web development
              </li>
            </ul>
          </div>

          {/* Meta */}
          <div className="bg-[#f4f7f9] p-8">
            <h4 className="font-heading font-bold text-navy text-lg uppercase tracking-wide mb-6">Meta</h4>
            <ul className="flex flex-col gap-3 text-xs font-medium text-gray-500 uppercase">
              <li className="hover:text-primary transition-colors cursor-pointer">Log in</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Entries feed</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Comments feed</li>
              <li className="hover:text-primary transition-colors cursor-pointer">WordPress.org</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogContent;
