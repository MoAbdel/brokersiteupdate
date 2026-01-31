'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, User, Mail, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function SupportBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setIsMounted(true);
    // Show notification shortly after load
    const timer = setTimeout(() => {
      setHasNotification(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  const handleOpen = () => {
    setIsOpen(true);
    setHasNotification(false); // Clear notification on open
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use the same API endpoint as contact form
      const formData_submit = new FormData();
      formData_submit.append('full_name', `${formData.firstName} ${formData.lastName}`);
      formData_submit.append('email', formData.email);
      formData_submit.append('phone', formData.phone);
      formData_submit.append('additional_info', formData.message);
      formData_submit.append('_subject', `Support Request - ${formData.firstName} ${formData.lastName}`);
      formData_submit.append('source', 'Support Bubble');

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData_submit,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Support form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full pl-10 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-slate-400 text-sm hover:bg-white focus:bg-white";
  const labelClasses = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1";

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      {/* Desktop Fixed Support Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="hidden md:block fixed bottom-8 right-8 z-50 pointer-events-auto"
          >
            <motion.button
              onClick={handleOpen}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(59, 130, 246, 0)",
                  "0px 0px 20px rgba(59, 130, 246, 0.3)",
                  "0px 0px 0px rgba(59, 130, 246, 0)"
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-3 bg-white/90 backdrop-blur-md pr-6 pl-2 py-2 rounded-full shadow-2xl border border-white/40 group overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full text-white shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Notification Badge */}
                {hasNotification && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-[10px] font-bold text-white border-2 border-white">
                      1
                    </span>
                  </motion.span>
                )}
              </div>

              <div className="text-left pr-2 relative z-10">
                <p className="text-sm font-bold text-slate-800">Chat with Support</p>
                <p className="text-xs text-slate-500">Online now</p>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md pointer-events-auto"
              onClick={handleClose}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative bg-white/95 backdrop-blur-xl sm:rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-white/20 pointer-events-auto"
            >
              {/* Header */}
              <div className="relative bg-slate-900/95 backdrop-blur-md p-6 sm:p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20" />
                {/* Decorative circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 8, repeat: Infinity, delay: 4 }}
                  className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl"
                />

                <div className="relative flex justify-between items-start z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20 border-2 border-white/10 group">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <MessageCircle className="w-6 h-6" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Customer Support</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <p className="text-slate-300 text-xs font-medium">Typically replies in minutes</p>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleClose}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 bg-white/50">
                <AnimatePresence mode="wait">
                  {showSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
                        className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
                      >
                        <Send className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h4>
                      <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                        Thanks for reaching out. We&apos;ll get back to you shortly via email or phone.
                      </p>
                      <Button
                        onClick={() => {
                          setShowSuccess(false);
                          handleClose();
                        }}
                        className="bg-slate-900 hover:bg-slate-800 text-white w-full h-12 rounded-xl text-base font-medium shadow-xl shadow-slate-200"
                      >
                        Close Window
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-2 gap-5">
                        <motion.div variants={itemVariants}>
                          <label htmlFor="support-first-name" className={labelClasses}>First Name</label>
                          <div className="relative group">
                            <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <input
                              id="support-first-name"
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className={inputClasses}
                              placeholder="John"
                            />
                          </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label htmlFor="support-last-name" className={labelClasses}>Last Name</label>
                          <div className="relative group">
                            <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <input
                              id="support-last-name"
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className={inputClasses}
                              placeholder="Doe"
                            />
                          </div>
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="support-email" className={labelClasses}>Email Address</label>
                        <div className="relative group">
                          <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input
                            id="support-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={inputClasses}
                            placeholder="john@example.com"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="support-phone" className={labelClasses}>Phone Number</label>
                        <div className="relative group">
                          <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input
                            id="support-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={inputClasses}
                            placeholder="(949) 555-0123"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label htmlFor="support-message" className={labelClasses}>Message</label>
                        <div className="relative group">
                          <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <textarea
                            id="support-message"
                            rows={3}
                            required
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className={`${inputClasses} resize-none`}
                            placeholder="How can we help you today?"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="pt-2"
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                        >
                          <span className="flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                Send Message
                                <ChevronRight className="w-4 h-4" />
                              </>
                            )}
                          </span>
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="bg-slate-50/80 backdrop-blur-sm p-4 text-center border-t border-slate-100">
                <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                  Or call us directly at
                  <a href="tel:9498229662" className="text-blue-600 font-bold hover:underline">
                    (949) 822-9662
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
