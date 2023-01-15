/*

        8 kyu
        Find Multiples of a Number
        2668193% of 2,997165 of 26,247Spherixo
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Caution: This kata does not currently have any known supported versions for C. It may not be completable due to dependencies on out-dated libraries/language versions.
        In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

        For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

*/
#include <stddef.h>
typedef unsigned int uint;
void find_multiples (uint n, uint limit, size_t *count, uint multiples[]) {
    *count = 0;
    for (uint i = n; i <= limit; i += n) {
        multiples[*count] = i;
        (*count)++;
    }
}
/*
TEST RESULTS:
        Time: 680ms Passed: 210Failed: 0
        Test Results:
        tests_suite
        random_tests
        (200 of 200 Assertions)
        sample_tests
        (10 of 10 Assertions)
        Completed in 42.5690ms
        You have passed all of the tests! :)
*/
