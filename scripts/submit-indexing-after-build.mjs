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
  const enableIndexNow = process.env.ENABLE_INDEXNOW_SUBMIT === 'true';
  const enableBing = process.env.ENABLE_BING_SUBMIT === 'true';
  const enableGscSitemap = process.env.ENABLE_GSC_SITEMAP_SUBMIT === 'true';

  if (!enableIndexNow && !enableBing && !enableGscSitemap) {
    console.log('Indexing automation disabled. Set ENABLE_*_SUBMIT=true to enable.');
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
