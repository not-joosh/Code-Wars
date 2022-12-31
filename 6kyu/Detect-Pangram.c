// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

#include <stdbool.h>
#include <ctype.h>

bool is_pangram(const char *str_in) {
    // Initialize an array to keep track of which letters have been seen
    bool seen[26] = {false};
    // Iterate through each character in the input string
    for (const char *p = str_in; *p; ++p) {
        // Convert the character to lower case
        char c = tolower(*p);
        // If it is a letter, mark it as seen
        if (isalpha(c)) { seen[c - 'a'] = true; }
    }
    // Check if all letters have been seen
    for (int i = 0; i < 26; ++i) {
        if (!seen[i]) {
            // If any letter has not been seen, the input string is not a pangram
            return false;
        }
    }
    // If all letters have been seen, the input string is a pangram
    return true;
}