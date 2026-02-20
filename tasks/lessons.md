# Lessons Learned

## 2026-02-20: Blog Generation Workflow — NEVER Skip Steps

**Mistake:** Skipped `npm run seo:build-batch`, `npm run seo:preflight-batch`, and `npm run seo:cannibal-gate` before generating posts. Also planned to batch-update `all-blog-posts.ts` and `llms.txt` instead of doing it per-post as the skill mandates.

**Rule:** ALWAYS follow the full skill workflow in order:
1. Check priority backlog
2. Load opportunity-queue.json
3. Run `npm run seo:build-batch -- --count N` (builds refresh + new batch)
4. Run `npm run seo:preflight-batch` (hard cannibalization filter)
5. Only generate posts that pass preflight
6. After EACH post: update `lib/all-blog-posts.ts`
7. After EACH post: update `public/llms.txt` Recent Content
8. After each item: mark status in `regional-hub-map.md`
9. Run `npm run seo:record-delta-from-approved-batch`
10. Commit, push, submit indexing

**Why it matters:** The cannibalization gate exists because 32 pages were previously marked "Crawled - not indexed" by Google due to near-duplicate content. Skipping the gate risks creating more pages that Google refuses to index — wasting effort.
