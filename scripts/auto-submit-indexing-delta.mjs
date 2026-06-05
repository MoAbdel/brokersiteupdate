#!/usr/bin/env node

import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

const DELTA_PATH = path.join(process.cwd(), 'reports', 'indexing-delta.json');

const runScript = (scriptPath, label) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath], { stdio: 'inherit' });
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${label} exited with code ${code}`));
    });
  });

const readDeltaCount = async () => {
  try {
    const json = JSON.parse(await fs.readFile(DELTA_PATH, 'utf8'));
    return Array.isArray(json?.urls) ? json.urls.length : 0;
  } catch {
    return 0;
  }
};

const run = async () => {
  console.log('Auto delta indexing report');
  console.log('==========================');

  await runScript('scripts/build-indexing-delta.mjs', 'Build indexing delta');
  const count = await readDeltaCount();

  console.log(`Changed URL candidates detected: ${count}`);
  console.log('Automatic delta submission is disabled.');
  console.log('Create an allowlist and run `npm run indexing:submit-approved` after validation and approval.');
  console.log('Network submission performed: false');
};

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
