'use client';

import React from 'react';
import Link from 'next/link';
import { Home, TrendingUp, Calculator, RefreshCw, FolderOpen, CreditCard } from 'lucide-react';

export default function QuickActionHub() {
  const actions = [
    {
      icon: Home,
      title: 'First-Time Buyer Portal',
      description: 'Start your homeownership journey',
      href: '/guides/orange-county-home-buyer-guide',
      category: 'Purchase Path',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Investment Property Analyzer',
      description: 'Evaluate rental & investment opportunities',
      href: '/guides/orange-county-investment-property',
      category: 'Purchase Path',
      color: 'blue'
    },
    {
      icon: Calculator,
      title: 'HELOC Calculator',
      description: 'Access your home equity strategically',
      href: 'https://heloc.westcapitallending.com/account/heloc/register?referrer=cfc157b6-213d-43c7-9744-c1f238a8a44b',
      category: 'Refinance Path',
      color: 'green',
      external: true
    },
    {
      icon: RefreshCw,
      title: 'Rate-Drop Alert System',
      description: 'Get notified when rates improve',
      href: '/contact',
      category: 'Refinance Path',
      color: 'green'
    },
    {
      icon: FolderOpen,
      title: 'Secure Document Portal',
      description: 'Upload documents safely',
      href: 'https://documentguardian.com/filedrop/mabdel@westcapitallending.com',
      category: 'Client Tools',
      color: 'purple',
      external: true
    },
    {
      icon: CreditCard,
      title: 'Credit Optimization Tool',
      description: 'Improve your approval odds',
      href: '/resources/credit-repair',
      category: 'Client Tools',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-700',
      green: 'bg-green-50 border-green-200 hover:border-green-400 text-green-700',
      purple: 'bg-purple-50 border-purple-200 hover:border-purple-400 text-purple-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Quick Action Hub
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Strategic tools and resources to accelerate your mortgage journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const Component = action.external ? 'a' : Link;
            const linkProps = action.external
              ? { href: action.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: action.href };

            return (
              <Component
                key={index}
                {...linkProps}
                className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${getColorClasses(action.color)}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 flex-shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wide opacity-70">
                      {action.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    {action.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {action.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-current opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
