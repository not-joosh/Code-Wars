/*
        7 kyu
        Are the twins even?
        4084% of 5724 of 159Coder_38
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Task
        Given an array of up to 100 numbers ranging from 1 to 1000, determine how many distinct even sums can be obtained by combinations of 2 different elements ( i.e. different indices, not necessarily different numbers ).

        Assume you will always have at least 2 numbers.

        Example
        array: [5, 6, 7, 8, 9]

        combinations of 2 numbers:
            [5, 6], [5, 7], [5, 8], [5, 9], [6, 7], [6, 8], [6, 9], [7, 8], [7, 9], [8, 9]
        sum:  11      12      13      14      13      14      15      15      16      17

        list of distinct even sums:    12, 14, 16
        number of distinct even sums:  3
*/
#include <stddef.h>
#include <stdbool.h>

unsigned even_twins(size_t length, const unsigned array[length]) {
    bool found_sums[100000] = {false};
    unsigned num_even_sums = 0;

    for (size_t i = 0; i < length - 1; i++) {
        for (size_t j = i + 1; j < length; j++) {
            unsigned sum = array[i] + array[j];
            if (sum % 2 == 0 && !found_sums[sum]) {
                found_sums[sum] = true;
                num_even_sums++;
            }
        }
    }
    return num_even_sums;
}
/*
TEST RESLTS:
    Time: 831ms Passed: 2Failed: 0
    Test Results:
    even_twins
    Fixed_Tests
    Random_Tests
    Completed in 288.5472ms
    You have passed all of the tests! :)
*/