/*
        8 kyu
        Sum of differences in array
        3187690% of 2,173979 of 16,367kamilalew2 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Your task is to sum the differences between consecutive pairs in the array in descending order.

        Example
        [2, 1, 10]  -->  9
        In descending order: [10, 2, 1]

        Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

        If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/
#include <vector>
#include <algorithm>

int sumOfDifferences(const std::vector<int>& arr){
    if (arr.size() <= 1) {
        return 0;
    }
    std::vector<int> sortedArr(arr);
    std::sort(sortedArr.begin(), sortedArr.end(), std::greater<int>());
    int sum = 0;
    for (int i = 0; i < sortedArr.size() - 1; ++i) {
        sum += sortedArr[i] - sortedArr[i+1];
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 2821ms Passed: 2Failed: 0
        Test Results:
        Test_Cases
        Fixed_Tests
        Random_Tests
        STDERR
        You have passed all of the tests! :)
*/