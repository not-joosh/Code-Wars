/*
        8 kyu
        Sum The Strings
        2786592% of 3,78619,100 of 35,436K-Calderon-ASC1 Issue Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

        Example: (Input1, Input2 -->Output)

        "4",  "5" --> "9"
        "34", "5" --> "39"
        "", "" --> "0"
        "2", "" --> "2"
        "-5", "3" --> "-2"
        Notes:

        If either input is an empty string, consider it as zero.

        Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
 */
#include <stdlib.h>
#include <string.h>

char *sum_strings(char *sum, const char *a, const char *b) {
    int a_int = strlen(a) == 0 ? 0 : strtol(a, NULL, 10);
    int b_int = strlen(b) == 0 ? 0 : strtol(b, NULL, 10);
    sprintf(sum, "%d", a_int + b_int);
    return sum;
}
/*
TEST RESULTS:
                Time: 632ms Passed: 3Failed: 0
                Test Results:
                tests_suite
                empty_strings
                random_tests
                sample_tests
                Completed in 15.5184ms
                STDERR
                You have passed all of the tests! :)
*/