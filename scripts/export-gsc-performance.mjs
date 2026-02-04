#!/usr/bin/env node
/**
 * Export GSC performance by page (Search Analytics API).
 * Outputs JSON + CSV to ./reports.
 */

import fs from 'node:fs/promises';
import { GoogleAuth } from 'google-auth-library';

const CREDENTIALS_PATH = './gsc-credentials.json';
const DEFAULT_SITE_URL = 'sc-domain:mothebroker.com';
const DEFAULT_DAYS = 90;
const DEFAULT_ROW_LIMIT = 25000;

const formatDate = (date) => date.toISOString().slice(0, 10);

const getDateRange = () => {
  const endDate = process.env.GSC_END_DATE
    ? new Date(process.env.GSC_END_DATE)
    : new Date();
  const startDate = process.env.GSC_START_DATE
    ? new Date(process.env.GSC_START_DATE)
    : new Date(endDate.getTime());

  if (!process.env.GSC_START_DATE) {
    startDate.setDate(startDate.getDate() - DEFAULT_DAYS);
  }

  return { startDate: formatDate(startDate), endDate: formatDate(endDate) };
};

const escapeCsv = (value) => {
  if (value === null || value === undefined) return '';
  const stringValue = String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
};

const run = async () => {
  console.log('GSC Performance Export');
  console.log('======================\n');

  try {
    await fs.access(CREDENTIALS_PATH);
  } catch {
    console.error('ERROR: gsc-credentials.json not found.');
    console.error('Add a Google service account JSON to the repo root.');
    process.exit(1);
  }

  const siteUrl = process.env.GSC_SITE_URL || DEFAULT_SITE_URL;
  const rowLimit = Number(process.env.GSC_ROW_LIMIT || DEFAULT_ROW_LIMIT);
  const { startDate, endDate } = getDateRange();

  console.log(`Site: ${siteUrl}`);
  console.log(`Date range: ${startDate} → ${endDate}`);
  console.log(`Row limit per request: ${rowLimit}\n`);

  const auth = new GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  const rows = [];
  let startRow = 0;
  let fetched = 0;

  while (true) {
    const response = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ['page'],
          rowLimit,
          startRow
        })
      }
    );

    const payload = await response.json();
    if (!response.ok) {
      const message = payload?.error?.message || JSON.stringify(payload);
      throw new Error(`GSC API error (${response.status}): ${message}`);
    }

    const batch = payload.rows || [];
    rows.push(...batch);
    fetched += batch.length;
    console.log(`Fetched ${fetched} rows...`);

    if (batch.length < rowLimit) {
      break;
    }
    startRow += rowLimit;
  }

  await fs.mkdir('reports', { recursive: true });
  const fileSuffix = `${startDate.replace(/-/g, '')}_${endDate.replace(/-/g, '')}`;
  const jsonPath = `reports/gsc-performance-${fileSuffix}.json`;
  const csvPath = `reports/gsc-performance-${fileSuffix}.csv`;

  await fs.writeFile(jsonPath, JSON.stringify(rows, null, 2), 'utf8');

  const csvLines = ['page,clicks,impressions,ctr,position'];
  rows.forEach((row) => {
    const page = row.keys?.[0] || '';
    csvLines.push(
      [
        escapeCsv(page),
        row.clicks ?? 0,
        row.impressions ?? 0,
        row.ctr ?? 0,
        row.position ?? 0
      ].join(',')
    );
  });

  await fs.writeFile(csvPath, csvLines.join('\n'), 'utf8');

  console.log('\nExport complete');
  console.log(`Rows: ${rows.length}`);
  console.log(`JSON: ${jsonPath}`);
  console.log(`CSV:  ${csvPath}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
