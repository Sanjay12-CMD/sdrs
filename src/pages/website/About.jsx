import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, User, ShieldCheck, Mail, Phone, MapPin, 
  Award, CheckCircle2, Calendar, Briefcase, ExternalLink, X 
} from 'lucide-react';
import Banner from '../../components/website/Banner';
import officeInterior from '../../assets/office_interior_new.jpg';
import officeEntrance from '../../assets/office_entrance_new.jpg';
import SecureCertificateViewer from '../../components/website/SecureCertificateViewer';

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { id: 1, title: "ISO 9001:2015 Certified", label: "Quality Management", type: "ISO Certificate" },
    { id: 2, title: "Pawn Broker License", label: "Authorized Operations", type: "License" },
    { id: 3, title: "GST Registration", label: "Tax Compliance", type: "GST Certificate" },
    { id: 4, title: "MSME (UDYAM)", label: "Government Registered", type: "UDYAM Certificate" },
  ];

  const businessDetails = [
    { icon: Building, label: "Business Name", value: "SDRS Gold Finance" },
    { icon: User, label: "Owner", value: "Dharmaraj Sekar" },
    { icon: Briefcase, label: "Type", value: "Proprietorship" },
    { icon: ShieldCheck, label: "Category", value: "OBC" },
    { icon: Briefcase, label: "Industry", value: "Financial Services" },
    { icon: Award, label: "UDYAM Registration", value: "UDYAM-TN-03-0110932" },
  ];

  const trustStats = [
    { label: "20+ Years Experience", icon: Calendar },
    { label: "ISO Certified", icon: Award },
    { label: "Government Registered", icon: ShieldCheck },
    { label: "Trusted by Customers", icon: CheckCircle2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Banner 
        title="Our Heritage" 
        subtitle="A legacy of trust, excellence, and unwavering commitment to gold finance since 2000."
        bgImage={null} // Removed jewelry background
      />

      {/* SECTION 1: Company Overview + GST Certificate */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Office Images at the Top */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="relative group flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/50 to-transparent rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-[20px] overflow-hidden border border-black/5 shadow-2xl aspect-[3/4]">
                  <img 
                    src={officeInterior} 
                    alt="Office Interior" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative group flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/50 to-transparent rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-[20px] overflow-hidden border border-black/5 shadow-2xl aspect-[3/4]">
                  <img 
                    src={officeEntrance} 
                    alt="Office Entrance" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Text Below the Images */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left max-w-4xl"
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-brand-text">
                About SDRS <br /> <span className="italic text-brand-red">Gold Finance</span>
              </h2>
              <p className="text-gray-600 font-body text-lg md:text-xl leading-relaxed">
                Located in Vadavalli, Coimbatore, SDRS Gold Finance has been a pillar of financial stability for over two decades. 
                We are an MSME registered enterprise dedicated to providing transparent gold loans, pawn broking, and specialized financial services 
                tailored to the needs of our community.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* SECTION 2: Business Details Card */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card gold-border-animate p-8 md:p-12 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-brand-red flex items-center gap-3">
                  <Building className="w-6 h-6" /> Business Information
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {businessDetails.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 rounded-xl bg-white/20 border border-black/5 group-hover:border-brand-red/50 transition-colors">
                        <item.icon className="w-5 h-5 text-brand-red" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-red uppercase tracking-widest font-bold mb-1">{item.label}</p>
                        <p className="text-brand-text font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-brand-red flex items-center gap-3">
                  <MapPin className="w-6 h-6" /> Location & Contact
                </h3>
                <div className="space-y-6">
                  <div className="glass-premium p-6 rounded-2xl border-black/5 bg-white/20">
                    <p className="text-xs text-brand-red uppercase tracking-widest font-bold mb-3">Office Address</p>
                    <p className="text-gray-700 leading-relaxed">
                      No 1/12, Maruthamalai Main Road,<br />
                      Vadavalli, Coimbatore,<br />
                      Tamil Nadu - 641041
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <a href="tel:9843257757" className="flex items-center gap-4 p-4 rounded-xl bg-white/40 hover:bg-white/60 border border-black/5 transition-all">
                      <Phone className="w-5 h-5 text-brand-red" />
                      <span className="text-brand-text">9843257757</span>
                    </a>
                    <a href="mailto:sdrsgoldfinance@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/40 hover:bg-white/60 border border-black/5 transition-all">
                      <Mail className="w-5 h-5 text-brand-red" />
                      <span className="text-brand-text">sdrsgoldfinance@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Certifications & Licenses */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-brand-text">Certifications & <span className="text-brand-red">Licenses</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to quality and transparency is backed by official government certifications and licenses.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/5 md:group-hover:border-brand-red/50 transition-all shadow-2xl bg-white/40">
                  <div className="absolute inset-0 opacity-80 md:opacity-50 md:group-hover:opacity-80 transition-opacity duration-500">
                    {(cert.id === 3 || cert.id === 4) ? (
                      <div className="w-full h-full bg-brand-red/5 flex items-center justify-center pb-8">
                         {cert.id === 3 ? <ShieldCheck className="w-16 h-16 text-brand-red/20" /> : <Award className="w-16 h-16 text-brand-red/20" />}
                      </div>
                    ) : (
                      <SecureCertificateViewer imageId={cert.id} className="w-full h-full" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">{cert.type}</p>
                    <h4 className="text-lg font-bold text-brand-text group-hover:text-brand-red transition-colors">{cert.title}</h4>
                  </div>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ExternalLink className="w-4 h-4 text-brand-red" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: UDYAM Details (Highlight Block) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-brand-red/10 shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center animate-pulse-gold">
                <Award className="w-12 h-12 md:w-16 md:h-16 text-brand-red" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  <span className="px-4 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold">MSME Registered</span>
                  <span className="px-4 py-1 rounded-full bg-black/5 border border-black/10 text-gray-600 text-xs font-bold">Enterprise Type: Micro</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-brand-text">Official UDYAM Registration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <p className="text-brand-red text-xs uppercase font-bold tracking-widest mb-1">Major Activity</p>
                    <p className="text-brand-text text-lg">Services</p>
                  </div>
                  <div>
                    <p className="text-brand-red text-xs uppercase font-bold tracking-widest mb-1">Registration Date</p>
                    <p className="text-brand-text text-lg">15/11/2022</p>
                  </div>
                  <div>
                    <p className="text-brand-red text-xs uppercase font-bold tracking-widest mb-1">Business Since</p>
                    <p className="text-brand-text text-lg">Year 2000</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Ambient Glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden p-8 rounded-2xl flex flex-col items-center text-center group bg-white/40 border border-black/5 shadow-lg transition-all duration-500 hover:shadow-brand-red/10"
              >
                <div className="relative z-20 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <stat.icon className="w-7 h-7 text-brand-red" />
                  </div>
                  <p className="font-bold text-brand-text leading-tight">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-white/95 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-[3/4] md:aspect-auto md:max-h-[90vh] bg-white rounded-3xl overflow-hidden border border-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-black/5 text-gray-500 hover:text-brand-red transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-[2] bg-white/50 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    {(selectedCert.id === 3 || selectedCert.id === 4) ? (
                      <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-white/80 rounded-2xl h-full w-full border border-black/5 shadow-inner">
                        <div className="w-24 h-24 bg-brand-red/10 rounded-full flex items-center justify-center mb-6 border border-brand-red/20">
                          {selectedCert.id === 3 ? <ShieldCheck className="w-12 h-12 text-brand-red" /> : <Award className="w-12 h-12 text-brand-red" />}
                        </div>
                        <h4 className="text-2xl font-bold text-brand-text mb-2">{selectedCert.id === 3 ? "GST Registration" : "MSME Registration"}</h4>
                        <p className="text-brand-red font-bold text-xl mb-4 tracking-widest bg-brand-red/5 px-6 py-2 rounded-lg border border-brand-red/10">
                          {selectedCert.id === 3 ? "33BIXPS6651Q1ZQ" : "UDYAM-TN-03-0110932"}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {selectedCert.id === 3 ? "Active & Verified Taxpayer" : "Registered Micro Enterprise"}
                        </p>
                      </div>
                    ) : (
                      <SecureCertificateViewer imageId={selectedCert.id} className="w-full h-full rounded-xl" />
                    )}
                  </div>
                </div>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{selectedCert.type}</span>
                  <h3 className="text-3xl font-bold mb-6 text-brand-text">{selectedCert.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    This official document verifies SDRS Gold Finance's compliance with {selectedCert.label} standards and government regulations. 
                    We maintain these standards to ensure the highest level of trust and service for our valued customers.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-red" />
                      Government Verified
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-red" />
                      Authentic Documentation
                    </div>
                  </div>
                  <button 
                    className="mt-12 w-full py-4 rounded-xl bg-brand-red text-white font-bold hover:bg-red-800 transition-all"
                    onClick={() => setSelectedCert(null)}
                  >
                    Close Preview
                  </button>
                  <p className="mt-4 text-center text-xs text-gray-500 italic">
                    Contact Admin to Download official document
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default About;
