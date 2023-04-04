/*
        7 kyu
        Sum even numbers
        432993% of 1,36829 of 8,697jmpp
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

        Only numbers without decimals like 4 or 4.0 can be even.

        The input is a sequence of numbers: integers and/or floats.

        Examples
        [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
        []                               -->  0
*/
#include <vector>

int sum_even_numbers(const std::vector<double> &seq) {
    int sum = 0;
    for (const double &num : seq) {
        if (num == static_cast<int>(num) && static_cast<int>(num) % 2 == 0) {
            sum += num;
        }
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 3100ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Short_Tests
        Random_Tests
        Large_Tests
        You have passed all of the tests! :)
*/