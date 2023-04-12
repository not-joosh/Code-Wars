/*
        7 kyu
        Dot Calculator
        1062190% of 6121,909 of 4,719TheOPRyan1_YT
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Dot Calculator
        You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

        Here are the following valid operators :

        + Addition
        - Subtraction
        * Multiplication
        // Integer Division
        Your Work (Task)
        You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

        Examples (Input => Output)
        * "..... + ..............." => "...................."
        * "..... - ..."             => ".."
        * "..... - ."               => "...."
        * "..... * ..."             => "..............."
        * "..... * .."              => ".........."
        * "..... // .."             => ".."
        * "..... // ."              => "....."
        * ". // .."                 => ""
        * ".. - .."                 => ""
*/
function dotCalculator(equation) {
    const [left, operator, right] = equation.split(' ');
    const leftDots = left.match(/\./g)?.length || 0;
    const rightDots = right.match(/\./g)?.length || 0;
    let result;
    switch (operator) {
        case '+':
            result = leftDots + rightDots;
            break;
        case '-':
            result = leftDots - rightDots;
            break;
        case '*':
            result = leftDots * rightDots;
            break;
        case '//':
            result = rightDots === 0 ? undefined : Math.floor(leftDots / rightDots);
            break;
    }
    return result === undefined ? '' : '.'.repeat(result);
};
/*
TEST RESULTS:
        Time: 972ms Passed: 2Failed: 0
        Test Results:
        Tests suite
        sample tests
        random tests
        Completed in 3ms
        You have passed all of the tests! :)
*/