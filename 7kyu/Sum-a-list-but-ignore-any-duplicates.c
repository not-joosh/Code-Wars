/*
        7 kyu
        Sum a list but ignore any duplicates
        50993% of 481107 of 3,794julzhk
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Please write a function that sums a list, but ignores any duplicate items in the list.

        For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/
#include <stddef.h>

int sum_no_duplicates(size_t length, const int array[length]) {
    int sum = 0;
    for (size_t i = 0; i < length; i++) {
        int current = array[i];
        int has_duplicate = 0;
        for (size_t j = 0; j < length; j++) {
            if (i != j && array[j] == current) {
                has_duplicate = 1;
                break;
            }
        }
        if (!has_duplicate) {
            sum += current;
        }
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 622ms Passed: 3Failed: 0
        Test Results:
        sum_no_duplicates
        Basic_Tests
        Many_Duplicates_Tests
        Random_Tests
        Completed in 16.4189ms
        You have passed all of the tests! :)
*/