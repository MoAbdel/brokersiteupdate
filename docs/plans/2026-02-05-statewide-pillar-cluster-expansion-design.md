# Statewide Pillar/Cluster Expansion Design

**Date:** 2026-02-05
**Status:** Approved
**Scope:** Expand blog generator skill from SoCal + WA Eastside to top 50% wealthiest cities (by median home value) across ALL of California and ALL of Washington.

---

## Architecture: 3-Tier Hierarchy

```
State Pillar (1 per track per state)
  └─ Regional Pillar (1 per major region per track)
       └─ Hub Posts (5-10 cities grouped by geography)
```

### Content Tracks (3 — All Statewide)
1. **HECM (Reverse Mortgage)** — Seniors 62+, all regions
2. **Home Equity** — HELOC, HELOAN, Cash-Out for all homeowners, all regions
3. **Wholesale Mortgage Broker** — 6 CA metro areas + 2 WA metro areas

### Wealth Threshold
- **California:** Cities with median home value > $792K (state median)
- **Washington:** Cities with median home value > $604K (state median)

---

## Regional Hub Map

### California (13 Regions, 20 Hubs)

| # | Region | Hubs | Cities | Tracks |
|---|--------|------|--------|--------|
| 1 | **Bay Area - Peninsula/Silicon Valley** | 3 | Hub A: Atherton, Hillsborough, Woodside, Portola Valley, Los Altos Hills. Hub B: Palo Alto, Los Altos, Saratoga, Los Gatos, Cupertino. Hub C: Mountain View, Sunnyvale, San Jose, Santa Clara, Campbell | HECM + Equity + Wholesale |
| 2 | **Bay Area - Marin** | 2 | Hub A: Ross, Tiburon, Belvedere, Mill Valley. Hub B: Sausalito, Corte Madera, Larkspur, San Anselmo, Novato | HECM + Equity + Wholesale |
| 3 | **Bay Area - East Bay/SF** | 2 | Hub A: San Francisco, Piedmont, Orinda, Lafayette, Moraga. Hub B: Danville, Walnut Creek, Pleasanton, Dublin, Fremont | HECM + Equity + Wholesale |
| 4 | **LA - Westside/Beach** | 2 | Hub A: Manhattan Beach, Hermosa Beach, Redondo Beach, El Segundo. Hub B: Culver City, Playa del Rey, Marina del Rey, Westchester | HECM + Equity + Wholesale |
| 5 | **LA - SGV/Pasadena** | 2 | Hub A: La Canada Flintridge, South Pasadena, San Marino, Arcadia. Hub B: Pasadena, Sierra Madre, Glendale, Montrose, La Crescenta | HECM + Equity + Wholesale |
| 6 | **LA - South Bay/PV** | 2 | Hub A: Palos Verdes Estates, Rancho PV, Rolling Hills, Rolling Hills Estates. Hub B: Hidden Hills, Calabasas, Agoura Hills, Westlake Village | HECM + Equity + Wholesale |
| 7 | **Orange County** | — | *Already covered by existing 150+ posts* | *Existing* |
| 8 | **San Diego** | 2 | Hub A: Del Mar, Rancho Santa Fe, Solana Beach, Encinitas. Hub B: La Jolla, Coronado, Carlsbad, Poway | HECM + Equity + Wholesale |
| 9 | **Central Coast** | 2 | Hub A: Montecito, Santa Barbara, Carpinteria. Hub B: San Luis Obispo, Pismo Beach, Paso Robles, Cambria | HECM + Equity |
| 10 | **Ventura County** | 1 | Westlake Village, Thousand Oaks, Oak Park, Camarillo, Moorpark | HECM + Equity |
| 11 | **Wine Country** | 1 | Healdsburg, St. Helena, Calistoga, Sonoma, Napa, Yountville | HECM + Equity |
| 12 | **Sacramento/Gold Country** | 1 | El Dorado Hills, Granite Bay, Folsom, Roseville, Davis | HECM + Equity |
| 13 | **Inland Empire** | 1 | Rancho Cucamonga/Alta Loma, Chino Hills, Claremont, Redlands, Upland | HECM + Equity |

