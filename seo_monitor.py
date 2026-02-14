#!/usr/bin/env python3
"""
SEO Monitoring Script - Track indexing and performance over time.
Run weekly to track progress against projections.

Usage:
  python seo_monitor.py           # Run full report
  python seo_monitor.py --quick   # Quick summary only
  python seo_monitor.py --compare # Compare to previous reports
"""

import os
import sys
import json
import asyncio
import aiohttp
import urllib.parse
from pathlib import Path
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv('.env.local')

# Configuration
SITE_URL = "https://www.mothebroker.com"
GSC_PROPERTY = os.getenv('GSC_PROPERTY_URL', 'sc-domain:mothebroker.com')
GSC_CREDENTIALS_PATH = os.getenv('GSC_CREDENTIALS_PATH', './gsc-credentials.json')
BING_API_KEY = os.getenv('BING_WEBMASTER_API_KEY')
REPORTS_DIR = Path("reports/seo-monitor")

# Projections (from our analysis)
PROJECTIONS = {
    "week_4": {
        "indexed_pages_google": 45,  # midpoint of 30-60
        "indexed_pages_bing": 22,    # midpoint of 15-30
        "impressions_google": 2000,  # midpoint of 1500-2500
        "clicks_google": 10,
    },
    "week_8": {
        "indexed_pages_google": 125, # midpoint of 100-150
        "indexed_pages_bing": 65,    # midpoint of 50-80
        "impressions_google": 7500,  # midpoint of 5000-10000
        "clicks_google": 100,        # midpoint of 50-150
    },
    "week_12": {
        "indexed_pages_google": 225, # midpoint of 200-250
        "indexed_pages_bing": 125,   # midpoint of 100-150
        "impressions_google": 22500, # midpoint of 15000-30000
        "clicks_google": 350,        # midpoint of 200-500
    }
}

# Baseline from today (2026-02-04)
BASELINE = {
    "date": "2026-02-04",
    "indexed_pages_google": 5,
    "indexed_pages_bing": 3,
    "impressions_google": 797,
    "clicks_google": 2,
    "avg_position": 20.0,
    "ctr": 0.25
}


def ensure_reports_dir():
    """Create reports directory if needed."""
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)


def get_report_filename():
    """Generate filename for today's report."""
    date_str = datetime.now().strftime('%Y-%m-%d')
    return REPORTS_DIR / f"seo-report-{date_str}.json"


def load_previous_reports():
    """Load all previous reports for comparison."""
    reports = []
    if REPORTS_DIR.exists():
        for file in sorted(REPORTS_DIR.glob("seo-report-*.json")):
            try:
                with open(file) as f:
                    reports.append(json.load(f))
            except:
                pass
    return reports


