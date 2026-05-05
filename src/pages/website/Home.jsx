import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/website/Hero';
import GoldRateSection from '../../components/website/GoldRateSection';
import ServicesSection from '../../components/website/ServicesSection';
import WhyChooseUs from '../../components/website/WhyChooseUs';
import ContactSection from '../../components/website/ContactSection';
import goldJewelry from '../../assets/gold-jewelry.png';
import diamondNecklace from '../../assets/diamond-necklace.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Hero />
      <GoldRateSection />

      {/* About Section Preview - Split Layout */}
      <section className="py-24 overflow-hidden border-y border-black/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <motion.div 
            className="flex-1 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl h-[500px] bg-gradient-to-tr from-[#111] to-[#222]">
              <img 
                src={diamondNecklace} 
                alt="Premium Diamond Necklace" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 [filter:brightness(1.1)_contrast(1.1)]"
              />
              <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Minimal gold ring behind block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-gold/10 rounded-full animate-spin [animation-duration:30s]" />
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-xs mb-6 block font-body">Trusted Since 2010</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-brand-text">Heritage of Trust <br /> <span className="text-brand-red italic">Excellence in Service</span></h2>
            <p className="text-gray-600 font-body text-xl leading-relaxed mb-10">
              SDRS Gold Finance is built on a decade of transparency. We are Coimbatore's first choice for professional gold valuation and ethical lending.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { title: "Safe & Secure", desc: "Your assets are stored in high-security biometric vaults." },
                { title: "Instant Valuation", desc: "Advanced purity testing with zero gold wastage." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red mt-1">
                      <span className="font-bold">✓</span>
                   </div>
                   <div>
                     <h4 className="text-brand-text font-bold">{item.title}</h4>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/about')}
              className="mt-12 btn-premium !px-12 py-5"
            >
              Read Our Story
            </button>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUs />
      <ContactSection />

      {/* CTA Banner with Glass Effect */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-90" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12 glass-premium !bg-white/20 !border-brand-red/20 p-12 rounded-[2rem]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-brand-red text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                Unlock Your <br /> Wealth Today.
              </h2>
              <p className="text-brand-red/80 text-xl font-medium font-body italic max-w-md">
                "Our valuation is final, our trust is eternal. Walk in with gold, walk out with freedom."
              </p>
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-red text-white py-6 px-16 rounded-full font-bold text-2xl hover:bg-[#a00000] transition-all shadow-lg active:scale-95 group overflow-hidden relative border border-white/10"
            >
              <span className="relative z-10 flex items-center gap-3">
                Visit Branch <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
