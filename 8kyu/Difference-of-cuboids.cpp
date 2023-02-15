/*
        8 kyu
        Difference of Volumes of Cuboids
        2368293% of 3,6271,739 of 35,795Spherixo
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

        For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

        Your function will be tested with pre-made examples as well as random ones.

        If you can, try writing it in one line of code.
*/
#include <array>
int findDifference(std::array<int, 3> a, std::array<int, 3> b) {
    int vol_a = a[0] * a[1] * a[2];
    int vol_b = b[0] * b[1] * b[2];
    return abs(vol_a - vol_b);
}
/*
TEST RESULTS:
        Time: 2387ms Passed: 2Failed: 0
        Test Results:
        DifferenceVolumesCuboids
        BasicTests
        RandomTests
        You have passed all of the tests! :)
*/