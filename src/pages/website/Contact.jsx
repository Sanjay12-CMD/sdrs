import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Banner from '../../components/website/Banner';
import contactBannerImg from '../../assets/gold-assets.png';
import { MapPin, Phone, MessageSquare, CornerDownRight } from 'lucide-react';

const Contact = () => {
  const [phone, setPhone] = useState('+91');
  const [phoneError, setPhoneError] = useState('');

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark"
    >
      <Banner 
        title="Connect With Us" 
        subtitle="Prompt support and transparent financial guidance are just a message away."
        bgImage={contactBannerImg}
      />

      <section className="py-24 bg-gradient-to-b from-[#111] to-black">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Visit Our Branch</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Coimbatore <br /> <span className="text-brand-gold italic">Main Outlet</span></h2>
            
            <div className="grid grid-cols-1 gap-8 mb-12">
               <div className="flex gap-4 group">
                  <div className="text-brand-gold group-hover:scale-125 transition-transform"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">Office Address</h4>
                    <p className="text-gray-400 font-body">SDRS Gold Finance, Vadavalli, Coimbatore - 641041</p>
                  </div>
               </div>
               <div className="flex gap-4 group">
                  <div className="text-brand-gold group-hover:scale-125 transition-transform"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">Direct Call</h4>
                    <p className="text-gray-400 font-body text-xl font-bold">+91 9843257757</p>
                  </div>
               </div>
               <div className="flex gap-4 group">
                  <div className="text-brand-gold group-hover:scale-125 transition-transform"><MessageSquare size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">WhatsApp Chat</h4>
                    <p className="text-gray-400 font-body italic text-sm">Instant support & quotes</p>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <a href="tel:9843257757" className="btn-gold !px-12 py-4 flex items-center justify-center gap-2">
                 <Phone size={20} /> Call Now
               </a>
               <a href="https://wa.me/919843257757" className="btn-premium flex items-center justify-center gap-2 !bg-green-600 hover:!bg-green-700">
                 <MessageSquare size={20} /> WhatsApp
               </a>
            </div>
          </motion.div>
          
          {/* Right: Contact Form */}
          <motion.div 
            className="flex-1 w-full max-w-xl lg:max-w-none glass-premium p-10 md:p-12 rounded-[2.5rem] relative"
            id="contact"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h3 className="text-3xl font-bold mb-4">Send a <span className="text-brand-gold">Message</span></h3>
             <p className="text-gray-400 font-body mb-8">Our team will get back to you within 24 business hours.</p>
             
             <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input type="text" placeholder="Your Name" className="bg-brand-dark/50 border border-white/10 p-5 rounded-2xl focus:border-brand-gold transition-colors text-white outline-none w-full" />
                   <div>
                     <input 
                       type="text" 
                       placeholder="Phone Number" 
                       value={phone}
                       onChange={handlePhoneChange}
                       className={`bg-brand-dark/50 border ${phoneError ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-brand-gold transition-colors text-white outline-none w-full`} 
                     />
                     {phoneError && <span className="text-red-500 text-xs mt-1 block px-2">{phoneError}</span>}
                   </div>
                </div>
                <input type="email" placeholder="Email Address (Optional)" className="w-full bg-brand-dark/50 border border-white/10 p-5 rounded-2xl focus:border-brand-gold transition-colors text-white outline-none" />
                <textarea rows="4" placeholder="Your Message" className="w-full bg-brand-dark/50 border border-white/10 p-5 rounded-2xl focus:border-brand-gold transition-colors text-white outline-none" />
                
                <button 
                  type="submit" 
                  className={`w-full py-5 text-lg rounded-2xl transition-all ${phone.length === 13 && !phoneError ? 'btn-gold' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}
                  disabled={phone.length !== 13}
                >
                  Send Inquiry
                </button>
             </form>
          </motion.div>
        </div>
      </section>

      {/* Styled Map Container */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Find Us on <span className="text-brand-gold">Google Maps</span></h2>
           </div>
           <div className="h-[500px] rounded-[3rem] overflow-hidden border-8 border-brand-dark shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.846569106064!2d76.8833924!3d11.0264936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85edbc3d84381%3A0x6b4f762028f0907!2sVadavalli%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713955000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale invert contrast-[1.2] brightness-[0.7]" 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Maps"
              />
              <div className="absolute top-10 right-10 p-6 glass-premium !bg-brand-red/90 rounded-2xl max-w-[240px] pointer-events-none">
                 <div className="flex gap-3 items-center mb-2">
                    <CornerDownRight size={20} className="text-brand-gold" />
                    <span className="font-bold text-white text-sm">Quick Directions</span>
                 </div>
                 <p className="text-white/80 text-xs font-body italic leading-relaxed">Simply search for "SDRS Gold Finance" on your navigation app.</p>
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
