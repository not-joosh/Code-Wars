/*
        7 kyu
        Mysterious Singularity Numbers
        531083% of 8518 of 528mor1nch
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

        Task
        The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

        Example
        Let's take the number 5 as an example:

        1 - doesn't divide integer by 2, 3, and 5
        2 - divides integer by 2
        3 - divides integer by 3
        4 - divides integer by 2
        5 - divides integer by 5
        Answer: 1

        because only one number doesn't divide integer by any of 2, 3, 5
*/
export function realNumbers(n: number): number {
    const count2 = Math.floor(n / 2);
    const count3 = Math.floor(n / 3);
    const count5 = Math.floor(n / 5);
    const count23 = Math.floor(n / 6);
    const count25 = Math.floor(n / 10);
    const count35 = Math.floor(n / 15);
    const count235 = Math.floor(n / 30);
    return (
        n - count2 - count3 - count5 + count23 + count25 + count35 - count235
    );
}

/*
TEST RESULTS:
        Time: 3014ms Passed: 4Failed: 0
        Test Results:
        Fixed Tests
        Basic Tests
        Completed in 1ms
        Random Tests
        Big Numbers
        Huge Numbers
        Very Huge Numbers
        Completed in 6ms
        You have passed all of the tests! :)
*/