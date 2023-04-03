/*
        6 kyu
        Find the missing letter
        133427490% of 8,4711,552 of 78,531user50368525 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Find the missing letter
        Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

        You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
        The array will always contain letters in only one case.

        Example:

        ['a','b','c','d','f'] -> 'e'
        ['O','Q','R','S'] -> 'P'
        (Use the English alphabet with 26 letters!)

        Have fun coding it and please don't forget to vote and rank this kata! :-)

        I have also created other katas. Take a look if you enjoyed this kata!
*/
export function findMissingLetter(array: string[]): string {
    let expectedCharCode = array[0].charCodeAt(0);
    for (let i = 1; i < array.length; i++) {
        if (array[i].charCodeAt(0) !== expectedCharCode + 1) {
            return String.fromCharCode(expectedCharCode + 1);
        }
        expectedCharCode++;
    }
    throw new Error("No missing letter found in the array.");
}
/*
TEST RESULTS:
        Time: 2925ms Passed: 2Failed: 0
        Test Results:
        solution
        exampleTests
        randomTest
        You have passed all of the tests! :)
*/