/*
    7 kyu
    Sum Factorial
    16791% of 301243 of 1,447Alpri Else1 Issue Reported
    C++
    Clang 8 C++17
    VIM
    EMACS
    Instructions
    Output
    Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.

    Here are a few examples of factorials:

    4 Factorial = 4! = 4 * 3 * 2 * 1 = 24

    6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
    In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

    For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.

    Good Luck!

    Note: Assume that all values in the list are positive integer values > 0 and each value in the list is unique.
*/
#include <vector>

unsigned long long int factorial(int n) {
    unsigned long long int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
unsigned long long int sum_factorial(std::vector<int> vi) {
    unsigned long long int sum = 0;
    for (int i = 0; i < vi.size(); i++) {
        sum += factorial(vi[i]);
    }
    return sum;
}
/*
TEST RESULTS
        Time: 2749ms Passed: 3Failed: 0
        Test Results:
        basic_tests
        test1
        test2
        Random_tests
        _25_random_tests
        STDERR
        You have passed all of the tests! :)
*/