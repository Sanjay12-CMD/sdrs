import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, CircleDollarSign, HandCoins, CalendarClock, Briefcase, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import goldValImg from '../../assets/gold-val.png';
import goldCashImg from '../../assets/gold-cash.png';
import goldCoins from '../../assets/gold-coins.png';

const ServiceCard = ({ title, icon: Icon, description, index, image, extendedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card flex flex-col group relative bg-white/5"
    >
      <div className="h-48 relative overflow-hidden rounded-xl mb-6 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#222] to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-gold opacity-10 blur-sm">
          <Icon size={100} />
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-brand-dark/80 backdrop-blur-md flex items-center justify-center text-brand-gold border border-brand-gold/30">
          <Icon size={24} />
        </div>
      </div>
      
      <div className="md:hidden flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-dark/80 backdrop-blur-md flex items-center justify-center text-brand-gold border border-brand-gold/30">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="hidden md:block text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-body">
          {description}
        </p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="text-gray-400 text-sm leading-relaxed mb-6 font-body overflow-hidden border-t border-white/10 pt-4"
            >
              {extendedDescription}
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto flex items-center gap-2 text-brand-gold font-bold uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all duration-300 focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Learn More'} 
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <div className="h-px bg-brand-gold flex-grow opacity-50" />
        </button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    { 
      title: "Cash for Gold", 
      icon: Coins, 
      description: "Convert your gold asset into liquidated cash within minutes. Best market rates guaranteed.",
      extendedDescription: "We use advanced valuation methods to ensure you get the absolute highest value for your gold. Our process is transparent, secure, and requires minimal documentation.",
      image: goldCashImg
    },
    { 
      title: "Cash for Silver", 
      icon: HandCoins, // Removed CircleDollarSign to remove $ visual, using HandCoins which represents exchange
      description: "Transparent weighing and valuation for your silver articles and bars for immediate ₹ Payment.",
      extendedDescription: "Get the best spot rate in ₹ for silver coins, bars, and jewelry. We verify purity in front of you and process immediate bank transfers or cash payouts.",
      image: goldValImg
    },
    { 
      title: "Gold Loan", 
      icon: CalendarClock, 
      description: "Get instant liquidity against your gold with low-interest rates and flexible terms.",
      extendedDescription: "Choose from multiple schemes tailored to your repayment capacity. Enjoy the lowest interest rates starting from 0.89% per month with 100% safety of your ornaments.",
      image: goldValImg
    },
    { 
      title: "EMI Gold Loan", 
      icon: CalendarClock, 
      description: "Repay your gold loan in easy monthly installments that fit your budget.",
      extendedDescription: "Structured repayment plans that help you retrieve your gold systematically. No hidden charges or pre-closure penalties.",
      image: goldCashImg
    },
    { 
      title: "Pledge Release", 
      icon: Briefcase, 
      description: "We help you release your pledged gold from other banks or financiers.",
      extendedDescription: "Stuck with high-interest loans? We will clear your balance directly with your current provider and release your gold seamlessly.",
      image: goldValImg
    },
    { 
      title: "Loan Takeover", 
      icon: RefreshCw, 
      description: "Switch your existing gold loan to SDRS for lower interest rates and better service.",
      extendedDescription: "Transfer your loan to us and enjoy higher LTV, lower interest, and top-tier customer service without any hassle.",
      image: goldValImg
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-t from-black to-[#111] relative overflow-hidden" id="services">
      {/* Decorative Floating Coins */}
      <motion.img 
        src={goldCoins}
        alt=""
        className="absolute -left-20 top-1/4 w-64 opacity-20 blur-sm pointer-events-none"
        animate={{ 
          y: [0, 50, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src={goldCoins}
        alt=""
        className="absolute -right-20 bottom-1/4 w-64 opacity-20 blur-sm pointer-events-none"
        animate={{ 
          y: [0, -50, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Solutions</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Premium Gold Finance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-[#B8860B] mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
