/*
        8 kyu
        Hex to Decimal
        2776890% of 2,9551,517 of 23,089wichu4 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Complete the function which converts hex number (given as a string) to a decimal number.
*/
int hexToDec(std::string hexString) {
    int result = 0;
    int sign = 1;
    if (hexString[0] == '-') {
        sign = -1;
        hexString = hexString.substr(1);
    }
    for (char c : hexString) {
        int digit = 0;
        if (isdigit(c))
            digit = c - '0';
        else if (isalpha(c)) 
            digit = toupper(c) - 'A' + 10;
        
        result = result * 16 + digit;
    }
    return result * sign;
}
/*
TEST RESULTS:
        Time: 3324ms Passed: 2Failed: 0
        Test Results:
        ExampleTests
        BasicTests
        ExtendedTests
        RandomTests
        You have passed all of the tests! :)
*/

