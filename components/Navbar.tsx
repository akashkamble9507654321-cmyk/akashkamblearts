
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase">
          Elysian<span className="text-neutral-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="text-xs uppercase tracking-widest font-medium hover:text-neutral-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <a 
            href="mailto:studio@elysian.vision"
            className="text-[10px] uppercase tracking-[0.2em] font-bold border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium tracking-tight"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white text-center py-4 font-bold uppercase tracking-widest text-xs"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
