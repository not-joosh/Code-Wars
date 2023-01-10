/*

        8 kyu
        Keep Hydrated!
        64117988% of 10,5142,979 of 132,774paulrichard
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Nathan loves cycling.

        Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

        You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

        For example:

        time = 3 ----> litres = 1

        time = 6.7---> litres = 3

        time = 11.8--> litres = 5

*/

int litres(double time) {
    return time * 0.5;
}

/*
TEST RESULTS:
        Time: 2836ms Passed: 2Failed: 0
        Test Results:
        FixedTests
        should_pass_sample_tests
        RandomTests
        should_pass_random_tests
        You have passed all of the tests! :)
*/