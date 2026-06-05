#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import {
  evaluateIndexingSafety,
  logIndexingSafetyReport,
} from './lib/indexing-safety.mjs';

const BING_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';
const SITE_URL = 'https://www.mothebroker.com';
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);
const MAX_RETRIES = Number(process.env.SEO_RETRY_ATTEMPTS || 3);
const BASE_DELAY_MS = Number(process.env.SEO_RETRY_BASE_DELAY_MS || 1000);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const writeSubmissionReport = async (payload) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(process.cwd(), 'reports', `bing-submission-response-${timestamp}.json`);
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, `${JSON.stringify(payload, null, 2)}\n`);
  return reportPath;
};

const submitToBing = async ({ apiKey, urls, fetchImpl = globalThis.fetch }) => {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const response = await fetchImpl(
      `${BING_API_BASE}/SubmitUrlbatch?apikey=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteUrl: SITE_URL,
          urlList: urls,
        }),
      }
    );
    const responseText = await response.text();
    if (response.ok) {
      return {
        service: 'Bing SubmitUrlbatch',
        status: response.status,
        submittedUrlCount: urls.length,
        responseText,
      };
    }
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_RETRIES) {
      throw new Error(`Bing submission failed (${response.status}): ${responseText}`);
    }
    const delay = BASE_DELAY_MS * Math.pow(2, attempt);
    console.warn(`Retrying Bing allowlist batch in ${delay}ms (${response.status})...`);
    await sleep(delay);
  }

  throw new Error('Bing submission ended without a response.');
};

const run = async () => {
  const report = await evaluateIndexingSafety({
    dryRun: process.env.INDEXING_DRY_RUN === 'true',
    validateLive: process.env.INDEXING_VALIDATE_LIVE !== 'false',
  });
  logIndexingSafetyReport(report);

  if (!report.approvedForSubmission) {
    console.error('\nBing URL submission blocked. Zero URLs submitted.');
    process.exit(1);
  }

  const apiKey = process.env.BING_API_KEY || process.env.BING_WEBMASTER_API_KEY;
  if (!apiKey) {
    console.error('Bing URL submission blocked: missing BING_API_KEY/BING_WEBMASTER_API_KEY.');
    process.exit(1);
  }

  const response = await submitToBing({ apiKey, urls: report.eligibleUrls });
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
    response,
  });

  console.log(`\nApproved Bing submission complete: ${response.submittedUrlCount} URL(s).`);
  console.log(`Submission response saved to ${reportPath}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
