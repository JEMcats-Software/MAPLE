import json

# Read words from file
with open("20k.txt", "r") as file:
    words = [line.strip() for line in file if line.strip()]

# Save to JSON file
with open("rawwords.json", "w") as json_file:
    json.dump(words, json_file, indent=2)

print(f"Saved {len(words)} words to words.json")