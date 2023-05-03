/*
        8 kyu
        Grasshopper - Personalized Message
        2887889% of 6,2472,442 of 77,362danleavitt01 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

        Use conditionals to return the proper message:

        case	return
        name equals owner	'Hello boss'
        otherwise	'Hello guest'
*/
#include <string>

std::string greet(const std::string& name, const std::string& owner) {
    if (name == owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}
/*
TEST RESULTS:
        Time: 2989ms Passed: 3Failed: 0
        Test Results:
        Fixed_tests
        Boss_cases
        Guest_cases
        Random_tests
        Random_cases
        You have passed all of the tests! :)
*/