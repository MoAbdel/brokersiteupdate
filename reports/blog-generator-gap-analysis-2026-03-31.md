# Blog Generator Gap Analysis

Date: 2026-03-31

## Scope

This report compares:

- `C:\Users\haithem\projects\advanceddentistry\.agents\skills\dental-blog-generator\SKILL.md`
- `C:\Users\haithem\projects\advanceddentistry\.agents\skills\dental-blog-generator\BLOG-TRACKING.md`
- `C:\Users\haithem\projects\advanceddentistry\.agents\skills\dental-blog-generator\CLUSTER-MAPPING.md`
- `C:\Users\haithem\projects\advanceddentistry\.agents\skills\dental-blog-generator\CONTENT-CALENDAR.md`
- `C:\Users\haithem\projects\brokersiteupdate\.agents\skills\equity-hecm-blog-generator\SKILL.md`
- Supporting references and queue artifacts under `C:\Users\haithem\projects\brokersiteupdate\.agents\skills\equity-hecm-blog-generator\` and `C:\Users\haithem\projects\brokersiteupdate\reports\`

## Executive Summary

The MoTheBroker skill is not behind overall. In fact, it is more mature than the Advanced Dentistry skill in the areas that matter most for scaled mortgage content:

- opportunity discovery
- duplicate and cannibalization control
- legal/compliance gating
- post-generation site registration and AI distribution

The real gaps are narrower and mostly Bing/editorial in nature. Advanced Dentistry has a tighter system for:

- Copilot-ready answer extraction
- preventing repetitive AI-generated language patterns
- enforcing short, citable paragraph structures
- verifying Bing-specific indexing and schema outcomes after publish
- packaging social/GBP assets that may help Bing visibility

Outcome: do not replace the MoTheBroker skill. Keep its architecture and import selected Bing/editorial modules from Advanced Dentistry.

## Where MoTheBroker Is Already Stronger

### 1. Opportunity discovery is significantly more advanced

MoTheBroker uses a real research-driven queue instead of a static publishing calendar:

- Bing AI overview gap research is embedded in the generation workflow.
- GSC CTR gap analysis is part of the intake path.
- `reports/opportunity-queue.json` and preflight batch checks are first-class inputs.
- Cannibalization checks happen before generation.

Evidence:

- MoTheBroker: AI overview + CTR gap system, queue scoring, and preflight gates in `SKILL.md` lines 191-205, 258-270, and 1028-1064.
- Advanced Dentistry: workflow is driven by `CONTENT-CALENDAR.md`, `BLOG-TRACKING.md`, and `CLUSTER-MAPPING.md` rather than live query opportunity data.

Assessment: this is a MoTheBroker advantage and should not be replaced.

### 2. Duplicate prevention and geo governance are stronger

MoTheBroker has a more sophisticated geo-content control model:

- hub-first consolidation
- `city-topic-matrix.md` for unique angles
- `regional-hub-map.md` status tracking
- duplicate prevention across page existence, registry entries, and hub status
- explicit cannibalization blocking

Evidence:

- Duplicate warning and hub deprecation: `SKILL.md` lines 36-48.
- Duplicate prevention flow: `SKILL.md` lines 1070-1135.
- Content differentiation gate: `SKILL.md` lines 1367-1405.

Advanced Dentistry has a good "swap test," but it does not have the same level of queue-driven cannibalization control or hub-map enforcement.

Assessment: MoTheBroker is ahead here.

### 3. Compliance is dramatically stronger

Mortgage content carries legal and regulatory risk that dentistry does not. The MoTheBroker skill reflects that reality:

- hard-block rules for rates, guarantees, licensing, Fair Housing, HECM disclaimers, and unauthorized practice
- dedicated `compliance-rules.md`
- mandatory footer disclosure language

Evidence:

- Compliance gate: `SKILL.md` lines 1240-1291.
- Expanded compliance reference: `references/compliance-rules.md`.

Advanced Dentistry has YMYL review rules, but it does not offer anything equivalent to the mortgage-specific regulatory depth already present here.

Assessment: this is a major MoTheBroker advantage.

### 4. AI distribution and site integration are stronger

MoTheBroker forces generated content into the site's discoverability surfaces:

- mandatory registration in `lib/all-blog-posts.ts`
- mandatory update to `public/llms.txt`
- indexing delta workflow

Evidence:

- Post registry gate: `SKILL.md` lines 310-333 and 1140-1203.
- `llms.txt` auto-update: `SKILL.md` lines 1207-1233.
- delta/indexing workflow: `SKILL.md` lines 1553-1578.

Advanced Dentistry has good post tracking and social packaging, but no equivalent `llms.txt` distribution step.

Assessment: keep the MoTheBroker post-generation architecture.

## High-Value Gaps To Import From Advanced Dentistry

### High Priority

#### 1. Add a dedicated answer-capsule layer

Advanced Dentistry requires a short answer capsule immediately after the H1, with:

- 40-60 total words
- one <=29-word core answer sentence
- direct fact statement
- sentence-structure variation across posts

Evidence:

- `dental-blog-generator/SKILL.md` lines 174-184 and 661-673.

MoTheBroker already has a strong `citation-hook`, but it is larger and structured differently:

- 150-300 words
- semantic triples
- data table near the top

Evidence:

- `equity-hecm-blog-generator/SKILL.md` lines 645-656 and 1331-1338.

Gap:

- There is no separate, ultra-compact Bing/Copilot extraction block comparable to Dentistry's answer capsule.

Recommendation:

- Keep the current `citation-hook`.
- Add a new compliance-safe answer capsule layer for mortgage content.
- Do not copy the dentistry pricing style. For mortgage, use fact-first statements such as qualification rules, program fit, city-specific conditions, or lender-comparison framing.

#### 2. Add anti-AEL rules and rotation controls

Advanced Dentistry explicitly targets Bing's "Artificially Engineered Language" risk with:

- swap test
- format rotation
- section-order variation
- unique opening rules
- FAQ overlap limit
- answer-capsule sentence variation

Evidence:

- `dental-blog-generator/SKILL.md` lines 298-440.
- Support files: `BLOG-TRACKING.md`, `CLUSTER-MAPPING.md`, `CONTENT-CALENDAR.md`.

MoTheBroker has strong differentiation and duplicate gates, but it does not have a comparable anti-AEL editorial control layer:

- no format rotation tracker
- no title uniqueness tracker
- no FAQ overlap threshold
- no explicit sentence-pattern rotation system

Evidence:

- Current support directory contains reference maps and templates, but no equivalent tracking/calendar files.

Recommendation:

- Add a mortgage-specific tracking layer, probably lighter than dentistry:
  - `BLOG-TRACKING.md` equivalent for title/format/opening rotation
  - FAQ overlap checks inside sibling hubs/clusters
  - title uniqueness rule
  - opening-paragraph variation rule
- Preserve the current opportunity queue; do not regress to a calendar-first system.

#### 3. Add paragraph-length enforcement for citation-sensitive sections

Advanced Dentistry has a hard rule:

- no paragraph over 60 words
- FAQ direct answers <=29 words
- one verifiable fact per paragraph

Evidence:

- `dental-blog-generator/SKILL.md` lines 659-673 and 1160-1164.

MoTheBroker has concise-answer rules for PAA answers, but no equivalent body-paragraph ceiling:

- PAA answer length is enforced
- citation hook structure is enforced
- body paragraph length is not

Evidence:

- `equity-hecm-blog-generator/SKILL.md` lines 1331-1338.

Recommendation:

- Add a paragraph-length gate for the citation hook, PAA, expert summary, and the first screenful of content.
- For long-form mortgage pages, a universal 60-word ceiling may be too rigid; use a tiered rule:
  - answer capsule / direct answers: <=29 words
  - citation hook paragraphs: <=60 words
  - early body paragraphs: <=75 words

#### 4. Add Bing-specific post-publish verification steps

Advanced Dentistry explicitly requires:

- Bing Webmaster Tools URL verification
- AI Performance report checks
- Bing Markup Validator

Evidence:

- `dental-blog-generator/SKILL.md` lines 712-722 and 1256-1261.

MoTheBroker includes IndexNow submission guidance, but not the verification loop after submission.

Evidence:

- `equity-hecm-blog-generator/SKILL.md` lines 804-813 and 1525-1579.

Recommendation:

- Add a post-publish Bing verification checklist:
  - confirm IndexNow landed
  - inspect URL in Bing Webmaster Tools
  - check AI Performance report for grounding/citation activity
  - validate schema in Bing Markup Validator

### Medium Priority

#### 5. Make schema-to-visible-content mirroring an explicit hard gate

Advanced Dentistry explicitly says every JSON-LD fact must appear in visible content and calls out exact selector requirements.

Evidence:

- `dental-blog-generator/SKILL.md` lines 776-799.

MoTheBroker has strong schema templates and speakable support, but this mirroring rule is not as explicit at the top-level skill layer.

Evidence:

- schema templates and speakable support exist in `assets/schema-templates.json` and `SKILL.md` lines 754-765.

Recommendation:

- Add a simple hard gate: if a fact is in schema, it must appear on page.
- Require selector consistency for any speakable/citation-targeted blocks.

#### 6. Add Bing technical guardrails that are currently implied or missing

Advanced Dentistry explicitly calls out:

- never use `noarchive`
- never use `nocache`
- never use `noimageindex`
- keep `datePublished`, `dateModified`, and sitemap `<lastmod>` aligned to real changes
- use location-level geo meta where appropriate

Evidence:

- `dental-blog-generator/SKILL.md` lines 675-705 and 810-812.

MoTheBroker already covers many meta/schema items, but these particular Bing crawler/caching rules are not surfaced as clearly in the skill.

Recommendation:

- Add the robot/caching restrictions directly to the Bing checklist.
- Add a timestamp consistency rule.
- Apply geo meta only where it is semantically correct for mortgage geo pages.

#### 7. Add title uniqueness and rotation rules

Advanced Dentistry uses:

- 50-60 character title target
- title pattern rotation
- "no more than 3 consecutive words reused" rule

Evidence:

- `dental-blog-generator/SKILL.md` lines 728-755.

MoTheBroker enforces keyword placement, but not title uniqueness at that granularity.

Recommendation:

- Add a "no repeated title frame" rule within a hub/track.
- Keep mortgage titles compliance-safe and avoid dentistry-style pricing hooks where they would create risk.

### Optional / Business-Dependent

#### 8. Add social and GBP packaging if the team will actually publish it

Advanced Dentistry outputs:

- `gbpSummary`
- Facebook copy
- LinkedIn copy

Evidence:

- `dental-blog-generator/SKILL.md` lines 1246-1321.

MoTheBroker does not have an equivalent social-output layer.

Potential benefit:

- could improve Bing/social signal coverage
- makes each blog asset more distributable

Caution:

- only add this if the team will really post it
- skip emoji-heavy local-business patterns that do not fit the mortgage brand

## Things That Should Not Be Copied Directly

These dentistry patterns should be adapted or skipped:

- medical review / `MedicalWebPage` logic
- dentistry cost-transparency examples with exact price ranges
- drive-time-to-office heuristics
- multi-location clinical proof patterns
- emoji-heavy GBP style
- patient-review style social proof formats that do not map cleanly to mortgage compliance

## Recommended Import Plan

### Phase 1: Import Now

1. Add answer-capsule guidance to the mortgage skill.
2. Add anti-AEL and rotation rules.
3. Add paragraph-length limits for citation-critical sections.
4. Add Bing Webmaster / AI Performance / Markup Validator verification.

### Phase 2: Import Soon

1. Add schema-to-visible-content mirroring checks.
2. Add robot/caching/timestamp Bing guardrails.
3. Add title uniqueness rotation rules.

### Phase 3: Optional

1. Add LinkedIn/GBP/Facebook output blocks for each generated post.
2. Add a lighter-weight content calendar only if the business wants editorial cadence control in addition to the opportunity queue.

## Final Outcome

If you import the best Bing pieces from Advanced Dentistry, the MoTheBroker skill will improve meaningfully, but the right move is selective adoption, not a wholesale port.

Best path:

- keep the current mortgage opportunity engine
- keep the current compliance and duplicate-prevention system
- import dentistry's Bing editorial precision and verification discipline

In short: MoTheBroker already has the better generator backbone; Advanced Dentistry offers the better Bing polish layer.
