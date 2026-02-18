import logo from "../public/ak.png";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center pt-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl flex flex-col items-center"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-12 overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="block"
          >
            Artist Akash Kamble
          </motion.span>
        </span>
        
        {/* Animated Coin Logo */}
        <div className="perspective-1000 mb-16">
          <motion.div
            initial={{ 
              rotateY: -1080, 
              y: -150, 
              opacity: 0, 
              scale: 0.2 
            }}
            animate={{ 
              rotateY: 0, 
              y: 0, 
              opacity: 1, 
              scale: 1 
            }}
            transition={{ 
              duration: 2.2, 
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.8 }
            }}
            className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          >
            {/* Subtle shadow that lands with the coin */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-8 w-3/4 h-8 bg-black rounded-[100%] blur-2xl"
            />
            
            {/* The Logo PNG - Using a high-quality calligraphic mark placeholder */}
            {/* Note: Replace 'src' with your actual local PNG path */}
            <img 
              src="ak.png" 
              alt="Elysian Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
              style={{ backfaceVisibility: 'hidden' }}
            />
          </motion.div>
        </div>
        
        <div className="flex flex-col items-center gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="max-w-2xl text-lg md:text-xl text-neutral-500 leading-relaxed font-light"
          >
            Crafting immersive digital experiences and visual narratives that bridge the gap between 
            human intuition and technological precision. Branding, sketches, and cinematic graphics for the 2026 landscape.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#conceptual"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-widest flex items-center gap-3 group"
            >
              Explore My Work
              <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="mailto:studio@elysian.vision"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-neutral-200 px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[80vw] h-[80vh] bg-gradient-to-tr from-neutral-100 to-white/0 rounded-full blur-3xl opacity-30" />
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
