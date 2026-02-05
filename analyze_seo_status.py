#!/usr/bin/env python3
"""
SEO Analysis Script - Query GSC and Bing for indexing and performance data.
"""

import os
import asyncio
import aiohttp
import urllib.parse
from pathlib import Path
from datetime import datetime, timedelta
from dotenv import load_dotenv

# Load credentials
load_dotenv('.env.local')

SITE_URL = "https://www.mothebroker.com"
GSC_PROPERTY = os.getenv('GSC_PROPERTY_URL', 'sc-domain:mothebroker.com')
GSC_CREDENTIALS_PATH = os.getenv('GSC_CREDENTIALS_PATH', './gsc-credentials.json')
BING_API_KEY = os.getenv('BING_WEBMASTER_API_KEY')


def query_gsc_performance():
    """Query GSC Search Analytics API for performance data."""
    if not Path(GSC_CREDENTIALS_PATH).exists():
        print("[ERROR] GSC credentials not found at", GSC_CREDENTIALS_PATH)
        return None

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build

        credentials = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_PATH,
            scopes=['https://www.googleapis.com/auth/webmasters.readonly']
        )

        service = build('searchconsole', 'v1', credentials=credentials)

        # Query last 28 days of data
        end_date = datetime.now().strftime('%Y-%m-%d')
        start_date = (datetime.now() - timedelta(days=28)).strftime('%Y-%m-%d')

        # Overall performance summary
        print("\n" + "=" * 60)
        print("GSC PERFORMANCE SUMMARY (Last 28 days)")
        print("=" * 60)

        request = {
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': [],  # No dimensions = totals only
        }

        response = service.searchanalytics().query(
            siteUrl=GSC_PROPERTY,
            body=request
        ).execute()

        if 'rows' in response and response['rows']:
            row = response['rows'][0]
            print(f"Total Clicks:       {row.get('clicks', 0):,}")
            print(f"Total Impressions:  {row.get('impressions', 0):,}")
            ctr = row.get('ctr', 0) * 100
            print(f"Average CTR:        {ctr:.2f}%")
            print(f"Average Position:   {row.get('position', 0):.1f}")
        else:
            print("No performance data available yet.")

        # Top pages by impressions
        print("\n" + "-" * 60)
        print("TOP 20 PAGES BY IMPRESSIONS")
        print("-" * 60)

        request = {
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': ['page'],
            'rowLimit': 20,
            'orderBy': [{'field': 'impressions', 'sortOrder': 'DESCENDING'}]
        }

        response = service.searchanalytics().query(
            siteUrl=GSC_PROPERTY,
            body=request
        ).execute()

        if 'rows' in response:
            for i, row in enumerate(response['rows'], 1):
                page = row['keys'][0].replace(SITE_URL, '')
                clicks = row.get('clicks', 0)
                impressions = row.get('impressions', 0)
                ctr = row.get('ctr', 0) * 100
                pos = row.get('position', 0)
                print(f"{i:2}. {page[:50]:<50}")
                print(f"    Clicks: {clicks:5} | Impr: {impressions:6} | CTR: {ctr:5.2f}% | Pos: {pos:5.1f}")
        else:
            print("No page data available.")

        # Top queries
        print("\n" + "-" * 60)
        print("TOP 20 QUERIES")
        print("-" * 60)

        request = {
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': ['query'],
            'rowLimit': 20,
            'orderBy': [{'field': 'impressions', 'sortOrder': 'DESCENDING'}]
        }

        response = service.searchanalytics().query(
            siteUrl=GSC_PROPERTY,
            body=request
        ).execute()

        if 'rows' in response:
            for i, row in enumerate(response['rows'], 1):
                query = row['keys'][0]
                clicks = row.get('clicks', 0)
                impressions = row.get('impressions', 0)
                ctr = row.get('ctr', 0) * 100
                pos = row.get('position', 0)
                print(f"{i:2}. \"{query[:45]}\"")
                print(f"    Clicks: {clicks:5} | Impr: {impressions:6} | CTR: {ctr:5.2f}% | Pos: {pos:5.1f}")
        else:
            print("No query data available.")

        # Check sitemap status
        print("\n" + "-" * 60)
        print("SITEMAP STATUS")
        print("-" * 60)

        try:
            sitemaps = service.sitemaps().list(siteUrl=GSC_PROPERTY).execute()
            if 'sitemap' in sitemaps:
                for sm in sitemaps['sitemap']:
                    path = sm.get('path', 'Unknown')
                    submitted = sm.get('lastSubmitted', 'Never')
                    downloaded = sm.get('lastDownloaded', 'Never')
                    errors = sm.get('errors', 0)
                    warnings = sm.get('warnings', 0)
                    contents = sm.get('contents', [])

                    print(f"\nSitemap: {path}")
                    print(f"  Last Submitted:  {submitted}")
                    print(f"  Last Downloaded: {downloaded}")
                    print(f"  Errors: {errors} | Warnings: {warnings}")

                    for content in contents:
                        content_type = content.get('type', 'Unknown')
                        submitted_count = content.get('submitted', 0)
                        indexed_count = content.get('indexed', 0)
                        print(f"  {content_type}: {indexed_count}/{submitted_count} indexed")
            else:
                print("No sitemaps found in GSC.")
        except Exception as e:
            print(f"Could not retrieve sitemap status: {e}")

        # URL Inspection API (sample 5 important URLs)
        print("\n" + "-" * 60)
        print("URL INSPECTION (Sample Pages)")
        print("-" * 60)

        sample_urls = [
            SITE_URL + "/",
            SITE_URL + "/loan-programs",
            SITE_URL + "/areas/irvine-mortgage-broker",
            SITE_URL + "/blog/newport-beach-mortgage-guide-2026",
            SITE_URL + "/guides/orange-county-home-buyer-guide",
        ]

        for url in sample_urls:
            try:
                inspect_result = service.urlInspection().index().inspect(
                    body={
                        "inspectionUrl": url,
                        "siteUrl": GSC_PROPERTY
                    }
                ).execute()

                result = inspect_result.get('inspectionResult', {})
                index_status = result.get('indexStatusResult', {})

                verdict = index_status.get('verdict', 'UNKNOWN')
                coverage = index_status.get('coverageState', 'Unknown')
                crawled = index_status.get('lastCrawlTime', 'Never')
                robot_blocked = index_status.get('robotsTxtState', 'Unknown')
                indexing_allowed = index_status.get('indexingState', 'Unknown')

                short_url = url.replace(SITE_URL, '')
                print(f"\n{short_url}")
                print(f"  Verdict:          {verdict}")
                print(f"  Coverage:         {coverage}")
                print(f"  Last Crawled:     {crawled}")
                print(f"  Robots.txt:       {robot_blocked}")
                print(f"  Indexing State:   {indexing_allowed}")

            except Exception as e:
                short_url = url.replace(SITE_URL, '')
                print(f"\n{short_url}")
                print(f"  [ERROR] {str(e)[:60]}")

        return True

    except Exception as e:
        print(f"[ERROR] GSC API error: {e}")
        return None


