/*
        8 kyu
        Opposites Attract
        5557993% of 8,2001,265 of 109,830jbarget1 Issue Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

        Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
export function lovefunc(flower1: number, flower2: number): boolean {
    return (flower1 % 2 !== 0 && flower2 % 2 === 0) || (flower1 % 2 === 0 && flower2 % 2 !== 0);
}
/*
TEST RESULTS:
        Time: 2730ms Passed: 2Failed: 0
        Test Results:
        Do we love each other?
        Basic tests
        Random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/