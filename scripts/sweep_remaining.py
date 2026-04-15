#!/usr/bin/env python3
"""
Targeted sweep of remaining positioning-luxury language.
Only fixes broker/service positioning, not factual/descriptive uses.
"""

import os
import re

BASE = r"C:\Users\haithem\projects\brokersiteupdate\.claude\worktrees\slice-2-4-scenarios-luxury-sweep"

# Each entry: (file_relative, old_string, new_string)
TARGETED = [
    # reverse-mortgage-east-bay-sf-guide-2026
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'a unique convergence of urban luxury and suburban',
        'a unique convergence of urban amenities and suburban',
    ),
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'Hub Preview: Urban Luxury &amp; Hilltop Estates (SF, Piedmont, Orinda, Lafayette, Moraga)',
        'Hub Preview: High-Value &amp; Hilltop Estates (SF, Piedmont, Orinda, Lafayette, Moraga)',
    ),
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'Hub Preview: Urban Luxury &amp; Hilltop Estates -- San Francisco, Piedmont, Orinda, Lafayette, Moraga',
        'Hub Preview: High-Value &amp; Hilltop Estates -- San Francisco, Piedmont, Orinda, Lafayette, Moraga',
    ),
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'and a mix of urban luxury and semi-rural estate living.',
        'and a mix of urban amenities and semi-rural estate living.',
    ),
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'San Francisco: Urban Luxury and Mixed Housing',
        'San Francisco: Urban High-Value and Mixed Housing',
    ),
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'Danville: Luxury Suburban Living',
        'Danville: High-Value Suburban Living',
    ),
    (
        r"app\blog\reverse-mortgage-east-bay-sf-guide-2026\page.tsx",
        'Ruby Hill in Pleasanton represent luxury enclaves within these broader markets',
        'Ruby Hill in Pleasanton represent high-value enclaves within these broader markets',
    ),

    # home-equity-east-bay-sf-guide-2026
    (
        r"app\blog\home-equity-east-bay-sf-guide-2026\page.tsx",
        'Hub Preview: Urban Luxury Equity (SF, Piedmont, Orinda, Lafayette, Moraga)',
        'Hub Preview: High-Value Equity (SF, Piedmont, Orinda, Lafayette, Moraga)',
    ),
    (
        r"app\blog\home-equity-east-bay-sf-guide-2026\page.tsx",
        'Hub Preview: Urban Luxury Equity -- San Francisco, Piedmont, Orinda, Lafayette, Moraga',
        'Hub Preview: High-Value Equity -- San Francisco, Piedmont, Orinda, Lafayette, Moraga',
    ),

    # wholesale-mortgage-broker-central-orange-county-2026
    (
        r"app\blog\wholesale-mortgage-broker-central-orange-county-2026\page.tsx",
        "Newport Beach&apos;s waterfront luxury to Costa Mesa",
        "Newport Beach&apos;s waterfront homes to Costa Mesa",
    ),
    (
        r"app\blog\wholesale-mortgage-broker-central-orange-county-2026\page.tsx",
        'Established luxury near UCI $1.5M-$4M+.',
        'Established neighborhood near UCI $1.5M-$4M+.',
    ),
    (
        r"app\blog\wholesale-mortgage-broker-central-orange-county-2026\page.tsx",
        'Newport Beach: Waterfront Luxury &amp; Harbor Living',
        'Newport Beach: Waterfront Homes &amp; Harbor Living',
    ),
    (
        r"app\blog\wholesale-mortgage-broker-central-orange-county-2026\page.tsx",
        "Newport Beach represents Orange County&apos;s pinnacle of waterfront luxury.",
        "Newport Beach represents Orange County&apos;s premier coastal market.",
    ),
    (
        r"app\blog\wholesale-mortgage-broker-central-orange-county-2026\page.tsx",
        'Resort-adjacent luxury. Ultra-jumbo specialists essential.',
        'Resort-adjacent high-value homes. Ultra-jumbo lending essential.',
    ),
    (
        r"app\blog\wholesale-mortgage-broker-central-orange-county-2026\page.tsx",
        'waterfront luxury in Newport Beach,',
        'coastal homes in Newport Beach,',
    ),

    # reverse-mortgage-central-coast-guide-2026
    (
        r"app\blog\reverse-mortgage-central-coast-guide-2026\page.tsx",
        'Santa Barbara Luxury</td>',
        'Santa Barbara High-Value</td>',
    ),
    (
        r"app\blog\reverse-mortgage-central-coast-guide-2026\page.tsx",
        '{/* Hub Preview: Santa Barbara Luxury */}',
        '{/* Hub Preview: Santa Barbara High-Value */}',
    ),
    (
        r"app\blog\reverse-mortgage-central-coast-guide-2026\page.tsx",
        'Hub Preview: Santa Barbara Luxury Corridor (Montecito, Santa Barbara &amp; Carpinteria)',
        'Hub Preview: Santa Barbara High-Value Corridor (Montecito, Santa Barbara &amp; Carpinteria)',
    ),
    (
        r"app\blog\reverse-mortgage-central-coast-guide-2026\page.tsx",
        'The Santa Barbara luxury corridor represents the highest-value reverse mortgage market',
        'The Santa Barbara high-value corridor represents the highest-value reverse mortgage market',
    ),

    # home-equity-central-coast-guide-2026
    (
        r"app\blog\home-equity-central-coast-guide-2026\page.tsx",
        '{/* Santa Barbara Luxury Hub */}',
        '{/* Santa Barbara High-Value Hub */}',
    ),
    (
        r"app\blog\home-equity-central-coast-guide-2026\page.tsx",
        'Santa Barbara Luxury Corridor: Home Equity Strategies for High-Value Properties',
        'Santa Barbara High-Value Corridor: Home Equity Strategies for High-Value Properties',
    ),

    # home-equity-central-coast-communities-2026
    (
        r"app\blog\home-equity-central-coast-communities-2026\page.tsx",
        'Santa Barbara &amp; Montecito Luxury Home Equity',
        'Santa Barbara &amp; Montecito High-Value Home Equity',
    ),

    # home-equity-california-guide-2026
    (
        r"app\blog\home-equity-california-guide-2026\page.tsx",
        'Beverly Hills, Santa Monica, Malibu. Avg. equity: $1.5M-$2.2M. Luxury property equity access and entertainment industry income.',
        'Beverly Hills, Santa Monica, Malibu. Avg. equity: $1.5M-$2.2M. High-value property equity access and entertainment industry income.',
    ),

    # home-equity-san-diego-guide-2026
    (
        r"app\blog\home-equity-san-diego-guide-2026\page.tsx",
        'In luxury enclaves like Rancho Santa Fe and Del Mar, the figure exceeds 80%.',
        'In high-value enclaves like Rancho Santa Fe and Del Mar, the figure exceeds 80%.',
    ),
    (
        r"app\blog\home-equity-san-diego-guide-2026\page.tsx",
        '{/* Hub Preview: Coastal Military-to-Luxury */}',
        '{/* Hub Preview: Coastal Military-to-High-Value */}',
    ),
    (
        r"app\blog\home-equity-san-diego-guide-2026\page.tsx",
        'experience appraising luxury coastal, equestrian, and estate properties.',
        'experience appraising high-value coastal, equestrian, and estate properties.',
    ),

    # home-equity-ventura-county-guide-2026
    (
        r"app\blog\home-equity-ventura-county-guide-2026\page.tsx",
        'Hub Preview: Conejo Valley Luxury Equity',
        'Hub Preview: Conejo Valley High-Value Equity',
    ),

    # reverse-mortgage-ventura-county-guide-2026
    (
        r"app\blog\reverse-mortgage-ventura-county-guide-2026\page.tsx",
        'Westlake Village: Luxury Lake Community Reverse Mortgages',
        'Westlake Village: High-Value Lake Community Reverse Mortgages',
    ),

    # wholesale-mortgage-broker-central-orange-county-2026 - "Ultra-jumbo" already fixed above but check

    # san-clemente-mortgage-guide-2026
    (
        r"app\blog\san-clemente-mortgage-guide-2026\page.tsx",
        'Expert mortgage solutions for "Spanish Village by the Sea"\u2014from VA loans to luxury coastal estates.',
        'Expert mortgage solutions for "Spanish Village by the Sea"\u2014from VA loans to coastal estates.',
    ),
    (
        r"app\blog\san-clemente-mortgage-guide-2026\page.tsx",
        'modern coastal luxury. In 2026, the market is characterized by:',
        'modern coastal character. In 2026, the market is characterized by:',
    ),
    (
        r"app\blog\san-clemente-mortgage-guide-2026\page.tsx",
        '<strong>Luxury Coastal Estates:</strong> Areas like Southwest San Clemente and Talega require sophisticated jumbo loan structures.',
        '<strong>Coastal Estates:</strong> Areas like Southwest San Clemente and Talega require sophisticated jumbo loan structures.',
    ),
    (
        r"app\blog\san-clemente-mortgage-guide-2026\page.tsx",
        'Luxury Coastal &amp; Talega Homes',
        'Coastal &amp; Talega Homes',
    ),

    # wholesale-mortgage-broker-92603
    (
        r"app\blog\wholesale-mortgage-broker-92603\page.tsx",
        'Guard-gated luxury enclave with custom estates and golf course.',
        'Guard-gated enclave with custom estates and golf course.',
    ),

    # wholesale-mortgage-broker-92675
    (
        r"app\blog\wholesale-mortgage-broker-92675\page.tsx",
        'newer developments like Marbella and Rancho San Juan offer modern luxury living.',
        'newer developments like Marbella and Rancho San Juan offer modern upscale living.',
    ),

    # reverse-mortgage-rancho-santa-fe-2026
    (
        r"app\blog\reverse-mortgage-rancho-santa-fe-2026\page.tsx",
        '<strong>Specialized appraisers:</strong> Experience with luxury and equestrian properties',
        '<strong>Specialized appraisers:</strong> Experience with high-value and equestrian properties',
    ),

    # reverse-mortgage-calabasas-2026
    (
        r"app\blog\reverse-mortgage-calabasas-2026\page.tsx",
        '<strong>Luxury property expertise:</strong> Appraisers who understand the market',
        '<strong>High-value property expertise:</strong> Appraisers who understand the market',
    ),

    # reverse-mortgage-california-guide-2026
    (
        r"app\blog\reverse-mortgage-california-guide-2026\page.tsx",
        'Beverly Hills, Santa Monica, Pacific Palisades, Malibu. Median: $3.2M. Luxury reverse mortgage solutions for Westside estates.',
        'Beverly Hills, Santa Monica, Pacific Palisades, Malibu. Median: $3.2M. Jumbo reverse mortgage solutions for Westside estates.',
    ),

    # reverse-mortgage-central-coast-communities-2026
    (
        r"app\blog\reverse-mortgage-central-coast-communities-2026\page.tsx",
        'Reverse Mortgage Santa Barbara: High-Value Market Guide',
        'Reverse Mortgage Santa Barbara: High-Value Market Guide',
    ),

    # home-equity-pasadena-corridor-2026 - links to luxury URLs, skip those (URL paths)

    # bank-statement-loans-self-employed-2026
    (
        r"app\blog\bank-statement-loans-self-employed-2026\page.tsx",
        'SFR, Condo, 2-4 units, Luxury',
        'SFR, Condo, 2-4 units, High-Value',
    ),

    # jumbo-loan-requirements-california-washington-2026
    (
        r"app\blog\jumbo-loan-requirements-california-washington-2026\page.tsx",
        'Luxury and unique properties may require appraisers with specific expertise in the local market.',
        'High-value and unique properties may require appraisers with specific expertise in the local market.',
    ),

    # wholesale-mortgage-broker-north-orange-county-2026
    (
        r"app\blog\wholesale-mortgage-broker-north-orange-county-2026\page.tsx",
        'starter condos to luxury hillside estates.',
        'starter condos to hillside estates.',
    ),

    # irvine-mortgage-guide-2026
    (
        r"app\blog\irvine-mortgage-guide-2026\page.tsx",
        'Luxury (Turtle Ridge/Shady Canyon)',
        'High-Value (Turtle Ridge/Shady Canyon)',
    ),

    # aliso-viejo-mortgage-guide-2026
    (
        r"app\blog\aliso-viejo-mortgage-guide-2026\page.tsx",
        'affordable condos starting near $520,000 to luxury single-family residences exceeding $1.6 million.',
        'affordable condos starting near $520,000 to higher-end single-family residences exceeding $1.6 million.',
    ),

    # wholesale-mortgage-broker-south-orange-county-2026 (already partially done, check)
    # reverse-mortgage-sgv-pasadena-guide-2026
    (
        r"app\blog\reverse-mortgage-sgv-pasadena-guide-2026\page.tsx",
        'luxury and historic properties in San Marino, La Ca\xf1ada Flintridge, or South Pasadena may require specialized appraisers familiar with estate-level valuations.',
        'high-value and historic properties in San Marino, La Ca\xf1ada Flintridge, or South Pasadena may require specialized appraisers familiar with estate-level valuations.',
    ),

    # guides/definitive-orange-county-mortgage-guide
    (
        r"app\guides\definitive-orange-county-mortgage-guide\page.tsx",
        '"Luxury property financing"',
        '"High-value property financing"',
    ),

    # guides/orange-county-home-buyer-guide
    (
        r"app\guides\orange-county-home-buyer-guide\page.tsx",
        "description: 'High-value loans for luxury and expensive properties'",
        "description: 'High-value loans for jumbo and high-cost properties'",
    ),
    (
        r"app\guides\orange-county-home-buyer-guide\page.tsx",
        "highlight: 'Coastal luxury, beaches'",
        "highlight: 'Coastal waterfront, beaches'",
    ),

    # guides/orange-county-investment-property
    (
        r"app\guides\orange-county-investment-property\page.tsx",
        '"Luxury market"',
        '"High-value market"',
    ),

    # guides/orange-county-market-forecast-2025-2026
    (
        r"app\guides\orange-county-market-forecast-2025-2026\page.tsx",
        '"Build relationships with luxury agents"',
        '"Build relationships with high-value market agents"',
    ),
    (
        r"app\guides\orange-county-market-forecast-2025-2026\page.tsx",
        '"Luxury demand"',
        '"High-value demand"',
    ),
    (
        r"app\guides\orange-county-market-forecast-2025-2026\page.tsx",
        '"Luxury market volatility"',
        '"High-value market volatility"',
    ),

    # guides/orange-county-school-districts
    (
        r"app\guides\orange-county-school-districts\page.tsx",
        'jumbo loans serve luxury districts like Laguna Beach and Newport Coast',
        'jumbo loans serve high-cost districts like Laguna Beach and Newport Coast',
    ),
    (
        r"app\guides\orange-county-school-districts\page.tsx",
        '"May need jumbo loans for luxury school districts"',
        '"May need jumbo loans for high-cost school districts"',
    ),
    (
        r"app\guides\orange-county-school-districts\page.tsx",
        'For luxury districts like Laguna Beach and Newport Coast',
        'For high-cost districts like Laguna Beach and Newport Coast',
    ),

    # app/jumbo-loans-orange-county/opengraph-image.tsx
    (
        r"app\jumbo-loans-orange-county\opengraph-image.tsx",
        "subtitle: 'High-balance mortgage financing for luxury and high-value properties'",
        "subtitle: 'High-balance mortgage financing for jumbo and high-value properties'",
    ),

    # neighborhood-guide/irvine-vs-newport-beach-home-buying-guide
    (
        r"app\neighborhood-guide\irvine-vs-newport-beach-home-buying-guide\page.tsx",
        "Newport Beach's coastal luxury lifestyle",
        "Newport Beach's coastal waterfront lifestyle",
    ),
    (
        r"app\neighborhood-guide\irvine-vs-newport-beach-home-buying-guide\page.tsx",
        '<strong>Prestige factor:</strong> Recognized luxury address worldwide',
        '<strong>Prestige factor:</strong> Recognized high-value address worldwide',
    ),
    (
        r"app\neighborhood-guide\irvine-vs-newport-beach-home-buying-guide\page.tsx",
        '<strong>Popular Home Types:</strong> Luxury single-family, oceanfront condos, estates',
        '<strong>Popular Home Types:</strong> High-value single-family, oceanfront condos, estates',
    ),
    (
        r"app\neighborhood-guide\irvine-vs-newport-beach-home-buying-guide\page.tsx",
        'Luxury market showing resilience',
        'High-value market showing resilience',
    ),

    # neighborhood-guide/orange-county-neighborhoods-comparison-guide
    (
        r"app\neighborhood-guide\orange-county-neighborhoods-comparison-guide\page.tsx",
        "highlights: ['Luxury lifestyle', 'Oceanfront', 'High-end dining', 'Boating']",
        "highlights: ['Coastal lifestyle', 'Oceanfront', 'High-end dining', 'Boating']",
    ),
    (
        r"app\neighborhood-guide\orange-county-neighborhoods-comparison-guide\page.tsx",
        "highlights: ['Affordable luxury', 'Lake community', 'Top-rated schools', 'Safe']",
        "highlights: ['Upscale living', 'Lake community', 'Top-rated schools', 'Safe']",
    ),
    (
        r"app\neighborhood-guide\orange-county-neighborhoods-comparison-guide\page.tsx",
        '<strong>Newport Beach:</strong> Luxury market showing resilience',
        '<strong>Newport Beach:</strong> High-value market showing resilience',
    ),

    # neighborhood-guide/page.tsx
    (
        r"app\neighborhood-guide\page.tsx",
        "Complete comparison of Orange County's top family-friendly city against luxury coastal living",
        "Complete comparison of Orange County's top family-friendly city against coastal waterfront living",
    ),
    (
        r"app\neighborhood-guide\page.tsx",
        'Family-friendly planned community vs luxury coastal living comparison',
        'Family-friendly planned community vs coastal living comparison',
    ),
    (
        r"app\neighborhood-guide\page.tsx",
        'Luxury coastal living and investment potential analysis',
        'Coastal living and investment potential analysis',
    ),

    # components/seo/TopicClusterLinks.tsx
    (
        r"components\seo\TopicClusterLinks.tsx",
        "description: 'Luxury coastal property financing'",
        "description: 'Coastal high-value property financing'",
    ),

    # va-loans-orange-county
    (
        r"app\va-loans-orange-county\page.tsx",
        'Financing above $1,209,750 for luxury Orange County homes',
        'Financing above $1,209,750 for high-value Orange County homes',
    ),

    # resources/service-providers
    (
        r"app\resources\service-providers\page.tsx",
        "specialties: ['Luxury Homes', 'Newport Beach', 'Irvine']",
        "specialties: ['High-Value Homes', 'Newport Beach', 'Irvine']",
    ),
    (
        r"app\resources\service-providers\page.tsx",
        "specialties: ['Luxury Homes', 'High-Value', 'Coastal Properties']",
        "specialties: ['High-Value Homes', 'High-Value', 'Coastal Properties']",
    ),

    # zip-codes/92602-irvine-mortgage-broker
    (
        r"app\zip-codes\92602-irvine-mortgage-broker\page.tsx",
        'The ZIP code includes both affordable and luxury housing options.',
        'The ZIP code includes both affordable and higher-end housing options.',
    ),

    # areas/anaheim-mortgage-broker (check if any positioning)
]

def apply_replacements(base, targeted):
    counts = {}
    for (rel_path, old, new) in targeted:
        filepath = os.path.join(base, rel_path)
        if not os.path.exists(filepath):
            print(f"  MISSING: {rel_path}")
            continue
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        if old in content:
            new_content = content.replace(old, new, 1)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            counts[rel_path] = counts.get(rel_path, 0) + 1
            print(f"  FIXED [{rel_path}]: {old[:60]!r} -> {new[:60]!r}")
        else:
            print(f"  NOMATCH [{rel_path}]: {old[:60]!r}")
    return counts

if __name__ == '__main__':
    counts = apply_replacements(BASE, TARGETED)
    total = sum(counts.values())
    print(f"\nTotal replacements: {total} across {len(counts)} files")
