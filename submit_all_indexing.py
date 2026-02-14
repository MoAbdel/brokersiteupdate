#!/usr/bin/env python3
"""
Submit sitemap to GSC + Bing, and submit URLs for indexing.
"""

import os
import re
import asyncio
import aiohttp
import urllib.parse
from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv

load_dotenv('.env.local')

SITE_URL = "https://www.mothebroker.com"
SITEMAP_URL = "https://www.mothebroker.com/sitemap.xml"
GSC_PROPERTY = os.getenv('GSC_PROPERTY_URL', 'sc-domain:mothebroker.com')
GSC_CREDENTIALS_PATH = os.getenv('GSC_CREDENTIALS_PATH', './gsc-credentials.json')
BING_API_KEY = os.getenv('BING_WEBMASTER_API_KEY')
INDEXNOW_KEY = os.getenv('INDEXNOW_KEY')


def get_urls_from_sitemap(limit=200):
    """Extract URLs from sitemap.xml"""
    sitemap_path = Path("public/sitemap.xml")
    if not sitemap_path.exists():
        print("[ERROR] sitemap.xml not found")
        return []

    content = sitemap_path.read_text()
    urls = re.findall(r'<loc>([^<]+)</loc>', content)

    # Filter to only www URLs
    urls = [u for u in urls if 'www.mothebroker.com' in u]

    # Return up to limit
    return urls[:limit]


def submit_sitemap_gsc():
    """Submit sitemap to Google Search Console."""
    print("\n" + "=" * 60)
    print("1. SUBMITTING SITEMAP TO GSC")
    print("=" * 60)

    if not Path(GSC_CREDENTIALS_PATH).exists():
        print(f"[ERROR] GSC credentials not found at {GSC_CREDENTIALS_PATH}")
        return False

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build

        credentials = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_PATH,
            scopes=['https://www.googleapis.com/auth/webmasters']
        )

        service = build('searchconsole', 'v1', credentials=credentials)

        # Submit sitemap
        service.sitemaps().submit(
            siteUrl=GSC_PROPERTY,
            feedpath=SITEMAP_URL
        ).execute()

        print(f"[OK] Sitemap submitted to GSC: {SITEMAP_URL}")
        return True

    except Exception as e:
        print(f"[ERROR] GSC sitemap: {e}")
        return False


def submit_urls_gsc(urls):
    """Submit URLs to Google Indexing API."""
    print("\n" + "=" * 60)
    print(f"2. SUBMITTING {len(urls)} URLs TO GSC INDEXING API")
    print("=" * 60)

    if not Path(GSC_CREDENTIALS_PATH).exists():
        print("[ERROR] GSC credentials not found")
        return 0

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build

        credentials = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_PATH,
            scopes=['https://www.googleapis.com/auth/indexing']
        )

        service = build('indexing', 'v3', credentials=credentials)

        success = 0
        failed = 0
        quota_hit = False

        for i, url in enumerate(urls):
            if quota_hit:
                failed += 1
                continue

            try:
                body = {"url": url, "type": "URL_UPDATED"}
                service.urlNotifications().publish(body=body).execute()
                success += 1
                if (i + 1) % 20 == 0:
                    print(f"   Progress: {i + 1}/{len(urls)} submitted...")
            except Exception as e:
                error_msg = str(e).lower()
                if "quota" in error_msg or "rate" in error_msg:
                    print(f"   [QUOTA] Hit quota limit after {success} URLs")
                    quota_hit = True
                    failed += 1
                elif "403" in str(e) or "forbidden" in error_msg:
                    # Indexing API only works for certain schema types
                    failed += 1
                else:
                    failed += 1

        print(f"\n[RESULT] GSC Indexing: {success} submitted, {failed} failed/skipped")
        return success

    except Exception as e:
        print(f"[ERROR] GSC Indexing API: {e}")
        return 0


async def submit_sitemap_bing():
    """Submit sitemap to Bing."""
    print("\n" + "=" * 60)
    print("3. SUBMITTING SITEMAP TO BING")
    print("=" * 60)

    if not BING_API_KEY:
        print("[ERROR] Bing API key not found")
        return False

    encoded_site = urllib.parse.quote(SITE_URL, safe='')
    encoded_sitemap = urllib.parse.quote(SITEMAP_URL, safe='')

    async with aiohttp.ClientSession() as session:
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitSitemap?siteUrl={encoded_site}&feedUrl={encoded_sitemap}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    print(f"[OK] Sitemap submitted to Bing: {SITEMAP_URL}")
                    return True
                else:
                    # Try alternative method - just ping the sitemap
                    ping_url = f"https://www.bing.com/ping?sitemap={encoded_sitemap}"
                    async with session.get(ping_url) as ping_response:
                        if ping_response.status == 200:
                            print(f"[OK] Sitemap pinged to Bing via ping endpoint")
                            return True
                    print(f"[WARN] Bing sitemap submission returned {response.status}")
                    return False
        except Exception as e:
            print(f"[ERROR] Bing sitemap: {e}")
            return False


