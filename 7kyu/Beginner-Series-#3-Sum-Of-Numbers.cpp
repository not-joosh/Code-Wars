/*

        7 kyu
        Beginner Series #3 Sum of Numbers
        183434388% of 14,2404,315 of 152,956Vortus
        C++
        TRAINNEXT KATA
        Details
        Solutions
        Forks (36)
        Discourse (530)
        Collect|
        DESCRIPTION:
        Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

        Note: a and b are not ordered!

        Examples (a, b) --> output (explanation)
        (1, 0) --> 1 (1 + 0 = 1)
        (1, 2) --> 3 (1 + 2 = 3)
        (0, 1) --> 1 (0 + 1 = 1)
        (1, 1) --> 1 (1 since both are same)
        (-1, 0) --> -1 (-1 + 0 = -1)
        (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
        Your function should only return a number, not the explanation about how you get that number.

*/

int get_sum(int a, int b) {
    int sum = 0;
    if (a == b) {
        return a;
    }
    int low = a < b ? a : b;
    int high = a > b ? a : b;
    for (int i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
}

/*
TEST RESULTS:
        Time: 2916ms Passed: 2Failed: 0
        Test Results:
        Basic_Tests
        work_for_predefined
        Random_Tests
        work_for_random
        You have passed all of the tests! :)
*/