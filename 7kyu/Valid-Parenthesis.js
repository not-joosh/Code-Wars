/*
        7 kyu
        Valid Parentheses
        7297% of 5717 of 267Kacarott
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

        Examples
        "()"              =>  true
        ")(()))"          =>  false
        "("               =>  false
        "(())((()())())"  =>  true
*/
function validParentheses(parenStr) {
    const stack = [];
        for (let i = 0; i < parenStr.length; i++) {
            const char = parenStr.charAt(i);
            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }
    return stack.length === 0;
}
/*
TEST RESULTS:
        Time: 937ms Passed: 5Failed: 0
        Test Results:
        Fixed tests
        Should return true for valid parentheses
        Should return false for invalid parentheses
        Should return true for empty strings
        Completed in 1ms
        Random tests
        Small tests
        Large tests
        Completed in 7ms
        You have passed all of the tests! :)
*/