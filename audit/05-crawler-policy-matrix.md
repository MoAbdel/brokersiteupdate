# Crawler Policy Matrix

Audit date: 2026-05-07

Live policy source: public/robots.txt generated from next-sitemap.config.js. The implementation pass updated search and user-triggered retrieval visibility while preserving existing model-training and broad crawler consent choices.

## Category A - Core search indexing and discovery

Usually allow for this public mortgage site unless market or abuse policy says otherwise: Googlebot, Googlebot-Image, Googlebot-Video, bingbot, Applebot, DuckDuckBot, YandexBot if targeting Yandex markets, Baiduspider only if targeting Baidu markets. Current live policy allows Googlebot, Googlebot-Image, Bingbot, msnbot, DuckDuckBot, Applebot, YandexBot, and blocks Baiduspider.

## Category B - AI search, answer citation, and retrieval indexes

Usually allow when answer visibility is a goal: OAI-SearchBot, Claude-SearchBot, PerplexityBot, MistralAI-Index, Amzn-SearchBot, DuckAssistBot, Googlebot for Google Search AI features, bingbot for Bing and Copilot experiences, Applebot for Apple search features. Current live policy allows these verified agents for public content and disallows non-public admin, API, and dashboard paths.

## Category C - User-triggered retrieval

Treat separately from training. Usually allow for public pages intended to be cited or summarized unless privacy, paywall, legal, rate-limit, or abuse concerns apply: ChatGPT-User, Claude-User, Perplexity-User, MistralAI-User, Amzn-User, and Meta external fetchers only after official verification. Current live policy allows the verified non-Meta user retrieval agents for public content and disallows non-public admin, API, and dashboard paths.

## Category D - Model-training or broad data crawlers

Owner decision required. Do not decide silently: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Amazonbot, CCBot, Meta AI training crawlers after official verification, and any other official training crawler. Current live policy preserves the existing allow posture for GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Amazonbot, and CCBot.

## Live policy gaps

- Verified AI search and user retrieval agents are now explicit in live robots.
- Model-training and broad crawler consent remains a distinct owner decision.
- Meta-specific entries are present but official Meta docs were not fetchable, so this audit does not recommend live Meta changes.
- Baidu is blocked. That may be intentional for market targeting, but it is an owner market decision.
- CCBot has no explicit rule and falls through to allow. That is a broad dataset decision.
