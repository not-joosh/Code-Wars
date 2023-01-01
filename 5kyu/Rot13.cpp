/*

        5 kyu
        Rot13
        170838889% of 5,9224,226 of 66,937Rubikan3 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

        Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/
#include <string>
using namespace std;

string rot13(string msg) {
    for (int i = 0; i < msg.length(); i++) {
        char c = msg[i];
        if (c >= 'A' && c <= 'Z') {
            c = (c - 'A' + 13) % 26 + 'A';
        } else if (c >= 'a' && c <= 'z') {
            c = (c - 'a' + 13) % 26 + 'a';
        }
        msg[i] = c;
    }
    return msg;
}
/*
Test Results:
        Time: 2328ms Passed: 3Failed: 0
        Test Results:
        Rot13
        basic_tests
        alphabet_tests
        random_tests
        STDERR
        You have passed all of the tests! :)
*/