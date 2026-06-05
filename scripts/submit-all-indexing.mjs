#!/usr/bin/env node

// Legacy bulk entry point kept for compatibility. It no longer submits sitemap
// or delta URLs. Only the explicit allowlist workflow can submit.
await import('./submit-approved-indexing.mjs');
