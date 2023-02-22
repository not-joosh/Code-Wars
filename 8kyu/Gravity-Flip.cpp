/*
        8 kyu
        Gravity Flip
        4387891% of 2,356668 of 23,504LogicalX
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        If you've completed this kata already and want a bigger challenge, here's the 3D version

        Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

        There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

        +---+                                       +---+
        |   |                                       |   |
        +---+                                       +---+
        +---++---+     +---+              +---++---++---+
        |   ||   |     |   |   -->        |   ||   ||   |
        +---++---+     +---+              +---++---++---+
        +---++---++---++---+         +---++---++---++---+
        |   ||   ||   ||   |         |   ||   ||   ||   |
        +---++---++---++---+         +---++---++---++---+
        Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

        Examples (input -> output:
        * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
        * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/
#include <vector>
#include <algorithm>

std::vector<int> flip(const char dir, const std::vector<int>& arr) {
    std::vector<int> result = arr;
    if (dir == 'R') {
        std::sort(result.begin(), result.end());
    } else if (dir == 'L') {
        std::sort(result.begin(), result.end(), std::greater<int>());
    }
    return result;
}
/*
TEST RESULTS:
        Time: 3463ms Passed: 3Failed: 0
        Test Results:
        FixedTests
        should_pass_sample_tests
        should_pass_other_fixed_tests
        RandomTests
        should_pass_random_tests
        You have passed all of the tests! :)
*/
