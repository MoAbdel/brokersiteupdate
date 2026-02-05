#!/usr/bin/env python3
"""
Fix Indexing Issues - Request re-indexing for key pages.
"""

import os
from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv

load_dotenv('.env.local')

SITE_URL = "https://www.mothebroker.com"
GSC_PROPERTY = os.getenv('GSC_PROPERTY_URL', 'sc-domain:mothebroker.com')
GSC_CREDENTIALS_PATH = os.getenv('GSC_CREDENTIALS_PATH', './gsc-credentials.json')

# Priority URLs that need immediate re-indexing (were 404, now fixed)
PRIORITY_URLS = [
    # Pages that were 404 in GSC
    "/loan-programs",
    "/guides/orange-county-home-buyer-guide",

    # High-value pages that are "Discovered - not indexed"
    "/blog/newport-beach-mortgage-guide-2026",
    "/blog/laguna-beach-mortgage-guide-2026",
    "/blog/irvine-mortgage-guide-2026",
    "/blog/dana-point-mortgage-guide-2026",

    # Core money pages
    "/",
    "/areas/irvine-mortgage-broker",
    "/areas/newport-beach-mortgage-broker",
    "/areas/huntington-beach-mortgage-broker",
    "/loan-programs/conventional-loans",
    "/loan-programs/fha-loans",
    "/loan-programs/heloc",
    "/loan-programs/jumbo-loans",
    "/loan-programs/va-refinance",

    # Resource pages
    "/resources/mortgage-glossary",
    "/resources/document-checklist",
    "/guides/orange-county-refinancing-guide",

    # Recent blog posts
    "/blog/wholesale-vs-retail-mortgage-complete-2026",
    "/blog/fha-loans-orange-county-2026",
    "/blog/heloc-complete-guide-2026",
]


def request_indexing_via_api():
    """Use Google Indexing API to request URL indexing."""
    if not Path(GSC_CREDENTIALS_PATH).exists():
        print("[ERROR] GSC credentials not found")
        return

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build

        # Note: Indexing API requires specific scope
        credentials = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_PATH,
            scopes=['https://www.googleapis.com/auth/indexing']
        )

        service = build('indexing', 'v3', credentials=credentials)

        print("=" * 60)
        print("REQUESTING RE-INDEXING VIA GOOGLE INDEXING API")
        print("=" * 60)

        success = 0
        failed = 0

        for path in PRIORITY_URLS:
            url = SITE_URL + path
            try:
                body = {"url": url, "type": "URL_UPDATED"}
                response = service.urlNotifications().publish(body=body).execute()
                print(f"[OK] {path}")
                success += 1
            except Exception as e:
                error_msg = str(e)
                if "quota" in error_msg.lower():
                    print(f"[QUOTA] Reached quota limit after {success} URLs")
                    failed = len(PRIORITY_URLS) - success
                    break
                elif "403" in error_msg or "forbidden" in error_msg.lower():
                    print(f"[SKIP] {path} - Indexing API not enabled for this URL type")
                    failed += 1
                else:
                    print(f"[FAIL] {path}: {error_msg[:50]}")
                    failed += 1

        print(f"\nResults: {success} succeeded, {failed} failed")

        if failed > 0:
            print("\nNote: Google Indexing API only works for pages with JobPosting or")
            print("BroadcastEvent schema. For regular pages, use URL Inspection manually")
            print("or submit via sitemap + IndexNow.")

    except Exception as e:
        print(f"[ERROR] {e}")


