/*
        4 kyu
        Matrix Determinant
        151728392% of 1,8521,286 of 16,286pjfranzini6 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

        How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

        A 1x1 matrix |a| has determinant a.

        A 2x2 matrix [ [a, b], [c, d] ] or

        |a  b|
        |c  d|
        has determinant: a*d - b*c.

        The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

        For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

        |a b c|  
        |d e f|  
        |g h i|  
        the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

        |- - -|
        |- e f|
        |- h i|  
        Note the alternation of signs.

        The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

        det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)
*/
#include <iostream>
#include <vector>

using namespace std;

long long determinant(vector< vector<long long> > m) {
    int n = m.size();
    if (n == 1) {
        return m[0][0];
    } else if (n == 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    } else {
        long long det = 0;
        for (int i = 0; i < n; i++) {
            vector<vector<long long>> submatrix(n - 1, vector<long long>(n - 1));
            for (int j = 1; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (k < i) {
                        submatrix[j - 1][k] = m[j][k];
                    } else if (k > i) {
                        submatrix[j - 1][k - 1] = m[j][k];
                    }
                }
            }
            long long sign = (i % 2 == 0) ? 1 : -1;
            det += sign * m[0][i] * determinant(submatrix);
        }
        return det;
    }
}
/*
TEST RESULTS:
        Time: 2956ms Passed: 3Failed: 0
        Test Results:
        your_determinant_function
        should_work_for_a_few_simple_square_matrices
        should_work_for_some_larger_square_matrices
        should_work_for_random_huge_square_matrices
        You have passed all of the tests! :)
*/