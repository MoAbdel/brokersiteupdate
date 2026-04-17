import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pathnameToBreadcrumbItems } from '../../lib/breadcrumbs.ts';

test('returns empty array for home and articles', () => {
  assert.deepEqual(pathnameToBreadcrumbItems('/'), []);
  assert.deepEqual(pathnameToBreadcrumbItems('/articles/anything'), []);
});

test('converts slugs to title case with hrefs', () => {
  const items = pathnameToBreadcrumbItems('/loan-programs/heloc');
  assert.deepEqual(items, [
    { name: 'Loan Programs', href: '/loan-programs' },
    { name: 'HELOC', href: '/loan-programs/heloc' },
  ]);
});

test('uppercases known acronyms', () => {
  const items = pathnameToBreadcrumbItems('/blog/fha-va-dscr-comparison-2026');
  assert.equal(items.at(-1).name, 'FHA VA DSCR Comparison 2026');
});

test('expands Oc to Orange County', () => {
  const items = pathnameToBreadcrumbItems('/areas/oc-refinance');
  assert.equal(items.at(-1).name, 'Orange County Refinance');
});
