#!/usr/bin/env node
/**
 * Rank candidate Tier 1 cities by GSC-weighted hybrid score.
 * Score = impressions_for_city_queries * 0.7 + regional_diversity_bonus
 * Guarantees >= 2 WA + 2 IE in the top 10.
 */
import fs from 'node:fs';

const CANDIDATES = [
  // OC mid-tier
  { slug: 'mission-viejo', name: 'Mission Viejo', state: 'CA', region: 'OC' },
  { slug: 'lake-forest', name: 'Lake Forest', state: 'CA', region: 'OC' },
  { slug: 'laguna-hills', name: 'Laguna Hills', state: 'CA', region: 'OC' },
  { slug: 'rancho-santa-margarita', name: 'Rancho Santa Margarita', state: 'CA', region: 'OC' },
  { slug: 'ladera-ranch', name: 'Ladera Ranch', state: 'CA', region: 'OC' },
  { slug: 'anaheim-hills', name: 'Anaheim Hills', state: 'CA', region: 'OC' },
  { slug: 'yorba-linda', name: 'Yorba Linda', state: 'CA', region: 'OC' },
  { slug: 'brea', name: 'Brea', state: 'CA', region: 'OC' },
  { slug: 'fullerton', name: 'Fullerton', state: 'CA', region: 'OC' },
  // Inland Empire
  { slug: 'riverside', name: 'Riverside', state: 'CA', region: 'IE' },
  { slug: 'san-bernardino', name: 'San Bernardino', state: 'CA', region: 'IE' },
  { slug: 'corona', name: 'Corona', state: 'CA', region: 'IE' },
  { slug: 'moreno-valley', name: 'Moreno Valley', state: 'CA', region: 'IE' },
  { slug: 'murrieta', name: 'Murrieta', state: 'CA', region: 'IE' },
  { slug: 'temecula', name: 'Temecula', state: 'CA', region: 'IE' },
  // Sac
  { slug: 'elk-grove', name: 'Elk Grove', state: 'CA', region: 'SAC' },
  { slug: 'roseville', name: 'Roseville', state: 'CA', region: 'SAC' },
  { slug: 'folsom', name: 'Folsom', state: 'CA', region: 'SAC' },
  { slug: 'rancho-cordova', name: 'Rancho Cordova', state: 'CA', region: 'SAC' },
  // Central Valley
  { slug: 'fresno', name: 'Fresno', state: 'CA', region: 'CV' },
  { slug: 'bakersfield', name: 'Bakersfield', state: 'CA', region: 'CV' },
  { slug: 'stockton', name: 'Stockton', state: 'CA', region: 'CV' },
  { slug: 'modesto', name: 'Modesto', state: 'CA', region: 'CV' },
  // SoCal coastal mid-tier
  { slug: 'long-beach', name: 'Long Beach', state: 'CA', region: 'LA' },
  { slug: 'torrance', name: 'Torrance', state: 'CA', region: 'LA' },
  { slug: 'whittier', name: 'Whittier', state: 'CA', region: 'LA' },
  // SD
  { slug: 'chula-vista', name: 'Chula Vista', state: 'CA', region: 'SD' },
  { slug: 'oceanside', name: 'Oceanside', state: 'CA', region: 'SD' },
  { slug: 'escondido', name: 'Escondido', state: 'CA', region: 'SD' },
  { slug: 'carlsbad', name: 'Carlsbad', state: 'CA', region: 'SD' },
  // WA
  { slug: 'tacoma', name: 'Tacoma', state: 'WA', region: 'WA' },
  { slug: 'lakewood-wa', name: 'Lakewood', state: 'WA', region: 'WA' },
  { slug: 'olympia', name: 'Olympia', state: 'WA', region: 'WA' },
  { slug: 'everett', name: 'Everett', state: 'WA', region: 'WA' },
  { slug: 'marysville', name: 'Marysville', state: 'WA', region: 'WA' },
  { slug: 'spokane', name: 'Spokane', state: 'WA', region: 'WA' },
  { slug: 'vancouver-wa', name: 'Vancouver', state: 'WA', region: 'WA' },
  { slug: 'federal-way', name: 'Federal Way', state: 'WA', region: 'WA' },
  { slug: 'kent-wa', name: 'Kent', state: 'WA', region: 'WA' },
  { slug: 'auburn-wa', name: 'Auburn', state: 'WA', region: 'WA' },
];

