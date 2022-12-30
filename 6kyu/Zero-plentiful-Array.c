// An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

// Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

// Examples
// [0, 0, 0, 0, 0, 1]  -->  1
// # 1 group of 5 zeros (>= 4), thus the result is 1

// [0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
// # 2 group of 4 zeros (>= 4), thus the result is 2

// [0, 0, 0, 0, 1, 0]  -->  0 
// # 1 group of 4 zeros and 1 group of 1 zero (< 4)
// # _every_ sequence of zeros must be at least 4 long, thus the result is 0

// [0, 0, 0, 1, 0, 0]  -->  0
// # 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

// [1, 2, 3, 4, 5]  -->  0
// # no zeros

// []  -->  0
// # no zeros
#include <stddef.h>
/*
My shitty attempt
*/
unsigned is_zero_plentiful (size_t length, const short array[length]) {
    unsigned num_sequences = 0;
    unsigned counter = 0;
    for (size_t i = 0; i < length; i++) {
        if (array[i] == 0) {
            counter++;
        } else {
            if (counter >= 4) {
                num_sequences++;
            }
            counter = 0;
        }
    }
    // Check if the last sequence of zeros is at least 4 items long
    if (counter >= 4) {
        num_sequences++;
    }
    return num_sequences;
}


