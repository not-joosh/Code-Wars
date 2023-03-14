/*
        8 kyu
        Remove String Spaces
        101030091% of 13,6035,493 of 177,289PG1
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Write a function that removes the spaces from the string, then return the resultant string.

        Examples:

        Input -> Output
        "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
        "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
        "8aaaaa dddd r     " -> "8aaaaaddddr"
*/
#include <string>

std::string no_space(const std::string& x) {
    std::string result = "";
    for(char c : x) {
        if(c != ' ') {
            result += c;
        }
    }
    return result;
}
/*
TEST REULTS:
        Time: 2666ms Passed: 2Failed: 0
        Test Results:
        Basic_tests
        Basic_test
        Random_tests
        Random_test
        You have passed all of the tests! :)
*/