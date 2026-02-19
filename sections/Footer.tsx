
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircleMore, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-32 pb-16 px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-32">
          <div className="max-w-md">
            <h2 className="heading-font text-5xl mb-8 tracking-tight">Let's create something <span className="italic">creative</span> together.</h2>
            <a 
              href="mailto:akashkambleeee@gmail.com" 
              className="text-xl md:text-2xl font-light underline underline-offset-8 hover:text-neutral-400 transition-colors"
            >
              akashkambleeee@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col gap-8 md:text-right">
            <div className="flex md:justify-end gap-6">
              <a href="https://www.instagram.com/artist_akashkamble" className="p-3 border border-neutral-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/18AAdQMchT/?mibextid=wwXIfr" className="p-3 border border-neutral-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/+918591747530" className="p-3 border border-neutral-100 rounded-full hover:bg-black hover:text-white transition-all">
                <MessageCircleMore size={20} />
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold">
              Based in Mumbai, India
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-neutral-50">
          <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">
            © Akash Kamble Arts - All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-neutral-400 transition-colors"
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
