#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import {
  evaluateIndexingSafety,
  logIndexingSafetyReport,
} from './lib/indexing-safety.mjs';
import { submitIndexNowAllowlist } from './lib/indexnow-submit.mjs';

const writeSubmissionReport = async (payload) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(process.cwd(), 'reports', `indexing-submission-response-${timestamp}.json`);
  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, `${JSON.stringify(payload, null, 2)}\n`);
  return reportPath;
};

const run = async () => {
  const report = await evaluateIndexingSafety({
    dryRun: process.env.INDEXING_DRY_RUN === 'true',
    validateLive: process.env.INDEXING_VALIDATE_LIVE !== 'false',
  });

  logIndexingSafetyReport(report);

  if (!report.approvedForSubmission) {
    console.error('\nIndexing submission blocked. Zero URLs submitted.');
    process.exit(1);
  }

  const response = await submitIndexNowAllowlist({
    urls: report.eligibleUrls,
  });
  report.networkSubmissionPerformed = true;

  const output = {
    timestamp: new Date().toISOString(),
    safety: {
      mode: report.mode,
      deploySha: report.deploySha,
      approvalSha: report.approvalSha,
      allowlistFile: report.allowlistFile,
      submittedUrlCount: report.eligibleUrlCount,
      rejectedUrlCount: report.rejectedUrlCount,
    },
    response,
  };
  const reportPath = await writeSubmissionReport(output);

  console.log(`\nApproved IndexNow submission complete: ${response.submittedUrlCount} URL(s).`);
  console.log(`Submission response saved to ${reportPath}`);
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
