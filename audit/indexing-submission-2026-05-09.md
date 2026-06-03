# Indexing Submission 2026-05-09

## Submitted

- Built changed-URL delta from `reports/indexing-delta-state.json`.
- Delta size: 43 URLs.
- Google Search Console sitemap submit: success.
- Google URL submission: 43 success, 0 errors.
- IndexNow submission: 43 URLs in 1 batch.
- Bing Webmaster API: skipped because `BING_API_KEY` / `BING_WEBMASTER_API_KEY` is not available in the current local or pulled production env.

## Follow-Up Safety Fix

During submission, the existing delta included protected admin paths. They are live-protected and return `X-Robots-Tag: noindex, nofollow`, but they should not be eligible for indexing submissions.

Patched:

- `scripts/lib/indexing-delta.mjs`
- `scripts/submit-gsc-indexing.mjs`
- `scripts/submit-indexnow.mjs`
- `scripts/submit-bing-gsc.mjs`

Verification:

- Temporary delta containing `/admin` and `/admin/data` filtered those URLs out.
- Syntax checks passed for the patched submitter files.

## Result

Public changed URLs were submitted to Google and IndexNow. Bing URL submission remains blocked until a Bing Webmaster API key is available.

## Bing Recommendation Follow-Up

URL: `https://www.mothebroker.com/blog/wholesale-construction-to-permanent-loan-2026`

- Live status: `200`.
- Robots header: none.
- Sitemap: present in `public/sitemap.xml`.
- IndexNow follow-up submission: success.
- Recorded IndexNow timestamp: `2026-05-09T20:35:10.929Z`.

## Bing Webmaster API Follow-Up

- Bing API key was supplied for a one-time submission run and was used only as an environment variable.
- Delta submitted to Bing: `39` sitemap-eligible public URLs.
- Bing sitemap feed submission: `200`.
- Bing URL batch submission: `200`.
- Recorded Bing timestamp for `https://www.mothebroker.com/blog/wholesale-construction-to-permanent-loan-2026`: `2026-05-09T20:36:07.255Z`.
