/*
        8 kyu
        MakeUpperCase
        3306086% of 8,0143,513 of 102,076wichu2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function which converts the input string to uppercase.
*/
#include <string>

std::string makeUpperCase(const std::string& input_str) {
    std::string result = input_str;
    for (char& c : result) {
        if (c >= 'a' && c <= 'z') {
            c = c - 'a' + 'A';
        }
    }
    return result;
}
/*
TEST RESLTS:
        Time: 2788ms Passed: 1Failed: 0
        Test Results:
        The_makeUpperCase_function
        should_pass_all_the_tests_provided
        You have passed all of the tests! :)
*/