def get_gsc_data():
    """Get data from Google Search Console."""
    if not Path(GSC_CREDENTIALS_PATH).exists():
        return None

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build

        credentials = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_PATH,
            scopes=['https://www.googleapis.com/auth/webmasters.readonly']
        )

        service = build('searchconsole', 'v1', credentials=credentials)

        # Date range: last 28 days
        end_date = datetime.now().strftime('%Y-%m-%d')
        start_date = (datetime.now() - timedelta(days=28)).strftime('%Y-%m-%d')

        data = {
            "performance": {},
            "sitemaps": [],
            "indexed_estimate": 0
        }

        # 1. Performance summary
        try:
            request = {
                'startDate': start_date,
                'endDate': end_date,
                'dimensions': [],
            }
            response = service.searchanalytics().query(
                siteUrl=GSC_PROPERTY,
                body=request
            ).execute()

            if 'rows' in response and response['rows']:
                row = response['rows'][0]
                data['performance'] = {
                    'clicks': row.get('clicks', 0),
                    'impressions': row.get('impressions', 0),
                    'ctr': round(row.get('ctr', 0) * 100, 2),
                    'position': round(row.get('position', 0), 1)
                }
        except Exception as e:
            print(f"  [WARN] Performance query failed: {e}")

        # 2. Top queries
        try:
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

            data['top_queries'] = []
            if 'rows' in response:
                for row in response['rows'][:10]:
                    data['top_queries'].append({
                        'query': row['keys'][0],
                        'clicks': row.get('clicks', 0),
                        'impressions': row.get('impressions', 0),
                        'position': round(row.get('position', 0), 1)
                    })
        except:
            pass

        # 3. Top pages
        try:
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

            data['top_pages'] = []
            data['pages_with_impressions'] = 0
            if 'rows' in response:
                data['pages_with_impressions'] = len(response['rows'])
                for row in response['rows'][:10]:
                    data['top_pages'].append({
                        'page': row['keys'][0].replace(SITE_URL, ''),
                        'clicks': row.get('clicks', 0),
                        'impressions': row.get('impressions', 0),
                        'position': round(row.get('position', 0), 1)
                    })
        except:
            pass

        # 4. Sitemap status
        try:
            sitemaps = service.sitemaps().list(siteUrl=GSC_PROPERTY).execute()
            if 'sitemap' in sitemaps:
                for sm in sitemaps['sitemap']:
                    sitemap_data = {
                        'url': sm.get('path', ''),
                        'last_submitted': sm.get('lastSubmitted', ''),
                        'last_downloaded': sm.get('lastDownloaded', ''),
                        'errors': sm.get('errors', 0),
                        'warnings': sm.get('warnings', 0),
                    }
                    # Get indexed count from contents
                    contents = sm.get('contents', [])
                    for content in contents:
                        if content.get('type') == 'web':
                            sitemap_data['submitted'] = content.get('submitted', 0)
                            sitemap_data['indexed'] = content.get('indexed', 0)
                            data['indexed_estimate'] = content.get('indexed', 0)

                    data['sitemaps'].append(sitemap_data)
        except:
            pass

        # 5. Sample URL inspections
        sample_urls = [
            f"{SITE_URL}/",
            f"{SITE_URL}/loan-programs",
            f"{SITE_URL}/blog",
        ]

        data['url_status'] = {}
        for url in sample_urls:
            try:
                result = service.urlInspection().index().inspect(
                    body={"inspectionUrl": url, "siteUrl": GSC_PROPERTY}
                ).execute()
                index_status = result.get('inspectionResult', {}).get('indexStatusResult', {})
                data['url_status'][url.replace(SITE_URL, '') or '/'] = {
                    'verdict': index_status.get('verdict', 'UNKNOWN'),
                    'coverage': index_status.get('coverageState', 'Unknown'),
                }
            except:
                pass

        return data

    except Exception as e:
        print(f"[ERROR] GSC: {e}")
        return None


async def get_bing_data():
    """Get data from Bing Webmaster Tools."""
    if not BING_API_KEY:
        return None

    encoded_site = urllib.parse.quote(SITE_URL, safe='')
    data = {
        "crawl_stats": [],
        "indexed_estimate": 0,
        "queries": []
    }

    async with aiohttp.ClientSession() as session:
        # 1. Crawl statistics
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetCrawlStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    result = await response.json()
                    stats = result.get('d', [])
                    if stats:
                        # Get most recent "InIndex" value
                        for stat in stats[:1]:
                            data['indexed_estimate'] = stat.get('InIndex', 0)

                        # Get crawl totals for last 14 days
                        total_crawled = sum(s.get('CrawledPages', 0) for s in stats[:14])
                        total_errors = sum(s.get('CrawlErrors', 0) for s in stats[:14])
                        data['crawl_stats'] = {
                            'pages_crawled_14d': total_crawled,
                            'errors_14d': total_errors
                        }
        except:
            pass

        # 2. Query stats
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    result = await response.json()
                    queries = result.get('d', [])
                    total_impressions = sum(q.get('Impressions', 0) for q in queries)
                    total_clicks = sum(q.get('Clicks', 0) for q in queries)
                    data['total_impressions'] = total_impressions
                    data['total_clicks'] = total_clicks
                    data['queries'] = [
                        {'query': q.get('Query', ''), 'impressions': q.get('Impressions', 0)}
                        for q in queries[:5]
                    ]
        except:
            pass

        # 3. URL quota (to verify API working)
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    result = await response.json()
                    quota = result.get('d', {})
                    data['quota'] = {
                        'daily': quota.get('DailyQuota', 0),
                        'monthly': quota.get('MonthlyQuota', 0)
                    }
        except:
            pass

    return data


