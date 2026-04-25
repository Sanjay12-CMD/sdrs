import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/website/Banner';
import ParticleBackground from '../../components/website/ParticleBackground';
import aboutBannerImg from '../../assets/gold-assets.png';
import trustImg from '../../assets/gold-assets.png'; // Replaced with local gold assets
import heroBg from '../../assets/gold-assets.png'; 
import servicesBannerImg from '../../assets/gold-assets.png';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark"
    >
      <Banner 
        title="Our Heritage" 
        subtitle="A legacy of trust, excellence, and unwavering commitment to gold finance."
        bgImage={aboutBannerImg}
      />

      {/* Section 1: Split Layout (Image Left) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1 rounded-[3rem] overflow-hidden border border-white/5 relative h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 relative h-[500px]">
              <img 
                src={trustImg} 
                alt="Gold assets" 
                className="w-full h-full object-contain bg-[#0a0a0a]" 
              />
              <div className="absolute inset-0 bg-brand-red/10" />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Coimbatore's Trusted <br /> <span className="text-brand-gold italic">Gold Partners</span></h2>
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-8">
              Founded on the principles of honesty and transparency, SDRS Gold Finance has grown into a premier institution for gold asset management. 
              We understand the emotional and financial value of your gold, which is why we provide a boutique service focused on your needs.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-brand-gold mb-2">50K+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Clients Served</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-brand-gold mb-2">100%</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Transparent</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Background Image Section (Mission/Vision) */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBannerImg} 
            alt="Mission bg" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="glass-premium p-10 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-brand-gold font-heading">Our Mission</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              To empower individuals by providing immediate liquidity for their gold assets with the highest level of integrity, professional valuation, and ethical business practices.
            </p>
          </motion.div>
          <motion.div 
            className="glass-premium p-10 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-brand-gold font-heading">Our Vision</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              To become the most recognized and trusted name in gold finance across India, setting new benchmarks in transparency and customer satisfaction in our industry.
            </p>
          </motion.div>
        </div>
      </section>


    </motion.div>
  );
};

export default About;
