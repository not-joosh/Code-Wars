/*

        8 kyu
        Quarter of the year
        3777392% of 4,7672,326 of 65,429Orses
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

        For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

        Constraint:

        1 <= month <= 12

*/

int quarter_of(int month){
    return (month - 1) / 3 + 1;
}

/*

TEST RESULTS:
        Time: 2840ms Passed: 2Failed: 0
        Test Results:
        All_tests
        Base_cases
        Random_tests
        Random_cases
        You have passed all of the tests! :)

*/