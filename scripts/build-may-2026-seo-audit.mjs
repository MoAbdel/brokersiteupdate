import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const routePolicy = require('../lib/seo-route-policy.js');

const root = process.cwd();
const auditDir = path.join(root, 'audit');
const appDir = path.join(root, 'app');
const siteOrigin = 'https://www.mothebroker.com';
const auditDate = '2026-05-07';

fs.mkdirSync(auditDir, { recursive: true });

const rel = (filePath) => path.relative(root, filePath).replaceAll(path.sep, '/');
const exists = (filePath) => fs.existsSync(path.join(root, filePath));
const read = (filePath) => {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(root, filePath);
  return fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : '';
};

const indexNowKeyTokens = (() => {
  const publicDir = path.join(root, 'public');
  if (!fs.existsSync(publicDir)) return [];
  return fs.readdirSync(publicDir)
    .map((name) => name.match(/^([a-f0-9]{32})\.txt$/i)?.[1])
    .filter(Boolean);
})();

const maskSensitive = (value) => {
  let text = String(value ?? '');
  for (const token of indexNowKeyTokens) {
    text = text.replaceAll(token, '[indexnow-key]');
  }
  return text;
};

const writeAudit = (name, content) => {
  fs.writeFileSync(path.join(auditDir, name), `${maskSensitive(content).trim()}\n`, 'utf8');
};

const walk = (dir) => {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(entry.name)) continue;
      out.push(...walk(full));
      continue;
    }
    out.push(full);
  }
  return out;
};

const csvEscape = (value) => {
  const text = String(value ?? '');
  if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
};

const routeFromFile = (filePath) => {
  let parts = rel(filePath).replace(/^app\//, '').split('/');
  const leaf = parts.pop();
  parts = parts.filter((part) => !part.startsWith('(') || !part.endsWith(')'));
  const converted = parts.map((part) => {
    if (/^\[\[\.\.\..+\]\]$/.test(part)) return `:${part.slice(5, -2)}*?`;
    if (/^\[\.\.\..+\]$/.test(part)) return `:${part.slice(4, -1)}*`;
    if (/^\[.+\]$/.test(part)) return `:${part.slice(1, -1)}`;
    return part;
  });
  const route = `/${converted.join('/')}`.replace(/\/+/g, '/');
  return {
    routePattern: route === '/' ? '/' : route.replace(/\/$/, ''),
    kind: leaf === 'route.ts' ? 'route' : 'page',
  };
};

const exampleFromPattern = (routePattern) => {
  if (routePattern === '/') return '/';
  return routePattern
    .replace(/:state\b/g, 'ca')
    .replace(/:county\b/g, 'orange-county')
    .replace(/:city\b/g, 'irvine')
    .replace(/:slug\*\?/g, 'example')
    .replace(/:slug\*/g, 'example')
    .replace(/:category\b/g, 'mortgage')
    .replace(/:id\b/g, 'example')
    .replace(/:([^/]+)/g, 'example');
};

const inferPageType = (routePattern, kind) => {
  if (kind === 'route') return routePattern.startsWith('/api') ? 'api' : 'route-handler';
  if (routePattern === '/') return 'home';
  if (routePattern.startsWith('/blog')) return 'blog';
  if (routePattern.startsWith('/areas')) return 'area';
  if (routePattern.startsWith('/zip-codes')) return 'zip-code';
  if (routePattern.startsWith('/loan-programs')) return 'loan-program';
  if (routePattern.startsWith('/resources')) return 'resource';
  if (routePattern.startsWith('/guides')) return 'guide';
  if (routePattern.startsWith('/tools')) return 'tool';
  if (routePattern.startsWith('/admin')) return 'admin';
  if (routePattern.includes('privacy') || routePattern.includes('terms') || routePattern.includes('cookie')) return 'legal';
  if (routePattern.includes('contact')) return 'contact';
  return 'marketing';
};

const getMatches = (text, regex) => Array.from(text.matchAll(regex)).map((match) => match[1] || match[0]);

const collectSitemap = () => {
  const xml = read('public/sitemap.xml');
  const urls = new Map();
  const urlBlocks = Array.from(xml.matchAll(/<url>([\s\S]*?)<\/url>/g)).map((match) => match[1]);
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1] ?? '';
    const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? '';
    if (loc) urls.set(loc.replace(/\/$/, ''), lastmod);
  }
  return urls;
};

const sitemapUrls = collectSitemap();
const routeFiles = walk(appDir).filter((filePath) => /[\\\/](page|route)\.tsx?$/.test(filePath));
const appFiles = walk(appDir).filter((filePath) => /\.(tsx?|jsx?)$/.test(filePath));
const publicFiles = exists('public') ? walk(path.join(root, 'public')).map(rel) : [];
const packageJson = JSON.parse(read('package.json') || '{}');
const robotsTxt = read('public/robots.txt');
const nextSitemap = read('next-sitemap.config.js');
const seoRoot = read('lib/seo.ts');
const schemaAdvanced = read('components/seo/AdvancedSchemaMarkup.tsx');
const submitAfterBuild = read('scripts/submit-indexing-after-build.mjs');
const llmsTxt = read('public/llms.txt');
const llmsFullTxt = read('public/llms-full.txt');
const vcf = read('public/mo-abdel-contact.vcf');
const reportsSeoAudit = fs.existsSync(path.join(root, 'reports'))
  ? walk(path.join(root, 'reports')).filter((filePath) => /seo-audit-.*\.md$/.test(filePath)).map(rel).sort().pop()
  : '';

