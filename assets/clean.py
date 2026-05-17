import json
import re
from collections import Counter

# List of swear words (you can extend or modify this list)
swear_words = [
    # get from: https://gist.github.com/takatama/b4587f6509489a529bbcd87e1a96a3f2
]

def clean_words(words_file):
    with open(words_file, 'r') as file:
        words = json.load(file)

    # Check if word has any digits
    def contains_numbers(word):
        return bool(re.search(r'\d', word))

    # Check if word contains any swear
    def contains_swear(word):
        return any(swear in word.lower() for swear in swear_words)

    # Clean words
    cleaned_words = [
        word.lower() for word in words
        if word.isalpha()
        and 4 <= len(word) <= 9
        and not contains_numbers(word)
        and not contains_swear(word)
    ]

    # Save cleaned words
    with open(words_file, 'w') as file:
        json.dump(cleaned_words, file, indent=2)

    print(f"Cleaned words saved to {words_file}")

# Replace 'words.json' with your actual file path
clean_words("rawwords.json")