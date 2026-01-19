from PIL import Image, ImageDraw
import os

images = [
    "web/public/images/mock_cover_1.jpg",
    "web/public/images/mock_cover_2.jpg",
    "web/public/images/mock_cover_3.jpg",
    "web/public/images/mock_cover_4.jpg"
]

montage = Image.new('RGB', (800, 800))
y = 0

for img_path in images:
    try:
        if os.path.exists(img_path):
            img = Image.open(img_path)
            print(f"✅ Loaded {img_path}: {img.format} {img.size} {img.mode}")
            img.thumbnail((300, 180))
            montage.paste(img, (0, y))
        else:
            print(f"❌ Missing {img_path}")
    except Exception as e:
        print(f"❌ Error {img_path}: {e}")
    y += 200

montage.save("debug_montage.png")
print("Saved debug_montage.png")
