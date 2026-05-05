import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [phone, setPhone] = useState('+91');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    goldWeight: ''
  });
  const [success, setSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('+91')) {
      val = '+91';
    }
    const digitsOnly = val.slice(3).replace(/\D/g, '');
    const finalVal = '+91' + digitsOnly.slice(0, 10);
    setPhone(finalVal);

    if (finalVal.length > 3 && finalVal.length < 13) {
      setPhoneError('Please enter a valid 10-digit number');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 13 || phoneError) return;
    
    const whatsappText = `Hello SDRS Gold Finance,\n\nI would like an Express Valuation.\n\n*Name:* ${formData.name}\n*Phone:* ${phone}\n*Approx. Gold Weight:* ${formData.goldWeight} Grams`;
    const whatsappUrl = `https://wa.me/919843257757?text=${encodeURIComponent(whatsappText)}`;
    
    window.open(whatsappUrl, '_blank');

    setSuccess(true);
    setFormData({ name: '', goldWeight: '' });
    setPhone('+91');
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0 bg-white/5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left: Heading and Info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-premium p-10 md:p-16 rounded-[40px] border-black/5 bg-white/40 shadow-xl"
            >
              <span className="text-brand-red font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block font-body">Ready for Appraisal?</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter leading-none text-brand-text">
                Get Instant <br />
                <span className="text-brand-red italic">Cash Value</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                   <div className="flex items-center gap-3 text-brand-red mb-4">
                     <MapPin size={20} />
                     <span className="text-sm font-bold uppercase tracking-widest">Main Branch</span>
                   </div>
                   <p className="text-gray-600 font-body text-xl font-light">
                     SDRS Gold Finance, Vadavalli, Coimbatore - 641041
                   </p>
                </div>
                <div>
                   <div className="flex items-center gap-3 text-brand-red mb-4">
                     <Phone size={20} />
                     <span className="text-sm font-bold uppercase tracking-widest">Speak to Expert</span>
                   </div>
                   <p className="text-brand-text font-heading text-3xl font-bold">
                     9843257757
                   </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-10 border-t border-black/5">
                <a href="tel:9843257757" className="btn-premium !px-12 py-5 shadow-lg flex items-center gap-3 group">
                  Call Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="https://wa.me/919843257757" className="btn-premium flex items-center gap-3 !bg-green-600 hover:!bg-green-700 shadow-md">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Instant Cash Form */}
          <motion.div 
            className="flex-1 lg:max-w-md w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glass-premium p-10 h-full rounded-[32px] shadow-2xl relative group border-black/5 bg-white/40 flex flex-col justify-center">
               <h3 className="text-3xl font-bold mb-4 text-brand-text">Express <span className="text-brand-red">Valuation</span></h3>
               <p className="text-gray-600 font-body mb-8 text-sm">Fill details below and our executive will contact you instantly for your gold valuation.</p>
               
               <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                   <input 
                     type="text" 
                     placeholder="Your Name" 
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="bg-white/50 border border-black/10 p-5 rounded-2xl focus:border-brand-red transition-colors text-brand-text outline-none w-full" 
                   />
                   
                   <div>
                     <input 
                       type="text" 
                       placeholder="Phone Number" 
                       value={phone}
                       onChange={handlePhoneChange}
                       className={`bg-white/50 border ${phoneError ? 'border-red-500' : 'border-black/10'} p-5 rounded-2xl focus:border-brand-red transition-colors text-brand-text outline-none w-full`} 
                     />
                     {phoneError && <span className="text-red-500 text-xs mt-1 block px-2">{phoneError}</span>}
                   </div>
 
                   <input 
                     type="text" 
                     placeholder="Approx. Gold Weight (Grams)" 
                     value={formData.goldWeight}
                     onChange={(e) => setFormData({ ...formData, goldWeight: e.target.value })}
                     className="bg-white/50 border border-black/10 p-5 rounded-2xl focus:border-brand-red transition-colors text-brand-text outline-none w-full" 
                   />
                   
                   <button 
                     type="submit" 
                     disabled={phone.length !== 13 || phoneError}
                     className={`mt-4 w-full py-5 text-lg rounded-2xl transition-all flex items-center justify-center gap-2 ${phone.length === 13 && !phoneError ? 'btn-premium !bg-green-600 hover:!bg-green-700' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}
                   >
                     {success ? 'Opened in WhatsApp!' : <><MessageCircle size={20} /> Send on WhatsApp</>}
                   </button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
