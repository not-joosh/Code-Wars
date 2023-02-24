/*
        8 kyu
        Basic Mathematical Operations
        82923291% of 10,2535,980 of 134,283Quickz5 Issues Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Your task is to create a function that does four basic mathematical operations.

        The function should take three arguments - operation(string/char), value1(number), value2(number).
        The function should return result of numbers after applying the chosen operation.

        Examples(Operator, value1, value2) --> output
        ('+', 4, 7) --> 11
        ('-', 15, 18) --> -3
        ('*', 5, 5) --> 25
        ('/', 49, 7) --> 7
*/
int basicOp(char op, int val1, int val2) {
    switch(op) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        default:
            return 0;
    }
}
/*
TEST RESULTS:
        Time: 2075ms Passed: 2Failed: 0
        Test Results:
        basic_op
        basic_tests
        random_tests
        You have passed all of the tests! :)
*/
