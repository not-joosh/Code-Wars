/*
        7 kyu
        Factorial
        1206691% of 2,365375 of 19,559wichu1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Your task is to write function factorial.

        https://en.wikipedia.org/wiki/Factorial

        FUNDAMENTALS
*/
export function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
/*
TEST RESULTS:
        Time: 2968ms Passed: 105Failed: 0
        Test Results:
        Basic tests
        Testing for 0
        Testing for 1
        Testing for 4
        Testing for 7
        Testing for 17
        Completed in 1ms
        Random tests
        Testing for 3
        Testing for 16
        Testing for 8
        Testing for 13
        Testing for 13
        Testing for 2
        Testing for 17
        Testing for 1
        Testing for 15
        Testing for 7
        Testing for 0
        Testing for 4
        Testing for 1
        Testing for 10
        Testing for 13
        Testing for 4
        Testing for 14
        Testing for 8
        Testing for 4
        Testing for 13
        Testing for 10
        Testing for 7
        Testing for 15
        Testing for 9
        Testing for 1
        Testing for 0
        Testing for 5
        Testing for 12
        Testing for 15
        Testing for 16
        Testing for 4
        Testing for 2
        Testing for 3
        Testing for 10
        Testing for 11
        Testing for 1
        Testing for 13
        Testing for 8
        Testing for 10
        Testing for 0
        Testing for 13
        Testing for 10
        Testing for 11
        Testing for 15
        Testing for 6
        Testing for 14
        Testing for 8
        Testing for 0
        Testing for 10
        Testing for 16
        Testing for 11
        Testing for 0
        Testing for 11
        Testing for 9
        Testing for 13
        Testing for 9
        Testing for 10
        Testing for 14
        Testing for 5
        Testing for 5
        Testing for 5
        Testing for 11
        Testing for 11
        Testing for 16
        Testing for 4
        Testing for 4
        Testing for 5
        Testing for 12
        Testing for 9
        Testing for 15
        Testing for 17
        Testing for 1
        Testing for 9
        Testing for 17
        Testing for 12
        Testing for 0
        Testing for 1
        Testing for 14
        Testing for 16
        Testing for 7
        Testing for 10
        Testing for 6
        Testing for 6
        Testing for 0
        Testing for 14
        Testing for 4
        Testing for 15
        Testing for 7
        Testing for 4
        Testing for 5
        Testing for 2
        Testing for 0
        Testing for 0
        Testing for 15
        Testing for 0
        Testing for 7
        Testing for 3
        Testing for 0
        Testing for 2
        Testing for 5
        Completed in 5ms
        You have passed all of the tests! :)
*/