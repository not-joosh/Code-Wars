/*
        8 kyu
        Localize The Barycenter of a Triangle
        1284088% of 1,195167 of 9,477raulbc7777 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        source: imgur.com

        The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

        The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

        This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

        You know that the coordinates of the barycenter are given by the following formulas.

        source: imgur.com

        For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

        Let's see some cases:

        bar_triang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

        bar_triang([4, 2], [12, 2], [6, 10] ------> [7.3333, 4.6667]
        The given points form a real or a degenerate triangle but in each case the above formulas can be used.

        Enjoy it and happy coding!!
*/
#include <utility>
#include <cmath>

using point = const std::pair<double, double>;

std::pair<double, double> barTriang(point p1, point p2, point p3) {
    double xO = (p1.first + p2.first + p3.first) / 3.0;
    double yO = (p1.second + p2.second + p3.second) / 3.0;
    return std::make_pair(round(xO * 10000) / 10000, round(yO * 10000) / 10000);
}
/*
TEST RESULTS:
        Time: 2971ms Passed: 4Failed: 0
        Test Results:
        Fixed_Tests
        Basic_Tests
        Random_Tests
        Moderate_Values
        High_Values
        Huge_Values
        You have passed all of the tests! :)
*/

