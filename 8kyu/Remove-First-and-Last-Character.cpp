/*

        8 kyu
        Remove First and Last Character
        109238991% of 15,0396,275 of 196,549Steadyx3 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/
#include <string>
using namespace std;

string sliceString(string str) {
    return str.substr(1, str.length() - 2);
}
/*
        TEST RESULTS:
        Time: 2423ms Passed: 4Failed: 0
        Test Results:
        Slicing_String
        Check_Short_Length_String
        Check_Longer_String
        Check_Ooopsss
        generate_random_string
        You have passed all of the tests! :)
*/