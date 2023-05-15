/*
        8 kyu
        Convert a Number to a String!
        82319088% of 17,9238,103 of 260,662AKJ.IO1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        We need a function that can transform a number (integer) into a string.

        What ways of achieving this do you know?

        Examples (input --> output):
        123  --> "123"
        999  --> "999"
        -100 --> "-100"
*/
#include <string>

std::string number_to_string(int num) {
    return std::to_string(num);
}
/*
TEST RESULTS:
        Time: 2503ms Passed: 2Failed: 0
        Test Results:
        number_to_string_function
        should_convert_a_number_to_string
        should_convert_random_numbers_to_string
        You have passed all of the tests! :)
*/