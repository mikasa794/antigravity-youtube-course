
import os
from PIL import Image, ImageDraw, ImageFont
import textwrap

def create_card(data, output_path="output_card.png"):
    # Canvas Settings (Xiaohongshu 3:4 ratio)
    width, height = 1080, 1440
    bg_color = (250, 249, 246) # Off-white / Cream
    text_color = (40, 40, 40)  # Dark Gray
    accent_color = (20, 184, 166) # Teal (Antigravity Brand)
    
    # Create Canvas
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Fonts (Try fetching Windows system fonts)
    # Fallback to default if not found
    try:
        title_font = ImageFont.truetype("msyhbd.ttc", 80) # Microsoft YaHei Bold
        body_font = ImageFont.truetype("msyh.ttc", 40)    # Microsoft YaHei Regular
        english_font = ImageFont.truetype("arialbd.ttf", 50) 
        small_font = ImageFont.truetype("arial.ttf", 30)
    except IOError:
        print("⚠️ Warning: System fonts not found. Using default. Chinese may not render.")
        title_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        english_font = ImageFont.load_default()
        small_font = ImageFont.load_default()

    # Layout Config
    margin = 80
    current_y = 150
    
    # 1. Title (Wrapped)
    title_lines = textwrap.wrap(data['title'], width=14) # Approx width based on font size
    for line in title_lines:
        draw.text((margin, current_y), line, font=title_font, fill=text_color)
        current_y += 100
    
    current_y += 60 # Spacer
    
    # 2. Cover / Visual Placeholder
    # Draw a colored rectangle as placeholder for the video screenshot
    draw.rectangle(
        [(margin, current_y), (width - margin, current_y + 600)], 
        fill=(230, 230, 230), 
        outline=None
    )
    # Add text inside placeholder
    draw.text(
        (width//2 - 150, current_y + 280), 
        "[ Video Screenshot Here ]", 
        font=small_font, 
        fill=(150, 150, 150)
    )
    
    current_y += 600 + 80 # Image height + Spacer
    
    # 3. Golden Sentence (Vibe Check)
    # English Quote
    quote_en = data.get('quote_en', "")
    quote_lines = textwrap.wrap(quote_en, width=30)
    for line in quote_lines:
        draw.text((margin, current_y), line, font=english_font, fill=accent_color)
        current_y += 60
        
    current_y += 20
    
    # Chinese Translation
    quote_cn = data.get('quote_cn', "")
    cn_lines = textwrap.wrap(quote_cn, width=22)
    for line in cn_lines:
        draw.text((margin, current_y), line, font=body_font, fill=(100, 100, 100))
        current_y += 50

    # 4. Footer
    draw.text((margin, height - 100), "@Antigravity LingoTube", font=small_font, fill=(180, 180, 180))
    
    # Save
    img.save(output_path)
    print(f"✅ Card generated: {output_path}")

def create_digest_card(data, output_path="output_digest.png"):
    """
    Generates a 'Hand-drawn Report' style grid card.
    Data format: { "date": "...", "edition": "...", "hero": {...}, "bites": [...] }
    """
    # Canvas bigger for grid
    width, height = 1200, 3300 # Increased to 3300 to fit 3 rows of tall cards
    bg_color = (252, 250, 242) # Warm Paper
    text_color = (30, 30, 30)
    
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Fonts
    try:
        header_font = ImageFont.truetype("msyhbd.ttc", 90)
        sub_font = ImageFont.truetype("arialbd.ttf", 32)
        hero_title_font = ImageFont.truetype("msyhbd.ttc", 50) 
        card_title_font = ImageFont.truetype("msyhbd.ttc", 36)
        card_desc_font = ImageFont.truetype("msyh.ttc", 26) 
        meta_font = ImageFont.truetype("arialbd.ttf", 24)
        hook_font = ImageFont.truetype("arialbd.ttf", 60)
        category_font = ImageFont.truetype("arialbd.ttf", 28) # Font for Category Header
        
    except IOError:
        header_font = ImageFont.load_default()
        sub_font = ImageFont.load_default()
        hero_title_font = ImageFont.load_default()
        card_title_font = ImageFont.load_default()
        card_desc_font = ImageFont.load_default()
        meta_font = ImageFont.load_default()
        hook_font = ImageFont.load_default()
        category_font = ImageFont.load_default()

    margin = 50
    current_y = 60
    
    # Category Colors (V11: Morandi / Gentle Palette)
    CAT_COLORS = {
        "INSIGHT": (178, 164, 212), # Morandi Violet (Muted Lavender)
        "STRATEGY": (148, 176, 213), # Morandi Blue (Hazy Blue)
        "MODEL": (216, 164, 153),    # Morandi Red (Dusty Pink)
        "ESSAY": (224, 200, 170),    # Morandi Orange (Warm Sand)
        "TECH": (138, 176, 155),    # Morandi Green (Sage)
        "INDUSTRY": (119, 136, 153), # Morandi Dark (Slate Grey)
        "DEFAULT": (180, 180, 180),   # Morandi Gray
        "HEADLINE STORY": (115, 185, 185) # Morandi Teal
    }
    
    # helper: V10 "RedNote Mode" Card
    # 1. Category Header (Top)
    # 2. Poster Image (Middle)
    # 3. Content (Bottom)
    def draw_styled_card(coords, fill, outline=None, image_path=None, hook_text=None, category=None):
        x1, y1, x2, y2 = coords
        w = x2 - x1
        h = y2 - y1
        
        # 1. Create Card Surface
        card_img = Image.new('RGB', (w, h), (255, 255, 255))
        card_draw = ImageDraw.Draw(card_img)
        
        # --- A. CATEGORY HEADER (50px Height) ---
        header_h = 50
        cat_color = CAT_COLORS.get(str(category).upper(), CAT_COLORS["DEFAULT"])
        
        # Draw Header Bar
        card_draw.rectangle((0, 0, w, header_h), fill=cat_color)
        
        # Draw Category Text (Centered)
        if category:
            text = f" {category} "
            # Better centering
            bbox = card_draw.textbbox((0,0), text, font=category_font)
            tx = (w - (bbox[2]-bbox[0])) // 2
            ty = (header_h - (bbox[3]-bbox[1])) // 2 - 4
            card_draw.text((tx, ty), text, font=category_font, fill='white')
        
        # --- B. POSTER Image (Below Header) ---
        # Image Area Height: Let's give it 55% of the REMAINING height
        remain_h = h - header_h
        img_h = int(remain_h * 0.55)
        
        abs_path = os.path.abspath(image_path) if image_path else None
        
        if abs_path and os.path.exists(abs_path):
            try:
                bg_raw = Image.open(abs_path).convert('RGB')
                # Resize/Crop logic similar to before, but into (0, header_h)
                
                target_ratio = w / img_h
                bg_ratio = bg_raw.width / bg_raw.height
                
                if bg_ratio > target_ratio: 
                    new_h = img_h
                    new_w = int(img_h * bg_ratio)
                else:
                    new_w = w
                    new_h = int(w / bg_ratio)
                    
                bg_raw = bg_raw.resize((new_w, new_h), Image.Resampling.LANCZOS)
                
                left = (new_w - w) // 2
                top = (new_h - img_h) // 2
                bg_crop = bg_raw.crop((left, top, left + w, top + img_h))
                
                card_img.paste(bg_crop, (0, header_h))
                
                # Gradient Overlay
                gradient = Image.new('L', (w, img_h), 0)
                g_draw = ImageDraw.Draw(gradient)
                for y in range(img_h):
                    alpha = int(180 * (y / img_h)) 
                    g_draw.line((0, y, w, y), fill=alpha)
                overlay_layer = Image.new('RGB', (w, img_h), (0,0,0))
                card_img.paste(overlay_layer, (0, header_h), mask=gradient)
                
            except Exception:
                card_draw.rectangle((0, header_h, w, header_h+img_h), fill=(200, 200, 200))
        else:
             card_draw.rectangle((0, header_h, w, header_h+img_h), fill=(240, 240, 240))

        # --- HOOK TEXT ---
        if hook_text:
            hx = 30
            hy = header_h + 30
            lines = textwrap.wrap(hook_text, width=10)
            for line in lines:
                card_draw.text((hx+2, hy+2), line, font=hook_font, fill='black')
                card_draw.text((hx, hy), line, font=hook_font, fill='white')
                hy += 70

        # --- C. Mask & Paste ---
        mask = Image.new('L', (w, h), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle((0, 0, w, h), radius=20, fill=255)
        
        img.paste(card_img, (int(x1), int(y1)), mask=mask)
        draw.rounded_rectangle((x1+8, y1+8, x2+8, y2+8), radius=20, fill=(220,220,220))
        img.paste(card_img, (int(x1), int(y1)), mask=mask)

        return (header_h + img_h) # Split point for content


    # 1. Header
    draw.text((margin, current_y), "Antigravity Daily", font=header_font, fill=(30,30,30))
    # Edition Pill (Fixed Left Alignment for Text)
    date_str = f"{data.get('date')} | {data.get('edition')}"
    draw.rounded_rectangle((width - 250, current_y+20, width - margin, current_y+80), radius=30, fill=(40,40,40))
    # Moved text x to width-230 (was width-210) to center it better in the width-250..width-margin space
    # (width is 1200, margin 50. Pill: 950 -> 1150. Center is 1050.)
    # Text length approx 200px. 1050 - 100 = 950.
    draw.text((width - 235, current_y+32), date_str, font=sub_font, fill='white')
    
    current_y += 140
    
    # 2. Hero Section
    hero_h = 560
    hero = data.get("hero", {})
    
    # Hero uses styling but maybe no top category bar? Or "HEADLINE"?
    # Let's give it a special category: "HEADLINE"
    
    split_h = draw_styled_card(
        (margin, current_y, width-margin, current_y+hero_h), 
        (255,255,255),
        image_path="web/public/images/mock_cover_3.jpg",
        hook_text=hero.get('hook_text'),
        category="HEADLINE STORY" # Hero Header
    )
    
    # Hero Content
    content_start_y = current_y + split_h + 30 
    cx = margin + 30
    
    title_y = content_start_y + 10
    hero_title = hero.get("title", "")
    lines = textwrap.wrap(hero_title, width=28) 
    for line in lines:
        draw.text((cx, title_y), line, font=card_title_font, fill=(30,30,30))
        title_y += 50
        
    summary_y = title_y + 10
    hero_summary = hero.get("summary", "")
    slines = textwrap.wrap(hero_summary, width=40)
    for line in slines[:2]:
        draw.text((cx, summary_y), line, font=card_desc_font, fill=(100,100,100))
        summary_y += 40
    
    current_y += hero_h + 40
    
    # 3. Quick Bites (V10: 3:4 Aspect Ratio)
    bites = data.get("bites", [])
    
    col_gap = 40
    row_gap = 40
    card_w = (width - (margin*2) - col_gap) // 2 # ~530px
    # 3:4 Ratio -> Height = width / 3 * 4 = 530 / 0.75 = 706
    card_h = int(card_w / 3 * 4) # ~700-710 px
    
    for i, bite in enumerate(bites):
        row = i // 2
        col = i % 2
        
        x_start = margin + col * (card_w + col_gap)
        y_start = current_y + row * (card_h + row_gap)
        x_end = x_start + card_w
        y_end = y_start + card_h
        
        img_path = bite.get('image')
        cat = bite.get('category', 'NEWS')
        
        split_h = draw_styled_card(
            (x_start, y_start, x_end, y_end), 
            fill=(255,255,255), 
            image_path=img_path,
            hook_text=bite.get('hook_text'),
            category=cat
        )
        
        # Content
        c_margin = 30
        cx = x_start + c_margin
        cy = y_start + split_h + 20
        
        # Title (Bold)
        title = bite.get('title_cn') or bite.get('title', "")
        lines = textwrap.wrap(title, width=14) 
        for line in lines[:2]: 
            draw.text((cx, cy), line, font=ImageFont.truetype("msyhbd.ttc", 30), fill=(30,30,30))
            cy += 40
            
        cy += 15
        # Summary (Longer)
        summary = bite.get('summary_cn') or ""
        if summary:
            # Wrap width 18 chars for ~500px width
            cn_lines = textwrap.wrap(summary, width=18) 
            for line in cn_lines[:4]: # Allow 4 lines now
                draw.text((cx, cy), line, font=card_desc_font, fill=(100,100,100)) 
                cy += 35

    draw.text((margin, height - 60), "Antigravity AI Engine • 生成于 " + data.get('date'), font=meta_font, fill=(180,180,180))

    img.save(output_path)
    print(f"✅ Digest Card generated: {output_path}")

if __name__ == "__main__":
    # Test Data: Kevin Scott "Impact over Noise"
    test_data = {
        "title": "AI创业必读：如何屏蔽99%的噪音？🤫",
        "quote_en": "\"Stop debating and do the damn experiment. The cost of trying is lower than ever.\"",
        "quote_cn": "别再争论了，去做那个该死的实验。试错的成本从未如此低廉。"
    }
    
    create_card(test_data)
