/*
        7 kyu
        Powers of i
        692887% of 679520 of 4,518pmaclean1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        �
        i is the imaginary unit, it is defined by 
        �
        ²
        =
        −
        1
        i²=−1, therefore it is a solution to 
        �
        ²
        +
        1
        =
        0
        x²+1=0.

        Your Task
        Complete the function pofi that returns 
        �
        i to the power of a given non-negative integer in its simplest form, as a string (answer may contain 
        �
        i).
*/
std::string pofi(unsigned n) {
    int remainder = n % 4;
    if (remainder == 0) {
        return "1";
    } else if (remainder == 1) {
        return "i";
    } else if (remainder == 2) {
        return "-1";
    } else {
        return "-i";
    }
}
/*
TEST RESULTS:
        Time: 2658ms Passed: 2Failed: 0
        Test Results:
        basic_tests
        powers_0_through_10
        random_tests
        random_numbers_between_0_and_500
        You have passed all of the tests! :)
*/