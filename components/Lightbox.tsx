
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row items-center justify-center p-6 md:p-12 overflow-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-neutral-400 hover:text-black transition-colors"
        >
          <X size={32} />
        </button>

        <div className="w-full h-full flex flex-col md:flex-row items-center gap-12 max-w-7xl">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-2/3 h-[60vh] md:h-full flex items-center justify-center"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-1/3 flex flex-col gap-6"
          >
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              {item.category}
            </span>
            <h2 className="heading-font text-4xl md:text-5xl tracking-tight leading-tight">
              {item.title}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              {item.description}
            </p>
            <div className="h-px w-24 bg-neutral-200" />
            <p className="text-sm text-neutral-400 italic">
              
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
