/*
        8 kyu
        Is the string uppercase?
        43112685% of 4,0961,559 of 41,164donaldsebleung3 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Is the string uppercase?
        Task
        Create a method to see whether the string is ALL CAPS.

        Examples (input -> output)
        "c" -> False
        "C" -> True
        "hello I AM DONALD" -> False
        "HELLO I AM DONALD" -> True
        "ACSKLDFJSgSKLDFJSKLDFJ" -> False
        "ACSKLDFJSGSKLDFJSKLDFJ" -> True
        In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/
#include <string>

bool is_uppercase(const std::string& s) {
    for (char c : s) {
        if (c >= 'a' && c <= 'z') {
            return false;
        }
    }
    return true;
}
/*
TEST RESULST:
        Time: 1962ms Passed: 3Failed: 0
        Test Results:
        Is_UpperCase
        Basic_Tests
        Edge_Cases
        Random_Tests
        You have passed all of the tests! :)
*/