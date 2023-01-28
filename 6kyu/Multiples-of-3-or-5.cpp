/*

        6 kyu
        Multiples of 3 or 5
        300156788% of 33,12219,037 of 313,982jhoffner4 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

        Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

        Note: If the number is a multiple of both 3 and 5, only count it once.

        Courtesy of projecteuler.net (Problem 1)

*/
int solution(int number) {
    int sum = 0;
    for (int i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
/*
TEST RESULTS:
        Time: 2189ms Passed: 3Failed: 0
        Test Results:
        solution_algorithm
        should_handle_basic_test_cases
        should_handle_the_smallest_cases
        should_handle_random_test_cases
        You have passed all of the tests! :)
*/