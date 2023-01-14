/*

        5 kyu
        ISBN-10 Validation
        1454991% of 794230 of 6,652nklein5 Issues Reported
        C
        Clang 8 / C18
        VIM
        EMACS
        Instructions
        Output
        ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

        An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

        For example:

        ISBN     : 1 1 1 2 2 2 3 3 3  9
        position : 1 2 3 4 5 6 7 8 9 10
        This is a valid ISBN, because:

        (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
        Examples
        1112223339   -->  true
        111222333    -->  false
        1112223339X  -->  false
        1234554321   -->  true
        1234512345   -->  false
        048665088X   -->  true
        X123456788   -->  false


*/

#include <stdbool.h>

bool is_valid_ISBN_10 (const char *ISBN) {
    int sum = 0;
    int i = 0;
    while (*ISBN != '\0') {
        if (i > 9) {
            return false;
        }
        if (*ISBN == 'X' && i == 9) {
            sum += 10 * (i + 1);
        } else if (*ISBN >= '0' && *ISBN <= '9') {
            sum += (*ISBN - '0') * (i + 1);
        } else {
            return false;
        }
        ISBN++;
        i++;
    }
    if (i != 10) {
        return false;
    }
    return sum % 11 == 0;
}


/*
TEST RESULTS:
        Time: 867ms Passed: 420Failed: 0
        Test Results:
        tests_suite
        correct_modulo_but_incorrect_length
        (4 of 4 Assertions)
        correct_modulo_but_misplaced_X
        (2 of 2 Assertions)
        invalid_characters
        (2 of 2 Assertions)
        lowercase_x
        random_tests
        (400 of 400 Assertions)
        sample_tests
        (11 of 11 Assertions)
        Completed in 106.8736ms
        You have passed all of the tests! :)
*/
