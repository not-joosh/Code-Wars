/*
        7 kyu
        Chain me
        1083093% of 624120 of 5,969nrgarg2 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Write a generic function chainer
        Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

        The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

        int add10 (int x) { return x + 10; }
        int mul30 (int x) { return x * 30; }

        typedef int (*funcptr) (int);

        chain(50, 2, (funcptr[2]) {add10, mul30});
        // returns 1800
*/
#include <stddef.h>

typedef int (*funcptr) (int);

int chain(int init_val, size_t length, const funcptr functions[length]) {
    int result = init_val;
    for (int i = 0; i < length; i++) {
        result = functions[i](result);
    }
    return result;
}
/*
TEST RESULTS:
        Time: 696ms Passed: 2Failed: 0
        Test Results:
        tests_suite
        random_tests
        sample_tests
        Completed in 17.7937ms
        STDERR
        You have passed all of the tests! :)
*/