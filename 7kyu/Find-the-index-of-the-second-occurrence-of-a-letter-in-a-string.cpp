/*
        7 kyu
        Find the index of the second occurrence of a letter in a string
        13291% of 9960 of 724OlegBuryan
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

        Examples:

        secondSymbol('Hello world!!!','l') --> 3
        secondSymbol('Hello world!!!', 'A') --> -1
        Good luck ;) And don't forget to rate this Kata if you liked it.
*/
#include <string>

int secondSymbol(const std::string& str, char symbol) {
    int count = 0;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == symbol) {
            count++;
            if (count == 2) {
                return i;
            }
        }
    }
    return -1;
}
/*
TEST RESULTS:
        Time: 2872ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Short_Tests
        Random_Tests
        Large_Tests
        STDERR
        You have passed all of the tests! :)
*/