/*

        4 kyu
        Sum by Factors
        134324189% of 1,968281 of 15,458g9643 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Given an array of positive or negative integers

        I= [i1,..,in]

        you have to produce a sorted array P of the form

        [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

        P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

        Example:
        I = {12, 15}; // result = "(2 12)(3 27)(5 15)"
        [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

        Notes:

        It can happen that a sum is 0 if some numbers are negative!
        Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

        In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

int is_prime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

char* sumOfDivided(int* lst, int l) {
    int factors[1000] = {0};
    int sums[1000] = {0};
    int num_factors = 0;

    for (int i = 0; i < l; i++) {
        int n = abs(lst[i]);
        for (int j = 2; j <= n; j++) {
            if (is_prime(j) && n % j == 0) {
                // j is a prime factor of n
                int found = 0;
                for (int k = 0; k < num_factors; k++) {
                    if (factors[k] == j) {
                        found = 1;
                        sums[k] += lst[i];
                        break;
                    }
                }
                if (!found) {
                    factors[num_factors] = j;
                    sums[num_factors] = lst[i];
                    num_factors++;
                }
            }
        }
    }

    // Sort the factors array and the sums array in ascending order
    for (int i = 0; i < num_factors; i++) {
        for (int j = i + 1; j < num_factors; j++) {
            if (factors[i] > factors[j]) {
                int temp = factors[i];
                factors[i] = factors[j];
                factors[j] = temp;

                temp = sums[i];
                sums[i] = sums[j];
                sums[j] = temp;
            }
        }
    }
    // Convert the sorted array of factors and sums to a string in the required format
    char* result = malloc(10000);
    *result = '\0';
    for (int i = 0; i < num_factors; i++) {
        char buffer[100];
        sprintf(buffer, "(%d %d)", factors[i], sums[i]);
        strcat(result, buffer);
    }
    return result;
}
/*
Test Results:
        Time: 1031ms Passed: 107Failed: 0
        Test Results:
        sumOfDivided
        ShouldPassAllTheTestsProvided
        (107 of 107 Assertions)
        Log
        ****************** Random Tests **** sumOfDivided
        Completed in 178.8153ms
        You have passed all of the tests! :)
*/