import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center pt-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bgg.png')" }}
    >
      {/* Single subtle overlay (light background optimized) */}
      <div className="absolute inset-0 bg-white/30"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl flex flex-col items-center"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-neutral-600 mb-10">
          Artist Akash Kamble
        </span>

        {/* Logo */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          >
            <img
              src="/ak.png"
              alt="Akash Logo"
              loading="eager"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl text-lg md:text-xl text-neutral-700 leading-relaxed font-light"
          >
            Rooted in culture. Designed for impact. Crafted to be unforgettable — delivering bold visuals that merge heritage with contemporary design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#conceptual"
              className="bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform"
            >
              Explore My Work
              <ArrowDownRight size={16} />
            </a>

            <a
              href="https://wa.me/+918591747530"
              className="border border-neutral-300 bg-white/60 px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
              Let's Collaborate
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
