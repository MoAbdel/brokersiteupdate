import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    const variantClasses =
      variant === 'default'
        ? 'bg-slate-900 text-white shadow hover:bg-slate-800 active:bg-slate-950'
        : variant === 'ghost'
          ? 'text-slate-900 hover:bg-slate-100 active:bg-slate-200'
          : 'border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-50 active:bg-slate-100';

    const sizeClasses =
      size === 'sm'
        ? 'min-h-[36px] px-3 py-1.5 text-sm'
        : size === 'default'
          ? 'min-h-[44px] px-4 py-2.5'
          : size === 'lg'
            ? 'min-h-[48px] px-6 md:px-8 py-3 text-base'
            : 'h-9 w-9 min-h-[44px] min-w-[44px]';

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 touch-manipulation',
          variantClasses,
          sizeClasses,
          // Allow per-instance overrides (e.g. white button on dark CTA).
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';