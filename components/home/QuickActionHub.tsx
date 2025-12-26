'use client';

import React from 'react';
import { User, Calendar, FileText, FileCheck, Lock, CreditCard, Mail, Globe, Shield } from 'lucide-react';

export default function QuickActionHub() {
  const actions = [
    {
      icon: User,
      title: 'Add My Contact',
      href: '/api/contact-card',
    },
    {
      icon: Calendar,
      title: 'Schedule An Appointment',
      href: 'https://calendly.com/mabdel-wclloans/30min',
      external: true,
    },
    {
      icon: FileText,
      title: 'Apply Now',
      href: 'https://plus.floify.com/apply/wclloans',
      external: true,
    },
    {
      icon: FileCheck,
      title: 'Digital HELOC Application',
      href: 'https://heloc.westcapitallending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b',
      external: true,
    },
    {
      icon: Lock,
      title: 'Upload Documents Securely',
      href: 'https://documentguardian.com/filedrop/mabdel@westcapitallending.com',
      external: true,
    },
    {
      icon: CreditCard,
      title: 'Order Credit Report',
      href: 'https://www.smartpay.propertiespluscredit.com/consumer/6e62e88e-3fd4-4c0c-8ff8-d2b9e36f51f6',
      external: true,
    },
    {
      icon: Mail,
      title: 'Email Me',
      href: 'mailto:mabdel@wclloans.com',
    },
    {
      icon: Globe,
      title: 'WestCapitalLending.com',
      href: 'https://westcapitallending.com/mo-abdel',
      external: true,
    },
    {
      icon: Shield,
      title: 'NMLSConsumerAccess.org',
      href: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1566096',
      external: true,
    },
  ];

  return (
    <section className="relative py-16 pb-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Quick Actions
          </h2>
          <p className="text-slate-400">
            Tools and resources at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const isExternal = action.external;

            return (
              <a
                key={index}
                href={action.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-5 py-4 rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <Icon className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <span className="font-medium text-sm">{action.title}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Abstract curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

