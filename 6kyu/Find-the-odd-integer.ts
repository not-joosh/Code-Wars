/*
        6 kyu
        Find the odd int
        394791290% of 22,2633,418 of 236,130rbuckley4 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Given an array of integers, find the one that appears an odd number of times.

        There will always be only one integer that appears an odd number of times.

        Examples
        [7] should return 7, because it occurs 1 time (which is odd).
        [0] should return 0, because it occurs 1 time (which is odd).
        [1,1,2] should return 2, because it occurs 1 time (which is odd).
        [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
        [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
interface Occurrences {
    [key: string]: number;
    [key: number]: number;
}

export const findOdd = (xs: number[]): number => {
    const occurrences: Occurrences = {};
    for (let num of xs) {
        occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;
    }
    for (let num in occurrences) {
        if (occurrences[num] % 2 !== 0) {
            return parseInt(num);
        }
    }
    return 0;
};
/*
TEST RESULTS:
        Time: 3317ms Passed: 6Failed: 0
        Test Results:
        Example tests
        xs = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] ; n = 5
        xs = [1,1,2,-2,5,2,4,4,-1,-2,5] ; n = -1
        xs = [20,1,1,2,2,3,3,5,5,4,20,4,5] ; n = 5
        xs = [10] ; n = 10
        xs = [1,1,1,1,1,1,10,1,1,1,1] ; n = 10
        xs = [5,4,3,2,1,5,4,3,2,10,10] ; n = 1
        Completed in 1ms
        You have passed all of the tests! :)
*/