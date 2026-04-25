import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout
import WebsiteLayout from './components/website/WebsiteLayout';

// Pages
import Home from './pages/website/Home';
import Services from './pages/website/Services';
import About from './pages/website/About';
import Contact from './pages/website/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Custom Loader
const Loader = () => (
  <div className="fixed inset-0 z-[100] bg-brand-dark flex flex-center flex-col gap-6">
    <motion.div 
      className="w-20 h-20 border-4 border-brand-gold/20 border-t-brand-gold rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="text-brand-gold font-heading text-xl tracking-[0.3em] font-bold"
    >
      SDRS GOLD
    </motion.div>
  </div>
);

function AppContent() {
  const location = useLocation();

  return (
    <WebsiteLayout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </WebsiteLayout>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader" exit={{ opacity: 0 }}>
            <Loader />
          </motion.div>
        ) : (
          <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AppContent />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
