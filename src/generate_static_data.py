import json
import os
import requests
import yaml

# Hardcoded config for reliability in this script
APP_ID = "cli_a9c6a1bb56f89cd4"
APP_SECRET = "Ox6v51RIbon1bbxaHmvUGhqRNnW3CiUs"
BITABLE_APP_TOKEN = "FCnWb734NawZW6spPVvcMjtonjf"

TABLE_IDS = {
    "articles": "tblZh4KDjOUZnpod",
    "vocab": "tblx7DodiHH6jkVR",
    "lingo": "tblTEYjEp8ZtDwZZ",
    "courses": "tbleFDCQBG74x5sp",
    "lessons": "tbl04aHyg3FzM5sQ"
}

def get_tenant_access_token():
    url = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal"
    headers = {"Content-Type": "application/json; charset=utf-8"}
    data = {
        "app_id": APP_ID,
        "app_secret": APP_SECRET
    }
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 200 and response.json().get("code") == 0:
        return response.json().get("tenant_access_token")
    else:
        print(f"Failed to get token: {response.text}")
        return None

def fetch_table_records(token, table_id):
    url = f"https://open.feishu.cn/open-apis/bitable/v1/apps/{BITABLE_APP_TOKEN}/tables/{table_id}/records?page_size=100"
    headers = {"Authorization": f"Bearer {token}"}
    
    all_items = []
    page_token = None
    
    while True:
        params = {}
        if page_token:
            params['page_token'] = page_token
            
        try:
            response = requests.get(url, headers=headers, params=params)
            if response.status_code != 200:
                print(f"Error fetching table {table_id}: {response.text}")
                break
                
            data = response.json()
            if data.get("code") != 0:
                print(f"API Error table {table_id}: {data}")
                break
                
            items = data.get("data", {}).get("items", [])
            all_items.extend(items)
            
            if data.get("data", {}).get("has_more"):
                page_token = data.get("data", {}).get("page_token")
            else:
                break
        except Exception as e:
            print(f"Exception fetching table {table_id}: {e}")
            break
            
    return all_items

def main():
    print("🚀 Starting Static Data Generation...")
    
    token = get_tenant_access_token()
    if not token:
        print("❌ Auth Failed")
        return

    full_db = {}
    
    for key, table_id in TABLE_IDS.items():
        print(f"📥 Fetching {key}...")
        records = fetch_table_records(token, table_id)
        full_db[key] = records
        print(f"   ✅ Got {len(records)} records for {key}")

    # Output path
    output_path = os.path.join("web", "data", "static_db.json")
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(full_db, f, ensure_ascii=False, indent=2)
        
    print(f"\n🎉 Success! Static DB saved to: {output_path}")

if __name__ == "__main__":
    main()
