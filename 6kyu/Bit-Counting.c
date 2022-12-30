// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
#include <stddef.h>

size_t countBits(unsigned value) {
	size_t count = 0;
    while (value > 0) {
        count += (value >> 0) & 1;
        value >>= 1;
    }
    return count;
}
size_t alternativeCountBits(unsigned value) {
  return __builtin_popcount(value);
}