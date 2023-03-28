/*
        7 kyu
        The fusc function -- Part 1
        1114187% of 76268 of 5,506ecolban
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        The fusc function is defined recursively as follows:

        1. fusc(0) = 0
        2. fusc(1) = 1
        3. fusc(2 * n) = fusc(n)
        4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
        The 4 rules above are sufficient to determine the value of fusc for any non-negative input n. For example, let's say you want to compute fusc(10).

        fusc(10) = fusc(5), by rule 3.
        fusc(5) = fusc(2) + fusc(3), by rule 4.
        fusc(2) = fusc(1), by rule 3.
        fusc(1) = 1, by rule 2.
        fusc(3) = fusc(1) + fusc(2) by rule 4.
        fusc(1) and fusc(2) have already been computed are both equal to 1.
        Putting these results together fusc(10) = fusc(5) = fusc(2) + fusc(3) = 1 + 2 = 3

        Your job is to produce the code for the fusc function. In this kata, your function will be tested with small values of n, so you should not need to be concerned about stack overflow or timeouts.

        Hint: Use recursion.

        When done, move on to Part 2.
*/
export function fusc(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n % 2 === 0) {
        return fusc(n / 2);
    } else {
        return fusc((n - 1) / 2) + fusc((n + 1) / 2);
    }
}
/*
TEST RESULTS:
        Time: 2996ms Passed: 2Failed: 0
        Test Results:
        The fusc function -- part 1
        Example tests
        100 Random tests
        Completed in 2ms
        You have passed all of the tests! :)
*/