async def query_bing_status():
    """Query Bing Webmaster Tools API."""
    if not BING_API_KEY:
        print("\n[SKIP] Bing API key not configured")
        return None

    print("\n" + "=" * 60)
    print("BING WEBMASTER TOOLS")
    print("=" * 60)

    encoded_site = urllib.parse.quote(SITE_URL, safe='')

    async with aiohttp.ClientSession() as session:
        # URL Submission Quota
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    quota = data.get('d', {})
                    print(f"\nURL Submission Quota:")
                    print(f"  Daily Remaining:   {quota.get('DailyQuota', 'N/A')}")
                    print(f"  Monthly Remaining: {quota.get('MonthlyQuota', 'N/A')}")
        except Exception as e:
            print(f"[ERROR] Quota check: {e}")

        # Crawl Statistics
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetCrawlStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    stats = data.get('d', [])
                    if stats:
                        print(f"\nCrawl Statistics (Recent):")
                        # Show last 7 days
                        for stat in stats[:7]:
                            date = stat.get('Date', 'Unknown')
                            crawled = stat.get('CrawledPages', 0)
                            errors = stat.get('CrawlErrors', 0)
                            print(f"  {date}: {crawled} pages crawled, {errors} errors")
        except Exception as e:
            print(f"[ERROR] Crawl stats: {e}")

        # Page Traffic (Top Pages)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetPageTraffic?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    pages = data.get('d', [])
                    if pages:
                        print(f"\nTop Pages by Traffic (Bing):")
                        for i, page in enumerate(pages[:10], 1):
                            page_url = page.get('Url', 'Unknown')
                            clicks = page.get('Clicks', 0)
                            impressions = page.get('Impressions', 0)
                            short_url = page_url.replace(SITE_URL, '')[:50]
                            print(f"  {i:2}. {short_url}")
                            print(f"      Clicks: {clicks} | Impressions: {impressions}")
                    else:
                        print("\nNo page traffic data available from Bing yet.")
        except Exception as e:
            print(f"[ERROR] Page traffic: {e}")

        # Query Stats
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    queries = data.get('d', [])
                    if queries:
                        print(f"\nTop Queries (Bing):")
                        for i, q in enumerate(queries[:10], 1):
                            query = q.get('Query', 'Unknown')
                            clicks = q.get('Clicks', 0)
                            impressions = q.get('Impressions', 0)
                            print(f"  {i:2}. \"{query[:40]}\"")
                            print(f"      Clicks: {clicks} | Impressions: {impressions}")
                    else:
                        print("\nNo query data available from Bing yet.")
        except Exception as e:
            print(f"[ERROR] Query stats: {e}")

        # URL Info for key pages
        print(f"\nURL Index Status (Bing):")
        sample_urls = [
            SITE_URL + "/",
            SITE_URL + "/loan-programs",
            SITE_URL + "/areas/irvine-mortgage-broker",
        ]

        for test_url in sample_urls:
            try:
                encoded_url = urllib.parse.quote(test_url, safe='')
                api_url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlInfo?siteUrl={encoded_site}&url={encoded_url}&apikey={BING_API_KEY}"
                async with session.get(api_url) as response:
                    if response.status == 200:
                        data = await response.json()
                        info = data.get('d', {})
                        short_url = test_url.replace(SITE_URL, '')
                        discovered = info.get('DateDiscovered', 'Not discovered')
                        crawled = info.get('DateCrawled', 'Never crawled')
                        http_code = info.get('HttpCode', 'N/A')
                        print(f"\n  {short_url}")
                        print(f"    Discovered: {discovered}")
                        print(f"    Crawled:    {crawled}")
                        print(f"    HTTP Code:  {http_code}")
            except Exception as e:
                short_url = test_url.replace(SITE_URL, '')
                print(f"\n  {short_url}: [ERROR] {str(e)[:40]}")

    return True


async def main():
    print("=" * 60)
    print("SEO STATUS ANALYSIS: mothebroker.com")
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    # Query GSC
    query_gsc_performance()

    # Query Bing
    await query_bing_status()

    print("\n" + "=" * 60)
    print("ANALYSIS COMPLETE")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(main())
