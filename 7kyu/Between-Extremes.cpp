/*
        7 kyu
        Between Extremes
        20991% of 64948 of 3,288TroyMaeder
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Given an array of numbers, return the difference between the largest and smallest values.

        For example:

        [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

        [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

        The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/
#include <vector>
#include <algorithm>

int betweenExtremes(const std::vector<int>& numbers) {
    int min_val = *std::min_element(numbers.begin(), numbers.end());
    int max_val = *std::max_element(numbers.begin(), numbers.end());
    return max_val - min_val;
}
/*
TEST RESULTS:
        Time: 2870ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Short_Tests
        Random_Tests
        Large_Tests
        You have passed all of the tests! :)
*/