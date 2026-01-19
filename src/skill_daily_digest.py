import json
import os
import datetime
from pathlib import Path

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_DB_PATH = os.path.join(BASE_DIR, 'web', 'data', 'static_db.json')
OUTPUT_JSON_PATH = os.path.join(BASE_DIR, 'web', 'public', 'data', 'daily_latest.json')
OUTPUT_IMAGE_PATH = os.path.join(BASE_DIR, 'web', 'public', 'images', 'daily_card.png')

# 1. Mock Data Generator (The "Quick Bites")
def get_mock_bites():
    return [
        {
            "id": "bite_01",
            "source": "Andrej Karpathy",
            "category": "INSIGHT", # Category
            "title": "LLM OS: Why your next OS will be an Agent",
            "title_cn": "LLM OS：为什么你的下一个操作系统将是 AI 智能体",
            "hook_text": "The New \nKernel", # Hook
            "summary": "Karpathy argues that LLMs are not just chatbots, but the kernel process of a new Operating System. This shifts our perspective from 'chatting' to 'computing'.",
            "summary_cn": "Karpathy 认为大模型不仅是聊天机器人，更是新一代操作系统的核心进程。这意味着我们正在从“对话交互”转向全新的“计算范式”。",
            "type": "Insight",
            "url": "https://twitter.com/karpathy",
            "icon": "🧠",
            "image": "web/public/images/mock_cover_1.jpg"
        },
        {
            "id": "bite_02",
            "source": "Stratechery",
            "category": "STRATEGY", # Category
            "title": "Aggregator Theory in the Age of AI",
            "title_cn": "聚合理论在 AI 时代的演变与终局",
            "hook_text": "Value \nChain", # Hook
            "summary": "Will AI kill the search engine? Ben analyzes how 'Answer Engines' change the value chain. Setup -> Aggregation -> Distribution.",
            "summary_cn": "AI 会杀死搜索引擎？深度解析“答案引擎”如何重构互联网价值链。从“流量分发”到“端到端服务”的范式转移。",
            "type": "Analysis",
            "url": "https://stratechery.com",
            "icon": "📊",
            "image": "web/public/images/mock_cover_4.jpg"
        },
        {
            "id": "bite_03",
            "source": "Google DeepMind",
            "category": "MODEL", # Category
            "title": "Gemini 3.0 Pro: The AGENTIC Era Begins",
            "title_cn": "Gemini 3.0 Pro 发布：开启 Agentic 原生时代",
            "hook_text": "Agentic \nNative", # Hook
            "summary": "Native tool use, 10M context, and self-improving capabilities. This model is designed to act, not just generate text.",
            "summary_cn": "原生支持复杂工具调用，千万级上下文，具备自我进化能力。不再只是生成文本，而是为“行动”而生。",
            "type": "News",
            "url": "https://deepmind.google",
            "icon": "⚡",
            "image": "web/public/images/mock_cover_2.jpg"
        },
        {
            "id": "bite_04",
            "source": "Paul Graham",
            "category": "ESSAY", # Category
            "title": "How to do Great Work (Re-read)",
            "title_cn": "Paul Graham：如何做出伟大的工作 (重读)",
            "hook_text": "Do Great \nWork", # Hook
            "summary": "A timeless reminder: Work on things that look like toys to others but serious to you. Curiosity is the compass.",
            "summary_cn": "常看常新：去做那些在别人眼里像“玩具”，但在你眼里却无比严肃的事情。好奇心是你最好的罗盘。",
            "type": "Essay",
            "url": "http://paulgraham.com",
            "icon": "📖",
            "image": "web/public/images/mock_cover_3.jpg"
        },
        {
            "id": "bite_05",
            "source": "OpenAI",
            "category": "TECH", # Category
            "title": "Sora: Creating Video from Text",
            "title_cn": "Sora：世界的物理模拟器",
            "hook_text": "World \nSim", # Hook
            "summary": "Teaching AI to understand and simulate the physical world in motion. It's not just pixels, it's physics.",
            "summary_cn": "不仅仅是视频生成，更是对物理世界的深度模拟。它理解光影、重力与物体运动的规律。",
            "type": "Tech",
            "url": "https://openai.com/sora",
            "icon": "🎥",
            "image": "web/public/images/mock_cover_1.jpg"
        },
        {
            "id": "bite_06",
            "source": "Hugging Face",
            "category": "INDUSTRY", # Category
            "title": "The Open Source AI Year in Review",
            "title_cn": "开源 AI 的野蛮生长：年度回顾",
            "hook_text": "Open \nWeight",
            "summary": "Llama 3, Mixtral, and the democratization of AGI. The gap between closed and open source is closing fast.",
            "summary_cn": "Llama 3, Mixtral... 当算力不再是护城河，数据的质量决定了一切。开源与闭源的差距正在极速缩小。",
            "type": "Report",
            "url": "https://huggingface.co",
            "icon": "🤗",
            "image": "web/public/images/mock_cover_4.jpg"
        }
    ]

# 2. Hero Content Fetcher (From Local DB)
def get_hero_content():
    if not os.path.exists(STATIC_DB_PATH):
        print("⚠️ Static DB not found, using Mock Hero.")
        return {
            "title": "Finding Signal in the Noise",
            "author": "Kevin Scott",
            "summary": "Microsoft CTO on how to stop debating and start building.",
            "image": "/images/kevin_scott_cover.jpg"
        }
    
    with open(STATIC_DB_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    articles = data.get('articles', [])
    
    # Try to find the "Kevin Scott" article explicitly, or pick the latest
    target_id = "recv6sKLcWfDXB" # Kevin Scott's Article ID
    
    hero = next((a for a in articles if a['record_id'] == target_id), None)
    
    if not hero:
        hero = articles[0] if articles else None
        
    if hero:
        fields = hero.get('fields', {})
        # Extract Cover Image URL
        cover_url = ""
        if 'Cover' in fields and isinstance(fields['Cover'], list) and len(fields['Cover']) > 0:
            cover_url = fields['Cover'][0].get('url', '')

        return {
            "id": hero.get('record_id'),
            "title": fields.get('Title', 'Untitled Article'),
            "author": fields.get('Author', 'Antigravity'),
            "summary": fields.get('Summary', 'No summary available.'),
            "quote": fields.get('Quote', ''),
            "date": fields.get('Date', str(datetime.date.today())),
            "cover": cover_url
        }
    return None

# 3. Main Orchestrator
def generate_daily_digest():
    print("🗞️  Printing the Daily Anti-Noise Paper...")
    
    hero = get_hero_content()
    bites = get_mock_bites()
    
    today_str = datetime.date.today().strftime("%Y-%m-%d")
    
    digest_data = {
        "date": today_str,
        "edition": "Vol. 1024",
        "hero": hero,
        "bites": bites,
        "meta": {
            "generated_at": datetime.datetime.now().isoformat(),
            "engine": "Antigravity Content Alchemist"
        }
    }
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(OUTPUT_JSON_PATH), exist_ok=True)
    
    # Save JSON
    with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(digest_data, f, indent=2, ensure_ascii=False)
        
    print(f"✅ Daily Data saved to: {OUTPUT_JSON_PATH}")
    
    # 4. Generate Image
    try:
        from skill_image_generator import create_digest_card
        create_digest_card(digest_data, OUTPUT_IMAGE_PATH)
    except ImportError:
        print("⚠️ Could not import skill_image_generator. Run from project root.")

if __name__ == "__main__":
    generate_daily_digest()
