import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Topbar is ~40px, plus some padding. We can trigger around 150px
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/service' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={isScrolled ? "sticky-header" : "absolute w-full z-40 top-0 lg:top-[45px] bg-transparent transition-all duration-300"}>
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              {/* Dummy logo icon to match the sphere/globe in reference */}
              <div className="w-5 h-5 rounded-full border border-white"></div>
            </div>
            <Link to="/" className="text-3xl font-heading font-bold text-white tracking-wide">
              ASTS LLC
            </Link>
          </div>
          
          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-heading font-bold tracking-widest text-[15px] transition-colors ${
                      isActive ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-blue-600 text-white font-heading font-bold tracking-wider px-6 py-3 text-sm transition-colors shadow-lg">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle border bottom gradient effect like the image */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600/30 to-transparent absolute bottom-0"></div>
    </nav>
  );
};

export default Navbar;
