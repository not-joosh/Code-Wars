/*
        8 kyu
        Check same case
        2736490% of 1,764134 of 16,440gladiatus552 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Write a function that will check if two given characters are the same case.

        If either of the characters is not a letter, return -1
        If both characters are the same case, return 1
        If both characters are letters, but not the same case, return 0
        Examples
        'a' and 'g' returns 1

        'A' and 'C' returns 1

        'b' and 'G' returns 0

        'B' and 'g' returns 0

        '0' and '?' returns -1
*/
export function sameCase(a: string, b: string): number {
    if (!(/[a-zA-Z]/.test(a) && /[a-zA-Z]/.test(b))) {
        return -1; 
    } else if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
        return 1;
    } else {
        return 0;
    }
};
/*
TEST RESULTS:
        Time: 2969ms Passed: 4Failed: 0
        Test Results:
        Fixed tests
        Same Case
        Different Cases
        Non-letters
        Completed in 3ms
        Random tests
        Test
        Completed in 2ms
        You have passed all of the tests! :)
*/