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
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const writeSubmissionReport = async (payload) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(process.cwd(), 'reports', `gsc-indexing-response-${timestamp}.json`);
  await fsPromises.mkdir(path.dirname(reportPath), { recursive: true });
  await fsPromises.writeFile(reportPath, `${JSON.stringify(payload, null, 2)}\n`);
  return reportPath;
};

const submitUrl = async ({ auth, url, fetchImpl = globalThis.fetch }) => {
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const response = await fetchImpl('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        type: 'URL_UPDATED',
      }),
    });
    const result = await response.text();
    if (response.ok) {
      return { url, status: response.status, result };
    }
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
      return { url, status: response.status, result };
    }
    const delay = BASE_DELAY_MS * Math.pow(2, attempt);
    await sleep(delay);
  }

  return { url, status: 'error', result: 'submission ended without a response' };
};

const run = async () => {
  const report = await evaluateIndexingSafety({
    dryRun: process.env.INDEXING_DRY_RUN === 'true',
    validateLive: process.env.INDEXING_VALIDATE_LIVE !== 'false',
  });
  logIndexingSafetyReport(report);

  if (!report.approvedForSubmission) {
    console.error('\nGSC indexing submission blocked. Zero URLs submitted.');
    process.exit(1);
  }

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('GSC indexing submission blocked: gsc-credentials.json not found.');
    process.exit(1);
  }

  const auth = new GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const results = [];
  for (const url of report.eligibleUrls) {
    results.push(await submitUrl({ auth, url }));
  }
  report.networkSubmissionPerformed = true;

  const reportPath = await writeSubmissionReport({
    timestamp: new Date().toISOString(),
    safety: {
      mode: report.mode,
      deploySha: report.deploySha,
      approvalSha: report.approvalSha,
      allowlistFile: report.allowlistFile,
      submittedUrlCount: report.eligibleUrlCount,
    },
    results,
  });

  console.log(`\nApproved GSC indexing submission complete: ${results.length} URL(s).`);
  console.log(`Submission response saved to ${reportPath}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
