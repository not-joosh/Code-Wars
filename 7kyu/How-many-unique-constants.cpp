/*

        7 kyu
        How Many Unique Consonants?
        36990% of 359115 of 1,617l-suzuki1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

        Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

        Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

        Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

        Examples
        "add" ==> 1
        "Dad" ==> 1
        "aeiou" ==> 0
        "sillystring" ==> 7
        "abcdefghijklmnopqrstuvwxyz" ==> 21
        "Count my unique consonants!!" ==> 7

*/
#include <string>
#include <unordered_set>

unsigned int countConsonants(const std::string& str){
    // Create a set to store unique consonants
    std::unordered_set<char> consonants;

    // Iterate through each character in the string
    for (char c : str) {
        // Check if the character is alphabetical
        if (isalpha(c)) {
            // Convert the character to lowercase
            char lower = tolower(c);
            // Check if the character is a consonant (not in "aeiou")
            if (lower != 'a' && lower != 'e' && lower != 'i' && lower != 'o' && lower != 'u') {
                // If it is a consonant, add it to the set
                consonants.insert(lower);
            }
        }
    }
    // Return the size of the set (number of unique consonants)
    return consonants.size();
}
