'use client';

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackClientEvent } from "@/lib/vercel-client-events";

type HomeEquityFloatingCTAProps = {
  href?: LinkProps["href"];
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "aria-label">;

export function HomeEquityFloatingCTA({
  href = "/home-equity",
  className = "",
  onClick,
  ...props
}: HomeEquityFloatingCTAProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackClientEvent("tap_home_equity_clicked", {
      location: "floating_cta",
      href: typeof href === "string" ? href : "/home-equity",
    });
    onClick?.(event);
  };

  return (
    <Link
      href={href}
      className={`home-equity-floating-cta ${className}`.trim()}
      aria-label="Tap Home Equity. Opens home equity options without refinancing."
      onClick={handleClick}
      {...props}
    >
      <span className="home-equity-floating-cta__icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="25"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 10.65 12 4l8.25 6.65"
            stroke="currentColor"
            strokeWidth="2.05"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.8 9.4v9.15c0 .86.69 1.55 1.55 1.55h9.3c.86 0 1.55-.69 1.55-1.55V9.4"
            stroke="currentColor"
            strokeWidth="2.05"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.75 20.1v-5.35h4.5v5.35"
            stroke="currentColor"
            strokeWidth="2.05"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.4 7.05V5.2h2.25v3.65"
            stroke="currentColor"
            strokeWidth="2.05"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="home-equity-floating-cta__copy">
        <span className="home-equity-floating-cta__title">Tap Home Equity</span>
        <span className="home-equity-floating-cta__subtitle">
          Without refinancing
        </span>
      </span>

      <span className="home-equity-floating-cta__arrow" aria-hidden="true">
        <svg
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m7.5 4.75 5.25 5.25-5.25 5.25"
            stroke="currentColor"
            strokeWidth="2.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
