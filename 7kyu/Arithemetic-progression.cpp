/*
        7 kyu
        Arithmetic progression
        581892% of 79115 of 3,901baaart1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

        The result should be a string of numbers, separated by comma and space.

        Example
        # first element: 1, difference: 2, how many: 5
        arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/
#include <string>

std::string arithmeticSequenceElements(int a, int d, int n) {
    std::string result = std::to_string(a);  
    int current = a;
    for (int i = 1; i < n; i++) { 
        current += d;  
        result += ", " + std::to_string(current);  
    }
    return result;
}

/*
TEST RESULTS:
        Time: 2458ms Passed: 2Failed: 0
        Test Results:
        AritmeticSequenceElementsTests
        BasicTests
        RandomTests
        You have passed all of the tests! :)
*/