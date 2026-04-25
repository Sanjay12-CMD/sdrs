import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-2 shadow-2xl' : 'bg-transparent py-4'
      }`}
    >
      {/* Scroll Progress Indicator (Optional highlight) */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gold-gradient opacity-20 w-full" />

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-14 md:h-14 overflow-hidden relative">
            <img 
              src={logoImg} 
              alt="SDRS Logo" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg md:text-2xl font-bold tracking-tight text-white leading-none">
              SDRS <span className="text-brand-gold">GOLD</span>
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 font-body">Finance</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-body text-sm font-medium transition-colors hover:text-brand-gold relative group ${
                location.pathname === link.path ? 'text-brand-gold' : 'text-gray-300'
              }`}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold"
                initial={false}
                animate={{ width: location.pathname === link.path ? '100%' : '0%' }}
                whileHover={{ width: '100%' }}
              />
            </Link>
          ))}
          <a href="tel:9843257757" className="btn-gold !py-2 !px-5 text-sm flex items-center gap-2">
            <Phone size={16} />
            <span>Speak to Expert: 9843257757</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <a href="tel:9843257757" className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white border border-brand-gold/30">
              <Phone size={18} />
           </a>
           <button 
             className="text-white p-1 hover:text-brand-gold transition-colors"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-heading text-2xl font-semibold transition-colors hover:text-brand-gold ${
                    location.pathname === link.path ? 'text-brand-gold' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <a href="tel:9843257757" className="btn-premium flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
                <a href="https://wa.me/919843257757" className="btn-gold flex items-center justify-center gap-2">
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
