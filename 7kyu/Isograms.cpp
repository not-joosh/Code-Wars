/*
        7 kyu
        Isograms
        223749390% of 17,8217,114 of 188,430chunjef4 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

        Example: (Input --> Output)

        "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

        isIsogram "Dermatoglyphics" = true
        isIsogram "moose" = false
        isIsogram "aba" = false
*/
#include <string>
#include <unordered_set>
#include <cctype>

bool is_isogram(std::string str) {
    std::unordered_set<char> seen_chars;
    for (char& c : str) {
        c = std::tolower(c);
        if (seen_chars.count(c) > 0) {
            return false;
        }
        seen_chars.insert(c);
    }
    return true;
}
/*
TEST RESULTS:
        Time: 2259ms Passed: 1Failed: 0
        Test Results:
        Tests
        isogram_or_not
        You have passed all of the tests! :)
*/