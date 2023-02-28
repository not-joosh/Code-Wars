/*
        8 kyu
        Counting sheep...
        119830689% of 13,1462,197 of 166,164tfKamran5 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

        For example,

        [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
        The correct answer would be 17.

        Hint: Don't forget to check for bad values like null/undefined
*/
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count;
}
/*
TEST RESULTS:
        Time: 2842ms Passed: 1Failed: 0
        Test Results:
        countSheeps
        should work correctly
        You have passed all of the tests! :)
*/