
import json
import time

# Current time in ms
now_ms = int(time.time() * 1000)
# One day in ms
day_ms = 86400 * 1000

# Load existing static db
with open('web/data/static_db.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# 1. Shift ALL existing articles to be "Old" (e.g., spanning Jan 2024 to Dec 2024)
# We'll just randomly distribute them or keep relative order but move year to 2024.
# Actually, let's just subtract ~2 years (approx 6e10 ms) from their "future" timestamps if they look huge.
# Timestamps like 176... are 2026. 171... are 2024. 
# Let's clean them to be definitely in the past relative to "Now" (Jan 2026 in narrative, or real Jan 2025).
# Let's set them to a range ending 1 month ago.

base_time = now_ms - (30 * day_ms) # 30 days ago

for i, article in enumerate(db['articles']):
    # Make them sequentially older
    article['fields']['Date'] = base_time - (i * day_ms * 2) 

# 2. Add "Kevin Scott" Article from Daily Digest
# Matches structure of web/lib/feishu.ts Article interface
kevin_scott_article = {
    "id": "daily_bite_00", # Unique ID
    "record_id": "daily_bite_00",
    "fields": {
        "Title": "AI 创业公司如何构建自己的 \"护城河\"？",
        "Author": "Kevin Scott (Microsoft CTO)",
        "Summary": "Beyond just having a great idea, sustainable AI businesses need defensible moats. 除了绝妙的点子，可持续的 AI 业务还需要牢固的护城河。", # Combined summary
        "Platform": "YouTube",
        "URL": { "link": "https://www.youtube.com/watch?v=Vut9hUEKyfk", "text": "Watch" },
        "Cover": [ { "url": "/images/mock_cover_3.jpg" } ], # Local path
        "Date": now_ms, # NOW
        "Tags": ["AI Business", "Startup", "Tech Strategy"],
        "Status": "Done",
        "AI Notes": "Must Watch for Founders"
    }
}

# 3. Add other Daily items? Let's just add the Hero (Kevin Scott) for now as requested.
# Insert at TOP
db['articles'].insert(0, kevin_scott_article)

# Save back
with open('web/data/static_db.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, indent=2, ensure_ascii=False)

print("Successfully updated static_db.json with Kevin Scott and re-dated old articles.")
