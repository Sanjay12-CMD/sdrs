import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const WebsiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
