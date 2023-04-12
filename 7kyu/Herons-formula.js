/*
        7 kyu
        Heron's formula
        511479% of 9162,321 of 7,493wichu1 Issue Reported
        JavaScript
        Node v18.x
        VIM
        EMACS
        Instructions
        Output
        Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

        Heron's formula:

        �
        ∗
        (
        �
        −
        �
        )
        ∗
        (
        �
        −
        �
        )
        ∗
        (
        �
        −
        �
        )
        s∗(s−a)∗(s−b)∗(s−c)
        ​
        
        where

        �
        =
        �
        +
        �
        +
        �
        2
        s= 
        2
        a+b+c
        ​
        
        Output should have 2 digits precision.
*/
function heron(a, b, c) {
    const s = (a + b + c) / 2;
    return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
};
/*
TEST RESULTS:
        Time: 773ms Passed: 2Failed: 0
        Test Results:
        Solution
        Fixed tests
        Random tests
        Completed in 11ms
        You have passed all of the tests! :)
*/