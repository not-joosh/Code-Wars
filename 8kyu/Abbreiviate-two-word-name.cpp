/*

        8 kyu
        Abbreviate a Two Word Name
        97531192% of 9,6623,570 of 111,479samjam485 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

        The output should be two capital letters with a dot separating them.

        It should look like this:

        Sam Harris => S.H

        patrick feeney => P.F

*/
#include <string>

std::string abbrevName(std::string name) {
    std::string initials;
    size_t space_pos = name.find(' ');
    if (space_pos != std::string::npos) { 
        initials += toupper(name[0]); 
        initials += '.'; 
        initials += toupper(name[space_pos + 1]); 
    }
    return initials;
}
/*
TEST RESULT:
        Time: 2567ms Passed: 2Failed: 0
        Test Results:
        any_group_name_you_want
        Fixed_tests
        Random_tests
        You have passed all of the tests! :)
*/