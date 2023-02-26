/*
        4 kyu
        Carmichael function
        631192% of 4389 of 158Were_Cat
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        In number theory, the Carmichael function of a positive integer n, denoted λ(n), is defined as the smallest positive integer m such that

        a^m = 1 mod [n]
        for every integer a ≤ n that is coprime to n. The Carmichael function is also known as the reduced totient function (as it is linked to Euler Totient function) or the least universal exponent function. The Carmichael function is important in number theory.

        For example let n = 8. The list of integer a ≤ 8, coprime to 8: 1, 3, 5, 7.

        1^1 = 1 mod [8]
        3^1 = 3 mod [8]
        So λ(8) > 1.

        1^2 = 1 = 1 mod [8]
        3^2 = 9 = 1 mod [8]
        5^2 = 25 = 1 mod [8]
        7^2 = 49 = 1 mod [8]
        So λ(8) = 2.

        There is generally two approach to this function:

        Iteratively checking a^m ?= 1 mod [n] for growing m and every a ≤ n, coprime to n. This may not work for big numbers.

        Using an exact formula like for Euler Totient. This is an explicit formula for calculating λ(n) depending on the prime decomposition of n.

        For the second method the formula is deduced from the lcm formula for λ and the totient function (see the associated kata):

        lcm formula, where p1,...,pn are the prime factor of n, w1,...,wn, the powers associated.:

        λ(n) = λ(p1^w1 * p2^w2 * ... * pn^wn)
        λ(n) = lcm(λ(p1^w1),λ(p2^w2),...,λ(pn^wn)) 
        Then for p prime, we have a link between λ(p^w) and φ(p^w), the Euler Totient function:

        if p is prime:
        λ(p^w) =  φ(p^w)               if p>2
        λ(p^w) =  φ(p^w)               if ( p=2 and w<3 )
        λ(p^w) = 1/2 * φ(p^w)           if ( p=2 and w>=3)
        You have to code Carmichael function, that take an integer 1 ≤ n as input and return λ(n). You also have to check if n is a number, integer and that 1 ≤ n, if it is not the case, the function should return 0.

        Input range: 1 ≤ n ≤ 1e10
*/
#include <iostream>
#include <cmath>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

long long EulerTotient(long long n) {
    long long result = n;
    for (long long i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            result -= result / i;
            while (n % i == 0) {
                n /= i;
            }
        }
    }
    if (n > 1) {
        result -= result / n;
    }
    return result;
}
long long Carmichael(long long n) {
    if (n < 1) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    long long result = 1;
    vector<pair<long long, long long>> factors;
    for (long long i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            long long k = 0;
            while (n % i == 0) {
                n /= i;
                k++;
            }
            factors.emplace_back(i, k);
        }
    }
    if (n > 1) {
        factors.emplace_back(n, 1);
    }
    for (const auto& [p, w] : factors) {
        if (p == 2 && w >= 3) {
            result = lcm(result, (long long)pow(2, w - 2));
        } else {
            result = lcm(result, EulerTotient(pow(p, w)));
        }
    }
    return result;
}
/*
TEST RESULTS:
        Time: 3159ms Passed: 3Failed: 0
        Test Results:
        Fixed_Tests
        Test_large_number_set
        Test_prime_number_set
        Random_Tests
        Test_1000_random_numbers
        You have passed all of the tests! :)
*/