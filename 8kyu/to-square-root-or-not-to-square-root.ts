/*
        8 kyu
        To square(root) or not to square(root)
        34913293% of 3,737362 of 24,764user5036852
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Write a method, that will get an integer array as parameter and will process every number from this array.

        Return a new array with processing every number of the input-array like this:

        If the number has an integer square root, take this, otherwise square the number.

        Example
        [4,3,9,7,2,1] -> [2,9,3,49,4,1]
        Notes
        The input array will always contain only positive numbers, and will never be empty or null.
*/
export function squareOrSquareRoot(array: number[]): number[] {
    return array.map((num) => {
        const sqrt = Math.sqrt(num);
        return sqrt % 1 === 0 ? sqrt : num * num;
    });
};
/*
TEST RSULTS:
        Time: 2883ms Passed: 4Failed: 0
        Test Results:
        Solution
        basic tests 1
        basic test 2
        basic test 3
        random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/