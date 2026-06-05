#!/usr/bin/env node

// Legacy command kept for compatibility. It now uses the same manual approval
// gates and URL allowlist as `npm run indexing:submit-approved`.
await import('./submit-approved-indexing.mjs');
