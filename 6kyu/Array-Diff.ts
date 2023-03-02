/*
        6 kyu
        Array.diff
        309853988% of 22,2432,054 of 210,099marcinbunsch2 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

        It should remove all values from list a, which are present in list b keeping their order.

        array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
        If a value is present in b, all of its occurrences must be removed from the other:

        array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
*/
export function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter(num => !b.includes(num));
}
/*
TEST RESULTS:
        Time: 2901ms Passed: 41Failed: 0
        Test Results:
        Basic tests
        Basic test should work
        Completed in 2ms
        Random tests
        Testing for arrayDiff([35,79,91,94,58,71,85,79,29,30,20,56,9,97], [26,31,44,32,95,29,49,2,78,77,33,19,13,94,79,66,41,44,73,37,87,74,88,79,51,84,2,98,79,73,75,43,7])
        Testing for arrayDiff([4,49], [27,38,99,69,80,38,0,25,45,71,18,96])
        Testing for arrayDiff([63,20], [83,91,20,75,22,7,41,47,44,11,49,37,92,84,68,73,49,67,15,23,55,82,52,60,79,5,86,29,44,92,1,94,96])
        Testing for arrayDiff([22,6,77,27,78,66,90,80,28,28,83,68,83,65,92,78,82,25,81,9,45,85,76,48,30,97,26,11,2,71,50,27], [50,97,83,83,24,72,81,50,71,39,22,44,23,53,41,4,34,85,78,75,78,66,21,61])
        Testing for arrayDiff([58,8,35,67,8,56,77,21,33,46,73,91,79,22,97,9,9,49,78,82,53,93,35,42,37,96,17,70,60], [72,54])
        Testing for arrayDiff([65,30], [28,95,13,4,58,11,67,18,33,29,37,70,27,26,51,92,8,4,76,28,7,47,79,99,87,77,38,16,3,41,88,96,38,22,2])
        Testing for arrayDiff([96,47,99,82,52,29,56,15,57,48,50,68,99,98,94,0,59,51,94,68,33,75,22,27,93,55,0,59], [42,21,39,82,99,17,31,23,87,28,15,71,19,65,2,17,34,22])
        Testing for arrayDiff([57,43,84,67,53,40,27,35,72,8,55,44,38,13,14,89,40,98,52,32,59], [89,62,48,12,16,75,13,93,10,63,81,7,75,41,56,76,12,46])
        Testing for arrayDiff([45], [83,16,94,34,88,18,87,12,4,28,32,44,41,28,30,35,22,6,44,38,50])
        Testing for arrayDiff([89,65,97,92,10,89,46,56,52,91,43,2,58,50,94,13,12,19,79,17,8,44], [])
        Testing for arrayDiff([59,25,90,67,88,21,89,11,87,83,82,10,88,56,65], [77,0,46,76,43,85,56,50,87,93,89,95,43,4,76,98,74,23,23,28,78,99,46,78,10,66])
        Testing for arrayDiff([63,30,6,71,73,56,96,74,41,77,92,64,19,20,60], [66,90,8,27,39,92,83,76,92,80,48,46,71,96,3,64,54,43,80,48,81,64,67,22,11,34,24,49,71,57,61,58])
        Testing for arrayDiff([18,41,75], [44,33,94,28,50])
        Testing for arrayDiff([74,57,41,83,56,54,38,86,64,14,76,77,12,22,13,58,88,77,50,1,89,99,75,49,19,94,30,3], [74,96,18,7,84,57,71,49,11,91,34,45,93,9,80,54,37,57,63,88,20,50,78,88,69])
        Testing for arrayDiff([58,78,12,39,6,67,36,56,35,46,53,45,16,38,85,61,0,7,10,85,59,89,64,32,19,83,67,57,51,42], [57,56,86,52,83,60,70,27,19,60,64,69])
        Testing for arrayDiff([0,60,38,99,12,2,4,33,54,5,53,19,19,55,59,94,66,29,39,3,32,25,58,86,56,63,0,33], [82,72,73,56])
        Testing for arrayDiff([78,31,91,39,14,32,55,37,56,4,14,89,41,75,36,20,89,35,29,9,69], [22,97,4,0,44,63,44,93,52,54,71,91,19,71,50,72,68,81,95,47,26,41,2,30,98,9,21,55,44,7])
        Testing for arrayDiff([10,47,8,96,20,91,8,46,55,27,90,65,1,55,47,5,35,93,52,51], [78,13,97,2,91])
        Testing for arrayDiff([27,68,42,45,19,7,45,10,98,76,71,49,30,60,74,38,71,99,48], [4,59,89,46,75,49,62,94,13,23,83,38,69,13,33,31,3,66,66,8,58,72,31,93,59,52,72])
        Testing for arrayDiff([49,87,26,12,57,77,99,57,88,63,22,93,27,28,16,39,48,2,86,44,73,13,22,13,69,43,56,77,9,28,90,89,74,80,85,33,69,92,80,54], [11,42,38,79,0,98,37,56,80,52,58,27,40,30,1,15,75,80,94,91,9,51,20,0,10,63,63,87,57,46,9,72,87,30,61,50])
        Testing for arrayDiff([64,81,98,57,18,47,86,2,49,84,45,76,66,47,39,5,75,78,29,82,38,26,37,94,33,24,94,2,89,41], [38])
        Testing for arrayDiff([46,65,33,72,58,92,20,32,49,72,40,97,36,35,79,17,61], [97,3,25,12,84,33,11,85,67,53,63,12,74,88,0,9,18,65,11,35,89,37,4,85])
        Testing for arrayDiff([75,90,6,26,8,49,91,39,49,99,4,36,6,38,56,62,58,43,33,10,5,13,39,70,48,71,71,38,13,20,91,17,5], [10,89,35,76,29,46,37,23,51,50,39,5,66,50,82,16,66,62,34,83,45,54,33,41,53,42,65,23,96,74,41])
        Testing for arrayDiff([61,63,28,42,54,75,27,35,17,66,83,81,28,61,61,25,40], [45,17,83,18,93,33,12,78,18,81])
        Testing for arrayDiff([24,38,94,95,18,79,53,41,90,74,77,87,88,25,64,31,66,25,57,31,82], [97,69,42,41,13,33,59,4,28,8,33,11,85,17,84,56,32,66,62,11,38,6,70])
        Testing for arrayDiff([11,89,54,2,55,90,50,50,7,24,11,62,34,80,36,82,16,68,11,2,81,2,34,46,74,52,79,16], [67,42,93,34,56,48,39,26,96,10,82,71,58,26,55,36,26,12,23,70,84,84,87,15,19,45,66,88,51,62,7,5])
        Testing for arrayDiff([65,78,25,94,59,14,60,50,58,91,18,1,74,54,63,93,30,97,59,23,54,0], [50,41,31,80,87,10,37,97,46,0,68,90,92,57,5,66,76,30,50,84,84,28,83,52,12,92,21,44,39,85,39,0,77,43,50,67,28])
        Testing for arrayDiff([86,82,4,45,2,74,25,40,48,12,88,11,81,6,91,44,95,34,74,16,27,94,41], [54,7,30,56,26,96,73,65,32,1,65,25,69,11,86,46,94,86,98,42,19,38,95,56,97])
        Testing for arrayDiff([28,94,71,39,88,91,79,15,54,88,73,40,95,49,83,19,47,63,48,6,59,21,40,87,97,66,84,70,31,89], [7,49,44,88,58,62,55,60,28,96,1,30,49,21,65,57,71,70,88,81,7,28,83,67,52,6,55,78,48,75,7,67,16,84,18,70])
        Testing for arrayDiff([5,56,27,72,56,31,88,56,98,43,16,23,69,42,27,82,44,48], [])
        Testing for arrayDiff([48,63,67,97,87,13,91,2,8], [31,10,73,99,75,63,21,22,28,17,17,99,13,48,82,89,90,61,89,83,28,95,83,26,33,72,82,92,68,15,74,33,20])
        Testing for arrayDiff([34,0,15,94,5,97,60,19,70,99,69,6,96,81,43,87,90,96,22,69], [53,3,27,62,60,3,35,19,19,3,89,76,91,12,47,82,57,64,18,53,3,77,92,88,71,67])
        Testing for arrayDiff([52,96,22,50,42,57,10,17,65,61,6,63,7,45,2,78,87,4,44,78,25,72,95,63], [52,24,52,34,67,32,65,9,60,53,33,84,53,37,35,45,99,24,7,13,78,47,25,91,84,15,99,47,66,88,82,83,30,4,7,41,83,88,88,0])
        Testing for arrayDiff([24,65,0,71,10,97,92,71,5,22,70,0,28,78,78,39,64,71,9,91,76,48,12,37,12,31,78,61,42,61,4,60], [39,10,35,48,56,64,45,30,2,74,67,3,61,38,18,68,32,78,50,63,8,41,99,22,96,24,72,94,51,48,79,36,72,9,59,45,48,5,26,20])
        Testing for arrayDiff([93,82,2,64,93,91,0], [92,92,99,68,28,92,48,6,75,56,52,23,31,30,49,48,75,34])
        Testing for arrayDiff([76,98,72,3,46,10,36,16,41,54,2,4,80,86,10,9,82,44,56,71,90,43,66], [49,33,3,50,85,54,69,16,0,3,5,63,59,58,36,84,22,13,96,58,98,77,24,10,15,17])
        Testing for arrayDiff([47,74,16,40,34,13,23,92,12,57,4,52,55,68,33,71,53,80], [93,40])
        Testing for arrayDiff([21,95,96,77,59,9,34,53,68,24,93,82,5,38,92,18,43,41,30,56,97,30,81,54,87,37,59,24,41,54], [16,65,94,16,35,99,78,81,12,39,99,57,16,33,50,18,48,63,8,62,83,81,64,17,30,93,72,33,76,32,34])
        Testing for arrayDiff([60,17,22,9,85,2,58,48,50,46,64,77,67,20,80,66,23,90,13,24,67,83,83,80], [70,86,23,61,44,13,1,39,22,89,17,1,88,98,62,11,96,73,43,63,90,44,40,77,53,78,38,88,73,23,18,65,22,10,29,99,84,95,56,14])
        Testing for arrayDiff([22,92,30,91,16,61,24,92,97,87,42,77,60,35,34,81,78], [20,3,90,44,38,56,10,56,85,8,64,88,34,95,14,51,82,65,29,6,6,84,31,64,15,3,53,46,15,32,85,11,87,33,41,76,27])
        Completed in 5ms
        You have passed all of the tests! :)
*/