import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import goldBar from '../../assets/gold-bar.png';

const WhyChooseUs = () => {
  const reasons = [
     {
      title: "Transparent Gold Valuation",
      description: "Get 100% accurate purity reports right in front of you.",
      icon: Scale
    },
    {
      title: "Instant Payment",
      description: "Spot cash or instant IMPS/NEFT transfers as per your preference.",
      icon: Clock
    },
    {
      title: "Safe & Secure Process",
      description: "Insured vaults and 24/7 surveillance for complete safety of your assets.",
      icon: ShieldCheck
    },
    {
      title: "Trusted Local Service",
      description: "Coimbatore's premium gold finance partner serving with honesty.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-32 overflow-hidden relative border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Premium Value Section */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-10 glass-premium p-12 rounded-[3rem] border-black/5 min-h-[400px] flex flex-col justify-center items-center text-center shadow-xl bg-white/20 overflow-hidden">
                <motion.div 
                  className="relative z-10 w-full max-w-xs mb-8"
                  animate={{ 
                    rotate: [0, 2, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute -inset-10 bg-brand-gold/10 blur-3xl rounded-full" />
                  <img 
                    src={goldBar} 
                    alt="Premium Gold Bar" 
                    className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)] rounded-xl"
                  />
                </motion.div>
                <h3 className="text-3xl font-bold font-heading text-brand-text tracking-widest mb-4">Integrity First</h3>
                <p className="text-gray-600 font-body">
                  "Our valuation is final, our trust is eternal. Walk in with gold, walk out with freedom."
                </p>
            </div>
            
            {/* Decorative Gold Frames */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-brand-gold opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-brand-gold opacity-30" />
          </motion.div>

          {/* Right: Content Section */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Promise</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-brand-text">
                Why Choose <br />
                <span className="text-brand-red italic">SDRS Gold Finance</span>
              </h2>
              <p className="text-gray-600 font-body text-lg leading-relaxed mb-12 max-w-xl">
                We've built a reputation for providing straightforward and swift financial assistance with pure transparency.
              </p>

              <div className="space-y-10">
                {reasons.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="text-brand-red mt-1">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-brand-text">{item.title}</h4>
                      <p className="text-gray-600 text-sm font-body leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
