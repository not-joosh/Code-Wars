/*

        8 kyu
        The 'if' function
        2316073% of 2,457647 of 22,313user5783879 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

        When bool is truthy, func1 should be called, otherwise call the func2.

        Example:
        void the_true() { printf("true"); }
        void the_false() { printf("false"); }
        _if(true, the_true, the_false);
         Logs "true" to the console 

*/
#include <stdbool.h>

void _if(bool value, void (*func1)(), void (*func2)()) {
    if (value) { func1(); } 
    else { func2();}
}
/*
TEST RESULTS:
        Time: 876ms Passed: 105Failed: 0
        Test Results:
        Generic_Test
        should_call_the_function
        (5 of 5 Assertions)
        Completed in 2.4691ms
        Random_Test
        should_call_the_function_without_cheating
        (100 of 100 Assertions)
        Completed in 33.2024ms
        You have passed all of the tests! :)
*/