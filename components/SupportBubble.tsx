'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, User, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SupportBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Show notification shortly after load
    const timer = setTimeout(() => {
      setHasNotification(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
        // Close modal after success message delay or keep open?
        // Let's keep it open to show success
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Support form error:', error);
      // Handle error (maybe show toast)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Desktop Fixed Support Bubble */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <button
          onClick={handleOpen}
          className="relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
        >
          {/* Notification Badge */}
          {hasNotification && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-[10px] font-bold border-2 border-white">
                1
              </span>
            </span>
          )}

          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-green-600 group-hover:animate-pulse" />
          </div>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-1">Customer Support</h3>
                <p className="text-green-100 text-sm">We typically reply within a few minutes.</p>
              </div>
              <button 
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {showSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600 mb-6">
                    Thanks for reaching out. Mo or a team member will get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => {
                        setShowSuccess(false);
                        handleClose();
                    }}
                    className="bg-blue-600 hover:bg-blue-700 w-full"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="support-first-name" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          id="support-first-name"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="support-last-name" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          id="support-last-name"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="support-email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        id="support-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="support-phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        id="support-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="(949) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="support-message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        id="support-message"
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="How can we help you today?"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Footer */}
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
               <p className="text-xs text-slate-500">
                 Or call us directly at <a href="tel:9498229662" className="text-blue-600 font-semibold hover:underline">(949) 822-9662</a>
               </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}