/*
        8 kyu
        Miles per gallon to kilometers per liter
        1444587% of 1,743874 of 13,294emporio1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

        Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

        Make sure to round off the result to two decimal points.

        Some useful associations relevant to this kata:

        1 Imperial Gallon = 4.54609188 litres
        1 Mile = 1.609344 kilometres
*/
#include <cmath>

double converter(int mpg) {
    const double litersPerGallon = 4.54609188;
    const double kilometersPerMile = 1.609344;

    double litersPerMile = litersPerGallon / mpg;
    double kilometersPerLiter = kilometersPerMile / litersPerMile;

    return round(kilometersPerLiter * 100) / 100;
}
/*
TEST RESULTS:
        Time: 2451ms Passed: 3Failed: 0
        Test Results:
        Tests
        _0_ExampleTests
        _1_BasicTests
        _2_RandomTests
        You have passed all of the tests! :)
*/