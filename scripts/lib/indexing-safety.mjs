import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const routePolicy = require('../../lib/seo-route-policy.js');

export const INDEXING_SITE_HOST = 'www.mothebroker.com';
export const INDEXING_SITE_ORIGIN = `https://${INDEXING_SITE_HOST}`;
export const APPROVED_SUBMISSION_MODE = 'manual-approved';
export const DEFAULT_ALLOWLIST_FILE = path.join(
  process.cwd(),
  'reports',
  'indexing-allowlist-2026-06-05.json'
);

const INTERNAL_PATH_PATTERN = /^\/(?:api|admin|dashboard|internal|_next)(?:\/|$)/i;
const LOCALIZED_PROPERTY_TAX_PATTERN =
  /^\/tools\/property-tax-estimator\/[^/]+\/[^/]+(?:\/[^/]+)?$/i;

const normalizeBoolean = (value) => value === true || value === 'true';

export const getCurrentGitSha = () => {
  const envSha =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.COMMIT_SHA ||
    process.env.npm_package_gitHead;

  if (envSha) {
    return envSha.trim();
  }

  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
};

export const shortSha = (sha) => (sha ? sha.slice(0, 7) : null);

export const getAllowlistPath = (env = process.env) =>
  env.INDEXING_URL_ALLOWLIST_FILE
    ? path.resolve(process.cwd(), env.INDEXING_URL_ALLOWLIST_FILE)
    : DEFAULT_ALLOWLIST_FILE;

const normalizeUrl = (value) => {
  try {
    const url = new URL(value);
    url.hash = '';
    url.search = '';
    return url.toString();
  } catch {
    return null;
  }
};

export const readSitemapUrlSet = async (
  sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml')
) => {
  const xml = await fs.readFile(sitemapPath, 'utf8');
  const urls = new Set();
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match = regex.exec(xml);
  while (match) {
    const normalized = normalizeUrl(match[1]);
    if (normalized) urls.add(normalized);
    match = regex.exec(xml);
  }
  return urls;
};

export const readUrlAllowlist = async (allowlistPath = getAllowlistPath()) => {
  const raw = await fs.readFile(allowlistPath, 'utf8');
  const json = JSON.parse(raw);
  const urls = Array.isArray(json)
    ? json
    : json.urls || json.urlList || json.allowedUrls || [];

  if (!Array.isArray(urls)) {
    throw new Error('URL allowlist must be an array or contain a urls array.');
  }

  return {
    metadata: Array.isArray(json) ? {} : json,
    urls,
  };
};

