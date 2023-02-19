/*
        7 kyu
        Shortest Word
        153440190% of 16,5343,891 of 184,651PG11 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Simple, given a string of words, return the length of the shortest word(s).

        String will never be empty and you do not need to account for different data types.
*/
#include <string>
int find_short(std::string str) {
    int shortest = str.length();
    int length = 0;
    for (char c : str) {
        if (c == ' ') {
            if (length < shortest) {
                shortest = length;
            }
            length = 0;
        } else {
            length++;
        }
    }
    if (length < shortest) {
        shortest = length;
    }
    return shortest;
}

/*
TEST RESULTS:
        Time: 2863ms Passed: 2Failed: 0
        Test Results:
        Tests
        Sample_Test_Cases
        Random_Test_Cases
        You have passed all of the tests! :)
*/