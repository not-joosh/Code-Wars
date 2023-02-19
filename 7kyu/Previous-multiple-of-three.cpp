/*
        7 kyu
        Previous multiple of three
        741592% of 697224 of 5,277Kees de Vreugd1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

        Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

        Examples
        1      => null
        25     => null
        36     => 36
        1244   => 12
        952406 => 9
*/
int prev_mult_of_three(int n) {
    while (n > 0) {
        int digit_sum = 0;
        int temp = n;
        while (temp > 0) {
            digit_sum += temp % 10;
            temp /= 10;
        }
        if (digit_sum % 3 == 0) {
            return n;
        }
        n /= 10;
    }
    return -1;
}
/*
TEST RESULTS:
        Time: 2161ms Passed: 2Failed: 0
        Test Results:
        Tests
        Basic_tests
        Random_tests
        You have passed all of the tests! :)
*/