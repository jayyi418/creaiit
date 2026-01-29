from PIL import Image
import sys

def remove_black_background(input_path, output_path, threshold=20):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Check if pixel is close to black
        # item is (r, g, b, a)
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            new_data.append((0, 0, 0, 0)) # Make Transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python script.py <input> <output>")
    else:
        remove_black_background(sys.argv[1], sys.argv[2])
