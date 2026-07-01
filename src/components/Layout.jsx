import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BsChatTextFill } from 'react-icons/bs';
import { FaAngleUp } from 'react-icons/fa';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans relative">
      <Topbar />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />

      {/* Global Floating Chat Widget (Bottom Left) */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-lg group-hover:bg-purple-500 transition-colors">
            <BsChatTextFill className="text-white text-xl" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[9px] text-white font-bold border border-white">
            2
          </div>
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-gray-700 opacity-0 lg:opacity-100 group-hover:opacity-100 transition-opacity">
          Contact us
        </div>
      </div>

      {/* Global TOP button (Bottom Right) */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-[#0F1626] text-white flex flex-col items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
      >
        <FaAngleUp className="text-sm" />
        <span className="text-[9px] font-bold tracking-wider mt-0.5">TOP</span>
      </button>
    </div>
  );
};

export default Layout;
