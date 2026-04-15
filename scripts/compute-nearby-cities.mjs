#!/usr/bin/env node
/**
 * Emits a JSON map citySlug -> Array<{citySlug, cityName, state}> for the
 * Tier 1 cities, based on region then state fallback.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'lib/city-page-data';
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

const cities = files.map((f) => {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  const extract = (key) => {
    const re = new RegExp(`${key}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`, 'm');
    const m = src.match(re);
    return m ? m[1] : null;
  };
  return {
    citySlug: extract('citySlug'),
    cityName: extract('cityName'),
    state: extract('state'),
    region: extract('region'),
  };
});

const map = {};
for (const c of cities) {
  const sameRegion = cities.filter((o) => o.citySlug !== c.citySlug && o.region === c.region);
  const sameState = cities.filter((o) => o.citySlug !== c.citySlug && o.state === c.state && o.region !== c.region);
  const picks = [...sameRegion, ...sameState].slice(0, 3);
  map[c.citySlug] = picks.map((p) => ({ citySlug: p.citySlug, cityName: p.cityName, state: p.state }));
}

console.log(JSON.stringify(map, null, 2));
