/*

        8 kyu
        Reversed Strings
        117331091% of 16,2698,182 of 221,321jhoffner1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Complete the solution so that it reverses the string passed into it.

        'world'  =>  'dlrow'
        'word'   =>  'drow'

*/
#include <string>
#include <algorithm>

using namespace std;

string reverseString(string str) {
    reverse(str.begin(), str.end());
    return str;
}
/*
TEST RESULTS:
        Time: 2369ms Passed: 3Failed: 0
        Test Results:
        Reverse_String
        Check_Short_Words
        Check_Longer_Words
        generate_random_string
        You have passed all of the tests! :)
*/