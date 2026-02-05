#!/usr/bin/env python3
"""
Bing Webmaster Tools Analysis - Detailed indexing and performance check.
"""

import os
import asyncio
import aiohttp
import urllib.parse
from datetime import datetime
from dotenv import load_dotenv

load_dotenv('.env.local')

SITE_URL = "https://www.mothebroker.com"
BING_API_KEY = os.getenv('BING_WEBMASTER_API_KEY')

async def main():
    if not BING_API_KEY:
        print("[ERROR] BING_WEBMASTER_API_KEY not found in .env.local")
        return

    encoded_site = urllib.parse.quote(SITE_URL, safe='')

    print("=" * 70)
    print("BING WEBMASTER TOOLS - DETAILED ANALYSIS")
    print(f"Site: {SITE_URL}")
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 70)

    async with aiohttp.ClientSession() as session:

        # 1. Site Information
        print("\n" + "-" * 70)
        print("SITE VERIFICATION STATUS")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetSites?apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    sites = data.get('d', [])
                    for site in sites:
                        site_url = site.get('Url', '')
                        if 'mothebroker' in site_url.lower():
                            print(f"Site URL:        {site_url}")
                            print(f"Verified:        {site.get('IsVerified', 'Unknown')}")
                            print(f"Auth Code:       {site.get('AuthenticationCode', 'N/A')[:20]}...")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 2. URL Submission Quota
        print("\n" + "-" * 70)
        print("URL SUBMISSION QUOTA")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    quota = data.get('d', {})
                    print(f"Daily Quota Remaining:   {quota.get('DailyQuota', 'N/A')}")
                    print(f"Monthly Quota Remaining: {quota.get('MonthlyQuota', 'N/A')}")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 3. Crawl Statistics (Last 14 days)
        print("\n" + "-" * 70)
        print("CRAWL STATISTICS (Last 14 Days)")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetCrawlStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    stats = data.get('d', [])
                    if stats:
                        total_crawled = 0
                        total_errors = 0
                        print(f"{'Date':<12} {'Crawled':<10} {'Errors':<10} {'In Index':<10}")
                        print("-" * 42)
                        for stat in stats[:14]:
                            # Parse date from /Date(timestamp)/
                            date_str = stat.get('Date', '')
                            try:
                                ts = int(date_str.replace('/Date(', '').replace(')/', '').split('-')[0].split('+')[0])
                                date = datetime.fromtimestamp(ts / 1000).strftime('%Y-%m-%d')
                            except:
                                date = date_str[:10]

                            crawled = stat.get('CrawledPages', 0)
                            errors = stat.get('CrawlErrors', 0)
                            in_index = stat.get('InIndex', 'N/A')
                            total_crawled += crawled
                            total_errors += errors
                            print(f"{date:<12} {crawled:<10} {errors:<10} {in_index:<10}")

                        print("-" * 42)
                        print(f"{'TOTAL':<12} {total_crawled:<10} {total_errors:<10}")
                    else:
                        print("No crawl data available")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 4. Crawl Issues
        print("\n" + "-" * 70)
        print("CRAWL ISSUES")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetCrawlIssues?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    issues = data.get('d', [])
                    if issues:
                        # Group by issue type
                        issue_counts = {}
                        for issue in issues:
                            issue_type = issue.get('Issue', 'Unknown')
                            issue_counts[issue_type] = issue_counts.get(issue_type, 0) + 1

                        print(f"{'Issue Type':<40} {'Count':<10}")
                        print("-" * 50)
                        for issue_type, count in sorted(issue_counts.items(), key=lambda x: -x[1]):
                            print(f"{issue_type:<40} {count:<10}")

                        # Show sample URLs for top issues
                        print("\nSample URLs with issues:")
                        shown = 0
                        for issue in issues[:10]:
                            print(f"  - {issue.get('Url', 'Unknown')[:60]}")
                            print(f"    Issue: {issue.get('Issue', 'Unknown')}")
                            shown += 1
                            if shown >= 5:
                                break
                    else:
                        print("No crawl issues found! [OK]")
                else:
                    text = await response.text()
                    print(f"[ERROR] Status {response.status}: {text[:100]}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 5. Page Traffic (Top Pages)
        print("\n" + "-" * 70)
        print("TOP PAGES BY TRAFFIC")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetPageTraffic?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    pages = data.get('d', [])
                    if pages:
                        print(f"{'#':<3} {'Page':<45} {'Clicks':<8} {'Impr':<8}")
                        print("-" * 64)
                        for i, page in enumerate(pages[:20], 1):
                            page_url = page.get('Url', 'Unknown').replace(SITE_URL, '')[:44]
                            clicks = page.get('Clicks', 0)
                            impressions = page.get('Impressions', 0)
                            print(f"{i:<3} {page_url:<45} {clicks:<8} {impressions:<8}")
                    else:
                        print("No page traffic data available yet.")
                        print("(This is normal for new sites - Bing needs time to collect data)")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 6. Query Statistics (Top Keywords)
        print("\n" + "-" * 70)
        print("TOP SEARCH QUERIES")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    queries = data.get('d', [])
                    if queries:
                        print(f"{'#':<3} {'Query':<40} {'Clicks':<8} {'Impr':<8} {'Pos':<6}")
                        print("-" * 65)
                        for i, q in enumerate(queries[:20], 1):
                            query = q.get('Query', 'Unknown')[:39]
                            clicks = q.get('Clicks', 0)
                            impressions = q.get('Impressions', 0)
                            position = q.get('AvgPosition', 0)
                            print(f"{i:<3} {query:<40} {clicks:<8} {impressions:<8} {position:<6.1f}")
                    else:
                        print("No query data available yet.")
                        print("(This is normal for new sites)")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 7. Keyword Research (What Bing thinks your site is about)
        print("\n" + "-" * 70)
        print("BING'S KEYWORD UNDERSTANDING")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetKeywordStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    keywords = data.get('d', [])
                    if keywords:
                        print("Keywords Bing associates with your site:")
                        for i, kw in enumerate(keywords[:15], 1):
                            keyword = kw.get('Keyword', 'Unknown')
                            impressions = kw.get('Impressions', 0)
                            print(f"  {i:2}. {keyword} ({impressions} impressions)")
                    else:
                        print("No keyword data available yet.")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 8. Sitemap Status
        print("\n" + "-" * 70)
        print("SITEMAP STATUS")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetSitemaps?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    sitemaps = data.get('d', [])
                    if sitemaps:
                        for sm in sitemaps:
                            print(f"\nSitemap: {sm.get('Url', 'Unknown')}")
                            print(f"  Status:           {sm.get('Status', 'Unknown')}")
                            print(f"  Last Submitted:   {sm.get('LastSubmitted', 'Never')}")
                            print(f"  Last Crawled:     {sm.get('LastCrawled', 'Never')}")
                            print(f"  URLs Submitted:   {sm.get('UrlCount', 0)}")
                            print(f"  URLs in Index:    {sm.get('InIndex', 0)}")
                            print(f"  Errors:           {sm.get('Errors', 0)}")
                            print(f"  Warnings:         {sm.get('Warnings', 0)}")
                    else:
                        print("No sitemaps found! You should submit your sitemap.")
                        print(f"Submit: {SITE_URL}/sitemap.xml")
                else:
                    print(f"[ERROR] Status {response.status}")
        except Exception as e:
            print(f"[ERROR] {e}")

        # 9. URL Index Status (Sample key pages)
        print("\n" + "-" * 70)
        print("URL INDEX STATUS (Key Pages)")
        print("-" * 70)

        sample_urls = [
            "/",
            "/loan-programs",
            "/areas/irvine-mortgage-broker",
            "/areas/newport-beach-mortgage-broker",
            "/blog/newport-beach-mortgage-guide-2026",
            "/blog/wholesale-vs-retail-mortgage-complete-2026",
            "/resources/mortgage-glossary",
            "/guides/orange-county-home-buyer-guide",
        ]

        for path in sample_urls:
            test_url = SITE_URL + path
            try:
                encoded_url = urllib.parse.quote(test_url, safe='')
                api_url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlInfo?siteUrl={encoded_site}&url={encoded_url}&apikey={BING_API_KEY}"
                async with session.get(api_url) as response:
                    if response.status == 200:
                        data = await response.json()
                        info = data.get('d', {})

                        discovered = info.get('DateDiscovered', 'Not discovered')
                        crawled = info.get('DateCrawled', 'Never')
                        http_code = info.get('HttpCode', 'N/A')
                        in_index = info.get('IsInIndex', 'Unknown')

                        # Parse dates
                        if discovered and '/Date(' in str(discovered):
                            try:
                                ts = int(str(discovered).replace('/Date(', '').replace(')/', '').split('-')[0].split('+')[0])
                                discovered = datetime.fromtimestamp(ts / 1000).strftime('%Y-%m-%d')
                            except:
                                pass
                        if crawled and '/Date(' in str(crawled):
                            try:
                                ts = int(str(crawled).replace('/Date(', '').replace(')/', '').split('-')[0].split('+')[0])
                                crawled = datetime.fromtimestamp(ts / 1000).strftime('%Y-%m-%d')
                            except:
                                pass

                        status = "[INDEXED]" if in_index else "[NOT INDEXED]"
                        print(f"\n{path}")
                        print(f"  Status:     {status}")
                        print(f"  Discovered: {discovered}")
                        print(f"  Crawled:    {crawled}")
                        print(f"  HTTP Code:  {http_code}")
                    else:
                        print(f"\n{path}")
                        print(f"  [No data available]")
            except Exception as e:
                print(f"\n{path}")
                print(f"  [ERROR] {str(e)[:50]}")

        # 10. Backlinks
        print("\n" + "-" * 70)
        print("BACKLINK SUMMARY")
        print("-" * 70)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetLinkCounts?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    links = data.get('d', {})
                    print(f"Total Inbound Links: {links.get('InboundLinkCount', 0)}")
                    print(f"Linking Domains:     {links.get('LinkingDomainCount', 0)}")
                else:
                    print("No backlink data available")
        except Exception as e:
            print(f"[ERROR] {e}")

        # Summary
        print("\n" + "=" * 70)
        print("ANALYSIS COMPLETE")
        print("=" * 70)


if __name__ == "__main__":
    asyncio.run(main())
