/*
        8 kyu
        Century From Year
        116231891% of 10,0656,047 of 133,449MrZizoScream1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Introduction
        The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

        Task
        Given a year, return the century it is in.

        Examples
        1705 --> 18
        1900 --> 19
        1601 --> 17
        2000 --> 20
*/
int centuryFromYear(int year) {
    int century = year / 100;
    if (year % 100 != 0) {
        century++;
    }
    return century;
}
/*
TEST RESULTS:
        Time: 2379ms Passed: 2Failed: 0
        Test Results:
        Century_From_The_Year
        passes_some_fixed_tests
        passes_some_random_tests
        You have passed all of the tests! :)
*/