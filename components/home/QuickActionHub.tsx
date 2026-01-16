'use client';

import React from 'react';
import { User, Calendar, FileText, FileCheck, Lock, CreditCard, Mail, Globe, Shield, LucideIcon } from 'lucide-react';

interface QuickAction {
  icon: LucideIcon;
  title: string;
  href: string;
  download?: string;
  external?: boolean;
}

export default function QuickActionHub() {
  const actions: QuickAction[] = [
    {
      icon: User,
      title: 'Add My Contact',
      href: '/mo-abdel-contact.vcf',
      download: 'MoAbdel.vcf',
    },
    {
      icon: Calendar,
      title: 'Schedule An Appointment',
      href: 'https://calendly.com/mbabdel/15min',
      external: true,
    },
    {
      icon: FileText,
      title: 'Apply Now',
      href: 'https://westcaplending.loanzify.io/register/mo-abdel',
      external: true,
    },
    {
      icon: FileCheck,
      title: 'Digital HELOC Application',
      href: 'https://heloc.luminglending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b',
      external: true,
    },
    {
      icon: Lock,
      title: 'Upload Documents Securely',
      href: 'https://documentguardian.com/filedrop/mo.abdel@Luminglending.com',
      external: true,
    },
    {
      icon: CreditCard,
      title: 'Order Credit Report',
      href: 'https://credit.advcredit.com/smartpay/SmartPay.aspx?uid=66239a18-5991-4274-92ff-77e6bffa5ab4#forward',
      external: true,
    },
    {
      icon: Mail,
      title: 'Email Me',
      href: 'mailto:mo.abdel@Luminglending.com',
    },
    {
      icon: Globe,
      title: 'LuminLending.com',
      href: 'https://luminglending.com/team/mo-abdel',
      external: true,
    },
    {
      icon: Shield,
      title: 'NMLSConsumerAccess.org',
      href: 'https://www.nmlsconsumeraccess.org/',
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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const isExternal = action.external;

            return (
              <a
                key={index}
                href={action.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                download={action.download}
                className={`flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-4 py-4 rounded-lg transition-all duration-200 hover:shadow-md ${action.title === 'NMLSConsumerAccess.org' ? 'col-span-2 sm:col-span-1 justify-center' : ''
                  }`}
              >
                <Icon className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <span className="font-medium text-sm leading-tight break-words min-w-0">{action.title}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Abstract curved bottom - Increased curvature by ~20-30% on desktop, more on mobile */}
      <div className="absolute -bottom-[1px] left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-8 block" // Increased height on mobile to accentuate curve
          preserveAspectRatio="none"
        >
          <path
            d="M0 32L60 28C120 24 240 16 360 12C480 8 600 8 720 10C840 12 960 16 1080 18C1200 20 1320 20 1380 20L1440 20V32H1380C1320 32 1200 32 1080 32C960 32 840 32 720 32C600 32 480 32 360 32C240 32 120 32 60 32H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

