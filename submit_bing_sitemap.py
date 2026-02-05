#!/usr/bin/env python3
"""
Submit sitemap to Bing Webmaster Tools.
"""

import os
import asyncio
import aiohttp
import urllib.parse
from dotenv import load_dotenv

load_dotenv('.env.local')

SITE_URL = "https://www.mothebroker.com"
SITEMAP_URL = "https://www.mothebroker.com/sitemap.xml"
BING_API_KEY = os.getenv('BING_WEBMASTER_API_KEY')

async def main():
    if not BING_API_KEY:
        print("[ERROR] BING_WEBMASTER_API_KEY not found")
        return

    encoded_site = urllib.parse.quote(SITE_URL, safe='')
    encoded_sitemap = urllib.parse.quote(SITEMAP_URL, safe='')

    print("=" * 60)
    print("BING SITEMAP SUBMISSION")
    print("=" * 60)

    async with aiohttp.ClientSession() as session:
        # First, let's check if the site is verified
        print("\n1. Checking site verification...")
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetSites?apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    sites = data.get('d', [])
                    found = False
                    for site in sites:
                        site_url = site.get('Url', '')
                        if 'mothebroker' in site_url.lower():
                            print(f"   Site found: {site_url}")
                            print(f"   Verified: {site.get('IsVerified', False)}")
                            found = True
                    if not found:
                        print("   [WARNING] Site not found in Bing Webmaster Tools!")
                        print("   You may need to add and verify the site first.")
                else:
                    print(f"   [ERROR] Status {response.status}")
        except Exception as e:
            print(f"   [ERROR] {e}")

        # Submit sitemap
        print(f"\n2. Submitting sitemap: {SITEMAP_URL}")
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitSitemap?siteUrl={encoded_site}&feedUrl={encoded_sitemap}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    print("   [OK] Sitemap submitted successfully!")
                else:
                    text = await response.text()
                    print(f"   [ERROR] Status {response.status}: {text[:200]}")
        except Exception as e:
            print(f"   [ERROR] {e}")

        # Also submit via IndexNow for faster processing
        print(f"\n3. Pinging sitemap via IndexNow...")
        indexnow_key = os.getenv('INDEXNOW_KEY')
        if indexnow_key:
            try:
                # Submit the sitemap URL itself to IndexNow
                payload = {
                    "host": "www.mothebroker.com",
                    "key": indexnow_key,
                    "keyLocation": f"{SITE_URL}/{indexnow_key}.txt",
                    "urlList": [SITEMAP_URL]
                }
                async with session.post(
                    "https://api.indexnow.org/indexnow",
                    json=payload,
                    headers={"Content-Type": "application/json; charset=utf-8"}
                ) as response:
                    if response.status in [200, 202]:
                        print("   [OK] IndexNow pinged!")
                    else:
                        print(f"   [WARN] IndexNow: Status {response.status}")
            except Exception as e:
                print(f"   [ERROR] IndexNow: {e}")

        # Submit key URLs directly to Bing
        print(f"\n4. Submitting key URLs to Bing URL Submission API...")

        key_urls = [
            f"{SITE_URL}/",
            f"{SITE_URL}/loan-programs",
            f"{SITE_URL}/areas/irvine-mortgage-broker",
            f"{SITE_URL}/areas/newport-beach-mortgage-broker",
            f"{SITE_URL}/areas/huntington-beach-mortgage-broker",
            f"{SITE_URL}/blog/newport-beach-mortgage-guide-2026",
            f"{SITE_URL}/blog/wholesale-vs-retail-mortgage-complete-2026",
            f"{SITE_URL}/resources/mortgage-glossary",
            f"{SITE_URL}/guides/orange-county-home-buyer-guide",
            f"{SITE_URL}/loan-programs/heloc",
            f"{SITE_URL}/loan-programs/fha-loans",
            f"{SITE_URL}/loan-programs/conventional-loans",
        ]

        try:
            api_url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey={BING_API_KEY}"
            payload = {
                "siteUrl": SITE_URL,
                "urlList": key_urls
            }
            async with session.post(
                api_url,
                json=payload,
                headers={"Content-Type": "application/json; charset=utf-8"}
            ) as response:
                if response.status == 200:
                    print(f"   [OK] Submitted {len(key_urls)} URLs to Bing!")
                else:
                    text = await response.text()
                    print(f"   [ERROR] Status {response.status}: {text[:200]}")
        except Exception as e:
            print(f"   [ERROR] {e}")

        # Check quota after submission
        print(f"\n5. Remaining quota...")
        try:
            url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl={encoded_site}&apikey={BING_API_KEY}"
            async with session.get(url) as response:
                if response.status == 200:
                    data = await response.json()
                    quota = data.get('d', {})
                    print(f"   Daily:   {quota.get('DailyQuota', 'N/A')}")
                    print(f"   Monthly: {quota.get('MonthlyQuota', 'N/A')}")
        except Exception as e:
            print(f"   [ERROR] {e}")

    print("\n" + "=" * 60)
    print("NEXT STEPS")
    print("=" * 60)
    print("""
1. Go to Bing Webmaster Tools: https://www.bing.com/webmasters

2. If site not verified, add and verify:
   - Add site: https://www.mothebroker.com
   - Verify via: DNS TXT record, CNAME, or meta tag

3. Submit sitemap manually if API failed:
   - Go to Sitemaps section
   - Add: https://www.mothebroker.com/sitemap.xml

4. Check indexing status in 24-48 hours
""")


if __name__ == "__main__":
    asyncio.run(main())
