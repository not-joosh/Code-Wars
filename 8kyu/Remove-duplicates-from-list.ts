/*
        8 kyu
        Remove duplicates from list
        21111393% of 2,424207 of 22,997wichu3 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Define a function that removes duplicates from an array of numbers and returns it as a result.

        The order of the sequence has to stay the same.
*/
export const distinct = (a: number[]): number[] => {
    return a.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};
/*
TEST RESULT:
        Time: 3385ms Passed: 5Failed: 0
        Test Results:
        solution
        should handle array with one number
        should handle array with two numbers but no duplicates
        should handle array with two numbers and a duplicate
        should handle larger arrays
        Random tests
        Completed in 54ms
        You have passed all of the tests! :)
*/