def check_sitemap_issues():
    """Analyze sitemap for issues."""
    print("\n" + "=" * 60)
    print("SITEMAP ANALYSIS")
    print("=" * 60)

    sitemap_path = Path("public/sitemap.xml")
    if not sitemap_path.exists():
        print("[ERROR] Sitemap not found")
        return

    content = sitemap_path.read_text()

    # Check for non-www URLs
    non_www_count = content.count("https://mothebroker.com/")
    www_count = content.count("https://www.mothebroker.com/")

    print(f"URLs with www:     {www_count}")
    print(f"URLs without www:  {non_www_count}")

    if non_www_count > 0:
        print("\n[WARNING] Found non-www URLs in sitemap - these should all be www")

    # Check for redirect URLs that shouldn't be in sitemap
    redirect_urls = [
        "/blog/200-lender-advantage<",  # Old redirect
        "/blog/bank-statement-loans-wholesale<",  # Redirects to -2026
        "/blog/cash-out-refinance-how-it-works<",
        "/blog/mortgage-broker-vs-bank<",
        "/blog/heloc-vs-home-equity-loan<",
        "/blog/how-does-heloc-work<",
    ]

    found_redirects = []
    for url in redirect_urls:
        if url.replace("<", "") in content and url.replace("<", "-2026") not in content:
            found_redirects.append(url.replace("<", ""))

    if found_redirects:
        print(f"\n[WARNING] Found {len(found_redirects)} redirect source URLs in sitemap:")
        for url in found_redirects[:5]:
            print(f"  - {url}")
        print("  These URLs redirect and shouldn't be in sitemap")

    # Count total URLs
    import re
    urls = re.findall(r'<loc>([^<]+)</loc>', content)
    print(f"\nTotal URLs in sitemap: {len(urls)}")

    # Check for missing lastmod
    urls_with_lastmod = re.findall(r'<url>.*?<lastmod>', content, re.DOTALL)
    print(f"URLs with lastmod:     {len(urls_with_lastmod)}")
    print(f"URLs without lastmod:  {len(urls) - len(urls_with_lastmod)}")


def submit_to_indexnow():
    """Submit priority URLs to IndexNow for faster indexing."""
    import asyncio
    import aiohttp

    indexnow_key = os.getenv('INDEXNOW_KEY')
    if not indexnow_key:
        print("\n[SKIP] IndexNow key not configured")
        return

    async def submit():
        print("\n" + "=" * 60)
        print("SUBMITTING TO INDEXNOW")
        print("=" * 60)

        urls = [SITE_URL + path for path in PRIORITY_URLS]

        async with aiohttp.ClientSession() as session:
            host = "www.mothebroker.com"

            payload = {
                "host": host,
                "key": indexnow_key,
                "keyLocation": f"{SITE_URL}/{indexnow_key}.txt",
                "urlList": urls
            }

            async with session.post(
                "https://api.indexnow.org/indexnow",
                json=payload,
                headers={"Content-Type": "application/json; charset=utf-8"}
            ) as response:
                if response.status in [200, 202]:
                    print(f"[OK] Submitted {len(urls)} URLs to IndexNow")
                    print("     (Bing, Yandex, Seznam will be notified)")
                else:
                    text = await response.text()
                    print(f"[FAIL] IndexNow: {response.status} - {text[:80]}")

    asyncio.run(submit())


def main():
    print("=" * 60)
    print("FIXING INDEXING ISSUES: mothebroker.com")
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    # 1. Analyze sitemap issues
    check_sitemap_issues()

    # 2. Submit to IndexNow (works for Bing)
    submit_to_indexnow()

    # 3. Try Google Indexing API
    request_indexing_via_api()

    print("\n" + "=" * 60)
    print("MANUAL ACTIONS REQUIRED")
    print("=" * 60)
    print("""
1. GO TO GSC URL INSPECTION TOOL:
   https://search.google.com/search-console

   Request indexing for these pages manually:
   - /loan-programs (was 404, now fixed)
   - /guides/orange-county-home-buyer-guide (was 404, now fixed)
   - /blog/newport-beach-mortgage-guide-2026 (never crawled)

2. DELETE DUPLICATE SITEMAP:
   In GSC > Sitemaps, delete: https://mothebroker.com/sitemap.xml
   Keep only: https://www.mothebroker.com/sitemap.xml

3. RESUBMIT SITEMAP:
   After fixing sitemap issues, resubmit to GSC

4. CHECK BING WEBMASTER TOOLS:
   https://www.bing.com/webmasters
   Submit sitemap if not already done
""")


if __name__ == "__main__":
    main()
