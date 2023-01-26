/*

        8 kyu
        Find Maximum and Minimum Values of a List
        54315788% of 7,08829,646 of 85,854Goncalerta2 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

        Examples (Input -> Output)
        * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
        * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
        * [42, 54, 65, 87, 0]             -> min = 0, max = 87
        * [5]                             -> min = 5, max = 5
        Notes
        You may consider that there will not be any empty arrays/vectors.

*/
int min(int* array, int arrayLength) {
    int minValue = array[0];
    for (int i = 1; i < arrayLength; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}

int max(int* array, int arrayLength) {
    int maxValue = array[0];
    for (int i = 1; i < arrayLength; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}
/*
TEST RESULTS:
        Time: 854ms Passed: 108Failed: 0
        Test Results:
        exampleTests
        should_pass_all_the_tests_provided
        (8 of 8 Assertions)
        Completed in 2.6832ms
        randomTests
        should_pass_all_the_tests_provided
        (100 of 100 Assertions)
        Completed in 29.6385ms
        You have passed all of the tests! :)
*/