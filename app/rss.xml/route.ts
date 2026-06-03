import { allBlogPosts } from '@/lib/all-blog-posts';
import { BRAND_NAME, SITE_ORIGIN } from '@/lib/site';

export const dynamic = 'force-static';
export const revalidate = 86400;

const FEED_LIMIT = 50;

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRssDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return new Date().toUTCString();
  return parsed.toUTCString();
}

export function GET() {
  const posts = [...allBlogPosts]
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, FEED_LIMIT);

  const lastBuildDate = posts[0] ? toRssDate(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE_ORIGIN}/blog/${post.slug}`;
      return [
        '<item>',
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${escapeXml(post.excerpt)}</description>`,
        `<category>${escapeXml(post.category)}</category>`,
        `<pubDate>${toRssDate(post.date)}</pubDate>`,
        '</item>',
      ].join('');
    })
    .join('');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>${escapeXml(BRAND_NAME)} Guides</title>`,
    `<link>${SITE_ORIGIN}/guides</link>`,
    `<atom:link href="${SITE_ORIGIN}/rss.xml" rel="self" type="application/rss+xml" />`,
    '<description>Mortgage, refinance, HELOC, DSCR, FHA, VA, jumbo, and reverse mortgage guides from Mo Abdel.</description>',
    '<language>en-US</language>',
    `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    items,
    '</channel>',
    '</rss>',
  ].join('');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