### Washington (4 Regions, 7 Hubs)

| # | Region | Hubs | Cities | Tracks |
|---|--------|------|--------|--------|
| 1 | **Seattle Eastside** | 3 | Hub A: Medina, Clyde Hill, Hunts Point, Yarrow Point, Beaux Arts. Hub B: Bellevue, Mercer Island, Sammamish, Newcastle. Hub C: Kirkland, Redmond, Woodinville, Issaquah, Bothell | HECM + Equity + Wholesale |
| 2 | **Greater Seattle** | 2 | Hub A: Seattle (Capitol Hill, Queen Anne, Magnolia, Madison Park), Bainbridge Island. Hub B: Shoreline, Lake Forest Park, Kenmore, Snoqualmie | HECM + Equity + Wholesale |
| 3 | **North Sound/Islands** | 1 | Bellingham, Anacortes, San Juan Island, Friday Harbor, Mukilteo, Edmonds | HECM + Equity |
| 4 | **South Sound** | 1 | Gig Harbor, Maple Valley, University Place, Bonney Lake, Steilacoom | HECM + Equity |

---

## Content Volume

| Content Type | CA | WA | Total |
|-------------|----|----|-------|
| State-level pillars (update existing + create new) | 3 | 3 | 6 |
| Regional pillars (NEW) | ~30 | ~10 | ~40 |
| Hub posts (NEW) | ~60 | ~14 | ~74 |
| **Total new pages** | **~90** | **~24** | **~114** |

---

## Hub Post Template (4,500-5,500 words)

**Composition:** 50% structured (tables, lists, schema) / 50% prose

### Structure

```
1. Citation Hook                          50-75 words
   → Speakable schema
   → Entity-attributed opening ("According to Mo Abdel, NMLS #1426884...")
   → 1 regional data point
   → Primary keyword

2. Bing Power Block                       900-1,100 words
   → H1: "[Product] in [Region], CA: [City1], [City2] & More [2026]"
   → MEGA TABLE: Region Overview (City | Median Value | Avg Equity | Top Neighborhoods)
   → TABLE: Product Comparison (Product | Best For | LTV | Term | Key Benefit)
   → Numbered qualification steps (5-7)
   → Numbered process steps (5-7)
   → Keyword density 1.5-2%

3. City-by-City Deep Dives                1,800-2,200 words
   → H2 per city (5-10 cities, 250-350 words each)
   → Each city section:
     - H2: "[Product] in [City]: [Unique Angle]"
     - Borrower persona + market context (50w)
     - Mini-table: City snapshot (median, YoY, DOM, income)
     - 3-5 neighborhoods with price tiers (100w)
     - Unique scenario/use case (75w)
     - E-E-A-T marker: "In our [City] closings..." (25w)
     - Internal link to related hub or guide

4. Google E-E-A-T Narrative               600-800 words
   → H2: "Why [Region] Homeowners Choose a Broker Over Banks"
   → H2: "How [Region] Market Conditions Affect [Product]"
   → Experience markers every 250 words
   → 2-3 external .gov links (HUD, CFPB, FHFA)
   → 5-8 internal links (pillars + sibling hubs)

5. Data & Comparison Hub                  400-500 words
   → TABLE: Regional Price Trends (City | 2024 | 2025 | 2026 | YoY Change)
   → TABLE: Loan Program Fit by Price Tier

6. People Also Ask                        400-500 words (6-8 questions)
   → Region-specific PAA queries
   → ≤29 word voice answers + 50-75 word expansion
   → Mix: Definition, Process, Comparison, Cost, Eligibility, Timing

7. Extended FAQ                           400-500 words (10-12 questions)
   → City-specific FAQ mix (2-3 per major city)
   → FAQPage schema
   → Natural language

8. Expert Summary + CTA                   150-200 words
   → Mo Abdel attribution + NMLS #1426884
   → Regional service statement
   → Speakable schema
   → Phone CTA: (949) 822-9662
─────────────────────────────────────────────────────
TOTAL                                     4,500-5,500 words
```

