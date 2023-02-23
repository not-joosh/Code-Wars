/*
        8 kyu
        Count of positives / sum of negatives
        138829987% of 8,9695,020 of 96,632Dentzil8 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Given an array of integers.

        Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

        If the input is an empty array or is null, return an empty array.

        Example
        For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
#include <vector>

std::vector<int> countPositivesSumNegatives(std::vector<int> input) {
    if (input.empty()) {
        return {};
    }
    int countPositives = 0;
    int sumNegatives = 0;
    for (int i = 0; i < input.size(); i++) {
        if (input[i] > 0) {
        countPositives++;
        } else if (input[i] < 0) {
        sumNegatives += input[i];
        }
    }
    return {countPositives, sumNegatives};
}
/*
TEST RESULTS:
        Time: 2857ms Passed: 4Failed: 0
        Test Results:
        Test
        Test1
        Test2
        Test3
        RandomTests
        STDERR
        You have passed all of the tests! :)
*/