def calculate_progress(current, baseline, projection_week):
    """Calculate progress percentage toward projection."""
    if projection_week not in PROJECTIONS:
        return None

    projection = PROJECTIONS[projection_week]
    progress = {}

    for key in projection:
        # Get baseline value - use exact key match first
        if key in baseline:
            baseline_val = baseline[key]
        elif key == 'indexed_pages_google':
            baseline_val = baseline.get('indexed_pages_google', 5)
        elif key == 'indexed_pages_bing':
            baseline_val = baseline.get('indexed_pages_bing', 3)
        elif key == 'impressions_google':
            baseline_val = baseline.get('impressions_google', 797)
        elif key == 'clicks_google':
            baseline_val = baseline.get('clicks_google', 2)
        else:
            baseline_val = 0

        # Ensure all values are numeric (handles None and string cases)
        try:
            current_val = int(current.get(key, 0) or 0)
        except (TypeError, ValueError):
            current_val = 0

        try:
            target_val = int(projection[key])
        except (TypeError, ValueError):
            target_val = 0

        try:
            baseline_val = int(baseline_val) if baseline_val is not None else 0
        except (TypeError, ValueError):
            baseline_val = 0

        if target_val > baseline_val:
            pct = ((current_val - baseline_val) / (target_val - baseline_val)) * 100
            progress[key] = {
                'current': current_val,
                'target': target_val,
                'baseline': baseline_val,
                'progress_pct': round(max(0, min(100, pct)), 1)
            }

    return progress


