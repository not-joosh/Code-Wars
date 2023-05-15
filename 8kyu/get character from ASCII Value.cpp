/*
        8 kyu
        get character from ASCII Value
        1364889% of 3,0842,259 of 26,254nakulgupta182 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

        Example:

        get_char(65)
        should return:

        'A'
*/
char get_char(int i) {
    return static_cast<char>(i);
}
/*
TEST RESULTS:
        Time: 2656ms Passed: 1Failed: 0
        Test Results:
        extended_tests
        should_work_from_32_to_126
        You have passed all of the tests! :)
*/