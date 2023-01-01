/*
        7 kyu
        Descending Order
        247744489% of 19,96916,531 of 196,966TastyOs1 Issue Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

        Examples:
        Input: 42145 Output: 54421

        Input: 145263 Output: 654321

        Input: 123456789 Output: 987654321
*/
#include <inttypes.h>
#include <string.h>

int cmp(const void *a, const void *b) {
    return *(char*)b - *(char*)a;
}

uint64_t descendingOrder(uint64_t n)
{
    char str[21];
    sprintf(str, "%" PRIu64, n);
    qsort(str, strlen(str), sizeof(char), cmp);
    return strtoull(str, NULL, 10);
}
/*
Test Results:
        Time: 656ms Passed: 110Failed: 0
        Test Results:
        fixed_tests
        should_work_on_large_inputs
        (5 of 5 Assertions)
        should_work_on_simple_inputs
        (5 of 5 Assertions)
        Completed in 3.2457ms
        random_tests
        should_work_on_random_examples
        (100 of 100 Assertions)
        Completed in 23.4163ms
        STDERR
        You have passed all of the tests! :)
*/



