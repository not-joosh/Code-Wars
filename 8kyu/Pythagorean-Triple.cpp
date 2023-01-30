/*
                8 kyu
                Pythagorean Triple
                833688% of 1,2632,357 of 9,958elexie3 Issues Reported
                C++
                Clang 8 C++17
                VIM
                EMACS
                Instructions
                Output
                Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

                A Pythagorean Triple consists of arranging 3 integers, such that:

                a2 + b2 = c2

                Examples
                [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

                [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

                [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

                [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2

                Return Values
                For Python: return True or False
                For JavaScript: return true or false
                Other languages: return 1 or 0 or refer to Sample Tests.
*/

bool PythagoreanTriple(const int a, const int b, const int c) {
    int min = a, mid = b, max = c;
    if (b < a) {
        min = b;
        mid = a;
    }
    if (c < min) {
        max = mid;
        mid = min;
        min = c;
    }
    else if (c < mid) {
        max = mid;
        mid = c;
    }
    return min * min + mid * mid == max * max;
}
/*
TEST RESULTS:
                Time: 2486ms Passed: 1Failed: 0
                Test Results:
                PythagorianTriple
                FullTest
                Test Passed
                You have passed all of the tests! :)
*/