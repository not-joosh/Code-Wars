/*
        8 kyu
        Sum of positive
        157041893% of 17,7238,114 of 223,266JbPasquier1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        You get an array of numbers, return the sum of all of the positives ones.

        Example [1,-4,7,12] => 1 + 7 + 12 = 20

        Note: if there is nothing to sum, the sum is default to 0.
*/
#include <vector>

int positive_sum (const std::vector<int>& arr){
    int sum = 0;
    for (int num : arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 2332ms Passed: 4Failed: 0
        Test Results:
        Tests
        works_for_some_examples
        returns_0_when_array_is_empty
        returns_0_when_all_elements_are_negative
        works_for_random_arrays
        You have passed all of the tests! :)
*/