const validateLiveUrl = async ({ url, fetchImpl = globalThis.fetch }) => {
  if (typeof fetchImpl !== 'function') {
    return ['live validation requested but fetch is unavailable'];
  }

  const response = await fetchImpl(url, {
    method: 'GET',
    redirect: 'manual',
    headers: {
      'User-Agent': 'mothebroker-indexing-safety-validator/1.0',
    },
  });

  const reasons = [];
  if (response.status !== 200) {
    reasons.push(`live status is ${response.status}, expected 200`);
  }

  if (response.status >= 300 && response.status < 400) {
    reasons.push('live response is a redirect');
  }

  const xRobotsTag = response.headers.get('x-robots-tag') || '';
  if (/noindex/i.test(xRobotsTag)) {
    reasons.push('live X-Robots-Tag contains noindex');
  }

  const html = await response.text();
  const metaRobots = html.match(
    /<meta[^>]+name=["'](?:robots|googlebot)["'][^>]+content=["']([^"']+)["'][^>]*>/i
  );
  if (metaRobots && /noindex/i.test(metaRobots[1])) {
    reasons.push('live meta robots contains noindex');
  }

  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i);
  if (!canonical) {
    reasons.push('live canonical tag is missing');
  } else if (normalizeUrl(canonical[1]) !== url) {
    reasons.push(`live canonical points to ${canonical[1]}`);
  }

  return reasons;
};

export const validateIndexingUrls = async ({
  urls,
  sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml'),
  validateLive = false,
  fetchImpl = globalThis.fetch,
} = {}) => {
  const sitemapUrls = await readSitemapUrlSet(sitemapPath);
  const allowlistedPaths = routePolicy.INDEXABLE_LOCALIZED_TOOL_ALLOWLIST || new Set();
  const seen = new Set();
  const eligibleUrls = [];
  const rejectedUrls = [];

  for (const rawUrl of urls || []) {
    const reasons = [];
    const normalized = normalizeUrl(rawUrl);

    if (!normalized) {
      rejectedUrls.push({ url: String(rawUrl), normalizedUrl: null, reasons: ['invalid URL'] });
      continue;
    }

    if (seen.has(normalized)) {
      continue;
    }
    seen.add(normalized);

    const parsed = new URL(normalized);
    if (parsed.protocol !== 'https:') {
      reasons.push('URL must use HTTPS');
    }
    if (parsed.host !== INDEXING_SITE_HOST) {
      reasons.push(`URL host must be ${INDEXING_SITE_HOST}`);
    }
    if (INTERNAL_PATH_PATTERN.test(parsed.pathname)) {
      reasons.push('URL is an internal, API, admin, dashboard, or asset route');
    }
    if (!sitemapUrls.has(normalized)) {
      reasons.push('URL is missing from public/sitemap.xml');
    }

    const normalizedPath = routePolicy.normalizeRoutePath(parsed.pathname);
    const policy = routePolicy.getRoutePolicy(normalizedPath);
    if (policy.redirectTarget) {
      reasons.push(`route policy redirects to ${policy.redirectTarget}`);
    }
    if (policy.indexingBucket !== routePolicy.ROUTE_POLICY_BUCKETS.INDEXABLE) {
      reasons.push(`route policy indexing bucket is ${policy.indexingBucket}`);
    }
    if (policy.sitemapBucket !== routePolicy.ROUTE_POLICY_BUCKETS.INDEXABLE) {
      reasons.push(`route policy sitemap bucket is ${policy.sitemapBucket}`);
    }
    if (
      LOCALIZED_PROPERTY_TAX_PATTERN.test(normalizedPath) &&
      !allowlistedPaths.has(normalizedPath)
    ) {
      reasons.push('localized property-tax route is not explicitly allowlisted');
    }

    if (validateLive && reasons.length === 0) {
      reasons.push(...(await validateLiveUrl({ url: normalized, fetchImpl })));
    }

    if (reasons.length > 0) {
      rejectedUrls.push({ url: rawUrl, normalizedUrl: normalized, reasons });
    } else {
      eligibleUrls.push(normalized);
    }
  }

  return {
    candidateUrlCount: urls?.length || 0,
    eligibleUrlCount: eligibleUrls.length,
    rejectedUrlCount: rejectedUrls.length,
    eligibleUrls,
    rejectedUrls,
  };
};

export const evaluateIndexingSafety = async ({
  env = process.env,
  allowlistPath = getAllowlistPath(env),
  currentSha = getCurrentGitSha(),
  dryRun = false,
  validateLive = false,
  fetchImpl = globalThis.fetch,
} = {}) => {
  const mode = env.INDEXING_SUBMISSION_MODE || '';
  const approvedSha = env.INDEXING_APPROVED_DEPLOY_SHA || '';
  const enableSubmissions = normalizeBoolean(env.ENABLE_INDEXING_SUBMISSIONS);
  const disableAutoProd = normalizeBoolean(env.DISABLE_AUTO_INDEXING_ON_PROD);
  const disableAllSubmissions = normalizeBoolean(env.DISABLE_INDEXING_SUBMISSIONS);
  const vercelEnv = env.VERCEL_ENV || '';
  const isProduction = vercelEnv === 'production';

  const report = {
    mode: mode || '(unset)',
    environment: {
      VERCEL_ENV: vercelEnv || '(unset)',
      NODE_ENV: env.NODE_ENV || '(unset)',
      CI: env.CI || '(unset)',
    },
    deploySha: currentSha,
    deployShaShort: shortSha(currentSha),
    approvalSha: approvedSha || null,
    approvalShaShort: shortSha(approvedSha),
    allowlistFile: allowlistPath || null,
    dryRun,
    validateLive,
    candidateUrlCount: 0,
    eligibleUrlCount: 0,
    rejectedUrlCount: 0,
    eligibleUrls: [],
    rejectedUrls: [],
    skipReasons: [],
    abortReasons: [],
    approvedForSubmission: false,
    networkSubmissionPerformed: false,
  };

  if (disableAutoProd) {
    report.skipReasons.push('DISABLE_AUTO_INDEXING_ON_PROD=true');
  }
  if (disableAllSubmissions) {
    report.skipReasons.push('DISABLE_INDEXING_SUBMISSIONS=true');
  }
  if (dryRun || normalizeBoolean(env.INDEXING_DRY_RUN)) {
    report.skipReasons.push('dry-run mode enabled');
  }
  if (!isProduction) {
    report.skipReasons.push('VERCEL_ENV is not production');
  }
  if (mode !== APPROVED_SUBMISSION_MODE) {
    report.skipReasons.push(`INDEXING_SUBMISSION_MODE is not ${APPROVED_SUBMISSION_MODE}`);
  }
  if (!enableSubmissions) {
    report.skipReasons.push('ENABLE_INDEXING_SUBMISSIONS is not true');
  }
  if (env.CI === 'true' && (!enableSubmissions || !approvedSha || !allowlistPath)) {
    report.skipReasons.push('CI approval variables are incomplete');
  }
  if (!approvedSha) {
    report.skipReasons.push('INDEXING_APPROVED_DEPLOY_SHA is missing');
  }
  if (!allowlistPath) {
    report.skipReasons.push('INDEXING_URL_ALLOWLIST_FILE is missing');
  }

  let allowlistUrls = [];
  if (allowlistPath && fsSync.existsSync(allowlistPath)) {
    try {
      const allowlist = await readUrlAllowlist(allowlistPath);
      allowlistUrls = allowlist.urls;
      const validation = await validateIndexingUrls({
        urls: allowlistUrls,
        validateLive,
        fetchImpl,
      });
      Object.assign(report, validation);
    } catch (error) {
      report.abortReasons.push(`allowlist validation failed: ${error.message}`);
    }
  } else if (allowlistPath) {
    report.abortReasons.push(`URL allowlist file is missing: ${allowlistPath}`);
  }

  if (allowlistPath && fsSync.existsSync(allowlistPath) && allowlistUrls.length === 0) {
    report.abortReasons.push('URL allowlist file is empty');
  }
  if (report.rejectedUrlCount > 0) {
    report.abortReasons.push('URL allowlist contains rejected URLs');
  }
  if (allowlistUrls.length > 0 && report.eligibleUrlCount === 0) {
    report.abortReasons.push('URL allowlist has no eligible URLs');
  }
  if (!currentSha) {
    report.abortReasons.push('current git SHA could not be determined');
  }
  if (approvedSha && currentSha && approvedSha !== currentSha && approvedSha !== shortSha(currentSha)) {
    report.abortReasons.push('INDEXING_APPROVED_DEPLOY_SHA does not match current git SHA');
  }

  const hasSubmissionSkip =
    report.skipReasons.length > 0 &&
    report.skipReasons.some((reason) => reason !== 'dry-run mode enabled');
  const dryRunOnly = dryRun || normalizeBoolean(env.INDEXING_DRY_RUN);

  if (
    !hasSubmissionSkip &&
    !dryRunOnly &&
    report.abortReasons.length === 0 &&
    report.eligibleUrlCount > 0
  ) {
    report.approvedForSubmission = true;
  }

  report.status = report.approvedForSubmission
    ? 'approved'
    : report.abortReasons.length > 0
      ? 'aborted'
      : 'skipped';

  return report;
};

export const logIndexingSafetyReport = (report) => {
  console.log('Indexing safety report');
  console.log('======================');
  console.log(`mode: ${report.mode}`);
  console.log(`environment: VERCEL_ENV=${report.environment.VERCEL_ENV}, NODE_ENV=${report.environment.NODE_ENV}, CI=${report.environment.CI}`);
  console.log(`deploy SHA: ${report.deploySha || '(unknown)'}`);
  console.log(`approval SHA: ${report.approvalSha || '(missing)'}`);
  console.log(`allowlist file: ${report.allowlistFile || '(missing)'}`);
  console.log(`candidate URLs: ${report.candidateUrlCount}`);
  console.log(`eligible URLs: ${report.eligibleUrlCount}`);
  console.log(`rejected URLs: ${report.rejectedUrlCount}`);
  console.log(`network submission performed: ${report.networkSubmissionPerformed}`);
  if (report.skipReasons.length) {
    console.log(`skip reasons: ${report.skipReasons.join('; ')}`);
  }
  if (report.abortReasons.length) {
    console.log(`abort reasons: ${report.abortReasons.join('; ')}`);
  }
  for (const rejected of report.rejectedUrls) {
    console.log(`rejected: ${rejected.normalizedUrl || rejected.url} -> ${rejected.reasons.join('; ')}`);
  }
};
