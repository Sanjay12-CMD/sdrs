import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../../components/website/ServicesSection';
import Banner from '../../components/website/Banner';
import servicesBannerImg from '../../assets/gold-assets.png';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark"
    >
      <Banner 
        title="Our Services" 
        subtitle="Experience the gold standard in asset management and financial liquidity."
        bgImage={servicesBannerImg}
      />

      <div className="py-12">
        <ServicesSection />
      </div>

      {/* Trust Message Section */}
      <section className="py-16 bg-gradient-to-b from-[#111] to-black border-t border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-6">Transparency is our <span className="text-brand-gold italic">Core Value</span></h2>
           <p className="text-gray-300 max-w-2xl mx-auto font-body italic">
             "We don't just value gold; we value the trust you place in us."
           </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