### Tables Per Hub Post: 4-5 Full + 5-10 Inline

| Table | Purpose | Rows |
|-------|---------|------|
| Region Overview Mega-Table | All cities at a glance | 5-10 |
| Product Comparison | Loan options side-by-side | 4-6 |
| City Snapshot (inline per city) | Quick data | 4-5 fields each |
| Regional Price Trends | Historical data | 5-10 |
| Loan Program Fit by Tier | Product-city matching | 3-4 tiers |

### Schema Stack Per Hub Post: 7 Types

| Schema | Purpose |
|--------|---------|
| Article | Core content markup with author/publisher |
| FAQPage | 10-12 FAQ questions |
| LocalBusiness (array) | One per city mentioned |
| Speakable | Citation hook + expert summary + PAA answers |
| BreadcrumbList | State > Region > Hub (4-level) |
| ItemList | City comparison structured data |
| Table | Comparison table markup |

---

## Regional Pillar Template (5,500-6,500 words)

```
H1: "[Product] Guide for [Region], California [2026]"

1. Citation Hook (75-100w)
2. Bing Power Block (1,000-1,200w)
   → Master comparison table: ALL cities in region
   → Product overview with regional context
   → Numbered steps (7-10)
3. Regional Market Overview (800-1,000w)
   → Economic drivers, employment, demographics
   → Why this region is unique for [product]
   → Market trends specific to region
4. Hub Previews (1,200-1,500w)
   → H2 per sub-region hub with 200w summary + link
   → "Read our complete [Sub-Region] guide →"
5. E-E-A-T Deep Dive (600-800w)
   → Mo's experience in this specific region
   → Case studies / scenarios
6. Comprehensive FAQ (600-800w, 12-15 questions)
7. Expert Summary + CTA (200-250w)

Internal links OUT: All hub posts in region (5-10)
Internal links UP: State-level pillar page
Internal links ACROSS: Other regional pillars (same track)
Internal links ACROSS: Other track pillars (same region)
```

---

## Internal Linking Matrix

```
State Pillar ←→ State Pillar (cross-track)
     ↕
Regional Pillar ←→ Regional Pillar (cross-track, same region)
     ↕                ←→ Regional Pillar (same track, adjacent region)
Hub Post ←→ Hub Post (cross-track, same region)
     ↕          ←→ Hub Post (same track, adjacent sub-region)
Existing OC content (bridge links from new hubs)
```

**Minimum 8 internal links per new page:**
1. Up to regional pillar
2. Up to state pillar
3-4. Sibling hubs (same track)
5-6. Cross-track hubs (same region)
7-8. Existing OC content or related guides

---

## Bing Optimization Enhancements

- **4-5 full tables per hub** (vs 1-2 currently)
- **No collapsed/accordion content** — everything visible on page load
- **Keyword density 1.5-2%** for primary term
- **copyrightHolder: "Lumin Lending"** in all schema
- **Exact-match keyword** in H1 (front-loaded)
- **Exact-match keyword** in first 50 words
- **3+ H2 headings** with exact-match keyword
- **2+ numbered lists** (5+ items each)
- **No JavaScript-dependent content**

## Google Optimization Enhancements

- **E-E-A-T markers every 250 words** (tightened from 300)
- **Natural language H2s** as questions
- **2-3 external .gov links** per post
- **8+ internal links** per post (up from 5-8)
- **FAQPage schema** with 10-12 questions
- **Full author credentials** visible on page
- **Semantic keyword variations** used naturally
- **Freshness signals** — "Updated [Month] 2026" in citation hook

## Duplicate Content Prevention

- Each city within a hub has a **mandatory unique angle** from city-topic-matrix
- Hub-level differentiation: each hub has a distinct regional borrower persona
- **No two hubs share more than 30% boilerplate**
- Quality gate: if <4 similarity checks pass, BLOCK generation

