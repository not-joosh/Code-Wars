/*
        7 kyu
        Snail crawls up
        522293% of 550382 of 3,681petrosernivka
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

        Your function takes three arguments:

        The height of the column (meters)
        The distance that the snail crawls during the day (meters)
        The distance that the snail slides down during the night (meters)
        Calculate number of day when the snail will reach the top of the column.
*/
int snail(int column, int day, int night) {
    int distance = 0;
    int days = 0;
    while (distance < column) {
        distance += day;
        days++;
        if (distance >= column) {
            break;
        }
        distance -= night;
    }
    return days;
}
/*
TEST RESULTS:
        Time: 2589ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Tests
        Random_Tests
        Tests
        You have passed all of the tests! :)
*/