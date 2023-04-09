/*
        8 kyu
        Return the day
        833391% of 2,142697 of 15,513haithhawk1 Issue Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        Complete the function which returns the weekday according to the input number:

        1 returns "Sunday"
        2 returns "Monday"
        3 returns "Tuesday"
        4 returns "Wednesday"
        5 returns "Thursday"
        6 returns "Friday"
        7 returns "Saturday"
        Otherwise returns "Wrong, please enter a number between 1 and 7"
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* whatday(int num) {
    char* days[] = {
        "Wrong, please enter a number between 1 and 7",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    };
    const int numDays = sizeof(days) / sizeof(days[0]);
    if (num >= 1 && num < numDays) {
        return days[num];
    }
    return days[0];
}
/*
TEST RSULTS:
        Time: 665ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        should_pass_all_the_tests_provided
        Completed in 1.5881ms
        Random_Tests
        should_pass_all_the_tests_provided
        Completed in 12.1432ms
        You have passed all of the tests! :)
*/