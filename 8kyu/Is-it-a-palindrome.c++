/*

        8 kyu
        Is it a palindrome?
        2976893% of 3,7801,954 of 34,668wichu2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function that checks if a given string (case insensitive) is a palindrome.

*/
#include <string>
#include <algorithm>

bool isPalindrom(const std::string& str) {
    std::string lower_str = str;
    std::transform(lower_str.begin(), lower_str.end(), lower_str.begin(), ::tolower);
    int length = lower_str.length();
    for (int i = 0; i < length / 2; i++) {
        if (lower_str[i] != lower_str[length - i - 1]) {
            return false;
        }
    }
    return true;
}
/*
TEST RESULTS:
        Time: 2700ms Passed: 1Failed: 0
        Test Results:
        The_isPalindrom_function
        should_work_for_some_examples
        You have passed all of the tests! :)
*/