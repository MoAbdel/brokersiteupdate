import React from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type HeroAction = {
  label: string;
  href: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  ariaLabel?: string;
};

function HeroActionLink({
  action,
  children,
}: {
  action: HeroAction;
  children: React.ReactNode;
}) {
  const isInternal = action.href.startsWith('/');
  if (isInternal) {
    return (
      <Link href={action.href} aria-label={action.ariaLabel || action.label}>
        {children}
      </Link>
    );
  }

  return (
    <a href={action.href} aria-label={action.ariaLabel || action.label}>
      {children}
    </a>
  );
}

export default function PageHero({
  badgeText,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  align = 'center',
  className,
}: {
  badgeText?: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  align?: 'left' | 'center';
  className?: string;
}) {
  const textAlign = align === 'left' ? 'text-left' : 'text-center';
  const containerAlign = align === 'left' ? 'items-start' : 'items-center';

  return (
    <section
      className={cn(
        // Slate hero: consistent across the site, with a subtle pattern and a small blue accent.
        'relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white',
        className
      )}
    >
      {/* Subtle grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.22) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Soft blue glow to keep it on-brand without turning everything "blue" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={cn('flex flex-col gap-6', containerAlign, textAlign)}>
          {badgeText ? (
            <Badge className="bg-white/10 text-white border-white/15">
              {BadgeIcon ? <BadgeIcon className="w-4 h-4 mr-2" aria-hidden="true" /> : null}
              {badgeText}
            </Badge>
          ) : null}

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>

          {subtitle ? (
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl">{subtitle}</p>
          ) : null}

          {(primaryAction || secondaryAction) ? (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {primaryAction ? (
                <HeroActionLink action={primaryAction}>
                  <Button
                    size="lg"
                    className={cn(
                      'rounded-full',
                      // Primary CTA: crisp + premium (white button on slate hero).
                      'bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200'
                    )}
                  >
                    {primaryAction.icon ? (
                      <primaryAction.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : null}
                    {primaryAction.label}
                  </Button>
                </HeroActionLink>
              ) : null}

              {secondaryAction ? (
                <HeroActionLink action={secondaryAction}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className={cn(
                      'rounded-full border border-white/20 text-white hover:bg-white/10 active:bg-white/15',
                      // Ensure ghost doesn't inherit light hover from default Button styles
                      'hover:text-white'
                    )}
                  >
                    {secondaryAction.icon ? (
                      <secondaryAction.icon className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : null}
                    {secondaryAction.label}
                  </Button>
                </HeroActionLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