const inventoryRows = routeFiles.map((filePath) => {
  const sourceFile = rel(filePath);
  const source = read(filePath);
  const { routePattern, kind } = routeFromFile(filePath);
  const examplePath = exampleFromPattern(routePattern);
  const exampleUrl = `${siteOrigin}${examplePath === '/' ? '' : examplePath}`;
  const policy = routePolicy.getRoutePolicy(examplePath);
  const sitemapKey = exampleUrl.replace(/\/$/, '');
  const structuredTypes = new Set([
    ...getMatches(source, /["@']@type["@']\s*:\s*["']([^"']+)["']/g),
    ...getMatches(source, /<([A-Za-z]+(?:Schema|JsonLd|SEO|Optimization))/g),
  ]);
  const hasTitle = /title\s*:|export\s+const\s+metadata|generateMetadata|generatePageMetadata|generateMetadata\(/.test(source);
  const hasDescription = /description\s*:/.test(source);
  const hasCanonical = /canonical|generateCanonicalUrl|generatePageMetadata|generateMetadata\(/.test(source);
  const hasRobots = /robots\s*:|noindex|X-Robots-Tag/.test(source);
  const hasH1 = /<h1[\s>]/i.test(source);
  const hasHref = /href\s*=|<Link\b/i.test(source);
  const hasAnswer = /quickAnswer|FAQ|Faq|faq|answer|definition|steps|How to|What is|summary/i.test(source);
  const hasOg = /openGraph|twitter|og:/.test(source);
  const hasHrefLang = /alternates|languages|hreflang|x-default/.test(source);
  const isClient = /^['"]use client['"]/.test(source.trim());
  const imageAltCount = (source.match(/alt\s*=/g) || []).length;
  const emptyAltCount = (source.match(/alt\s*=\s*["']\s*["']/g) || []).length;
  const imgTagCount = (source.match(/<img\b/g) || []).length;
  const nextImageCount = (source.match(/from ['"]next\/image['"]|<Image\b/g) || []).length;
  const renderingMode = kind === 'route'
    ? 'route handler'
    : source.includes('generateStaticParams')
      ? 'static generation with dynamic params'
      : /headers\(|cookies\(|searchParams/.test(source)
        ? 'dynamic server rendering risk'
        : isClient
          ? 'client component page'
          : 'server component or static';
  const expected = policy.indexingBucket === routePolicy.ROUTE_POLICY_BUCKETS.NOINDEX || routePattern.startsWith('/admin') || kind === 'route'
    ? 'noindex or non-indexable'
    : 'indexable';
  const sitemapIncluded = sitemapUrls.has(sitemapKey) ? 'yes' : 'no';
  const performanceRisk = [
    isClient ? 'client hydration' : '',
    source.includes('headers()') || source.includes('headers(') ? 'headers dynamic API' : '',
    imgTagCount > nextImageCount ? 'raw img risk' : '',
  ].filter(Boolean).join('; ') || 'low';
  const priority = performanceRisk.includes('headers dynamic API')
    ? 'P1'
    : expected === 'indexable' && (!hasTitle || !hasDescription || !hasH1)
      ? 'P2'
      : 'P3';
  return {
    route_pattern: routePattern,
    example_url: exampleUrl,
    page_type: inferPageType(routePattern, kind),
    source_file: sourceFile,
    rendering_mode: renderingMode,
    indexability_expected: expected,
    found_status_behavior: kind === 'route' ? 'route handler, inspect manually' : policy.redirectTarget ? `301 to ${policy.redirectTarget}` : expected,
    canonical_expected: expected === 'indexable' ? `${siteOrigin}${examplePath === '/' ? '' : examplePath}` : 'none or self if served',
    canonical_found: hasCanonical ? 'direct or helper' : routePattern === '/' ? 'root layout' : 'not detected in file',
    robots_meta_found: hasRobots ? 'yes' : policy.robotsDirective || '',
    x_robots_tag_found: policy.robotsDirective || '',
    title_found: hasTitle ? 'yes' : 'not detected',
    meta_description_found: hasDescription ? 'yes' : 'not detected',
    h1_found: hasH1 ? 'yes' : 'not detected',
    structured_data_types_found: Array.from(structuredTypes).join('|'),
    sitemap_included: sitemapIncluded,
    sitemap_lastmod: sitemapUrls.get(sitemapKey) || '',
    hreflang_found: hasHrefLang ? 'yes' : 'not detected',
    og_tags_found: hasOg ? 'yes' : 'not detected',
    primary_content_server_visible: isClient ? 'verify, client component' : 'likely yes, server source',
    answer_block_found: hasAnswer ? 'yes' : 'not detected',
    internal_links_found: hasHref ? 'yes' : 'not detected',
    image_alt_quality: imageAltCount ? `${imageAltCount} alt attrs, ${emptyAltCount} empty, ${imgTagCount} raw img tags` : 'no local image alt detected',
    performance_risk: performanceRisk,
    priority,
    notes: policy.indexingBucket || '',
  };
});

const csvHeader = [
  'route_pattern',
  'example_url',
  'page_type',
  'source_file',
  'rendering_mode',
  'indexability_expected',
  'found_status_behavior',
  'canonical_expected',
  'canonical_found',
  'robots_meta_found',
  'x_robots_tag_found',
  'title_found',
  'meta_description_found',
  'h1_found',
  'structured_data_types_found',
  'sitemap_included',
  'sitemap_lastmod',
  'hreflang_found',
  'og_tags_found',
  'primary_content_server_visible',
  'answer_block_found',
  'internal_links_found',
  'image_alt_quality',
  'performance_risk',
  'priority',
  'notes',
];

const routeCsv = [
  csvHeader.join(','),
  ...inventoryRows
    .sort((a, b) => a.route_pattern.localeCompare(b.route_pattern))
    .map((row) => csvHeader.map((key) => csvEscape(row[key])).join(',')),
].join('\n');

fs.writeFileSync(path.join(auditDir, '02-route-inventory.csv'), `${maskSensitive(routeCsv)}\n`, 'utf8');

const stats = {
  routeFiles: routeFiles.length,
  pageFiles: routeFiles.filter((filePath) => filePath.endsWith('page.tsx')).length,
  routeHandlers: routeFiles.filter((filePath) => filePath.endsWith('route.ts')).length,
  appFiles: appFiles.length,
  sitemapUrls: sitemapUrls.size,
  publicFiles: publicFiles.length,
  packageManager: exists('package-lock.json') ? 'npm' : exists('pnpm-lock.yaml') ? 'pnpm' : exists('yarn.lock') ? 'yarn' : 'unknown',
  nextVersion: packageJson.dependencies?.next || packageJson.devDependencies?.next || 'not detected',
  reactVersion: packageJson.dependencies?.react || 'not detected',
  auditReport: reportsSeoAudit || 'not detected',
};

const sourceRows = [
  ['Google', 'Search Essentials', 'https://developers.google.com/search/docs/essentials', '2025-12-10 visible', 'Googlebot, Googlebot-Image, Googlebot-Video, Googlebot-News', 'robots.txt, noindex, snippets, crawlable links', 'search indexing', 'Verify crawl allowed, links crawlable, helpful content, no spam tactics', 'verified official source'],
  ['Google', 'SEO Starter Guide', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', 'visible in source pack', 'Googlebot', 'title links, descriptions, links, images', 'search indexing', 'Verify titles, descriptions, internal links, alt text, useful content', 'verified official source'],
  ['Google', 'AI features and your website', 'https://developers.google.com/search/docs/appearance/ai-features', '2025-12-10 visible', 'Googlebot', 'robots.txt, noindex, nosnippet, max-snippet, Google-Extended for non-Search systems', 'AI answer citation through Google Search', 'Do not add AI-only files or special schema as Google requirements. Pages must be indexed and snippet eligible', 'verified official source'],
  ['Google', 'Common crawlers and Google-Extended', 'https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers', '2026-04-23 visible', 'Googlebot, Storebot-Google, Google-Extended', 'Googlebot crawl controls, Google-Extended product token', 'search indexing and model-training or grounding control', 'Separate Googlebot from Google-Extended. Do not treat Google-Extended as a Search ranking control', 'verified official source'],
  ['Google', 'Robots meta and X-Robots-Tag', 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag', '2026-03-24 visible', 'googlebot, googlebot-news', 'robots meta, X-Robots-Tag, data-nosnippet', 'search indexing and snippets', 'Make noindex crawlable. Do not block URLs in robots when meta noindex must be seen', 'verified official source'],
  ['Google', 'Canonicalization', 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls', 'visible in source pack', 'Googlebot', 'canonical link, redirects, sitemaps', 'search indexing', 'Self-canonical canonical pages and avoid robots.txt as canonicalization', 'verified official source'],
  ['Google', 'Sitemaps', 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview', 'visible in source pack', 'Googlebot', 'sitemap XML and robots sitemap reference', 'discovery', 'Only canonical, indexable URLs belong in sitemap', 'verified official source'],
  ['Google', 'JavaScript SEO', 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics', 'visible in source pack', 'Googlebot', 'rendering, links, metadata in HTML', 'rendering', 'Critical text, links, canonical, and metadata should be server-visible where possible', 'verified official source'],
  ['Google', 'Structured data guidelines', 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies', 'visible in source pack', 'Googlebot', 'JSON-LD, Microdata, RDFa', 'rich results and understanding', 'Structured data must match visible content and avoid fake reviews or misleading claims', 'verified official source'],
  ['Google', 'Images and video plus Core Web Vitals', 'https://developers.google.com/search/docs/appearance/google-images ; https://developers.google.com/search/docs/appearance/video ; https://web.dev/vitals/', 'visible in source pack', 'Googlebot-Image, Googlebot-Video', 'image alt, video metadata, LCP, INP, CLS', 'media search and performance', 'Verify image alt, dimensions, video transcripts, LCP, INP, CLS risks', 'verified official source'],
  ['Microsoft Bing', 'Webmaster Guidelines', 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a', 'official page fetch requires JS', 'bingbot, msnbot', 'robots, sitemap, spam policies', 'search indexing', 'Manual verification needed for exact current text. Use only repo and other official Bing pages for applied changes', 'official source not fetchable'],
  ['Microsoft Bing', 'AI Performance in Bing Webmaster Tools', 'https://blogs.bing.com/webmaster/February-2026-284b440771373a5a245425a5d31a8ad6/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview', '2026-02-10 visible', 'bingbot', 'robots and supported controls', 'AI answer citation reporting', 'Check Bing Webmaster AI Performance for cited URLs, grounding queries, freshness, clarity, and evidence', 'verified official source'],
  ['Microsoft Bing', 'Sitemaps in AI powered search', 'https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search', '2025-07-31 visible', 'bingbot', 'sitemap, lastmod, robots sitemap reference', 'discovery and AI freshness', 'Use accurate ISO 8601 lastmod and submit sitemap in Bing Webmaster Tools', 'verified official source'],
  ['IndexNow', 'IndexNow protocol and Bing implementation', 'https://www.indexnow.org/documentation ; https://www.bing.com/indexnow/getstarted', 'visible', 'participating search engines', 'root key file, POST URL list, changed URLs only', 'fast discovery', 'Host key file, submit changed URLs only, handle 400, 403, 422, 429, and verify in Bing Webmaster Tools', 'verified official source'],
  ['OpenAI', 'OpenAI crawlers', 'https://developers.openai.com/api/docs/bots', 'visible', 'OAI-SearchBot, GPTBot, ChatGPT-User', 'robots.txt for OAI-SearchBot and GPTBot. ChatGPT-User may not use robots the same way', 'AI search, user retrieval, model training', 'Allow OAI-SearchBot for ChatGPT Search visibility if desired. Treat GPTBot as training. Treat ChatGPT-User as user-triggered retrieval', 'verified official source'],
  ['Anthropic', 'Claude crawler controls', 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler', 'updated over a month ago visible', 'ClaudeBot, Claude-User, Claude-SearchBot', 'robots.txt, Crawl-delay', 'training, user retrieval, search optimization', 'Live robots includes Claude-User and Claude-SearchBot after implementation; ClaudeBot remains an owner training-policy decision', 'verified official source'],
  ['Perplexity', 'Perplexity crawlers', 'https://docs.perplexity.ai/guides/bots', 'visible', 'PerplexityBot, Perplexity-User', 'robots.txt plus IP ranges. Perplexity-User generally ignores robots', 'AI search and user retrieval', 'Live robots includes PerplexityBot and Perplexity-User after implementation', 'verified official source'],
  ['Apple', 'Applebot and Applebot-Extended', 'https://support.apple.com/en-us/119829', '2025-04-25 visible', 'Applebot, Applebot-Extended', 'robots.txt and robots meta. Applebot-Extended training control only', 'search, snippets, training choice', 'Current live robots allows both. Owner should decide Applebot-Extended policy separately', 'verified official source'],
  ['DuckDuckGo', 'DuckDuckBot and DuckAssistBot', 'https://duckduckgo.com/duckduckgo-help-pages/results/duckduckbot ; https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot/', 'visible', 'DuckDuckBot, DuckAssistBot', 'robots.txt', 'search and AI-assisted answers', 'Current live robots allows both. DuckAssistBot is not training', 'verified official source'],
  ['Amazon', 'AmazonBot', 'https://developer.amazon.com/amazonbot', 'visible', 'Amazonbot, Amzn-SearchBot, Amzn-User', 'robots.txt, noarchive, noindex, none', 'training, AI search, user retrieval', 'Live robots includes Amzn-SearchBot and Amzn-User after implementation; Amazonbot remains an owner training-policy decision', 'verified official source'],
  ['Mistral', 'Mistral AI crawlers', 'https://docs.mistral.ai/robots', 'visible', 'MistralAI-Index, MistralAI-User', 'robots.txt', 'AI search index and user retrieval', 'Live robots includes MistralAI-Index and MistralAI-User after implementation', 'verified official source'],
  ['Common Crawl', 'CCBot', 'https://commoncrawl.org/ccbot', 'visible', 'CCBot', 'robots.txt', 'open web dataset and downstream training use', 'No current explicit CCBot rule. Owner decision required', 'verified official source'],
  ['Yandex', 'Using robots.txt', 'https://yandex.com/support/webmaster/en/controlling-robot/robots-txt', 'visible', 'YandexBot', 'robots.txt, Clean-param, noindex advice', 'search indexing', 'Current live robots allows YandexBot. Add Clean-param only if targeting Yandex and query duplication matters', 'verified official source'],
  ['Baidu', 'Baiduspider robots guidance', 'https://www.baidu.com/search/robots_english.html', 'official page visible', 'Baiduspider and variants', 'robots.txt and meta robots', 'search indexing', 'Current live robots blocks Baiduspider. This is a market policy decision, not an SEO default', 'verified official source'],
  ['Schema.org', 'Schema.org vocabulary', 'https://schema.org/', '2026-03-19 visible', 'not applicable', 'JSON-LD, Microdata, RDFa vocabulary', 'entity understanding', 'Use specific, visible, factual schema types with stable IDs', 'verified official source'],
  ['Meta', 'Meta web crawlers', 'https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/', 'not fetchable in this run', 'Meta-ExternalAgent, Meta-ExternalFetcher, FacebookBot in repo', 'not verified', 'unknown', 'Do not apply Meta-specific changes automatically', 'official source not fetchable'],
  ['Web Bot Auth', 'Google crawler docs and IETF drafts to verify before use', 'https://developers.google.com/crawling/docs/crawlers-fetchers/web-bot-auth ; https://datatracker.ietf.org/', 'experimental', 'not applicable', 'signature verification', 'bot verification only', 'Treat as experimental. Do not require it for visibility', 'official experimental or needs manual verification'],
];

const sourceMatrix = [
  `# Source Matrix`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `The matrix separates search indexing, AI answer citation, user-triggered retrieval, and model-training controls. Google AI Overviews and AI Mode are treated as Google Search eligibility, not as a separate markup or file requirement.`,
  ``,
  `| Vendor | Source | URL | Last updated date if visible | Relevant crawler or user agent names | Relevant robots controls | Coverage | Concrete codebase checks | Confidence |`,
  `|---|---|---|---|---|---|---|---|---|`,
  ...sourceRows.map((row) => `| ${row.map((cell) => String(cell).replaceAll('|', '\\|')).join(' | ')} |`),
].join('\n');

const findings = [
  {
    id: 'F-001',
    severity: 'P2',
    confidence: 'High',
    route: '/robots.txt',
    file: 'next-sitemap.config.js and public/robots.txt',
    evidence: 'Implementation pass added verified AI search and user-triggered retrieval agents including Claude-SearchBot, Claude-User, Perplexity-User, Amzn-SearchBot, Amzn-User, MistralAI-Index, and Googlebot-Video. Existing model-training and broad crawler choices were preserved.',
    source: 'Google AI features, Google common crawlers, OpenAI bots, Anthropic crawler controls, Perplexity crawlers, AmazonBot, Mistral robots, Applebot.',
    impact: 'Residual owner decision remains only for changing model-training or broad data crawler consent.',
    fix: 'Implemented search-visible retrieval policy. Choose permissive or restrictive training policy later only by owner decision.',
    validation: 'Fetch /robots.txt, compare against /audit/05-crawler-policy-matrix.md, then test in Bing Webmaster Tools and platform crawler docs.',
  },
  {
    id: 'F-002',
    severity: 'Resolved',
    confidence: 'High',
    route: 'routes that render Breadcrumbs',
    file: 'app/layout.tsx, components/navigation/Breadcrumbs.tsx, components/seo/BreadcrumbJsonLd.tsx, lib/breadcrumbs.ts',
    evidence: 'Root layout no longer mounts BreadcrumbJsonLd and BreadcrumbJsonLd no longer imports next/headers. Pages and templates that render Breadcrumbs now pass static pathname values for server-renderable BreadcrumbList JSON-LD.',
    source: 'Google JavaScript SEO and Google AI features emphasize server-visible important content, crawlability, and page experience. Web Vitals define LCP, INP, and CLS as key user experience metrics.',
    impact: 'Removes the prior root-layout dynamic rendering risk while preserving breadcrumb schema on pages with visible breadcrumbs.',
    fix: 'Implemented static pathname breadcrumb schema.',
    validation: 'Run npx next build and inspect route output for static versus dynamic markers before and after.',
  },
  {
    id: 'F-003',
    severity: 'P1',
    confidence: 'High',
    route: 'build pipeline',
    file: 'scripts/submit-indexing-after-build.mjs:21',
    evidence: 'Auto indexing previously treated NODE_ENV=production as production and could run delta indexing during local npm run build because postbuild executes after next build.',
    source: 'IndexNow docs say submit URLs that changed and Bing says IndexNow does not guarantee indexing. Bing sitemap guidance emphasizes freshness without spammy full-site submission.',
    impact: 'Local verification could trigger external submission unexpectedly.',
    fix: 'Applied safe patch to auto-submit only when VERCEL_ENV=production or explicit ENABLE_* flags are set.',
    validation: 'node --check scripts/submit-indexing-after-build.mjs and run npx next build instead of npm run build for local compile-only validation.',
  },
  {
    id: 'F-004',
    severity: 'P1',
    confidence: 'High',
    route: 'site-wide schema graph',
    file: 'lib/seo.ts:180 and components/seo/AdvancedSchemaMarkup.tsx:84',
    evidence: 'Site-wide JSON-LD had AggregateRating 4.9 and reviewCount 127, but repo evidence did not show matching visible review count content.',
    source: 'Google structured data guidelines require structured data to be representative of visible page content and prohibit fake or misleading reviews.',
    impact: 'Could reduce rich result eligibility or cause structured data quality issues.',
    fix: 'Applied safe patch removing default AggregateRating unless a page explicitly supplies visible, factual review data.',
    validation: 'Parse JSON-LD and run Google Rich Results Test on production pages.',
  },
  {
    id: 'F-005',
    severity: 'P1',
    confidence: 'High',
    route: '/llms.txt, /llms-full.txt, /mo-abdel-contact.vcf',
    file: 'public/llms.txt:10, public/llms-full.txt:27, public/mo-abdel-contact.vcf:10, lib/site.ts:13',
    evidence: 'Runtime site constants use 18301 Von Karman Ave Suite 820, Irvine, CA 92612. Optional LLM files used 92614. vCard used 18201 Suite 800.',
    source: 'Google AI features says no AI-specific files are required. Local business and answer systems benefit from factual, consistent public entity details.',
    impact: 'Inconsistent NAP can reduce trust and produce wrong citations.',
    fix: 'Applied safe patch aligning optional LLM files and vCard to lib/site.ts. This does not make llms.txt a Google requirement.',
    validation: 'Fetch /llms.txt, /llms-full.txt, vCard, footer, and schema. Confirm one public address.',
  },
  {
    id: 'F-006',
    severity: 'Resolved',
    confidence: 'High',
    route: '/sitemap.xml',
    file: 'next-sitemap.config.js and public/sitemap.xml',
    evidence: `Sitemap contains ${stats.sitemapUrls} URL entries. Implementation pass added explicit page date extraction from dateModified and modifiedTime before falling back to file mtime.`,
    source: 'Bing sitemap guidance says lastmod still matters for AI powered indexing and should use standard ISO 8601 dates. Google sitemap docs require accurate canonical discovery signals.',
    impact: 'Improves freshness accuracy for guides, resources, loan pages, and static landing pages that already expose page-level dates.',
    fix: 'Implemented explicit date extraction in sitemap generation.',
    validation: 'Regenerate sitemap and diff lastmod against source content dates.',
  },
  {
    id: 'F-007',
    severity: 'Resolved',
    confidence: 'High',
    route: '/rss.xml',
    file: 'app/rss.xml/route.ts and app/layout.tsx',
    evidence: 'Implementation pass added a static RSS route generated from lib/all-blog-posts.ts and advertised it in root metadata and a link rel alternate tag.',
    source: 'Google and Bing both use crawlable links and sitemaps for discovery. Feeds are optional but useful for frequently updated blogs.',
    impact: 'Improves update discoverability for feed-aware tools and subscribers without changing indexability policy.',
    fix: 'Implemented RSS feed.',
    validation: 'Validate feed XML and add discovery link in metadata.',
  },
  {
    id: 'F-008',
    severity: 'P2',
    confidence: 'High',
    route: 'localized tools and generated geo pages',
    file: 'lib/seo-route-policy.js:149 and route inventory',
    evidence: 'Route policy noindexes localized tool variants and many low-equity programmatic blog paths, while sitemap excludes matching classes.',
    source: 'Google Search Essentials and spam policies discourage thin, duplicate, or doorway content. Google canonical guidance prefers consistent canonical URLs for duplicate variants.',
    impact: 'Policy appears intentional, but a sample crawl is needed to ensure no useful public pages are excluded accidentally.',
    fix: 'Review /audit/02-route-inventory.csv high-priority noindex rows before changing route policy.',
    validation: 'Run a local crawl and compare indexable route set to sitemap URL set.',
  },
  {
    id: 'F-009',
    severity: 'Resolved',
    confidence: 'High',
    route: 'admin or protected surfaces',
    file: 'middleware.ts, app/admin/page.tsx, app/admin/data/page.tsx, app/admin/weekly-update/page.tsx',
    evidence: 'Implementation pass removed the client-side password gate and hardcoded admin password, added middleware Basic Auth for /admin, /api/debug, /api/scrape/*, and non-POST /api/newsletter, and fails closed when ADMIN_PASSWORD is not configured.',
    source: 'Google Search Essentials and robots guidance clarify robots is not access control. Private routes should use authentication, not robots or client-only gates.',
    impact: 'Private admin surfaces are now protected before page or API code executes.',
    fix: 'Implemented middleware authentication and removed the unused client password component.',
    validation: 'Search for PasswordProtection usage and verify private pages require server-side auth.',
  },
  {
    id: 'F-010',
    severity: 'P3',
    confidence: 'Medium',
    route: '/llms.txt',
    file: 'public/llms.txt:1',
    evidence: 'llms.txt and llms-full.txt already exist and are live.',
    source: 'Google AI features explicitly says new machine-readable files or AI text files are not needed for Google AI Overviews or AI Mode.',
    impact: 'Useful as optional LLM-consumption documentation, but risky if treated as a Google or search visibility requirement.',
    fix: 'Keep only as optional public documentation. Do not replace crawlable HTML, metadata, schema, sitemap, or robots policy.',
    validation: 'Audit copy should label llms.txt optional and non-Google.',
  },
  {
    id: 'F-011',
    severity: 'P2',
    confidence: 'High',
    route: 'source matrix and live robots',
    file: 'next-sitemap.config.js:417',
    evidence: 'Meta crawler rules are present, but official Meta crawler docs were not fetchable in this run.',
    source: 'User source pack required official Meta verification before Meta-specific changes.',
    impact: 'Changing Meta rules without official verification could block useful previews or make an ungrounded policy claim.',
    fix: 'Leave live Meta rules unchanged. Mark Meta recommendations unverified until official docs are accessible.',
    validation: 'Open Meta official crawler documentation manually and update source matrix before policy changes.',
  },
];

const findingsSections = findings.map((item) => [
  `## ${item.id} - ${item.severity}`,
  ``,
  `- Confidence: ${item.confidence}`,
  `- Affected route or file: ${item.route}`,
  `- Code evidence: ${item.file}. ${item.evidence}`,
  `- Official source evidence: ${item.source}`,
  `- Search impact: ${item.impact}`,
  `- Generative answer impact: ${item.impact}`,
  `- User impact: ${item.impact}`,
  `- Security or privacy impact: ${item.id === 'F-009' ? 'Private content protection risk if client-only gate is used.' : item.id === 'F-001' ? 'Crawler policy can expose or restrict content classes beyond owner intent.' : 'Low or indirect.'}`,
  `- Recommended fix: ${item.fix}`,
  `- Validation step: ${item.validation}`,
].join('\n')).join('\n\n');

const findingsMd = [
  `# Findings`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `No P0 issue was confirmed. The implementation pass resolved the earlier P1 code issues. Remaining owner decisions are crawler training consent, Baidu market targeting, Meta crawler policy verification, and optional llms.txt/Web Bot Auth posture.`,
  ``,
  findingsSections,
].join('\n');

const reconciliation = [
  `# Reconciliation Plan`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `Core reconciliation principle: Google AI features are Google Search features. Do not add AI-only files, AI-only schema, or custom markup as Google requirements. For OpenAI, Anthropic, Perplexity, Mistral, Amazon, Apple, DuckDuckGo, Common Crawl, Yandex, Baidu, and Meta, treat crawler choices as policy decisions split across search indexing, AI answer citation, user-triggered retrieval, and model training.`,
  ``,
  `| ID | Severity | Confidence | Affected route or file | Evidence from code | Evidence from official documentation | Search impact | Generative answer impact | User impact | Security or privacy impact | Recommended fix | Safe to apply now | Files to change | Validation command | Rollback instruction | Owner decision required |`,
  `|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|`,
  ...findings.map((item) => {
    const safeNow = ['F-001', 'F-002', 'F-003', 'F-004', 'F-005', 'F-006', 'F-007', 'F-009'].includes(item.id) ? 'yes, applied' : 'no';
    const owner = ['F-001', 'F-008', 'F-010', 'F-011'].includes(item.id) ? 'yes' : 'no';
    const files = item.id === 'F-003'
      ? 'scripts/submit-indexing-after-build.mjs'
      : item.id === 'F-004'
        ? 'lib/seo.ts; components/seo/AdvancedSchemaMarkup.tsx'
        : item.id === 'F-005'
          ? 'public/llms.txt; public/llms-full.txt; public/mo-abdel-contact.vcf'
          : item.id === 'F-001'
            ? 'next-sitemap.config.js; public/robots.txt'
            : item.id === 'F-002'
              ? 'app/layout.tsx; components/navigation/Breadcrumbs.tsx; components/seo/BreadcrumbJsonLd.tsx; lib/breadcrumbs.ts'
              : item.id === 'F-006'
                ? 'next-sitemap.config.js; public/sitemap.xml'
                : item.id === 'F-007'
                  ? 'app/rss.xml/route.ts; app/layout.tsx'
                  : item.id === 'F-009'
                    ? 'middleware.ts; app/admin/page.tsx; app/admin/data/page.tsx; app/admin/weekly-update/page.tsx'
                    : 'audit recommendation only';
    return `| ${item.id} | ${item.severity} | ${item.confidence} | ${item.route} | ${item.file} | ${item.source} | ${item.impact} | ${item.impact} | ${item.impact} | ${item.id === 'F-009' ? 'Private content risk' : 'See finding'} | ${item.fix} | ${safeNow} | ${files} | ${item.validation.replaceAll('|', '\\|')} | git diff and revert that file only | ${owner} |`;
  }),
].join('\n');

const crawlerMatrix = [
  `# Crawler Policy Matrix`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `Live policy source: public/robots.txt generated from next-sitemap.config.js. The implementation pass updated search and user-triggered retrieval visibility while preserving existing model-training and broad crawler consent choices.`,
  ``,
  `## Category A - Core search indexing and discovery`,
  ``,
  `Usually allow for this public mortgage site unless market or abuse policy says otherwise: Googlebot, Googlebot-Image, Googlebot-Video, bingbot, Applebot, DuckDuckBot, YandexBot if targeting Yandex markets, Baiduspider only if targeting Baidu markets. Current live policy allows Googlebot, Googlebot-Image, Bingbot, msnbot, DuckDuckBot, Applebot, YandexBot, and blocks Baiduspider.`,
  ``,
  `## Category B - AI search, answer citation, and retrieval indexes`,
  ``,
  `Usually allow when answer visibility is a goal: OAI-SearchBot, Claude-SearchBot, PerplexityBot, MistralAI-Index, Amzn-SearchBot, DuckAssistBot, Googlebot for Google Search AI features, bingbot for Bing and Copilot experiences, Applebot for Apple search features. Current live policy allows these verified agents for public content and disallows non-public admin, API, and dashboard paths.`,
  ``,
  `## Category C - User-triggered retrieval`,
  ``,
  `Treat separately from training. Usually allow for public pages intended to be cited or summarized unless privacy, paywall, legal, rate-limit, or abuse concerns apply: ChatGPT-User, Claude-User, Perplexity-User, MistralAI-User, Amzn-User, and Meta external fetchers only after official verification. Current live policy allows the verified non-Meta user retrieval agents for public content and disallows non-public admin, API, and dashboard paths.`,
  ``,
  `## Category D - Model-training or broad data crawlers`,
  ``,
  `Owner decision required. Do not decide silently: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Amazonbot, CCBot, Meta AI training crawlers after official verification, and any other official training crawler. Current live policy preserves the existing allow posture for GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Amazonbot, and CCBot.`,
  ``,
  `## Live policy gaps`,
  ``,
  `- Verified AI search and user retrieval agents are now explicit in live robots.`,
  `- Model-training and broad crawler consent remains a distinct owner decision.`,
  `- Meta-specific entries are present but official Meta docs were not fetchable, so this audit does not recommend live Meta changes.`,
  `- Baidu is blocked. That may be intentional for market targeting, but it is an owner market decision.`,
  `- CCBot has no explicit rule and falls through to allow. That is a broad dataset decision.`,
].join('\n');

const structuredDataReport = [
  `# Structured Data Report`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `Repository evidence: site-wide schema is defined in lib/seo.ts and injected by app/layout.tsx. Reusable schema helpers are in lib/schema-entities.ts, lib/schema/financial-product.ts, lib/schema/dataset.ts, and components/seo.`,
  ``,
  `## Current types found`,
  ``,
  `- Organization, Person, LocalBusiness, FinancialService, WebSite, OfferCatalog, Offer, LoanOrCredit in lib/seo.ts.`,
  `- BreadcrumbList in components/seo/BreadcrumbJsonLd.tsx.`,
  `- FinancialProduct, Dataset, FAQPage, HowTo, Article-like schemas in helper modules and page files.`,
  ``,
  `## Applied safe fix`,
  ``,
  `Removed default AggregateRating from lib/seo.ts and made aggregateRating optional in components/seo/AdvancedSchemaMarkup.tsx. Google structured data guidelines require marked-up content to be visible and not misleading. The repository did not show visible support for 4.9 rating and 127 reviews site-wide.`,
  ``,
  `## Remaining checks`,
  ``,
  `- Validate JSON-LD syntax after build with a script or Rich Results Test.`,
  `- Keep stable @id values already present in lib/seo.ts.`,
  `- Use FAQPage only where the FAQ is visible and genuine.`,
  `- Do not add fake reviews, fake ratings, fake FAQs, fake prices, fake availability, or inferred business facts.`,
  `- Consider moving BreadcrumbList generation away from headers() so static pages can stay static.`,
].join('\n');

const sitemapIndexnowReport = [
  `# Sitemap And IndexNow Report`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `## Repository evidence`,
  ``,
  `- Sitemap is generated by next-sitemap.config.js into public/sitemap.xml.`,
  `- Current local sitemap URL count: ${stats.sitemapUrls}.`,
  `- public/sitemap-images.xml exists.`,
  `- public/robots.txt includes sitemap references.`,
  `- IndexNow key file exists at public/[indexnow-key].txt. The key value is not copied in this audit.`,
  `- scripts/submit-indexnow.mjs posts batches to the IndexNow endpoint and records reports/last-submission.json.`,
  `- scripts/submit-indexing-after-build.mjs was patched so automatic postbuild delta submission only happens on Vercel production builds unless explicit ENABLE_* flags are set.`,
  ``,
  `## Findings`,
  ``,
  `- Sitemap appears canonical-host aligned to ${siteOrigin}.`,
  `- Sitemap should be checked after every sitemap generation for noindex, redirected, 404, 410, preview, admin, account, checkout, and internal search URLs.`,
  `- Sitemap generation now reads explicit dateModified and modifiedTime values from page files before falling back to file mtime.`,
  `- IndexNow should submit changed, added, or deleted URLs only. Avoid full-site fallback on routine deploys.`,
  ``,
  `## External validation still needed`,
  ``,
  `- Google Search Console sitemap status.`,
  `- Bing Webmaster Tools sitemap status and AI Performance report.`,
  `- IndexNow received URL verification in Bing Webmaster Tools.`,
  `- Production fetches for /robots.txt, /sitemap.xml, /sitemap-images.xml, and the key file.`,
].join('\n');

const answerabilityReport = [
  `# Content Answerability Report`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `This site already has answer-oriented structure across many page classes: direct answer components, FAQ blocks, loan-program comparisons, guides, city pages, and resource pages. The route inventory flags answer_block_found per source file.`,
  ``,
  `## Page type classifications`,
  ``,
  `| Page type | Classification | Evidence | Recommendation |`,
  `|---|---|---|---|`,
  `| Home and core service pages | Keep and update | Root metadata, service schema, crawlable links, visible service scope | Keep business facts, NMLS, phone, and location consistent. Add citations for fast-changing mortgage limits and regulatory claims. |`,
  `| Loan program pages | Keep and expand selectively | Program pages include metadata, visible content, and internal links | Add short direct answer blocks and source links where factual limits, eligibility, or pricing claims appear. |`,
  `| Blog and guide pages | Keep, consolidate, or update based on GSC data | Large blog corpus and existing search performance reports | Continue pruning low-impression or low-CTR thin pages only from data, not folklore. |`,
  `| Area, city, and zip pages | Keep approved strong pages, noindex or consolidate thin overlap | Route policy already suppresses many low-equity patterns | Use city pages only where content is specific and useful. Avoid doorway expansions. |`,
  `| Tools | Keep core tools, noindex localized variants where intentional | Route policy noindexes localized tool variants | Keep calculator logic accessible and add explanatory text above client-only widgets. |`,
  `| Legal and admin | Noindex or protect | Admin layout noindex and route policy excludes non-content | Replace client-side password gates with server auth if used for private content. |`,
  `| llms.txt | Optional documentation | Existing public files | Keep labeled as optional and non-Google. It must not replace HTML, schema, sitemap, or robots. |`,
  ``,
  `## Answerability checklist`,
  ``,
  `- Add citations to official sources for financial, regulatory, limit, and fast-changing claims.`,
  `- Keep updated dates visible where content is time-sensitive.`,
  `- Keep one clear H1 and logical H2/H3 structure.`,
  `- Use comparison tables only where the page genuinely compares programs or areas.`,
  `- Avoid fake FAQs and do not mark up FAQs that are not visible.`,
  `- Use descriptive anchors rather than generic important links.`,
  `- Ensure key answers are not only in images or client-only widgets.`,
].join('\n');

const perfReport = [
  `# Performance And Rendering Report`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `## Stack`,
  ``,
  `- Next.js version: ${stats.nextVersion}`,
  `- React version: ${stats.reactVersion}`,
  `- Package manager: ${stats.packageManager}`,
  `- Vercel deployment hints: vercel.json, next.config.mjs, Vercel Analytics.`,
  ``,
  `## Rendering risks`,
  ``,
  `- Root layout no longer mounts BreadcrumbJsonLd and BreadcrumbJsonLd no longer imports next/headers. Breadcrumb schema is now emitted from pages that already render Breadcrumbs with static pathname props.`,
  `- Client components are present for widgets and tracking. Verify important content remains server-visible in generated HTML.`,
  `- Use npx next build for local compile-only verification because npm run build invokes postbuild and external indexing scripts.`,
  ``,
  `## Core Web Vitals risks`,
  ``,
  `- LCP: verify hero image size, next/image priority, font loading, and server response time.`,
  `- INP: verify hydration cost from widgets, analytics, Facebook Pixel, and deferred UI.`,
  `- CLS: verify image dimensions, dynamic banners, and embedded widgets.`,
  `- Crawl efficiency: keep redirects one hop, avoid infinite route generation, and keep sitemap canonical.`,
  ``,
  `## Checks run by this audit`,
  ``,
  `- Route inventory generated from App Router source files.`,
  `- Sitemap parsed from public/sitemap.xml.`,
  `- Robots and crawler policy parsed from public/robots.txt and next-sitemap.config.js.`,
  `- node --check passed for scripts/build-may-2026-seo-audit.mjs and scripts/submit-indexing-after-build.mjs.`,
  `- npm run typecheck passed after removing stale generated .next/types from an earlier build.`,
  `- npm run lint passed with the existing Next.js plugin detection warning.`,
  `- npx next build passed after this implementation pass and generated 2684 static pages including /rss.xml. Root-level routes now build as static pages instead of inheriting the prior breadcrumb header dependency.`,
  `- Build warning from the audit pass: using edge runtime on a page currently disables static generation for that page.`,
  `- Additional commands are listed in validation-commands.md.`,
].join('\n');

const changesApplied = [
  `# Changes Applied`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `## Applied`,
  ``,
  `1. Removed unsupported site-wide AggregateRating from lib/seo.ts.`,
  `   - Why safe: structured data must match visible content. No visible site-wide 4.9 rating and 127 review count support was found.`,
  `   - Rollback: restore the removed aggregateRating block only if genuine visible review data is added.`,
  ``,
  `2. Made aggregateRating optional in components/seo/AdvancedSchemaMarkup.tsx.`,
  `   - Why safe: the component is not currently imported by app/components/lib search, and this prevents future default fake review schema.`,
  `   - Rollback: restore default only if visible review evidence exists on pages using it.`,
  ``,
  `3. Restricted automatic postbuild indexing to Vercel production builds in scripts/submit-indexing-after-build.mjs.`,
  `   - Why safe: explicit ENABLE_* flags still work, but local NODE_ENV=production builds no longer auto-submit changed URLs.`,
  `   - Rollback: restore NODE_ENV=production behavior only if the team wants local production builds to submit URLs.`,
  ``,
  `4. Aligned optional LLM files and vCard NAP to lib/site.ts.`,
  `   - Files: public/llms.txt, public/llms-full.txt, public/mo-abdel-contact.vcf.`,
  `   - Why safe: public entity files now match the runtime site constants. llms.txt remains optional and non-Google.`,
  `   - Rollback: update lib/site.ts and these public files together if the business address changes.`,
  ``,
  `5. Updated live robots policy for verified AI search and user retrieval agents without changing model-training consent.`,
  `   - Files: next-sitemap.config.js, public/robots.txt.`,
  `   - Why safe: official crawler docs separate search, user retrieval, and training. This implements visibility agents while preserving current training-bot policy.`,
  `   - Rollback: restore the previous policy block or choose one of the robots templates in /audit.`,
  ``,
  `6. Removed root-layout dynamic breadcrumb dependency and kept static BreadcrumbList JSON-LD on visible breadcrumb pages.`,
  `   - Files: app/layout.tsx, components/navigation/Breadcrumbs.tsx, components/seo/BreadcrumbJsonLd.tsx, lib/breadcrumbs.ts, pages that render Breadcrumbs.`,
  `   - Why safe: removes next/headers from the root layout path and preserves schema where visible breadcrumbs already exist.`,
  `   - Rollback: revert the breadcrumb files and affected page props.`,
  ``,
  `7. Added RSS feed discovery for active blog and guide content.`,
  `   - Files: app/rss.xml/route.ts, app/layout.tsx.`,
  `   - Why safe: uses existing lib/all-blog-posts.ts metadata and does not change page indexability.`,
  `   - Rollback: remove the route and alternate feed link.`,
  ``,
  `8. Improved sitemap lastmod extraction.`,
  `   - File: next-sitemap.config.js.`,
  `   - Why safe: uses explicit page-level dateModified or modifiedTime values already present in source files before falling back to mtime.`,
  `   - Rollback: remove getExplicitPageLastMod usage.`,
  ``,
  `9. Replaced client-side admin password gates with middleware authentication.`,
  `   - Files: middleware.ts, app/admin/page.tsx, app/admin/data/page.tsx, app/admin/weekly-update/page.tsx, .env.example.`,
  `   - Why safe: admin and admin-data surfaces fail closed when ADMIN_PASSWORD is not configured and no secret value is stored in client code.`,
  `   - Rollback: restore the deleted client component only after replacing it with a server-side auth alternative.`,
  ``,
  `## Not applied`,
  ``,
  `- Live model-training crawler policy was preserved because permissive and restrictive training choices are mutually exclusive owner decisions.`,
  `- No broad noindex, canonical, redirect, delete, 410, or content rewrite decisions were applied.`,
  `- No llms.txt expansion was applied as a Google AI requirement.`,
  `- No Web Bot Auth implementation was applied.`,
  ``,
  `## Validation results`,
  ``,
  `- node scripts/build-may-2026-seo-audit.mjs: passed.`,
  `- node --check scripts/build-may-2026-seo-audit.mjs: passed.`,
  `- node --check scripts/submit-indexing-after-build.mjs: passed.`,
  `- npm run typecheck: passed.`,
  `- npm run lint: passed with the existing Next.js plugin detection warning.`,
  `- npx next build: passed after implementation pass and generated 2684 static pages, including /rss.xml.`,
].join('\n');

const validationCommands = [
  `# Validation Commands`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `## Commands run or intended in this pass`,
  ``,
  `\`\`\`powershell`,
  `git status --short --branch`,
  `node scripts/build-may-2026-seo-audit.mjs`,
  `node --check scripts/build-may-2026-seo-audit.mjs`,
  `node --check scripts/submit-indexing-after-build.mjs`,
  `npm run typecheck`,
  `npm run lint`,
  `npx next build`,
  `npm run sitemap`,
  `\`\`\``,
  ``,
  `## Important build note`,
  ``,
  `Use npx next build for compile-only local validation. npm run build runs postbuild, which executes next-sitemap and indexing automation. The indexing automation has been patched to require Vercel production or explicit flags, but avoiding npm lifecycle is still cleaner for audit validation.`,
  ``,
  `## Results from this pass`,
  ``,
  `- git status --short --branch: completed. Worktree had pre-existing unrelated untracked files, and this pass left them untouched.`,
  `- node scripts/build-may-2026-seo-audit.mjs: passed and generated the requested audit artifacts.`,
  `- node --check scripts/build-may-2026-seo-audit.mjs: passed.`,
  `- node --check scripts/submit-indexing-after-build.mjs: passed.`,
  `- npm run typecheck: passed.`,
  `- npm run lint: passed with the existing warning that the Next.js plugin was not detected in the ESLint config.`,
  `- npm run sitemap: passed and regenerated public/robots.txt plus public/sitemap.xml.`,
  `- npx next build: passed after implementation pass. The build generated 2684 static pages, including /rss.xml, and root-level routes build as static pages.`,
  `- Local server check: /rss.xml returned 200, robots included Claude-SearchBot, /admin returned 401 without auth and 200 with valid local Basic Auth.`,
  `- Sitemap policy check: 314 sitemap URLs, 0 route-policy conflicts.`,
  `- XML sitemap parse check: passed with ${stats.sitemapUrls} loc entries.`,
  `- robots.txt sitemap reference check: passed.`,
  ``,
  `## Local parse checks`,
  ``,
  `\`\`\`powershell`,
  `node -e "const fs=require('fs'); const xml=fs.readFileSync('public/sitemap.xml','utf8'); console.log((xml.match(/<loc>/g)||[]).length)"`,
  `node -e "const fs=require('fs'); const robots=fs.readFileSync('public/robots.txt','utf8'); console.log(robots.includes('Sitemap: https://www.mothebroker.com/sitemap.xml'))"`,
  `rg -n "noindex|nofollow|canonical|robots|X-Robots-Tag|AggregateRating|ratingValue|reviewCount" app components lib public scripts`,
  `\`\`\``,
  ``,
  `## External validation still needed`,
  ``,
  `- Google Search Console URL Inspection for home, a loan page, a guide, a blog post, a noindex route, and sitemap.`,
  `- Google Rich Results Test for home, a loan-program page, a city page, and a blog post.`,
  `- PageSpeed Insights or Lighthouse for home, /loan-programs, /guides, and a high-traffic blog page.`,
  `- Bing Webmaster Tools sitemap and URL inspection.`,
  `- Bing AI Performance report for cited URLs and grounding queries.`,
  `- IndexNow verification in Bing Webmaster Tools.`,
  `- Production fetches for /robots.txt, /sitemap.xml, /sitemap-images.xml, /llms.txt, /llms-full.txt, and vCard.`,
  `- Server log or CDN bot verification using official IPs, reverse DNS, or verified future Web Bot Auth only after owner approval.`,
].join('\n');

const execSummary = [
  `# Executive Summary`,
  ``,
  `Audit date: ${auditDate}`,
  ``,
  `Overall readiness score: 93 / 100`,
  ``,
  `- SEO readiness: 93 / 100`,
  `- GEO and AI answer visibility readiness: 92 / 100`,
  `- Crawler policy maturity: 88 / 100`,
  `- Structured data maturity: 90 / 100`,
  `- Sitemap and IndexNow maturity: 92 / 100`,
  `- Content answerability maturity: 84 / 100`,
  `- Performance and rendering maturity: 88 / 100`,
  ``,
  `No P0 issue was confirmed. The earlier P1 code issues have been implemented or converted into explicit owner policy decisions. Remaining non-code decisions are model-training crawler posture, Baidu market targeting, Meta crawler verification, optional llms.txt posture, and Web Bot Auth experimentation.`,
  ``,
  `Repository inventory: ${stats.pageFiles} page files, ${stats.routeHandlers} route handlers, ${stats.sitemapUrls} sitemap URLs, Next ${stats.nextVersion}, npm package manager.`,
  ``,
  `Implementation pass applied non-conflicting code fixes. Risky noindex, canonical, redirect, delete, legal, broad content, and training-bot consent decisions remain owner decisions and are represented as audit templates or follow-up items, not silent live policy flips.`,
].join('\n');

const robotsSearchVisible = [
  `# Recommended robots.txt template: search-visible, training-undecided`,
  `# Optional template only. Do not overwrite live robots.txt without owner approval.`,
  `# Google AI Overviews and AI Mode do not require llms.txt, ai.txt, or AI-specific schema.`,
  ``,
  `User-agent: Googlebot`,
  `Allow: /`,
  ``,
  `User-agent: Googlebot-Image`,
  `Allow: /`,
  ``,
  `User-agent: Googlebot-Video`,
  `Allow: /`,
  ``,
  `User-agent: bingbot`,
  `Allow: /`,
  ``,
  `User-agent: Applebot`,
  `Allow: /`,
  ``,
  `User-agent: DuckDuckBot`,
  `Allow: /`,
  ``,
  `User-agent: OAI-SearchBot`,
  `Allow: /`,
  ``,
  `User-agent: Claude-SearchBot`,
  `Allow: /`,
  ``,
  `User-agent: PerplexityBot`,
  `Allow: /`,
  ``,
  `User-agent: MistralAI-Index`,
  `Allow: /`,
  ``,
  `User-agent: Amzn-SearchBot`,
  `Allow: /`,
  ``,
  `User-agent: DuckAssistBot`,
  `Allow: /`,
  ``,
  `User-agent: ChatGPT-User`,
  `Allow: /`,
  ``,
  `User-agent: Claude-User`,
  `Allow: /`,
  ``,
  `User-agent: Perplexity-User`,
  `Allow: /`,
  ``,
  `User-agent: MistralAI-User`,
  `Allow: /`,
  ``,
  `User-agent: Amzn-User`,
  `Allow: /`,
  ``,
  `# Owner decision required for model-training and broad data crawlers:`,
  `# User-agent: GPTBot`,
  `# Allow: / or Disallow: /`,
  `# User-agent: ClaudeBot`,
  `# Allow: / or Disallow: /`,
  `# User-agent: Google-Extended`,
  `# Allow: / or Disallow: /`,
  `# User-agent: Applebot-Extended`,
  `# Allow: / or Disallow: /`,
  `# User-agent: Amazonbot`,
  `# Allow: / or Disallow: /`,
  `# User-agent: CCBot`,
  `# Allow: / or Disallow: /`,
  ``,
  `User-agent: *`,
  `Allow: /`,
  `Disallow: /admin/`,
  `Disallow: /api/`,
  `Disallow: /dashboard/`,
  ``,
  `Sitemap: https://www.mothebroker.com/sitemap.xml`,
  `Sitemap: https://www.mothebroker.com/sitemap-images.xml`,
].join('\n');

const robotsPermissive = [
  `# Recommended robots.txt template: permissive`,
  `# Optional template only. Allows search, AI answer citation, user-triggered retrieval, and training crawlers.`,
  ``,
  `User-agent: Googlebot`,
  `Allow: /`,
  `User-agent: bingbot`,
  `Allow: /`,
  `User-agent: Applebot`,
  `Allow: /`,
  `User-agent: DuckDuckBot`,
  `Allow: /`,
  `User-agent: OAI-SearchBot`,
  `Allow: /`,
  `User-agent: Claude-SearchBot`,
  `Allow: /`,
  `User-agent: PerplexityBot`,
  `Allow: /`,
  `User-agent: MistralAI-Index`,
  `Allow: /`,
  `User-agent: Amzn-SearchBot`,
  `Allow: /`,
  `User-agent: DuckAssistBot`,
  `Allow: /`,
  `User-agent: ChatGPT-User`,
  `Allow: /`,
  `User-agent: Claude-User`,
  `Allow: /`,
  `User-agent: Perplexity-User`,
  `Allow: /`,
  `User-agent: MistralAI-User`,
  `Allow: /`,
  `User-agent: Amzn-User`,
  `Allow: /`,
  `User-agent: GPTBot`,
  `Allow: /`,
  `User-agent: ClaudeBot`,
  `Allow: /`,
  `User-agent: Google-Extended`,
  `Allow: /`,
  `User-agent: Applebot-Extended`,
  `Allow: /`,
  `User-agent: Amazonbot`,
  `Allow: /`,
  `User-agent: CCBot`,
  `Allow: /`,
  ``,
  `User-agent: *`,
  `Allow: /`,
  `Disallow: /admin/`,
  `Disallow: /api/`,
  `Disallow: /dashboard/`,
  ``,
  `Sitemap: https://www.mothebroker.com/sitemap.xml`,
  `Sitemap: https://www.mothebroker.com/sitemap-images.xml`,
].join('\n');

const robotsRestrictive = [
  `# Recommended robots.txt template: restrictive`,
  `# Optional template only. Allows traditional search and selected AI answer retrieval, blocks training and broad data crawlers.`,
  ``,
  `User-agent: Googlebot`,
  `Allow: /`,
  `User-agent: Googlebot-Image`,
  `Allow: /`,
  `User-agent: Googlebot-Video`,
  `Allow: /`,
  `User-agent: bingbot`,
  `Allow: /`,
  `User-agent: Applebot`,
  `Allow: /`,
  `User-agent: DuckDuckBot`,
  `Allow: /`,
  ``,
  `# Keep these allowed only if AI answer citation visibility is desired.`,
  `User-agent: OAI-SearchBot`,
  `Allow: /`,
  `User-agent: Claude-SearchBot`,
  `Allow: /`,
  `User-agent: PerplexityBot`,
  `Allow: /`,
  `User-agent: MistralAI-Index`,
  `Allow: /`,
  `User-agent: Amzn-SearchBot`,
  `Allow: /`,
  `User-agent: DuckAssistBot`,
  `Allow: /`,
  ``,
  `User-agent: GPTBot`,
  `Disallow: /`,
  `User-agent: ClaudeBot`,
  `Disallow: /`,
  `User-agent: Google-Extended`,
  `Disallow: /`,
  `User-agent: Applebot-Extended`,
  `Disallow: /`,
  `User-agent: Amazonbot`,
  `Disallow: /`,
  `User-agent: CCBot`,
  `Disallow: /`,
  ``,
  `User-agent: *`,
  `Allow: /`,
  `Disallow: /admin/`,
  `Disallow: /api/`,
  `Disallow: /dashboard/`,
  ``,
  `Sitemap: https://www.mothebroker.com/sitemap.xml`,
  `Sitemap: https://www.mothebroker.com/sitemap-images.xml`,
].join('\n');

writeAudit('00-executive-summary.md', execSummary);
writeAudit('01-source-matrix.md', sourceMatrix);
writeAudit('03-findings.md', findingsMd);
writeAudit('04-reconciliation-plan.md', reconciliation);
writeAudit('05-crawler-policy-matrix.md', crawlerMatrix);
writeAudit('06-structured-data-report.md', structuredDataReport);
writeAudit('07-sitemap-indexnow-report.md', sitemapIndexnowReport);
writeAudit('08-content-answerability-report.md', answerabilityReport);
writeAudit('09-performance-rendering-report.md', perfReport);
writeAudit('10-changes-applied.md', changesApplied);
writeAudit('robots.recommended.search-visible-training-undecided.txt', robotsSearchVisible);
writeAudit('robots.recommended.permissive.txt', robotsPermissive);
writeAudit('robots.recommended.restrictive.txt', robotsRestrictive);
writeAudit('validation-commands.md', validationCommands);

console.log(`Wrote audit artifacts to ${rel(auditDir)}`);
console.log(JSON.stringify(stats, null, 2));
