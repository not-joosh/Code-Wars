/*

        7 kyu
        Sum of Cubes
        993592% of 1,6224,216 of 14,717MementoMori
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

        Assume that the input n will always be a positive integer.

        Examples: (Input --> output)

        2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
        3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

*/
unsigned int sum_cubes(unsigned int n) {
    unsigned int sum = 0;
    for (unsigned int i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
/*
TEST RSULTS:
        Time: 2326ms Passed: 2Failed: 0
        Test Results:
        Test_Cases
        Fixed_Tests
        Random_Tests
        You have passed all of the tests! :)
*/