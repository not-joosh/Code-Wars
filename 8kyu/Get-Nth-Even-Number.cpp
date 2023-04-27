/*
        8 kyu
        Get Nth Even Number
        2056588% of 3,3501,231 of 25,780kodejuice
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Return the Nth Even Number

        Example(Input --> Output)

        1 --> 0 (the first even number is 0)
        3 --> 4 (the 3rd even number is 4 (0, 2, 4))
        100 --> 198
        1298734 --> 2597466
        The input will not be 0.
*/
int nthEven(int n) {
    return 2 * (n - 1);
}
/*
TEST RESULTS:
        Time: 2382ms Passed: 2Failed: 0
        Test Results:
        NthEven
        FixedTests
        RandomTests
        You have passed all of the tests! :)
*/