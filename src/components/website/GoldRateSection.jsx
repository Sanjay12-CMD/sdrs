import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, MapPin } from 'lucide-react';
import api from '../../api/axios';

const RateCard = ({ title, weight, rate, trend, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card gold-border-animate flex flex-col items-center text-center p-8 group relative"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {trend === 'up' ? <TrendingUp size={64} className="text-brand-red" /> : <TrendingDown size={64} className="text-brand-red" />}
      </div>

      <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-4">{title}</span>
      <h3 className="text-4xl md:text-5xl font-bold text-brand-text mb-2">
        ₹{rate}
      </h3>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
        / {weight}
      </p>

      <div className={`mt-6 flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full ${trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-brand-red/10 text-brand-red'}`}>
        {trend === 'up' ? '+' : '-'} Live Market
      </div>
    </motion.div>
  );
};

const GoldRateSection = () => {
  const [rates, setRates] = useState({
    gold24k: '15273',
    gold22k: '14000',
    gold18k: '11680',
    silver: '265',
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    lastUpdatedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    trends: {
      gold24k: 'up',
      gold22k: 'up',
      gold18k: 'up',
      silver: 'up'
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRates = async () => {
    try {
      const response = await api.get('/v1/rates/live');
      if (response.data.status === 'success') {
        const data = response.data.data;
        const dateObj = new Date(data.lastUpdated);
        setRates({
          ...data,
          lastUpdated: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          lastUpdatedDate: dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        });
        setError(null);
      }
    } catch (err) {
      console.error('Failed to fetch rates:', err);
      setError('Live rates temporarily unavailable');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    // Auto refresh every 5 minutes
    const interval = setInterval(fetchRates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(166,124,0,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-red mb-4">
              <MapPin size={18} />
              <span className="font-bold tracking-widest uppercase text-xs">Coimbatore Market</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
              Today's <span className="text-brand-red italic">Gold Rate</span>
            </h2>
            <p className="text-gray-600 mt-4 font-body max-w-xl">
              Coimbatore Rate (Based on Chennai Market). Prices are updated automatically every 5 minutes based on live market indices.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            {error && <span className="text-brand-red text-xs font-bold uppercase">{error}</span>}
            <div className="flex items-center gap-3 bg-white/20 border border-black/5 px-6 py-3 rounded-2xl">
              <Clock size={18} className="text-brand-red" />
              <span className="text-sm text-gray-600">
                Last Updated: <span className="text-brand-text font-bold">{rates.lastUpdatedDate}, {rates.lastUpdated}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <RateCard
            title="Gold 24K"
            weight="1 Gram"
            rate={rates.gold24k}
            trend={rates.trends.gold24k}
            delay={0.1}
          />
          <RateCard
            title="Gold 22K"
            weight="1 Gram"
            rate={rates.gold22k}
            trend={rates.trends.gold22k}
            delay={0.2}
          />
          <RateCard
            title="Gold 18K"
            weight="1 Gram"
            rate={rates.gold18k}
            trend={rates.trends.gold18k}
            delay={0.3}
          />
          <RateCard
            title="Silver"
            weight="1 Gram"
            rate={rates.silver}
            trend={rates.trends.silver}
            delay={0.4}
          />
        </div>

        <div className="mt-12 p-6 glass-premium rounded-2xl border-brand-red/20 bg-brand-red/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-brand-text font-bold">Best Value Guarantee</p>
              <p className="text-gray-600 text-sm">We offer the highest price for your gold in Coimbatore.</p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium !py-3 !px-8 whitespace-nowrap"
          >
            Lock This Rate
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoldRateSection;
