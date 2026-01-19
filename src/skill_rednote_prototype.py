
import os
import json
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from web/.env.local
env_path = os.path.join(os.path.dirname(__file__), '..', 'web', '.env.local')
load_dotenv(env_path)

MOCK_MODE = True  # Set to True to bypass API for demo

api_key = os.environ.get("GROQ_API_KEY")
if not MOCK_MODE and not api_key:
    # ... (existing check)
    pass 

if not MOCK_MODE:
    client = Groq(api_key=api_key)

# ... (Environment setup remains the same)

# Mock Input: Kevin Scott - "Finding Signal in the Noise"
VIDEO_CONTEXT = {
    "title": "AI时代的创业真经 (Kevin Scott)",
    "summary": "Microsoft CTO Kevin Scott shares his philosophy on navigating the AI hype. He emphasizes the importance of 'Impact over Intellectual Interest', warning founders to filter out the 'Noise' from media/investors and focus on real customer problems. He encourages 'Big Experimental Bets' because doing experiments is cheaper than ever.",
    "key_phrases": ["Signal to Noise Ratio", "Impact over Interest", "Do the damn experiment", "Capability Overhang"],
    "emotions": "Pragmatic, Urgent, Inspiring"
}

def generate_rednote_post(context):
    print("🎨 Content Alchemist is mixing ingredients...")
    
    if MOCK_MODE:
        import time
        time.sleep(1.5) # Simulate thinking
        return {
            "title": "AI创业必读：如何屏蔽99%的噪音？🤫",
            "cover_text": "在喧嚣中\n寻找唯一的信号",
            "content": """
🤯 **AI 圈子太吵了？你也陷入焦虑了吗？**

每天打开手机，全是 "重磅"、"颠覆"、"历史时刻"... 
作为创业者或开发者，我们很容易迷失在这场 **"噪音海啸"** 里。

微软 CTO **Kevin Scott** 给出了他的 "降噪指南" 🎧。
比起追逐每一个热点，他建议我们做那个 **"清醒的实干家"**。

🧠 **Core Insights (硬核洞察):**
1.  **Signal vs. Noise (信号与噪音)** 
    媒体追逐的是点击率，投资人追逐的是风口。
    👉 **唯一的真实信号，是用户的反馈。** 别让虚荣指标骗了你。

2.  **Impact > Interest (影响力 > 趣味性)**
    很多技术很 "Sexy"，很有趣，但如果它不能解决真实问题，那它只是玩具。
    � 停止自嗨，去解决那些 "丑陋但必要" 的问题 (Ugly plumbing)。

� **Actionable Advice (立刻行动):**
> **"Do the damn experiment!"** 
> (去做那个该死的实验！)
> 现在实验成本这么低，与其开会争论，不如跑个 Demo 出来说话。

✨ **Vibe Check:**
> "Optimism isn't about ignoring the problems, it's about believing we can build the solutions." 
> (乐观不是忽视问题，而是相信我们能造出解药。)

🏷️ #AI创业 #KevinScott #深度思考 #拒绝焦虑 #长期主义 #Antigravity
            """,
            "quote_en": "\"Stop debating and do the damn experiment. The cost of trying is lower than ever.\"",
            "quote_cn": "别再争论了，去做那个该死的实验。试错的成本从未如此低廉。",
            "tags": ["AI创业", "深度思考", "拒绝焦虑", "KevinScott"]
        }
    
    # ... (Real API call logic)
    
    # ... (Real API call logic would go here)


if __name__ == "__main__":
    result = generate_rednote_post(VIDEO_CONTEXT)
    
    print("\n" + "="*40)
    print("✨ GENERATED REDNOTE POST ✨")
    print("="*40 + "\n")
    
    print(f"📱 TITLE: {result['title']}")
    print(f"🖼️ COVER TEXT: {result['cover_text']}")
    print("-" * 20)
    print(result['content'])
    print("-" * 20)
    print(f"🏷️ TAGS: {' '.join(['#'+t for t in result['tags']])}")
