/*
        8 kyu
        My head is at the wrong end!
        2566284% of 4,265884 of 33,823PG11 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

        Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

        Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

        Simples!
*/
#include <array>
#include <string>
using namespace std;

array<string, 3> fixTheMeerkat(array<string, 3> arr) {
    swap(arr[0], arr[2]);
    return arr;
}
/*
TEST RESLTS:
        Time: 2236ms Passed: 2Failed: 0
        Test Results:
        Tests
        BasicTests
        RandomTests
        You have passed all of the tests! :)
*/