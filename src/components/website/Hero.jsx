import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import goldCoins from '../../assets/gold-coins.png';
import goldJewelry from '../../assets/gold-jewelry.png';

const Hero = () => {
  const points = [
    { text: "Sell Gold", icon: <TrendingUp size={18} /> },
    { text: "Release Pledged Gold", icon: <ShieldCheck size={18} /> },
    { text: "Exchange Gold for Cash", icon: <CheckCircle2 size={18} /> },
    { text: "Instant Cash for Gold & Silver", icon: <Zap size={18} /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20 bg-gradient-to-b from-[#111] to-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#0d0d0d] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.5em", opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="inline-block text-brand-gold text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-8"
              >
                Excellence in Gold Finance
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 drop-shadow-2xl">
                Sell Your Gold at <br />
                <span className="text-shine">Market Peak Value</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-body font-light mx-auto lg:mx-0">
                Experience the pinnacle of transparency and luxury in gold exchange. 
                Get immediate liquidity for your precious metal assets at competitive global rates.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 md:gap-8 mb-8 md:mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 text-gray-100">
                  <div className="text-brand-gold bg-brand-gold/20 p-1.5 md:p-2 rounded-full backdrop-blur-md border border-brand-gold/30">
                    {point.icon}
                  </div>
                  <span className="font-medium tracking-wide text-xs md:text-base">{point.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start"
            >
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold !text-base md:text-lg !px-8 md:!px-12 py-4 md:py-5 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Instant Cash <Zap size={18} />
                </span>
              </button>
              <Link to="/services" className="btn-premium flex items-center justify-center !bg-black/20 backdrop-blur-xl border border-white/20 hover:border-brand-red !px-8 md:!px-12 py-4 md:py-5 hover:bg-brand-red/10 transition-all text-sm md:text-base">
                Discover Services
              </Link>
            </motion.div>

            {/* Today's Gold Rate Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 glass-card inline-block text-left"
            >
              <h4 className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-3">Today's Gold Rate in Coimbatore</h4>
              <div className="flex gap-8">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Gold 22K (1g)</span>
                  <span className="text-white font-bold text-xl">₹6,850</span>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <span className="text-gray-400 text-xs block mb-1">Gold 24K (1g)</span>
                  <span className="text-white font-bold text-xl">₹7,450</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="relative hidden lg:block h-[600px]">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-4/5 z-20"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-gold/20 blur-3xl rounded-full opacity-50 animate-pulse" />
                <img 
                  src={goldJewelry} 
                  alt="Luxury Gold Jewelry" 
                  className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)] rounded-2xl border border-white/10"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-0 w-3/5 z-10"
            >
              <img 
                src={goldCoins} 
                alt="Gold Coins" 
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gold/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
