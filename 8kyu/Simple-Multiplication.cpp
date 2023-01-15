/*

        8 kyu
        Simple multiplication
        2802892% of 6,67037,278 of 85,646grace5551 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/
int simpleMultiplication(int a) {
    return (a % 2 == 0) ? a * 8 : a * 9;
}
/*
TEST RESULTS:
        Time: 2873ms Passed: 2Failed: 0
        Test Results:
        BasicTest
        multiply
        RandomTest
        multiply
        You have passed all of the tests! :)
*/
