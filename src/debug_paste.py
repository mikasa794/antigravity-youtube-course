from PIL import Image, ImageDraw
import os

def test_paste():
    # 1. Create Canvas
    img = Image.new('RGB', (500, 500), (255, 0, 0)) # Red Canvas
    
    # 2. Load Image
    img_path = os.path.join(os.getcwd(), "web/public/images/mock_cover_3.jpg")
    print(f"Checking path: {img_path}")
    
    if not os.path.exists(img_path):
        print(f"❌ Missing image at {img_path}")
        return

    bg_img = Image.open(img_path).convert('RGB')
    bg_img = bg_img.resize((300, 300))
    
    # 3. Create Mask
    mask = Image.new('L', (300, 300), 0)
    mask_draw = ImageDraw.Draw(mask)
    # White rounded rect on black background
    mask_draw.rounded_rectangle((0, 0, 300, 300), radius=50, fill=255)
    
    print(f"Mask mode: {mask.mode}, Mean: {mask.getextrema()}")
    
    # 4. Paste with Mask using COMPOSITE (Workaround)
    try:
        # img.paste(bg_img, (100, 100), mask=mask)
        # ^ This failing logic is replaced by specific composite test
        
        # Extract the region to paste onto
        base_region = img.crop((100, 100, 400, 400))
        
        # Composite
        composited = Image.composite(bg_img, base_region, mask)
        
        # Paste back
        img.paste(composited, (100, 100))
        
        print("✅ Composite paste executed")
    except Exception as e:
        print(f"❌ Paste failed: {e}")
        
    img.save("debug_paste_result.png")
    print("Saved debug_paste_result.png")

if __name__ == "__main__":
    test_paste()
