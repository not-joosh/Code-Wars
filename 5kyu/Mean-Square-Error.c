/*

        5 kyu
        Mean Square Error
        1103584% of 1,105879 of 10,461kylehill1 Issue Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Complete the function that

        accepts two integer arrays of equal length
        compares the value each member in one array to the corresponding member in the other
        squares the absolute value difference between those two values
        and returns the average of those squared absolute value difference between each member pair.
        Examples
        [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
        [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
        [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

*/

#include <stddef.h>
#include <math.h>

double mean_square_error(size_t n, const int a[n], const int b[n]) {
    double sum = 0;
    for (size_t i = 0; i < n; i++) {
        int diff = a[i] - b[i];
        sum += pow(fabs(diff), 2);
    }
    return sum / n;
}

/*
TEST RESULTS:
        Time: 772ms Passed: 104Failed: 0
        Test Results:
        Fixed_Tests
        should_pass_all_the_tests_provided
        (4 of 4 Assertions)
        Completed in 1.2483ms
        Random_Tests
        should_pass_all_the_tests_provided
        (100 of 100 Assertions)
        Completed in 23.3377ms
        STDERR
        You have passed all of the tests! :)
*/