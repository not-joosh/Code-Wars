/*
        8 kyu
        All Star Code Challenge #18
        2346493% of 3,9932,020 of 37,289shaddyjr
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

        If no occurrences can be found, a count of 0 should be returned.

        ("Hello", "o")  ==>  1
        ("Hello", "l")  ==>  2
        ("", "z")       ==>  0
        str_count("Hello", 'o'); // returns 1
        str_count("Hello", 'l'); // returns 2
        str_count("", 'z'); // returns 0
        Notes
        The first argument can be an empty string
        In languages with no distinct character data type, the second argument will be a string of length 1
*/
#include <string>

unsigned int strCount(const std::string& word, char letter) {
    unsigned int count = 0;
    for (char c : word) {
        if (c == letter) {
            count++;
        }
    }
    return count;
}
/*
TEST RESULTS:
        Time: 2812ms Passed: 6Failed: 0
        Test Results:
        SubmissionTests
        RandomTests
        BasicTests
        SingleLetter
        MultipleLetters
        EdgeLetters
        NoMatch
        EmptyString
        You have passed all of the tests! :)
*/