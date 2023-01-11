/*

        8 kyu
        Powers of 2
        3719592% of 3,890571 of 37,394wichu
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

        Examples
        n = 0  ==> [1]        # [2^0]
        n = 1  ==> [1, 2]     # [2^0, 2^1]
        n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

#include <inttypes.h>
#include <stddef.h>

void powers_of_two (size_t n, uint64_t powers[n + 1]) {
    for (size_t i = 0; i <= n; i++) {
        powers[i] = 1ull << i;
    }
}

/*
TEST CASES:
        Time: 672ms Passed: 103Failed: 0
        Test Results:
        tests_suite
        random_tests
        (100 of 100 Assertions)
        sample_tests
        (3 of 3 Assertions)
        Completed in 20.6633ms
        You have passed all of the tests! :)
*/