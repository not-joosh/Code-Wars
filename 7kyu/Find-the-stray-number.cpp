/*
        7 kyu
        Find the stray number
        69921190% of 4,7464,392 of 50,081janitormeir3 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        You are given an odd-length array of integers, in which all of them are the same, except for one single number.

        Complete the method which accepts such an array, and returns that single different number.

        The input array will always be valid! (odd-length >= 3)

        Examples
        [1, 1, 2] ==> 2
        [17, 17, 3, 17, 17, 17, 17] ==> 3
*/
#include <vector>

int stray(std::vector<int> numbers) {
    int result = 0;
    for (int number : numbers) {
        result ^= number;
    }
    return result;
}
/*
TEST RESULTS:
        Time: 2531ms Passed: 5Failed: 0
        Test Results:
        solution_test
        simple_array_1
        simple_array_2
        simple_array_3
        random_small_array
        random_big_array
        You have passed all of the tests! :)
*/