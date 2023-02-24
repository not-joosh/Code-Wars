/*
        8 kyu
        Area of a Square
        2077086% of 2,285519 of 16,080romerojp3 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

        Graph

        Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
#include <cmath>

double square_area(double A) {
    double r = 2 * A / M_PI;
    double area = r * r;
    return round(area * 100) / 100; 
}
/*
TEST RESULT:
        Time: 2725ms Passed: 2Failed: 0
        Test Results:
        tests
        fixed_tests
        random_tests
        You have passed all of the tests! :)
*/