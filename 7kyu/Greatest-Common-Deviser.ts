/*
        7 kyu
        Greatest common divisor
        2399191% of 1,28133 of 15,833RVdeKoning
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

        The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

        ALGORITHMSFUNDAMENTALSRECURSION
*/
export function mygcd(x: number, y: number): number {
    if (y === 0) {
        return x;
    }
    return mygcd(y, x % y);
}
/*
TEST RESULTS:
        Time: 2826ms Passed: 6Failed: 0
        Test Results:
        Submission tests
        Random tests
        Fixed tests
        Completed in 5ms
        You have passed all of the tests! :)
*/