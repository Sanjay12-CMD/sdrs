import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coins, Key, RefreshCw, Zap, Hammer, ChevronDown, ChevronUp, 
  Gem, CreditCard, ArrowRightLeft, Star, Calendar, ShoppingCart 
} from 'lucide-react';
import goldValImg from '../../assets/gold-val.png';
import goldCashImg from '../../assets/gold-cash.png';
import silverAssets from '../../assets/silver-assets.png';
import diamondAssets from '../../assets/diamond-necklace.png';
import creditCardAssets from '../../assets/credit-card-assets.png';
import loanAssets from '../../assets/loan-assets.png';
import exchangeAssets from '../../assets/exchange-assets.png';
import manufacturingAssets from '../../assets/manufacturing-assets.png';
import calculatorAssets from '../../assets/calculator-assets.png';

const ServiceCard = ({ title, icon: Icon, description, index, image, extendedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card flex flex-col group relative bg-white/5 overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden rounded-xl mb-6">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 [filter:brightness(1.1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-red opacity-10 blur-[2px]">
          <Icon size={80} />
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-red border border-black/5 shadow-lg z-10">
          <Icon size={24} />
        </div>
      </div>
      
      <div className="md:hidden flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-md flex items-center justify-center text-brand-red border border-brand-red/50 shadow-sm">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-brand-text">{title}</h3>
      </div>

      <div className="flex flex-col flex-grow px-6 pb-6 md:px-0 md:pb-0">
        <h3 className="hidden md:block text-2xl font-bold mb-4 group-hover:text-brand-red transition-colors duration-300 text-brand-text">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-body">
          {description}
        </p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="text-gray-600 text-sm leading-relaxed mb-6 font-body overflow-hidden border-t border-black/5 pt-4"
            >
              {extendedDescription}
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto flex items-center gap-2 text-brand-red font-bold uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all duration-300 focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Learn More'} 
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <div className="h-px bg-brand-red flex-grow opacity-50" />
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
      description: "Convert your gold ornaments into instant cash at the highest market price with transparent testing.",
      extendedDescription: "We use high-precision XRF machines to test your gold purity without any damage. Get paid instantly via cash or bank transfer based on live market rates.",
      image: goldCashImg
    },
    { 
      title: "Cash for Silver", 
      icon: Zap, 
      description: "Fastest way to get cash for your silver articles. Walk in with silver, walk out with money.",
      extendedDescription: "No long waiting times or complex documentation. We provide spot valuation and immediate settlement for all silver items.",
      image: silverAssets
    },
    { 
      title: "Cash for Diamond", 
      icon: Gem, 
      description: "Get the best market value for your diamonds with expert certification and instant settlement.",
      extendedDescription: "We evaluate diamonds based on the 4Cs (Cut, Color, Clarity, Carat). Our experts provide a fair market valuation and immediate cash payment.",
      image: diamondAssets
    },
    { 
      title: "Cash for Credit Card", 
      icon: CreditCard, 
      description: "Emergency cash withdrawal services against your credit card limit with low processing fees.",
      extendedDescription: "Need urgent liquidity? We provide instant cash against your credit card limit with a secure and transparent process. Instant bank transfer available.",
      image: creditCardAssets
    },
    { 
      title: "Auction Gold / Pledging Gold Release", 
      icon: Key, 
      description: "We help you release your gold from banks, pawn shops, or auction houses with minimal hassle.",
      extendedDescription: "Stuck with high-interest gold loans or facing auction? We'll clear your dues directly, release your gold, and pay you the remaining balance at current market rates.",
      image: loanAssets
    },
    { 
      title: "Gold Loan Takeover Speciality", 
      icon: ArrowRightLeft, 
      description: "Specialized service to transfer your high-interest gold loans to more affordable rates.",
      extendedDescription: "We specialize in taking over your existing gold loans from other financiers and banks, providing you with lower interest rates and additional top-up cash.",
      image: goldValImg
    },
    { 
      title: "Super Gold Loan (95% Gold Value)", 
      icon: Star, 
      description: "Get the maximum possible value for your gold with our Super Gold Loan scheme offering up to 95% LTV.",
      extendedDescription: "Unlock the true potential of your gold. We offer one of the highest loan-to-value ratios in the market, ensuring you get the most money for your assets.",
      image: goldCashImg
    },
    { 
      title: "EMI Gold Loan (95% Gold Value)", 
      icon: Calendar, 
      description: "Repay your gold loan in easy monthly installments with high valuation and low interest.",
      extendedDescription: "Plan your finances better with our EMI-based gold loans. Get up to 95% of your gold's value and repay in flexible monthly schedules.",
      image: calculatorAssets
    },
    { 
      title: "Gold Purchase Loan (95% Gold Value)", 
      icon: ShoppingCart, 
      description: "Financing solution to help you purchase new gold assets with minimal down payment.",
      extendedDescription: "Want to invest in new gold? We provide purchase loans with up to 95% financing, making it easier for you to grow your gold portfolio.",
      image: goldValImg
    },
    { 
      title: "Exchange Gold for Cash", 
      icon: RefreshCw, 
      description: "Turn your old, broken, or unused gold jewelry into immediate liquid cash with zero hidden deductions.",
      extendedDescription: "Whether it's a single ring or a collection of heirlooms, we provide the best exchange value in Coimbatore. Our process is 100% transparent and ethical.",
      image: exchangeAssets
    },
    { 
      title: "Manufacturing Gold", 
      icon: Hammer, 
      description: "Custom gold manufacturing and wholesale services. Delivery completed within 1 week.",
      extendedDescription: "From intricate traditional designs to modern masterpieces, our skilled artisans craft gold with perfection. We offer competitive rates for custom orders and guarantee delivery within one week.",
      image: manufacturingAssets
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="services">


      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Solutions</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-text">Premium Gold Finance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-gold mx-auto mb-8" />
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
