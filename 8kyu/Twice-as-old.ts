/*
        8 kyu
        Twice as old
        50010190% of 4,803418 of 50,567petrosernivka
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Your function takes two arguments:

        current father's age (years)
        current age of his son (years)
        Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
    const twiceSonAge = sonYearsOld * 2;
    const yearsAgo = Math.abs(dadYearsOld - twiceSonAge);
    return yearsAgo;
}
/*
TEST RESULTS:
        Time: 3523ms Passed: 6Failed: 0
        Test Results:
        Basic tests
        Testing for dad's age: 36 and son's age: 7
        Testing for dad's age: 55 and son's age: 30
        Testing for dad's age: 42 and son's age: 21
        Testing for dad's age: 22 and son's age: 1
        Testing for dad's age: 29 and son's age: 0
        Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/