const data = JSON.parse(fs.readFileSync('reports/gsc-query-performance-20260115_20260415.json', 'utf8'));
const rows = Array.isArray(data) ? data : (data.rows || []);

// For each candidate, sum impressions for queries containing the city name (case-insensitive, word-boundary)
for (const c of CANDIDATES) {
  const needle = c.name.toLowerCase();
  let impressions = 0, clicks = 0, queries = 0;
  for (const row of rows) {
    const q = (row.keys?.[1] || row.query || '').toLowerCase();
    if (!q) continue;
    // word boundary match
    const re = new RegExp(`\\b${needle.replace(/[-/\\^$*+?.()|[\\]{}]/g, '\\$&')}\\b`);
    if (re.test(q)) {
      impressions += row.impressions || 0;
      clicks += row.clicks || 0;
      queries += 1;
    }
  }
  c.impressions = impressions;
  c.clicks = clicks;
  c.queries = queries;
}

// Hybrid score: 70% GSC impressions, 30% regional diversity bonus
const maxImp = Math.max(...CANDIDATES.map((c) => c.impressions)) || 1;
for (const c of CANDIDATES) {
  const gscScore = (c.impressions / maxImp) * 70;
  // Regional diversity bonus: WA/IE get +20; Sac/CV/SD/LA get +10; OC gets 0
  let regionBonus = 0;
  if (c.region === 'WA' || c.region === 'IE') regionBonus = 20;
  else if (c.region !== 'OC') regionBonus = 10;
  c.score = gscScore + regionBonus * 0.3;
}

CANDIDATES.sort((a, b) => b.score - a.score);

// Print top 20
console.log('Top 20 candidates (hybrid score):');
console.log('rank | slug                        | state | region | queries | impressions | clicks | score');
console.log('-----|-----------------------------|-------|--------|---------|-------------|--------|------');
CANDIDATES.slice(0, 20).forEach((c, i) => {
  console.log(`${String(i + 1).padStart(4)} | ${c.slug.padEnd(27)} | ${c.state.padEnd(5)} | ${c.region.padEnd(6)} | ${String(c.queries).padStart(7)} | ${String(c.impressions).padStart(11)} | ${String(c.clicks).padStart(6)} | ${c.score.toFixed(1)}`);
});

// Enforce constraints: >=2 WA and >=2 IE in top 10
const top10 = CANDIDATES.slice(0, 10);
const waCount = top10.filter((c) => c.state === 'WA').length;
const ieCount = top10.filter((c) => c.region === 'IE').length;
console.log(`\nTop-10 WA count: ${waCount} (need >=2)`);
console.log(`Top-10 IE count: ${ieCount} (need >=2)`);

if (waCount < 2 || ieCount < 2) {
  console.log('\nConstraint not satisfied — backfilling with highest-score WA/IE below top 10:');
  const result = [...top10];
  const need = [];
  if (waCount < 2) need.push({ state: 'WA', count: 2 - waCount });
  if (ieCount < 2) need.push({ region: 'IE', count: 2 - ieCount });
  for (const req of need) {
    const pool = CANDIDATES.filter((c) => !result.includes(c) && (req.state ? c.state === req.state : c.region === req.region));
    for (let i = 0; i < req.count && i < pool.length; i++) {
      // Swap out the lowest-score OC candidate (or lowest non-protected)
      const swapIdx = result.map((c, idx) => ({ c, idx })).filter((o) => o.c.state !== 'WA' && o.c.region !== 'IE').sort((a, b) => a.c.score - b.c.score)[0]?.idx;
      if (swapIdx !== undefined) result[swapIdx] = pool[i];
    }
  }
  result.sort((a, b) => b.score - a.score);
  console.log('\nFinal Tier 1 (constraint-adjusted):');
  result.forEach((c, i) => console.log(`  ${i + 1}. ${c.slug} (${c.state}/${c.region}) — impressions ${c.impressions}, clicks ${c.clicks}`));
} else {
  console.log('\nFinal Tier 1 (no adjustment needed):');
  top10.forEach((c, i) => console.log(`  ${i + 1}. ${c.slug} (${c.state}/${c.region}) — impressions ${c.impressions}, clicks ${c.clicks}`));
}
