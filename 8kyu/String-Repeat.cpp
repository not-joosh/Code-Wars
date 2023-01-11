/*

        8 kyu
        String repeat
        111230888% of 15,3393,197 of 195,425wichu3 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

        Examples (input -> output)
        6, "I"     -> "IIIIII"
        5, "Hello" -> "HelloHelloHelloHelloHello"

*/

#include <string>

std::string repeat_str(size_t repeat, const std::string& str) {
    std:: string repStr;
    for(int i = 0; i < repeat; i++) {
        repStr += ("" + str);
    }
    return repStr;
}

/*
TEST RESULTS:
        Time: 2772ms Passed: 2Failed: 0
        Test Results:
        Fixed_tests
        Sample_cases
        Random_tests
        Random_cases
        STDERR
        You have passed all of the tests! :)
*/