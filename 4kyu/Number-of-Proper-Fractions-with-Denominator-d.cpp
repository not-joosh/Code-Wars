/*
        4 kyu
        Number of Proper Fractions with Denominator d
        74711685% of 526385 of 3,550GiacomoSorbi
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Caution: This kata does not currently have any known supported versions for C++. It may not be completable due to dependencies on out-dated libraries/language versions.
        If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.

        For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.

        Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?

        For example, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.

        You are to build a function that computes how many proper fractions you can build with a given denominator:

        proper_fractions(1)==0
        proper_fractions(2)==1
        proper_fractions(5)==4
        proper_fractions(15)==8
        proper_fractions(25)==20
        Be ready to handle big numbers.

        Edit: to be extra precise, the term should be "reduced" fractions, thanks to girianshiido for pointing this out and sorry for the use of an improper word :)
*/
#include <cmath>

long properFractions(long n) {
    if (n == 1) {
        return 0;
    }
    long count = n;
    for (long i = 2; i <= std::sqrt(n); ++i) {
        if (n % i == 0) {
            while (n % i == 0) {
                n /= i;
            }
            count -= count / i;
        }
    }
    if (n > 1) {
        count -= count / n;
    }
    return count;
}
/*
TEST RESULTS:
        Time: 3241ms Passed: 3Failed: 0
        Test Results:
        basic_tests
        smaller_numbers
        larger_numbers
        random_tests
        You have passed all of the tests! :)
*/