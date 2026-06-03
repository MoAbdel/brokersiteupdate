# Validation Commands

Audit date: 2026-05-07

## Commands run or intended in this pass

```powershell
git status --short --branch
node scripts/build-may-2026-seo-audit.mjs
node --check scripts/build-may-2026-seo-audit.mjs
node --check scripts/submit-indexing-after-build.mjs
npm run typecheck
npm run lint
npx next build
npm run sitemap
```

## Important build note

Use npx next build for compile-only local validation. npm run build runs postbuild, which executes next-sitemap and indexing automation. The indexing automation has been patched to require Vercel production or explicit flags, but avoiding npm lifecycle is still cleaner for audit validation.

## Results from this pass

- git status --short --branch: completed. Worktree had pre-existing unrelated untracked files, and this pass left them untouched.
- node scripts/build-may-2026-seo-audit.mjs: passed and generated the requested audit artifacts.
- node --check scripts/build-may-2026-seo-audit.mjs: passed.
- node --check scripts/submit-indexing-after-build.mjs: passed.
- npm run typecheck: passed.
- npm run lint: passed with the existing warning that the Next.js plugin was not detected in the ESLint config.
- npm run sitemap: passed and regenerated public/robots.txt plus public/sitemap.xml.
- npx next build: passed after implementation pass. The build generated 2684 static pages, including /rss.xml, and root-level routes build as static pages.
- Local server check: /rss.xml returned 200, robots included Claude-SearchBot, /admin returned 401 without auth and 200 with valid local Basic Auth.
- Sitemap policy check: 314 sitemap URLs, 0 route-policy conflicts.
- XML sitemap parse check: passed with 314 loc entries.
- robots.txt sitemap reference check: passed.

## Local parse checks

```powershell
node -e "const fs=require('fs'); const xml=fs.readFileSync('public/sitemap.xml','utf8'); console.log((xml.match(/<loc>/g)||[]).length)"
node -e "const fs=require('fs'); const robots=fs.readFileSync('public/robots.txt','utf8'); console.log(robots.includes('Sitemap: https://www.mothebroker.com/sitemap.xml'))"
rg -n "noindex|nofollow|canonical|robots|X-Robots-Tag|AggregateRating|ratingValue|reviewCount" app components lib public scripts
```

## External validation still needed

- Google Search Console URL Inspection for home, a loan page, a guide, a blog post, a noindex route, and sitemap.
- Google Rich Results Test for home, a loan-program page, a city page, and a blog post.
- PageSpeed Insights or Lighthouse for home, /loan-programs, /guides, and a high-traffic blog page.
- Bing Webmaster Tools sitemap and URL inspection.
- Bing AI Performance report for cited URLs and grounding queries.
- IndexNow verification in Bing Webmaster Tools.
- Production fetches for /robots.txt, /sitemap.xml, /sitemap-images.xml, /llms.txt, /llms-full.txt, and vCard.
- Server log or CDN bot verification using official IPs, reverse DNS, or verified future Web Bot Auth only after owner approval.
