import json
import random

# Load list from input JSON file
with open("words.json", "r") as f:
    words = json.load(f)

# Shuffle randomly
random.shuffle(words)

# Split evenly into 4 chunks
chunks = [[], [], [], []]
for i, word in enumerate(words):
    chunks[i % 4].append(word)

# Write each chunk to a separate JSON file
for i, chunk in enumerate(chunks):
    with open(f"words_{i+1}.json", "w") as f:
        json.dump(chunk, f, indent=2)

print("✅ Done! Output saved as words_1.json to words_4.json.")