from PIL import Image

image = Image.open('monster.jpg')
width, height = image.size

for i in range(3):
    for j in range(3):
        cropped_image = image.crop((j * int(width/3), i * int(height/3), j * int(width/3) + int(width/3), i * int(height/3) + int(height/3)))
        cropped_image.save(f'image{i}{j}.jpg')