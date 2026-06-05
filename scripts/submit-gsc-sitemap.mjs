#!/usr/bin/env node

import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { GoogleAuth } from 'google-auth-library';
import {
  evaluateIndexingSafety,
  logIndexingSafetyReport,
} from './lib/indexing-safety.mjs';

const CREDENTIALS_PATH = './gsc-credentials.json';
const SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:mothebroker.com';
const SITEMAP_URL = process.env.GSC_SITEMAP_URL || 'https://www.mothebroker.com/sitemap.xml';
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const writeSubmissionReport = async (payload) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(process.cwd(), 'reports', `gsc-sitemap-response-${timestamp}.json`);
  await fsPromises.mkdir(path.dirname(reportPath), { recursive: true });
  await fsPromises.writeFile(reportPath, `${JSON.stringify(payload, null, 2)}\n`);
  return reportPath;
};

const submitWithRetry = async (endpoint, token) => {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const text = await response.text();
    if (response.ok) {
      return { status: response.status, responseText: text };
    }
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
      throw new Error(`GSC sitemap submit failed (${response.status}): ${text}`);
    }
    const delay = BASE_DELAY_MS * Math.pow(2, attempt);
    console.warn(`Retrying GSC sitemap submit in ${delay}ms (${response.status})...`);
    await sleep(delay);
  }

  throw new Error('GSC sitemap submission ended without a response.');
};

const run = async () => {
  const report = await evaluateIndexingSafety({
    dryRun: process.env.INDEXING_DRY_RUN === 'true',
    validateLive: process.env.INDEXING_VALIDATE_LIVE !== 'false',
  });
  logIndexingSafetyReport(report);

  if (process.env.ENABLE_GSC_SITEMAP_SUBMIT !== 'true') {
    console.error('\nGSC sitemap submission blocked: ENABLE_GSC_SITEMAP_SUBMIT is not true.');
    process.exit(1);
  }

  if (!report.approvedForSubmission) {
    console.error('\nGSC sitemap submission blocked. Approval gates failed.');
    process.exit(1);
  }

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('GSC sitemap submission blocked: gsc-credentials.json not found.');
    process.exit(1);
  }

  const auth = new GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  const endpoint =
    'https://www.googleapis.com/webmasters/v3/sites/' +
    encodeURIComponent(SITE_URL) +
    '/sitemaps/' +
    encodeURIComponent(SITEMAP_URL);

  const response = await submitWithRetry(endpoint, accessToken.token);
  report.networkSubmissionPerformed = true;
  const reportPath = await writeSubmissionReport({
    timestamp: new Date().toISOString(),
    safety: {
      mode: report.mode,
      deploySha: report.deploySha,
      approvalSha: report.approvalSha,
      allowlistFile: report.allowlistFile,
      validatedUrlCount: report.eligibleUrlCount,
    },
    sitemap: SITEMAP_URL,
    response,
  });

  console.log('\nApproved GSC sitemap submission complete.');
  console.log(`Submission response saved to ${reportPath}`);
};

run().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
