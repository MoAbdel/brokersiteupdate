import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const runScript = (scriptPath, label) => new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [scriptPath], { stdio: 'inherit' });
  child.on('exit', (code) => {
    if (code === 0) {
      resolve();
      return;
    }
    reject(new Error(`${label} exited with code ${code}`));
  });
});

// Run a submission channel but don't let its failure fail the orchestrator.
// Rationale: the build's postbuild hook invokes this script; a missing credential
// for one channel (e.g. GSC on Vercel where gsc-credentials.json isn't mounted)
// shouldn't cancel the whole production deploy or block the other channels that
// would have succeeded (e.g. IndexNow to Bing).
const runChannel = async (scriptPath, label) => {
  try {
    await runScript(scriptPath, label);
    return true;
  } catch (err) {
    console.warn(`[${label}] non-fatal: ${err.message || err}`);
    return false;
  }
};

const run = async () => {
  console.log('SEO submission orchestrator');
  console.log('==========================');

  const enableGscSitemap = process.env.ENABLE_GSC_SITEMAP_SUBMIT !== 'false';
  const enableGscIndexing = process.env.ENABLE_GSC_INDEXING_SUBMIT !== 'false';
  const enableBing = process.env.ENABLE_BING_SUBMIT !== 'false';
  const enableIndexNow = process.env.ENABLE_INDEXNOW_SUBMIT !== 'false';

  if (enableGscSitemap) {
    console.log('\n--- GSC sitemap ---');
    await runChannel('scripts/submit-gsc-sitemap.mjs', 'GSC sitemap submit');
  }

  if (enableGscIndexing) {
    console.log('\n--- GSC indexing ---');
    await runChannel('scripts/submit-gsc-indexing.mjs', 'GSC indexing submit');
  }

  if (enableBing) {
    if (!process.env.BING_API_KEY && !process.env.BING_WEBMASTER_API_KEY) {
      console.log('Skipping Bing submit: missing BING_API_KEY/BING_WEBMASTER_API_KEY.');
    } else {
      console.log('\n--- Bing submit ---');
      await runChannel('scripts/submit-bing-gsc.mjs', 'Bing submit');
    }
  }

  if (enableIndexNow) {
    console.log('\n--- IndexNow submit ---');
    await runChannel('scripts/submit-indexnow.mjs', 'IndexNow submit');
  }

  const clearDelta = process.env.CLEAR_INDEXING_DELTA_ON_SUCCESS !== 'false';
  if (clearDelta) {
    const deltaPath = path.join(process.cwd(), 'reports', 'indexing-delta.json');
    await fs.rm(deltaPath, { force: true });
    console.log(`\nCleared indexing delta: ${deltaPath}`);
  }
};

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
