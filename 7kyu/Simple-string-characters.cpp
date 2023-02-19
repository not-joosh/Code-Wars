/*

        7 kyu
        Simple string characters
        1123893% of 1,233490 of 8,970KenKamau2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

        Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
        --the order is: uppercase letters, lowercase, numbers and special characters.

*/
#include <vector>
#include <string>

std::vector<int> solve(std::string s) {
    int upper = 0, lower = 0, digits = 0, special = 0;
    for (char c : s) {
        if (c >= 'A' && c <= 'Z') {
            upper++;
        } else if (c >= 'a' && c <= 'z') {
            lower++;
        } else if (c >= '0' && c <= '9') {
            digits++;
        } else {
            special++;
        }
    }
    return {upper, lower, digits, special};
}
/*
TEST RESULTS:
        Time: 2641ms Passed: 2Failed: 0
        Test Results:
        Simple_string_characters
        Example_tests
        Random_test
        You have passed all of the tests! :)
*/