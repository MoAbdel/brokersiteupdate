#!/usr/bin/env python3
"""Check all possible site URL formats in Bing."""

import os
import asyncio
import aiohttp
import urllib.parse
from dotenv import load_dotenv

load_dotenv('.env.local')

BING_API_KEY = os.getenv('BING_WEBMASTER_API_KEY')

# All possible URL formats the site could be registered under
SITE_VARIANTS = [
    "https://www.mothebroker.com",
    "https://mothebroker.com",
    "http://www.mothebroker.com",
    "http://mothebroker.com",
    "www.mothebroker.com",
    "mothebroker.com",
]

async def main():
    print("=" * 60)
    print("CHECKING BING SITE REGISTRATION")
    print("=" * 60)

    async with aiohttp.ClientSession() as session:
        # Check each URL variant for sitemap status
        print("\nChecking which URL format has sitemap data...\n")

        for site_url in SITE_VARIANTS:
            encoded_site = urllib.parse.quote(site_url, safe='')

            # Try GetSitemaps for each variant
            try:
                url = f"https://ssl.bing.com/webmaster/api.svc/json/GetSitemaps?siteUrl={encoded_site}&apikey={BING_API_KEY}"
                async with session.get(url) as response:
                    status = response.status
                    if status == 200:
                        data = await response.json()
                        sitemaps = data.get('d', [])
                        print(f"[OK] {site_url}")
                        print(f"     Sitemaps found: {len(sitemaps)}")
                        for sm in sitemaps:
                            print(f"       - {sm.get('Url', 'Unknown')}")
                    else:
                        print(f"[{status}] {site_url}")
            except Exception as e:
                print(f"[ERR] {site_url}: {str(e)[:40]}")

        # Also check URL submission quota for each to see which is "active"
        print("\n" + "-" * 60)
        print("Checking URL quota for each variant...\n")

        for site_url in SITE_VARIANTS:
            encoded_site = urllib.parse.quote(site_url, safe='')
            try:
                url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl={encoded_site}&apikey={BING_API_KEY}"
                async with session.get(url) as response:
                    if response.status == 200:
                        data = await response.json()
                        quota = data.get('d', {})
                        daily = quota.get('DailyQuota', 0)
                        monthly = quota.get('MonthlyQuota', 0)
                        if daily > 0 or monthly > 0:
                            print(f"[ACTIVE] {site_url}")
                            print(f"         Daily: {daily}, Monthly: {monthly}")
                    else:
                        print(f"[{response.status}] {site_url}")
            except Exception as e:
                print(f"[ERR] {site_url}")

        # Now submit sitemap to the working variant
        print("\n" + "-" * 60)
        print("Attempting sitemap submission to active site...\n")

        # Try the https://www version first (canonical)
        working_site = "https://www.mothebroker.com"
        sitemap_url = "https://www.mothebroker.com/sitemap.xml"

        encoded_site = urllib.parse.quote(working_site, safe='')
        encoded_sitemap = urllib.parse.quote(sitemap_url, safe='')

        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitSitemap?siteUrl={encoded_site}&feedUrl={encoded_sitemap}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    print(f"[OK] Sitemap submitted to {working_site}")
                else:
                    text = await response.text()
                    # Try to decode as JSON to get error message
                    print(f"[{response.status}] Sitemap submission failed")
                    print(f"    Response: {text[:200]}")
        except Exception as e:
            print(f"[ERR] {e}")


if __name__ == "__main__":
    asyncio.run(main())
