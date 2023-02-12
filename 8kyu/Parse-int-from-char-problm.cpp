/*

        Parse nice int from char problem
        2517687% of 4,8051,292 of 51,270Joz2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

        Write a program that returns the girl's age (0-9) as an integer.

        Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/
#include <string>

int get_age(const std::string& she_said) {
    return stoi(she_said.substr(0, 1));
}
/*
TEST RESEULTS:
        Time: 2707ms Passed: 2Failed: 0
        Test Results:
        FixedTests
        should_pass_sample_tests
        RandomTests
        should_pass_random_tests
        You have passed all of the tests! :)
*/
