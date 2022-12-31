// Equal Sides Of An Array
// 279150591% of 11,1572,632 of 94,257Shivo
// C
// Clang 8 / C18
// VIM
// EMACS
// Instructions
// Output
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

#include <stdbool.h>
#include <stdlib.h>

int find_even_index(const int *values, int length) {
    int sum_left = 0;
    int sum_right = 0;
    // Calculate the sum of all elements in the array
    for (int i = 0; i < length; i++) {
        sum_right += values[i];
    }

    // Iterate through the array and check if the sum of elements on the left side
    // is equal to the sum of elements on the right side. If they are equal, return
    // the current index. If not, update the sum of elements on the left and right side.
    for (int i = 0; i < length; i++) {
        sum_right -= values[i];
        if (sum_left == sum_right) {
            return i;
        }
        sum_left += values[i];
    }

    // If no index was found, return -1
    return -1;
}