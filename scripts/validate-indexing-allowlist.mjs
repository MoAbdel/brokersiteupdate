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

  if (report.rejectedUrlCount > 0 || report.abortReasons.length > 0) {
    console.error('\nIndexing allowlist validation failed. Zero URLs submitted.');
    process.exit(1);
  }

  console.log('\nIndexing allowlist validation passed. Zero URLs submitted.');
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
