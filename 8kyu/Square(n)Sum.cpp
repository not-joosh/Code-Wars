/*

        8 kyu
        Square(n) Sum
        111027392% of 13,7408,301 of 175,119jhoffner1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Complete the square sum function so that it squares each number passed into it and then sums the results together.

        For example, for [1, 2, 2] it should return 9 because 
        1
        2
        +
        2
        2
        +
        2
        2
        =
        9
        1 
        2
        +2 
        2
        +2 
        2
        =9.

*/
#include <vector>

int square_sum(const std::vector<int>& numbers) {
    int sum = 0;
    for (int i = 0; i < numbers.size(); i++) {
        sum += numbers[i] * numbers[i];
    }
    return sum;
}
/*
TEST RESULT:
        Time: 3199ms Passed: 2Failed: 0
        Test Results:
        test_square_sum
        should_pass_some_basic_tests
        should_pass_some_tests_with_random_data
        STDERR
        You have passed all of the tests! :)
*/