import { spawn } from 'node:child_process';

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

const run = async () => {
  const enableDeltaAuto = process.env.ENABLE_INDEXING_DELTA_AUTO === 'true';
  const enableIndexNow = process.env.ENABLE_INDEXNOW_SUBMIT === 'true';
  const enableBing = process.env.ENABLE_BING_SUBMIT === 'true';
  const enableGscSitemap = process.env.ENABLE_GSC_SITEMAP_SUBMIT === 'true';
  const disableAutoProd = process.env.DISABLE_AUTO_INDEXING_ON_PROD === 'true';

  const isVercelProductionBuild = process.env.VERCEL_ENV === 'production';
  const anyExplicitFlag =
    enableDeltaAuto || enableIndexNow || enableBing || enableGscSitemap;

  // Auto-enable delta submission on Vercel production builds when no explicit flag
  // is set and not explicitly disabled.
  const autoEnableDelta =
    isVercelProductionBuild && !anyExplicitFlag && !disableAutoProd;

  if (enableDeltaAuto || autoEnableDelta) {
    const reason = autoEnableDelta ? 'auto (Vercel production build)' : 'explicit flag';
    console.log(`\n--- Auto delta indexing: ${reason} ---`);
    await runScript('scripts/auto-submit-indexing-delta.mjs', 'Auto delta indexing submit');
    return;
  }

  if (!anyExplicitFlag) {
    console.log('Indexing automation disabled (non-production build, no ENABLE_* flag set).');
    return;
  }

  if (enableIndexNow) {
    console.log('\n--- IndexNow: submitting URLs ---');
    await runScript('scripts/submit-indexnow.mjs', 'IndexNow submit');
  }

  if (enableBing) {
    if (!process.env.BING_API_KEY) {
      console.log('Skipping Bing submit: BING_API_KEY is not set.');
    } else {
      console.log('\n--- Bing: submitting sitemap and URLs ---');
      await runScript('scripts/submit-bing-gsc.mjs', 'Bing submit');
    }
  }

  if (enableGscSitemap) {
    if (!process.env.GSC_SITE_URL && !process.env.GSC_SITEMAP_URL) {
      console.log('GSC sitemap submit enabled. Using default config.');
    }
    console.log('\n--- GSC: submitting sitemap ---');
    await runScript('scripts/submit-gsc-sitemap.mjs', 'GSC sitemap submit');
  }
};

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
