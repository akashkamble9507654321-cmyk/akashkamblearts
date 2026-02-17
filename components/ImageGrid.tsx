
import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';

interface ImageGridProps {
  items: PortfolioItem[];
  onItemClick: (item: PortfolioItem) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onItemClick(item)}
        >
          <div className="overflow-hidden aspect-[4/5] bg-neutral-200 relative mb-4">
            <motion.img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold tracking-tight uppercase mb-1">{item.title}</h3>
              <p className="text-xs text-neutral-400 uppercase tracking-widest">{item.category}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
