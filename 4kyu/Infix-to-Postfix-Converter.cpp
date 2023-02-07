/*

        4 kyu
        Infix to Postfix Converter
        4146690% of 392532 of 2,133thepyr1 Issue Reported
        C++
        Clang 8 C++17
        VIM
        EMACS
        Instructions
        Output
        Construct a function that, when given a string containing an expression in infix notation, will return an identical expression in postfix notation.

        The operators used will be +, -, *, /, and ^ with left-associativity of all operators but ^.

        The precedence of the operators (most important to least) are : 1) parentheses, 2) exponentiation, 3) times/divide, 4) plus/minus.

        The operands will be single-digit integers between 0 and 9, inclusive.

        Parentheses may be included in the input, and are guaranteed to be in correct pairs.

        to_postfix("2+7*5") // Should return "275*+"
        to_postfix("3*3/(7+1)") // Should return "33*71+/"
        to_postfix("5+(6-2)*9+3^(7-1)") // Should return "562-9*+371-^+"
        to_postfix("1^2^3") // Should return "123^^"

*/
#include <stack>
#include <string>

std::string to_postfix(std::string infix) {
    std::stack<char> operator_stack;
    std::string postfix = "";

    for (char c : infix) {
        if (isdigit(c)) {
        postfix += c;
        } else if (c == '(') {
        operator_stack.push(c);
        } else if (c == ')') {
        while (operator_stack.top() != '(') {
            postfix += operator_stack.top();
            operator_stack.pop();
        }
        operator_stack.pop();
        } else {
        while (!operator_stack.empty() && operator_stack.top() != '(' &&
            (operator_stack.top() == '*' || operator_stack.top() == '/' ||
            operator_stack.top() == '^' ||
            (c == '+' || c == '-'))) {
            postfix += operator_stack.top();
            operator_stack.pop();
        }
        operator_stack.push(c);
        }
    }
    while (!operator_stack.empty()) {
        postfix += operator_stack.top();
        operator_stack.pop();
    }
    return postfix;
}
/*
TEST RESULTS:
Time: 3545ms Passed: 2Failed: 0
        Test Results:
        Fixed_Tests
        Tests
        Random_Tests
        Tests
        You have passed all of the tests! :)
*/