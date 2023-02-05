/*

        8 kyu
        Convert a String to a Number!
        58216588% of 10,24867,144 of 162,182bkaes
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Note: This kata is inspired by Convert a Number to a String!. Try that one too.

        Description
        We need a function that can transform a string into a number. What ways of achieving this do you know?

        Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

        Examples
        "1234" --> 1234
        "605"  --> 605
        "1405" --> 1405
        "-7" --> -7

*/
const stringToNumber = function(str){
    return Number(str);
}
/*
TEST RESULTS:
        Time: 1013ms Passed: 2Failed: 0
        Test Results:
        stringToNumber
        should work for the examples
        should work for random strings
        Completed in 2ms
        You have passed all of the tests! :)
*/