def print_report(gsc_data, bing_data, previous_reports):
    """Print formatted report."""
    print("\n" + "=" * 70)
    print("SEO MONITORING REPORT: mothebroker.com")
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 70)

    # Calculate days since baseline
    baseline_date = datetime.strptime(BASELINE['date'], '%Y-%m-%d')
    days_elapsed = (datetime.now() - baseline_date).days
    weeks_elapsed = days_elapsed / 7

    print(f"\nDays since optimization: {days_elapsed} (Week {weeks_elapsed:.1f})")

    # Current metrics
    print("\n" + "-" * 70)
    print("CURRENT METRICS")
    print("-" * 70)

    current = {}

    if gsc_data:
        perf = gsc_data.get('performance', {})
        try:
            indexed = int(gsc_data.get('indexed_estimate', 0) or 0)
        except (TypeError, ValueError):
            indexed = 0

        current['impressions_google'] = int(perf.get('impressions', 0) or 0)
        current['clicks_google'] = int(perf.get('clicks', 0) or 0)
        current['indexed_pages_google'] = indexed

        print(f"\nGoogle Search Console (28 days):")
        print(f"  Indexed Pages:    {indexed} (was {BASELINE['indexed_pages_google']})")
        print(f"  Impressions:      {perf.get('impressions', 0):,} (was {BASELINE['impressions_google']})")
        print(f"  Clicks:           {perf.get('clicks', 0):,} (was {BASELINE['clicks_google']})")
        print(f"  CTR:              {perf.get('ctr', 0):.2f}% (was {BASELINE['ctr']}%)")
        print(f"  Avg Position:     {perf.get('position', 0):.1f} (was {BASELINE['avg_position']})")

        # URL status
        if gsc_data.get('url_status'):
            print(f"\n  Key Page Status:")
            for url, status in gsc_data['url_status'].items():
                verdict = status.get('verdict', 'UNKNOWN')
                icon = "[OK]" if verdict == 'PASS' else "[--]"
                print(f"    {icon} {url}: {status.get('coverage', 'Unknown')}")

    if bing_data:
        try:
            bing_indexed = int(bing_data.get('indexed_estimate', 0) or 0)
        except (TypeError, ValueError):
            bing_indexed = 0
        current['indexed_pages_bing'] = bing_indexed

        print(f"\nBing Webmaster Tools:")
        print(f"  Indexed Pages:    {bing_indexed} (was {BASELINE['indexed_pages_bing']})")
        print(f"  Impressions:      {bing_data.get('total_impressions', 0)}")
        print(f"  Clicks:           {bing_data.get('total_clicks', 0)}")
        if bing_data.get('crawl_stats'):
            cs = bing_data['crawl_stats']
            print(f"  Crawled (14d):    {cs.get('pages_crawled_14d', 0)}")
            print(f"  Errors (14d):     {cs.get('errors_14d', 0)}")

    # Progress toward projections
    print("\n" + "-" * 70)
    print("PROGRESS TOWARD PROJECTIONS")
    print("-" * 70)

    # Determine which projection to compare against
    if weeks_elapsed < 4:
        target_week = "week_4"
        target_label = "Week 4"
    elif weeks_elapsed < 8:
        target_week = "week_8"
        target_label = "Week 8"
    else:
        target_week = "week_12"
        target_label = "Week 12"

    progress = calculate_progress(current, BASELINE, target_week)

    if progress:
        print(f"\nTarget: {target_label} projections")
        print(f"{'Metric':<25} {'Current':>10} {'Target':>10} {'Progress':>10}")
        print("-" * 55)

        for key, data in progress.items():
            label = key.replace('_', ' ').title()
            bar_len = int(data['progress_pct'] / 5)
            bar = '#' * bar_len + '-' * (20 - bar_len)
            print(f"{label:<25} {data['current']:>10,} {data['target']:>10,} {data['progress_pct']:>8.1f}%")

    # Top queries
    if gsc_data and gsc_data.get('top_queries'):
        print("\n" + "-" * 70)
        print("TOP QUERIES (Google)")
        print("-" * 70)
        print(f"{'Query':<40} {'Clicks':>8} {'Impr':>8} {'Pos':>6}")
        print("-" * 62)
        for q in gsc_data['top_queries'][:10]:
            query = q['query'][:39]
            print(f"{query:<40} {q['clicks']:>8} {q['impressions']:>8} {q['position']:>6.1f}")

    # Top pages
    if gsc_data and gsc_data.get('top_pages'):
        print("\n" + "-" * 70)
        print("TOP PAGES (Google)")
        print("-" * 70)
        for p in gsc_data['top_pages'][:5]:
            print(f"  {p['page'][:50]}")
            print(f"    Clicks: {p['clicks']} | Impressions: {p['impressions']} | Position: {p['position']}")

    # Week-over-week comparison
    if previous_reports:
        print("\n" + "-" * 70)
        print("WEEK-OVER-WEEK CHANGE")
        print("-" * 70)

        last_report = previous_reports[-1]
        last_gsc = last_report.get('gsc', {})
        last_perf = last_gsc.get('performance', {})

        if gsc_data and last_perf:
            curr_perf = gsc_data.get('performance', {})

            metrics = [
                ('Impressions', 'impressions', curr_perf.get('impressions', 0), last_perf.get('impressions', 0)),
                ('Clicks', 'clicks', curr_perf.get('clicks', 0), last_perf.get('clicks', 0)),
                ('Avg Position', 'position', curr_perf.get('position', 0), last_perf.get('position', 0)),
            ]

            for label, key, curr, prev in metrics:
                if prev > 0:
                    if key == 'position':
                        # Lower is better for position
                        change = prev - curr
                        pct = (change / prev) * 100
                        direction = "improved" if change > 0 else "declined"
                    else:
                        change = curr - prev
                        pct = (change / prev) * 100
                        direction = "up" if change > 0 else "down"

                    print(f"  {label}: {curr:,.1f} ({direction} {abs(pct):.1f}% from {prev:,.1f})")

    # Recommendations
    print("\n" + "-" * 70)
    print("RECOMMENDATIONS")
    print("-" * 70)

    if gsc_data:
        try:
            indexed = int(gsc_data.get('indexed_estimate', 0) or 0)
        except (TypeError, ValueError):
            indexed = 0
        if indexed < 50:
            print("  [!] Low indexing - Consider building backlinks to increase authority")

        try:
            position = float(gsc_data.get('performance', {}).get('position', 100) or 100)
        except (TypeError, ValueError):
            position = 100
        if position > 20:
            print("  [!] Avg position > 20 - Focus on content quality and internal linking")

        try:
            ctr = float(gsc_data.get('performance', {}).get('ctr', 0) or 0)
        except (TypeError, ValueError):
            ctr = 0
        if ctr < 1:
            print("  [!] Low CTR - Improve title tags and meta descriptions")

    print("\n" + "=" * 70)


def save_report(gsc_data, bing_data):
    """Save report to JSON file."""
    ensure_reports_dir()

    report = {
        "date": datetime.now().isoformat(),
        "gsc": gsc_data,
        "bing": bing_data,
        "baseline": BASELINE
    }

    filename = get_report_filename()
    with open(filename, 'w') as f:
        json.dump(report, f, indent=2, default=str)

    print(f"\nReport saved to: {filename}")


async def main():
    quick_mode = '--quick' in sys.argv
    compare_mode = '--compare' in sys.argv

    print("Fetching SEO data...")

    # Get data from both sources
    gsc_data = get_gsc_data()
    bing_data = await get_bing_data()

    # Load previous reports
    previous_reports = load_previous_reports()

    # Print report
    print_report(gsc_data, bing_data, previous_reports)

    # Save report
    if not quick_mode:
        save_report(gsc_data, bing_data)


if __name__ == "__main__":
    asyncio.run(main())
