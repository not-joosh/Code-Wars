/*
        8 kyu
        Convert to Binary
        1917191% of 2,558115 of 26,187JapaX2 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Task Overview
        Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

        to_binary(1)  /* should return 1 
        to_binary(5)  /* should return 101 
        to_binary(11) /* should return 1011 
*/
export function toBinary(n: number): number {
    if (n === 0) {
        return 0;
    } else {
        return (n & 1) + 10 * toBinary(n >> 1);
    }
};
/*
TEST RESULTS:
        Time: 3226ms Passed: 2Failed: 0
        Test Results:
        Basic tests
        Testing for fixed tests
        Completed in 1ms
        Random Tests
        Testing for 100 random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/