---

## Skill Files to Modify

| File | Change | Priority |
|------|--------|----------|
| **SKILL.md** | Major rewrite — new 3-tier architecture, generation commands, batch algorithm | P0 |
| **city-topic-matrix.md** | Add ~130 new cities with unique angles, personas, neighborhoods, medians | P0 |
| **geo-templates.md** | Replace city template with hub template (4,500-5,500w) | P0 |
| **schema-templates.json** | Add ItemList, Table, multi-LocalBusiness, 4-level BreadcrumbList | P0 |
| **seo-aio-aeo-geo-guidelines.md** | Tighten E-E-A-T to 250w, add Bing table requirements, hub duplicate rules | P0 |
| **NEW: regional-hub-map.md** | Master reference of all 37 hubs, cities, tracks, generation status | P0 |
| **NEW: regional-pillar-templates.md** | 5,500-6,500 word pillar template | P1 |

---

## Implementation Phases

### Phase 1: Skill Infrastructure
- Update all skill files listed above
- Create new reference files
- Test generation with 1 sample hub post

### Phase 2: State Pillars (6 pages)
- Update 3 existing CA pillars to reference new regional structure
- Create 3 WA state-level pillars (HECM, Equity, Wholesale)

### Phase 3: Regional Pillars — High Priority (12-15 pages)
- Bay Area Peninsula/SV (3 tracks)
- LA Westside/Beach (3 tracks)
- Seattle Eastside (3 tracks)
- San Diego (3 tracks)

### Phase 4: Hub Posts — Wave 1 (20-25 pages)
- Bay Area Peninsula/SV hubs (3 hubs × 3 tracks = 9)
- LA Beach Cities + South Bay hubs (4 hubs × 3 tracks = 12)
- Seattle Eastside hubs (3 hubs × 2 priority tracks = 6)

### Phase 5: Regional Pillars — Remaining (~25 pages)
- All remaining regional pillars across both states

### Phase 6: Hub Posts — Wave 2 (remaining ~50 pages)
- All remaining hub posts by priority order

### Post-Generation (after each phase)
1. Add entries to `lib/all-blog-posts.ts`
2. Update `public/sitemap.xml`
3. Git commit + push
4. IndexNow submission for Bing
5. GSC URL submission

---

## Generation Priority Order

When generating N posts, allocate by tier:

```
Tier 0: State pillars (max 6)
Tier 1: Regional pillars (highest-value regions first)
Tier 2: Hub posts (by region priority, round-robin tracks)

Region priority:
1. Bay Area Peninsula/SV ($1.3M-$10.8M median range)
2. LA Westside/Beach + South Bay/PV
3. Bay Area Marin + East Bay/SF
4. Seattle Eastside
5. San Diego
6. LA SGV/Pasadena
7. Greater Seattle
8. Central Coast
9. Ventura County
10. Wine Country
11. Sacramento/Gold Country
12. Inland Empire
13. North Sound/Islands (WA)
14. South Sound (WA)
```

---

## Wholesale Track Metro Scope

Wholesale content limited to major metros where broker presence is credible:

**California (6 metros):**
1. Orange County (existing)
2. Bay Area (Peninsula/SV + Marin + East Bay)
3. LA County (Westside + SGV + South Bay)
4. San Diego
5. Ventura County (bundled with LA South Bay Hub B)
6. Sacramento (if volume warrants)

**Washington (2 metros):**
1. Seattle Eastside
2. Greater Seattle

---

## Success Metrics

| Metric | Target |
|--------|--------|
| New pages created | ~114 |
| Cities covered (CA) | ~160 (up from ~30) |
| Cities covered (WA) | ~40 (up from ~8) |
| Tables per hub post | 4-5 full + 5-10 inline |
| Schema types per post | 7 |
| Internal links per post | 8+ |
| Bing indexing | <48 hours via IndexNow |
| Google indexing | <14 days via GSC submission |
| Zero "Crawled not indexed" | Duplicate prevention gates enforced |
