#!/usr/bin/env node

import {
  evaluateIndexingSafety,
  logIndexingSafetyReport,
} from './lib/indexing-safety.mjs';

const run = async () => {
  const report = await evaluateIndexingSafety({
    dryRun: true,
    validateLive: process.env.INDEXING_VALIDATE_LIVE === 'true',
  });

  logIndexingSafetyReport(report);
  console.log('\nDry-run complete. Zero URLs submitted.');
  if (report.eligibleUrls.length) {
    console.log(`Prepared URLs: ${report.eligibleUrls.length}`);
    for (const url of report.eligibleUrls) {
      console.log(`- ${url}`);
    }
  }

  if (report.rejectedUrlCount > 0 || report.abortReasons.length > 0) {
    process.exitCode = 1;
  }
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
