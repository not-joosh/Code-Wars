/*
        8 kyu
        N-th Power
        2394792% of 3,550442 of 33,812Milford6 Issues Reported
        TypeScript
        4.9
        VIM
        EMACS
        Instructions
        Output
        This kata is from check py.checkio.org

        You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

        Let's look at a few examples:

        array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
        array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/
export function index(array: number[], n: number): number {
    if (n >= array.length) {
        return -1;
    }
    return Math.pow(array[n], n);
};
/*
TEST RESULT:
        Time: 2705ms Passed: 101Failed: 0
        Test Results:
        Basic tests
        Basic test should pass
        Completed in 1ms
        Random tests
        Testing №1 should work for [5,9,6,7] and 1
        Testing №2 should work for [6,9] and 1
        Testing №3 should work for [5,7,9] and 4
        Testing №4 should work for [2,7,7,6,4] and 0
        Testing №5 should work for [3,2,9] and 4
        Testing №6 should work for [1,3,6] and 4
        Testing №7 should work for [8] and 0
        Testing №8 should work for [1,6] and 3
        Testing №9 should work for [9,7] and 1
        Testing №10 should work for [4] and 3
        Testing №11 should work for [8] and 1
        Testing №12 should work for [4] and 4
        Testing №13 should work for [7] and 2
        Testing №14 should work for [6,5,7] and 3
        Testing №15 should work for [9] and 5
        Testing №16 should work for [9,6] and 3
        Testing №17 should work for [1,3] and 5
        Testing №18 should work for [3,10,2,10,9] and 2
        Testing №19 should work for [5,8,9,4,3] and 1
        Testing №20 should work for [10,9,4,2] and 1
        Testing №21 should work for [8] and 2
        Testing №22 should work for [2,3,2,1] and 1
        Testing №23 should work for [3,7,8,1] and 5
        Testing №24 should work for [10,7] and 4
        Testing №25 should work for [2] and 4
        Testing №26 should work for [6,8] and 4
        Testing №27 should work for [5,4,2,4,6] and 0
        Testing №28 should work for [5,9] and 5
        Testing №29 should work for [3,8] and 5
        Testing №30 should work for [8,5,9] and 5
        Testing №31 should work for [2,6,5] and 0
        Testing №32 should work for [4,4] and 0
        Testing №33 should work for [5] and 1
        Testing №34 should work for [10,2,7] and 5
        Testing №35 should work for [3] and 4
        Testing №36 should work for [5,3,1] and 2
        Testing №37 should work for [2,4] and 4
        Testing №38 should work for [6,8] and 2
        Testing №39 should work for [8,3,4,6,4] and 1
        Testing №40 should work for [5,8] and 1
        Testing №41 should work for [2,6] and 5
        Testing №42 should work for [9,1,10,6] and 3
        Testing №43 should work for [7] and 4
        Testing №44 should work for [3,8,4,5,8] and 4
        Testing №45 should work for [6,3] and 5
        Testing №46 should work for [2,4,6] and 5
        Testing №47 should work for [2,2,1,2] and 5
        Testing №48 should work for [3,2] and 2
        Testing №49 should work for [10,2,2,4,2] and 5
        Testing №50 should work for [6,1] and 3
        Testing №51 should work for [7,4] and 2
        Testing №52 should work for [1,4,10,3] and 1
        Testing №53 should work for [9] and 5
        Testing №54 should work for [8,5,10,9] and 0
        Testing №55 should work for [7,1,8,4,9] and 0
        Testing №56 should work for [5,7,3,9,9] and 2
        Testing №57 should work for [1,8,5,7,9] and 5
        Testing №58 should work for [10] and 0
        Testing №59 should work for [5,6,1] and 1
        Testing №60 should work for [8] and 2
        Testing №61 should work for [3,4,5,9] and 4
        Testing №62 should work for [9,10,10,6,7] and 5
        Testing №63 should work for [9,4,10,8] and 5
        Testing №64 should work for [8,7] and 5
        Testing №65 should work for [7,7] and 5
        Testing №66 should work for [6,8,8,2] and 1
        Testing №67 should work for [4,6] and 2
        Testing №68 should work for [6,7,3,6] and 2
        Testing №69 should work for [5,7,4,1,1] and 4
        Testing №70 should work for [6] and 5
        Testing №71 should work for [9,3] and 4
        Testing №72 should work for [7] and 5
        Testing №73 should work for [4,10,5] and 4
        Testing №74 should work for [5] and 4
        Testing №75 should work for [3,6,5,1,9] and 5
        Testing №76 should work for [6] and 1
        Testing №77 should work for [2] and 1
        Testing №78 should work for [2,1,7] and 1
        Testing №79 should work for [2,10,6,6,2] and 5
        Testing №80 should work for [2,10,3] and 2
        Testing №81 should work for [3,4,7] and 4
        Testing №82 should work for [7,2,2,1] and 1
        Testing №83 should work for [5,7,4,1,8] and 1
        Testing №84 should work for [10,3,10,5] and 5
        Testing №85 should work for [4,6,4] and 5
        Testing №86 should work for [8,5] and 2
        Testing №87 should work for [6,9,5] and 2
        Testing №88 should work for [4,1] and 0
        Testing №89 should work for [10,8,5,6] and 4
        Testing №90 should work for [6,1,2,2,6] and 5
        Testing №91 should work for [2,7,10,7] and 5
        Testing №92 should work for [4,4,1,5] and 3
        Testing №93 should work for [1,4,10,2,2] and 5
        Testing №94 should work for [2] and 4
        Testing №95 should work for [8,10,7] and 0
        Testing №96 should work for [8] and 0
        Testing №97 should work for [1,8,4] and 3
        Testing №98 should work for [6,1] and 3
        Testing №99 should work for [10] and 5
        Testing №100 should work for [8,2,10,1,3] and 4
        Completed in 2ms
        You have passed all of the tests! :)
*/