async def submit_urls_bing(urls):
    """Submit URLs to Bing URL Submission API."""
    print("\n" + "=" * 60)
    print(f"4. SUBMITTING {len(urls)} URLs TO BING")
    print("=" * 60)

    if not BING_API_KEY:
        print("[ERROR] Bing API key not found")
        return 0

    # Bing has daily limit of 100 URLs
    batch_size = 100
    total_submitted = 0

    async with aiohttp.ClientSession() as session:
        for i in range(0, len(urls), batch_size):
            batch = urls[i:i + batch_size]

            try:
                api_url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey={BING_API_KEY}"
                payload = {
                    "siteUrl": SITE_URL,
                    "urlList": batch
                }
                async with session.post(
                    api_url,
                    json=payload,
                    headers={"Content-Type": "application/json; charset=utf-8"}
                ) as response:
                    if response.status == 200:
                        total_submitted += len(batch)
                        print(f"   Batch {i // batch_size + 1}: {len(batch)} URLs submitted")
                    else:
                        text = await response.text()
                        if "Quota" in text:
                            print(f"   [QUOTA] Hit Bing daily quota after {total_submitted} URLs")
                            break
                        print(f"   [WARN] Batch {i // batch_size + 1}: Status {response.status}")
            except Exception as e:
                print(f"   [ERROR] Batch {i // batch_size + 1}: {e}")

    print(f"\n[RESULT] Bing: {total_submitted} URLs submitted")
    return total_submitted


async def submit_urls_indexnow(urls):
    """Submit URLs to IndexNow."""
    print("\n" + "=" * 60)
    print(f"5. SUBMITTING {len(urls)} URLs TO INDEXNOW")
    print("=" * 60)

    if not INDEXNOW_KEY:
        print("[ERROR] IndexNow key not found")
        return False

    # IndexNow accepts up to 10,000 URLs per request
    async with aiohttp.ClientSession() as session:
        try:
            payload = {
                "host": "www.mothebroker.com",
                "key": INDEXNOW_KEY,
                "keyLocation": f"{SITE_URL}/{INDEXNOW_KEY}.txt",
                "urlList": urls
            }

            async with session.post(
                "https://api.indexnow.org/indexnow",
                json=payload,
                headers={"Content-Type": "application/json; charset=utf-8"}
            ) as response:
                if response.status in [200, 202]:
                    print(f"[OK] IndexNow: {len(urls)} URLs submitted")
                    print("     (Notifies: Bing, Yandex, Seznam, Naver)")
                    return True
                else:
                    text = await response.text()
                    print(f"[ERROR] IndexNow: Status {response.status} - {text[:100]}")
                    return False
        except Exception as e:
            print(f"[ERROR] IndexNow: {e}")
            return False


async def main():
    print("=" * 60)
    print("FULL SEO SUBMISSION: mothebroker.com")
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    # Get URLs from sitemap
    urls = get_urls_from_sitemap(limit=200)
    print(f"\nFound {len(urls)} URLs in sitemap")

    # 1. Submit sitemap to GSC
    submit_sitemap_gsc()

    # 2. Submit URLs to GSC Indexing API
    submit_urls_gsc(urls)

    # 3. Submit sitemap to Bing
    await submit_sitemap_bing()

    # 4. Submit URLs to Bing
    await submit_urls_bing(urls)

    # 5. Submit URLs to IndexNow
    await submit_urls_indexnow(urls)

    # Summary
    print("\n" + "=" * 60)
    print("SUBMISSION COMPLETE")
    print("=" * 60)
    print(f"""
URLs submitted: {len(urls)}

Expected timeline:
- IndexNow: 24-48 hours for Bing/Yandex
- GSC Sitemap: 1-3 days for re-crawl
- GSC Indexing API: Limited to certain page types
- Bing: 24-72 hours for crawl
""")


if __name__ == "__main__":
    asyncio.run(main())
