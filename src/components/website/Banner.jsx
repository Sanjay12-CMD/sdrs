import React from 'react';
import { motion } from 'framer-motion';

const Banner = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {bgImage ? (
          <img 
            src={bgImage} 
            alt={title} 
            className="w-full h-full object-contain mix-blend-multiply opacity-20"
          />
        ) : (
          <div className="w-full h-full bg-white/5" />
        )}
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-brand-text mb-4 md:mb-6 uppercase tracking-tighter">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-brand-red" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-gray-600 text-sm md:text-xl font-body italic max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Decorative Gold Line */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient shadow-[0_0_20px_rgba(166,124,0,0.2)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  );
};

export default Banner;
