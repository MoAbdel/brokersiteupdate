import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  APPROVED_SUBMISSION_MODE,
  evaluateIndexingSafety,
  validateIndexingUrls,
} from '../lib/indexing-safety.mjs';

const CURRENT_SHA = 'ed865422d0f7524cc5a426eadc9a63872d236e8e';
const ORANGE_COUNTY_URL =
  'https://www.mothebroker.com/tools/property-tax-estimator/ca/orange-county';

const writeAllowlist = async (urls) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'indexing-safety-'));
  const allowlistPath = path.join(dir, 'allowlist.json');
  await fs.writeFile(allowlistPath, `${JSON.stringify({ urls }, null, 2)}\n`);
  return allowlistPath;
};

const approvedEnv = (allowlistPath, overrides = {}) => ({
  VERCEL_ENV: 'production',
  NODE_ENV: 'production',
  INDEXING_SUBMISSION_MODE: APPROVED_SUBMISSION_MODE,
  ENABLE_INDEXING_SUBMISSIONS: 'true',
  INDEXING_APPROVED_DEPLOY_SHA: CURRENT_SHA,
  INDEXING_URL_ALLOWLIST_FILE: allowlistPath,
  ...overrides,
});

test('postbuild script exits without submission when approval variables are missing', () => {
  const result = spawnSync(process.execPath, ['scripts/submit-indexing-after-build.mjs'], {
    cwd: process.cwd(),
    encoding: 'utf8',
    env: {
      ...process.env,
      VERCEL_ENV: 'production',
      ENABLE_INDEXING_SUBMISSIONS: '',
      INDEXING_APPROVED_DEPLOY_SHA: '',
      INDEXING_SUBMISSION_MODE: '',
    },
  });

  assert.equal(result.status, 0);
  assert.match(result.stdout, /postbuild is report-only/i);
  assert.match(result.stdout, /approval gates missing/i);
  assert.doesNotMatch(result.stdout, /submitted \d+ URLs/i);
});

test('production environment alone does not approve submission', async () => {
  const report = await evaluateIndexingSafety({
    env: { VERCEL_ENV: 'production' },
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.match(report.skipReasons.join('\n'), /ENABLE_INDEXING_SUBMISSIONS is not true/);
});

test('DISABLE_AUTO_INDEXING_ON_PROD=true always blocks submission', async () => {
  const allowlistPath = await writeAllowlist([ORANGE_COUNTY_URL]);
  const report = await evaluateIndexingSafety({
    env: approvedEnv(allowlistPath, { DISABLE_AUTO_INDEXING_ON_PROD: 'true' }),
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.match(report.skipReasons.join('\n'), /DISABLE_AUTO_INDEXING_ON_PROD=true/);
});

test('ENABLE_INDEXING_SUBMISSIONS=true alone does not approve submission', async () => {
  const report = await evaluateIndexingSafety({
    env: {
      VERCEL_ENV: 'production',
      ENABLE_INDEXING_SUBMISSIONS: 'true',
    },
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.match(report.skipReasons.join('\n'), /INDEXING_SUBMISSION_MODE/);
  assert.match(report.skipReasons.join('\n'), /INDEXING_APPROVED_DEPLOY_SHA is missing/);
});

test('INDEXING_APPROVED_DEPLOY_SHA mismatch blocks submission', async () => {
  const allowlistPath = await writeAllowlist([ORANGE_COUNTY_URL]);
  const report = await evaluateIndexingSafety({
    env: approvedEnv(allowlistPath, {
      INDEXING_APPROVED_DEPLOY_SHA: 'deadbeef',
    }),
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.match(report.abortReasons.join('\n'), /does not match current git SHA/);
});

test('missing allowlist blocks submission', async () => {
  const report = await evaluateIndexingSafety({
    env: approvedEnv(path.join(os.tmpdir(), 'missing-indexing-allowlist.json')),
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.match(report.abortReasons.join('\n'), /URL allowlist file is missing/);
});

test('empty allowlist blocks submission', async () => {
  const allowlistPath = await writeAllowlist([]);
  const report = await evaluateIndexingSafety({
    env: approvedEnv(allowlistPath),
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.match(report.abortReasons.join('\n'), /URL allowlist file is empty/);
});

test('allowlist with noindex URL blocks submission', async () => {
  const allowlistPath = await writeAllowlist([
    'https://www.mothebroker.com/tools/property-tax-estimator/ca/los-angeles-county',
  ]);
  const report = await evaluateIndexingSafety({
    env: approvedEnv(allowlistPath),
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.equal(report.rejectedUrlCount, 1);
  assert.match(report.rejectedUrls[0].reasons.join('\n'), /noindex|sitemap/i);
});

test('allowlist with non-mothebroker host blocks submission', async () => {
  const allowlistPath = await writeAllowlist(['https://example.com/not-allowed']);
  const report = await evaluateIndexingSafety({
    env: approvedEnv(allowlistPath),
    currentSha: CURRENT_SHA,
  });

  assert.equal(report.approvedForSubmission, false);
  assert.equal(report.rejectedUrlCount, 1);
  assert.match(report.rejectedUrls[0].reasons.join('\n'), /host must be www\.mothebroker\.com/);
});

test('Orange County allowlist passes validation in dry-run mode', async () => {
  const allowlistPath = await writeAllowlist([ORANGE_COUNTY_URL]);
  let fetchCalled = false;
  const report = await evaluateIndexingSafety({
    env: approvedEnv(allowlistPath),
    currentSha: CURRENT_SHA,
    dryRun: true,
    fetchImpl: async () => {
      fetchCalled = true;
      throw new Error('fetch should not run in dry-run without live validation');
    },
  });

  assert.equal(fetchCalled, false);
  assert.equal(report.approvedForSubmission, false);
  assert.equal(report.eligibleUrlCount, 1);
  assert.equal(report.rejectedUrlCount, 0);
  assert.deepEqual(report.eligibleUrls, [ORANGE_COUNTY_URL]);
});

test('dry-run URL validation does not perform network submission', async () => {
  let fetchCalled = false;
  const validation = await validateIndexingUrls({
    urls: [ORANGE_COUNTY_URL],
    validateLive: false,
    fetchImpl: async () => {
      fetchCalled = true;
      throw new Error('fetch should not run');
    },
  });

  assert.equal(fetchCalled, false);
  assert.equal(validation.eligibleUrlCount, 1);
  assert.equal(validation.rejectedUrlCount, 0);
});
