
import json
import os
import sys
from web.lib.feishu_sync_script import fetch_all_articles # Assuming I can import the logic or just rewrite simple fetch here

# Use requests directly to avoid complex imports if possible, or reuse existing classes
import requests

# Load Env
from dotenv import load_dotenv
load_dotenv()

APP_ID = os.getenv('FEISHU_APP_ID')
APP_SECRET = os.getenv('FEISHU_APP_SECRET')
APP_TOKEN = os.getenv('FEISHU_BITABLE_APP_TOKEN')
TABLE_ID = os.getenv('FEISHU_BITABLE_TABLE_ID')

def get_tenant_access_token():
    url = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal"
    headers = {"Content-Type": "application/json; charset=utf-8"}
    data = {"app_id": APP_ID, "app_secret": APP_SECRET}
    r = requests.post(url, json=data)
    return r.json().get("tenant_access_token")

def fetch_all_records():
    token = get_tenant_access_token()
    if not token:
        print("Failed to get token")
        return []
    
    url = f"https://open.feishu.cn/open-apis/bitable/v1/apps/{APP_TOKEN}/tables/{TABLE_ID}/records?page_size=100"
    headers = {"Authorization": f"Bearer {token}"}
    
    records = []
    has_more = True
    page_token = None
    
    while has_more:
        params = {}
        if page_token:
            params['page_token'] = page_token
            
        r = requests.get(url, headers=headers, params=params)
        res = r.json()
        
        if res['code'] != 0:
            print(f"Error: {res}")
            break
            
        items = res['data']['items']
        records.extend(items)
        
        has_more = res['data']['has_more']
        page_token = res['data']['page_token']
    
    return records

def main():
    print("Fetching from Feishu...")
    records = fetch_all_records()
    print(f"Fetched {len(records)} records.")
    
    # Format to match static_db.json structure
    # static_db.json structure: { "articles": [ { "fields": { ... }, "record_id": ... } ] }
    # Our usage in feishu.ts expects:
    # item.fields['Title'], item.fields['Date'] (timestamp usually), etc.
    
    # We need to ensure local images support if any? 
    # For now, just dump the raw Feishu response structure which IS what static_db uses.
    
    output_data = {
        "articles": records
    }
    
    # Preserve other keys in static_db.json (like 'lingo', 'courses') if they exist?
    static_db_path = 'web/data/static_db.json'
    if os.path.exists(static_db_path):
        with open(static_db_path, 'r', encoding='utf-8') as f:
            existing = json.load(f)
            # Update only articles
            existing['articles'] = records
            output_data = existing
    
    with open(static_db_path, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
        
    print(f"✅ Updated {static_db_path}")

if __name__ == "__main__":
    main()
