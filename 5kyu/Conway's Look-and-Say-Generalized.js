/*
        5 kyu
        Conway's Look and Say - Generalized
        57894% of 212231 of 1,278nimdahk
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Your task is to create a function that will take an integer and return the result of the look-and-say function on that integer. This should be a general function that takes as input any positive integer, and returns an integer; inputs are not limited to the sequence which starts with "1".

        Conway's Look-and-say sequence goes like this:

        Start with a number.
        Look at the number, and group consecutive digits together.
        For each digit group, say the number of digits, then the digit itself.
        This can be repeated on its result to generate the sequence.

        For example:

        Start with 1.
        There is one 1 --> 11
        Start with 11. There are two 1 digits --> 21
        Start with 21. There is one 2 and one 1 --> 1211
        Start with 1211. There is one 1, one 2, and two 1s --> 111221
        Sample inputs and outputs::

        0 --> 10
        2014 --> 12101114
        9000 --> 1930
        22322 --> 221322
        222222222222 --> 122
*/
function lookSay(number) {
    let input = number.toString();
    let result = "";
    let currentDigit = input[0];
    let count = 1;
    for (let i = 1; i <= input.length; i++) {
        if (input[i] === currentDigit) {
            count++;
        } else {
            result += count + currentDigit;
            currentDigit = input[i];
            count = 1;
        }
    }
    return parseInt(result);
}
/*
TEST RESULTS:
        Time: 803ms Passed: 3Failed: 0
        Test Results:
        Look-and-say
        should handle simple numbers
        should handle multi-digit numbers
        should handle random numbers
        Completed in 1ms
        You have passed all of the tests! :)
*/

  