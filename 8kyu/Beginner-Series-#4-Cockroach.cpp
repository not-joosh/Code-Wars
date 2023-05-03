/*
        8 kyu
        Beginner Series #4 Cockroach
        2955090% of 5,0843,283 of 56,571Vortus1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

        For example:

        1.08 --> 30
        Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/
#include <cmath>
int cockroach_speed(double s) {
    int cmPerSec = std::floor(s * 27.7778);
    return cmPerSec;
}
/*
TEST RESULTS:
        Time: 2777ms Passed: 2Failed: 0
        Test Results:
        Solution_Tests
        Basic_Tests
        Random_Tests
        You have passed all of the tests! :)
*/