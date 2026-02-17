
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="heading-font text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-500 uppercase tracking-widest text-xs font-semibold">
          — {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
