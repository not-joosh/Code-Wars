/*
        7 kyu
        Sum of odd numbers
        266650984% of 12,12936,023 of 122,233hhelwich
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Given the triangle of consecutive odd numbers:

                    1
                3     5
            7     9    11
        13    15    17    19
        21    23    25    27    29
        ...
        Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

        1 -->  1
        2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) {
    return n * n * n;
}
/*
TEST RESULTS:
        Time: 817ms Passed: 2Failed: 0
        Test Results:
        Basic tests
        Testing for fixed tests
        Completed in 1ms
        Tests
        Testing for 50 random tests
        Completed in 1ms
        You have passed all of the tests! :)
*/