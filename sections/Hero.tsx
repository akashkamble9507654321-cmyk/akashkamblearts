import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center pt-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl flex flex-col items-center"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-10">
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
            className="max-w-2xl text-lg md:text-xl text-neutral-500 leading-relaxed font-light"
          >
            Crafting immersive digital experiences and visual narratives that bridge the gap between 
            human intuition and technological precision. Branding, sketches, and cinematic graphics for the 2026 landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#conceptual"
              className="bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-widest flex items-center gap-3 group hover:scale-105 transition-transform"
            >
              Explore My Work
              <ArrowDownRight size={16} />
            </a>

            <a
              href="https://wa.me/+918591747530"
              className="border border-neutral-200 px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
              Let's Collaborate
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[80vw] h-[80vh] bg-gradient-to-tr from-neutral-100 to-white/0 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default Hero;
