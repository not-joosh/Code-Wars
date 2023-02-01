/*

        7 kyu
        Sum of integers in string
        1184593% of 9282,379 of 6,372kingcobra2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

        Note: only positive integers will be tested.

*/
#include <string>
#include <sstream>

int sumOfIntegers(const std::string& str) {
    int sum = 0;
    std::stringstream ss;
    for (char c : str) {
        if (isdigit(c)) {
        ss << c;
        } else {
            if (!ss.str().empty()) {
                sum += stoi(ss.str());
                ss.str("");
            }
        }
    }
    if (!ss.str().empty()) {
        sum += stoi(ss.str());
    }
    return sum;
}
/*

TEST RESULTS:
        Time: 2746ms Passed: 2Failed: 0
        Test Results:
        Tests
        Basic_tests
        Random_tests
        You have passed all of the tests! :)
*/