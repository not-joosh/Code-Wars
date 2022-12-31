/*

        6 kyu
        Tribonacci Sequence
        255652089% of 12,8621,533 of 117,449GiacomoSorbi
        C
        TRAINNEXT KATA
        Details
        Solutions
        Forks (50)
        Discourse (917)
        Collect|
        DESCRIPTION:
        Well met with Fibonacci bigger brother, AKA Tribonacci.

        As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

        So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

        [1, 1 ,1, 3, 5, 9, 17, 31, ...]
        But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

        [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
        Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

        Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

        If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

        [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

*/

#include <stdlib.h>

long long *tribonacci(const long long signature[3], size_t n) {
    if (n == 0) return NULL; // return NULL for n == 0
    long long *sequence = malloc(sizeof(long long) * n); // allocate memory for the sequence
    if (sequence == NULL) return NULL; // return NULL if memory allocation fails
    for (int i = 0; i < 3; i++) sequence[i] = signature[i]; // copy the signature to the sequence
    for (int i = 3; i < n; i++) sequence[i] = sequence[i-1] + sequence[i-2] + sequence[i-3]; // generate the rest of the sequence
    return sequence;
}
/*

TEST RESULTS:
        Time: 932ms Passed: 110Failed: 0
        Test Results:
        Fixed_Tests
        should_pass_all_the_tests_provided
        (10 of 10 Assertions)
        Completed in 3.5864ms
        Random_Tests
        should_pass_all_the_tests_provided
        (100 of 100 Assertions)
        Completed in 33.6163ms

*/


