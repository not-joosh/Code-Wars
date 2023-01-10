/*

        8 kyu
        Beginner Series #2 Clock
        50811890% of 7,9834,613 of 99,946Vortus
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Clock shows h hours, m minutes and s seconds after midnight.

        Your task is to write a function which returns the time since midnight in milliseconds.

        Example:
        h = 0
        m = 1
        s = 1

        result = 61000
        Input constraints:

        0 <= h <= 23
        0 <= m <= 59
        0 <= s <= 59

*/
int past(int h, int m, int s) {
    return  (s+(m +(h*60))*60)*1000;
}
/*
TEST RESULTS:
        Time: 2150ms Passed: 2Failed: 0
        Test Results:
        Clock
        BasicTests
        RandomTests
        You have passed all of the tests! :)
*/