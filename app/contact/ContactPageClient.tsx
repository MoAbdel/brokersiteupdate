'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Shield, Star, Zap, Users, ArrowUpRight, TrendingUp } from 'lucide-react';
import PremiumContactForm from '@/components/contact/PremiumContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Direct Line',
    value: '(949) 822-9662',
    action: 'tel:(949) 822-9662',
    subtext: 'Available 24/7'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'mo.abdel@luminlending.com',
    action: 'mailto:mo.abdel@luminlending.com',
    subtext: '1 hr response time'
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Irvine, CA',
    action: 'https://maps.google.com/?q=18301+Von+Karman+Ave+Suite+820+Irvine+CA+92612',
    subtext: 'By Appointment Only'
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon - Sun',
    action: '#',
    subtext: '8:00 AM - 9:00 PM'
  }
];

const benefits = [
  {
    number: '01',
    title: 'Wholesale Advantage',
    description: 'Access to institutional pricing significantly lower than retail banks.',
    icon: Star
  },
  {
    number: '02',
    title: 'Speed & Efficiency',
    description: 'Closings in as little as 14 days with streamlined underwriting.',
    icon: Zap
  },
  {
    number: '03',
    title: 'Strategic Advisory',
    description: 'Wealth-building mortgage strategies, not just transaction processing.',
    icon: TrendingUp
  },
  {
    number: '04',
    title: '100+ Lenders',
    description: 'We shop the entire market to find the perfect program for your profile.',
    icon: Users
  }
];

export default function ContactPageClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left" style={{ scaleX: scrollYProgress }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[120px] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-50 blur-[120px] opacity-60" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-100/50 blur-[150px] opacity-40 animate-pulse duration-[10s]" />
      </div>

      <div className="relative z-10 pt-16 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-md">
              Premium Mortgage Advisory
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
              Let's Secure Your <br />
              <span className="text-blue-600">Financial Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Experience the difference of wholesale lending. Lower rates, faster closings, and a strategic partner dedicated to your wealth creation.
            </p>
          </motion.div>

          <motion.div style={{ y }} className="absolute top-0 right-0 lg:right-[-100px] opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="199" stroke="#2563eb" strokeWidth="1" />
              <circle cx="200" cy="200" r="150" stroke="#2563eb" strokeWidth="1" strokeDasharray="10 10" />
            </svg>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {contactInfo.map((item, index) => (
            <a key={index} href={item.action} target={item.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.1)' }}
                className="group relative bg-white border border-slate-200 hover:border-blue-300 p-8 rounded-2xl transition-all duration-300 h-full overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-start h-full">
                  <div className="p-3 bg-slate-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white text-slate-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors break-words leading-snug max-w-full text-left">{item.value}</p>
                  <p className="text-xs text-slate-400">{item.subtext}</p>

                  <div className="mt-auto pt-6 w-full flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <PremiumContactForm />
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">
                Why Clients Trust <br />
                <span className="text-blue-600">The Wholesale Model</span>
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                    className="group flex items-start p-6 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white/60 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl font-bold text-slate-200 mr-6 group-hover:text-blue-600 transition-colors">{benefit.number}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-slate-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-xs font-medium">NMLS #1426884</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span className="text-xs font-medium">5-Star Rated</span>
                </div>
                <div className="text-xs border px-2 py-1 rounded border-slate-300">Equal Housing Lender</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
