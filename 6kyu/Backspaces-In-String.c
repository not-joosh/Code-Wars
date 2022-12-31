/*

        6 kyu
        Backspaces in string
        34513094% of 1,865366 of 14,034vetalpaprotsky
        C
        TRAINNEXT KATA
        Details
        Solutions
        Forks (14)
        Discourse (127)
        Collect|
        DESCRIPTION:
        Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

        Your task is to process a string with "#" symbols.

        Examples
        "abc#d##c"      ==>  "ac"
        "abc##d######"  ==>  ""
        "#######"       ==>  ""
        ""              ==>  ""

*/

#include <stdlib.h>
#include <string.h>

//returned string should be allocated by the user and will be freed.
char *strclr(const char *s)
{
    size_t len = strlen(s); // get the length of the input string
    char *result = malloc(len + 1); // allocate space for result string
    size_t result_index = 0; // current index in result string

    // iterate through each character in the input string
    for (size_t i = 0; i < len; i++) {
        if (s[i] == '#') {
            // if the current character is a '#', decrement the index if not at the beginning of the result string
            if (result_index > 0) result_index--;
        } else {
            // otherwise, copy the character from s to result and increment the index
            result[result_index] = s[i];
            result_index++;
        }
    }

    result[result_index] = '\0'; // null-terminate the result string
    return result;
}
/*
TEST RESULTS:
        Time: 645ms Passed: 178Failed: 0
        Test Results:
        Generic_Test
        should_return_the_cleared_string
        (10 of 10 Assertions)
        Completed in 2.3694ms
        Random_Test
        should_return_the_uncheated_cleared_string
        (168 of 168 Assertions)
        Completed in 36.8959ms
*/

/*************
    My First Solution Below
*/
#include <stdlib.h>
#include <string.h>

char *strclr(const char *s) {
    size_t len = strlen(s);
    char *result = malloc(len + 1); // allocate space for result string
    size_t result_index = 0; // current index in result string
    for (size_t i = 0; i < len; i++) {
        if (s[i] == '#') {
            if (result_index > 0) {
                result_index--; // decrement index if not at the beginning of the result string
            }
        } else {
            result[result_index] = s[i]; // copy character from s to result
            result_index++;
        }
    }
    result[result_index] = '\0'; // null-terminate the result string
    return result;
}

/******
Test Result:
        Time: 906ms Passed: 210Failed: 0
        Test Results:
        Generic_Test
        should_return_the_cleared_string
        (10 of 10 Assertions)
        Completed in 3.6030ms
        Random_Test
        should_return_the_uncheated_cleared_string
        (200 of 200 Assertions)
        Completed in 63.5547ms
        You have passed all of the tests! :)
*/


