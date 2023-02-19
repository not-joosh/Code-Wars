/*
        7 kyu
        Sum of Minimums!
        1995693% of 2,3171,083 of 18,870Aizaz_Ahmad1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

        For Example:

        [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
        , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
        , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
        ]
        So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

        Note: You will always be given a non-empty list containing positive values.

        ENJOY CODING :)
*/
#include <vector>
#include <algorithm>

int sum_of_minimums(const std::vector<std::vector<int>>& numbers) {
    int sum = 0;
    for (const auto& row : numbers) {
        sum += *std::min_element(row.begin(), row.end());
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 2991ms Passed: 2Failed: 0
        Test Results:
        Minimum_Sum
        Fixed_Tests
        Random_Test
        You have passed all of the tests! :)
*/