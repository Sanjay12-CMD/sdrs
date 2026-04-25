import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Send, Share2, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img src={logoImg} alt="SDRS Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-white leading-none">
                  SDRS <span className="text-brand-gold">GOLD</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 font-body">Finance</span>
              </div>
            </Link>
            <p className="text-sm font-body leading-relaxed mb-6">
              Empowering dreams with instant value. SDRS Gold Finance is Coimbatore's leading premium gold buyer and financier, offering trust and transparency since 2010.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Send, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-red transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4 text-sm font-body">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Our Services</h4>
            <ul className="space-y-4 text-sm font-body">
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Cash for Gold</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Gold Loan</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Pledge Release</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">EMI Loans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Operating Hours</h4>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex justify-between"><span>Mon - Sat:</span> <span className="text-white">9:30 AM - 7:30 PM</span></li>
              
              <li className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs italic leading-relaxed">
                  *Market rates are updated live daily based on international gold index.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs font-body">
            © 2026 SDRS Gold Finance. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
          >
            <ArrowUp size={20} />
          </button>
          <div className="flex gap-6 text-xs font-body">
            <a href="#" className="hover:text-brand-gold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
