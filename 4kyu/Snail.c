/*

        4 kyu
        Snail
        484298794% of 6,836649 of 56,189stevenbarragan8 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Snail Sort
        Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

        array = [[1,2,3],
                [4,5,6],
                [7,8,9]]
        snail(array) #=> [1,2,3,6,9,8,7,4,5]
        For better understanding, please follow the numbers of the next array consecutively:

        array = [[1,2,3],
                [8,9,4],
                [7,6,5]]
        snail(array) #=> [1,2,3,4,5,6,7,8,9]
        This image will illustrate things more clearly:


        NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

        NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/
#include <stdlib.h>
int *snail(size_t *outsz, const int **mx, size_t rows, size_t cols) {
    int *result = (int *)malloc(sizeof(int) * rows * cols);
    int **temp = (int **)malloc(sizeof(int *) * rows);
    temp = ia_to_imx(temp, mx[0], rows, cols);
    int index = 0;
    int top = 0;
    int bottom = rows - 1;
    int left = 0;
    int right = cols - 1;
    while (top <= bottom && left <= right) {
        // go from left to right
        for (int i = left; i <= right; i++) {
            result[index] = temp[top][i];
            index++;
        }
        top++;
        // go from top to bottom
        for (int i = top; i <= bottom; i++) {
            result[index] = temp[i][right];
            index++;
        }
        right--;
        // go from right to left
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                result[index] = temp[bottom][i];
                index++;
            }
            bottom--;
        }
        // go from bottom to top
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                result[index] = temp[i][left];
                index++;
            }
            left++;
        }
    }
    *outsz = index;
    return result;
}
/*
TEST CASES:
        Time: 720ms Passed: 158Failed: 0
        Test Results:
        Generic_Test
        should_return_the_snail
        (3 of 3 Assertions)
        Completed in 1.1007ms
        Random_Test
        should_return_the_uncheated_snail
        (155 of 155 Assertions)
        Completed in 35.8049ms
        STDERR
        You have passed all of the tests! :)
*/
